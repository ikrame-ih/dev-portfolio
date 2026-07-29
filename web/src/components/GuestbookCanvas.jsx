/**
 * @file GuestbookCanvas.jsx
 * @description Interactive canvas allowing visitors to drop a signature (bow) 
 * on an open book layout. Integrates keyboard accessibility and local/remote sync.
 */
import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { TyingBow } from "./TyingBow";
import { normalizeBow, clampBowPosition } from "@/lib/bowUtils";
import { MOTION_EASE } from "@/lib/motion";
import Reveal from "./Reveal";
import { useContent, useUi } from "@/i18n/LocaleContext";
import { useGuestbookSync } from "@/lib/useGuestbookSync";
import { useGuestbookKeyboard } from "@/lib/useGuestbookKeyboard";

const BOW_MOTION = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.35, ease: MOTION_EASE },
};

function pressPage(ref, point) {
  if (!ref.current) return;
  ref.current.classList.add("guestbook-page--pressed");
  window.setTimeout(() => {
    ref.current?.classList.remove("guestbook-page--pressed");
  }, 220);

  if (typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const el = ref.current;
  const rect = el.getBoundingClientRect();
  let x = rect.width / 2;
  let y = rect.height / 2;
  if (point && Number.isFinite(point.x) && Number.isFinite(point.y)) {
    x = point.x * rect.width;
    y = point.y * rect.height;
  }

  const ripple = document.createElement("span");
  ripple.className = "guestbook-ink-ripple";
  ripple.setAttribute("aria-hidden", "true");
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  el.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 650);
}

function canHoverPreview() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

const GhostBow = ({ ghost }) => {
  if (!ghost) return null;
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none z-[5] -translate-x-1/2 -translate-y-1/2 text-bone-400"
      style={{
        left: `${ghost.mx * 100}%`,
        top: `${ghost.y * 100}%`,
      }}
    >
      <TyingBow size={26} strokeWidth={1.15} tie={false} />
    </div>
  );
};

const PageBows = ({
  bows,
  visitorId,
  lastDropped,
  reduce,
}) => (
  <AnimatePresence>
    {bows.map((b) => {
      const isMine = visitorId && b.visitor_id === visitorId;
      const justPlaced = b.id === lastDropped;
      return (
        <motion.div
          key={`${b.id}-${b.mx}-${b.y}`}
          initial={reduce ? false : BOW_MOTION.initial}
          animate={{
            ...BOW_MOTION.animate,
            rotate: b.rotation || 0,
          }}
          exit={BOW_MOTION.exit}
          transition={BOW_MOTION.transition}
          className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${b.mx * 100}%`,
            top: `${b.y * 100}%`,
            zIndex: isMine ? 4 : 2,
          }}
          aria-hidden="true"
        >
          <div
            className={
              justPlaced && !reduce ? "bow-place-flutter" : undefined
            }
          >
            <TyingBow
              size={justPlaced ? 32 : isMine ? 29 : 24}
              strokeWidth={isMine ? 1.45 : 1.15}
              color={isMine ? "#4A0E0E" : "#6B1D1D"}
              className={isMine ? "" : "opacity-75"}
              tie={justPlaced}
            />
          </div>
        </motion.div>
      );
    })}
  </AnimatePresence>
);

export const GuestbookCanvas = () => {
  const { BOW_BOARD } = useContent();
  const ui = useUi();
  const HINTS = ui.guestbook;
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  
  const [hint, setHint] = useState(null);
  const [spreadAlive, setSpreadAlive] = useState(false);
  const reduce = useReducedMotion();

  const showHint = useCallback((key) => {
    setHint(key);
    // Note: The timer clears are handled by useGuestbookSync's hintTimerRef
  }, []);

  const {
    bows,
    loaded,
    lastDropped,
    unavailable,
    hasSigned,
    visitorId,
    placeBowSync,
    hintTimerRef
  } = useGuestbookSync({ showHint });

  // Update timer ref to clear properly
  useEffect(() => {
    if (hint && hintTimerRef.current) {
      window.clearTimeout(hintTimerRef.current);
    }
    // We use a manual timeout rather than Framer Motion's exit delays to ensure
    // the hint clears predictably even if the component unmounts or re-renders rapidly.
    if (hint) {
      hintTimerRef.current = window.setTimeout(() => setHint(null), 3200);
    }
  }, [hint, hintTimerRef]);

  useEffect(() => {
    if (reduce) {
      setSpreadAlive(true);
      return undefined;
    }
    const el = document.querySelector('[data-testid="guestbook-canvas"]');
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSpreadAlive(true);
          io.disconnect();
        }
      },
      { threshold: 0.22 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const placeBowAt = useCallback(
    async (page, localX, localY) => {
      const ref = page === "left" ? leftRef : rightRef;
      if (!ref.current) return;
      
      const { mx, y } = clampBowPosition(localX, localY, page);
      const placed = await placeBowSync(page, mx, y);
      if (placed) {
        pressPage(ref, { x: localX, y: localY });
        // The ghost clear is handled locally or by hook
      }
    },
    [placeBowSync]
  );

  const {
    ghost,
    setGhost,
    clearGhost,
    handlePageFocus,
    handlePageKeyDown,
  } = useGuestbookKeyboard({ unavailable, placeBowAt });

  const updateGhost = useCallback((page, e) => {
    if (!canHoverPreview() || unavailable) {
      setGhost(null);
      return;
    }
    const ref = page === "left" ? leftRef : rightRef;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const localX = (e.clientX - rect.left) / rect.width;
    const localY = (e.clientY - rect.top) / rect.height;
    const { mx, y } = clampBowPosition(localX, localY, page);
    setGhost({ page, mx, y });
  }, [unavailable, setGhost]);

  const handlePageClick = useCallback(
    (page, e) => {
      const ref = page === "left" ? leftRef : rightRef;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const localX = (e.clientX - rect.left) / rect.width;
      const localY = (e.clientY - rect.top) / rect.height;
      
      // Immediately clear ghost and press page for responsive feel
      setGhost(null);
      pressPage(ref, { x: localX, y: localY });
      
      const { mx, y } = clampBowPosition(localX, localY, page);
      placeBowSync(page, mx, y);
    },
    [placeBowSync, setGhost],
  );



  const leftBows = bows.filter((b) => b.page === "left");
  const rightBows = bows.filter((b) => b.page === "right");
  const showWatermarks = bows.length === 0;

  return (
    <section
      id="guestbook"
      tabIndex={-1}
      aria-labelledby="guestbook-heading"
      data-testid="guestbook-section"
      className="relative py-16 sm:py-20 md:py-32 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-10 md:mb-12 flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TyingBow size={14} tie={false} />
              <motion.span
                aria-hidden="true"
                className="hairline hairline--draw w-12 md:w-20 origin-left"
                initial={reduce ? false : { scaleX: 0, opacity: 0.15 }}
                whileInView={reduce ? undefined : { scaleX: 1, opacity: 0.55 }}
                viewport={{ once: true, margin: "-48px 0px" }}
                transition={{ duration: 0.95, ease: MOTION_EASE, delay: 0.08 }}
              />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft">
                {BOW_BOARD.overline}
              </span>
            </div>
            <h2
              id="guestbook-heading"
              className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink"
            >
              {BOW_BOARD.title}
              <br />
              <em className="not-italic text-burgundy">
                {BOW_BOARD.titleAccent}
              </em>
            </h2>
            <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl leading-relaxed">
              {hasSigned ? BOW_BOARD.signedKicker : BOW_BOARD.kicker}
            </p>
            <p id="guestbook-keyboard-help" className="sr-only">
              {ui.guestbook.keyboardHelp}
            </p>
          </div>
          <div className="font-mono text-xs text-ink-soft text-left md:text-right">
            <p
              data-testid="bow-count"
              className="text-burgundy text-base"
              aria-live="polite"
              aria-atomic="true"
            >
              {bows.length}{" "}
              <span className="text-ink-mute">
                {bows.length === 1
                  ? BOW_BOARD.countLabelSingular
                  : BOW_BOARD.countLabel}
              </span>
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-mute mt-1">
              {hasSigned
                ? BOW_BOARD.marginHintSigned
                : BOW_BOARD.marginHint}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            data-testid="guestbook-canvas"
            className={`guestbook-spread${spreadAlive ? " guestbook-spread--alive" : ""}`}
          >
            {unavailable && (
              <div
                role="status"
                aria-live="polite"
                className="absolute top-4 left-1/2 -translate-x-1/2 z-20 font-mono text-xs uppercase tracking-[0.18em] text-ink bg-bone border border-ink/20 px-3 py-1.5 max-w-[90%] text-center"
              >
                {HINTS.unavailable}
              </div>
            )}

            {!loaded && (
              <div
                role="status"
                aria-live="polite"
                className="absolute inset-0 z-20 flex items-center justify-center font-mono text-xs text-ink-mute bg-bone/80"
              >
                {ui.guestbook.loading}
              </div>
            )}

            {hint && (
              <div
                role="status"
                aria-live="polite"
                className="absolute top-4 left-1/2 -translate-x-1/2 z-20 font-mono text-xs uppercase tracking-[0.18em] text-burgundy bg-bone border border-burgundy/30 px-3 py-1.5 max-w-[90%] text-center"
              >
                {HINTS[hint]}
              </div>
            )}

            {/* Under-pages split at the spine so the stack folds with the book */}
            <div className="guestbook-stack" aria-hidden="true">
              <div className="guestbook-stack-half guestbook-stack-left">
                <span className="guestbook-stack-sheet guestbook-stack-sheet--deep" />
                <span className="guestbook-stack-sheet guestbook-stack-sheet--near" />
              </div>
              <div className="guestbook-stack-gutter" />
              <div className="guestbook-stack-half guestbook-stack-right">
                <span className="guestbook-stack-sheet guestbook-stack-sheet--deep" />
                <span className="guestbook-stack-sheet guestbook-stack-sheet--near" />
              </div>
            </div>

            <div
              className="guestbook-inner"
              role="group"
              aria-label={ui.guestbook.pages}
            >
              <div
                ref={leftRef}
                role="button"
                tabIndex={unavailable ? -1 : 0}
                aria-disabled={unavailable || undefined}
                aria-describedby="guestbook-keyboard-help"
                aria-label={`${ui.guestbook.leftPage}, ${leftBows.length} ${
                  leftBows.length === 1
                    ? ui.guestbook.signature
                    : ui.guestbook.signatures
                }. ${ui.guestbook.placeHint}`}
                onClick={(e) => handlePageClick("left", e)}
                onFocus={() => handlePageFocus("left")}
                onBlur={clearGhost}
                onKeyDown={(e) => handlePageKeyDown("left", e)}
                onPointerMove={(e) => updateGhost("left", e)}
                onPointerLeave={() => {
                  if (document.activeElement !== leftRef.current) clearGhost();
                }}
                className="guestbook-page guestbook-page-left cursor-pointer"
              >
                <div className="guestbook-page-texture" aria-hidden="true" />
                {showWatermarks && (
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none px-10 md:px-14 py-10"
                    aria-hidden="true"
                  >
                    <p className="font-serif italic text-sm md:text-base text-ink-mute text-center max-w-[16rem] leading-relaxed select-none">
                      {BOW_BOARD.leftWatermark}
                    </p>
                  </div>
                )}
                {ghost?.page === "left" && <GhostBow ghost={ghost} />}
                <PageBows
                  bows={leftBows}
                  visitorId={visitorId}
                  lastDropped={lastDropped}
                  reduce={reduce}
                />
              </div>

              <div className="guestbook-spine" aria-hidden="true" />

              <div
                ref={rightRef}
                role="button"
                tabIndex={unavailable ? -1 : 0}
                aria-disabled={unavailable || undefined}
                aria-describedby="guestbook-keyboard-help"
                aria-label={`${ui.guestbook.rightPage}, ${rightBows.length} ${
                  rightBows.length === 1
                    ? ui.guestbook.signature
                    : ui.guestbook.signatures
                }. ${ui.guestbook.placeHint}`}
                onClick={(e) => handlePageClick("right", e)}
                onFocus={() => handlePageFocus("right")}
                onBlur={clearGhost}
                onKeyDown={(e) => handlePageKeyDown("right", e)}
                onPointerMove={(e) => updateGhost("right", e)}
                onPointerLeave={() => {
                  if (document.activeElement !== rightRef.current) clearGhost();
                }}
                className="guestbook-page guestbook-page-right cursor-pointer"
              >
                <div className="guestbook-page-texture" aria-hidden="true" />
                {showWatermarks && (
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none px-10 md:px-14 py-10"
                    aria-hidden="true"
                  >
                    <p className="font-serif italic text-sm md:text-base text-ink-mute text-center max-w-[16rem] leading-relaxed select-none">
                      {BOW_BOARD.rightWatermark}
                    </p>
                  </div>
                )}
                {ghost?.page === "right" && <GhostBow ghost={ghost} />}
                <PageBows
                  bows={rightBows}
                  visitorId={visitorId}
                  lastDropped={lastDropped}
                  reduce={reduce}
                />
              </div>
            </div>

            <AnimatePresence>
              {bows.length === 0 && loaded && (
                <motion.div
                  key="guestbook-empty"
                  role="status"
                  className="absolute inset-x-0 top-[32%] md:top-[34%] flex justify-center pointer-events-none z-10"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={
                    reduce
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          transition: { duration: 0.45, ease: MOTION_EASE },
                        }
                  }
                >
                  <p className="font-serif italic text-base md:text-lg text-ink-soft bg-bone/70 px-4 py-2">
                    {BOW_BOARD.emptyState}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GuestbookCanvas;
