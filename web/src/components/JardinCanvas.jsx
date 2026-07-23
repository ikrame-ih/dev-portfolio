import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { TyingBow } from "./TyingBow";
import { BOW_BOARD } from "@/data/portfolio";
import { getVisitorId, loadAndMigrateBows, saveBow } from "@/lib/storage";
import { fetchRemoteBows, postRemoteBow, useRemoteBows } from "@/lib/bowsApi";
import { normalizeBow, bowTooClose, clampBowPosition } from "@/lib/bowUtils";
import { MOTION_EASE } from "@/lib/motion";
import Reveal from "./Reveal";

const BOW_MOTION = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.35, ease: MOTION_EASE },
};

const HINTS = {
  tooClose: "Too close to another signature — try a nearby spot.",
  error: "Could not save your bow. Try again.",
  unavailable:
    "Guest book is temporarily unavailable. Signatures will be back soon.",
  placedLeft:
    "Your bow is on the left page — click again or use arrows + Enter to move it.",
  placedRight:
    "Your bow is on the right page — click again or use arrows + Enter to move it.",
  moved: "Bow moved — still yours alone.",
};

const KEYBOARD_STEP = 0.05;
const DEFAULT_KEYBOARD_POS = { mx: 0.5, y: 0.42 };

function mergeVisitorBow(bows, bow, visitorId) {
  const withoutVisitor = bows.filter((b) => b.visitor_id !== visitorId);
  return [bow, ...withoutVisitor].map(normalizeBow);
}

function pressPage(ref) {
  if (!ref.current) return;
  ref.current.classList.add("guestbook-page--pressed");
  window.setTimeout(() => {
    ref.current?.classList.remove("guestbook-page--pressed");
  }, 180);
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
          <TyingBow
            size={justPlaced ? 32 : isMine ? 29 : 24}
            strokeWidth={isMine ? 1.45 : 1.15}
            color={isMine ? "#4A0E0E" : "#6B1D1D"}
            className={isMine ? "" : "opacity-75"}
            tie={justPlaced}
          />
        </motion.div>
      );
    })}
  </AnimatePresence>
);

export const JardinCanvas = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const visitorIdRef = useRef(null);
  const syncingRef = useRef(false);
  const hintTimerRef = useRef(null);
  const [bows, setBows] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [lastDropped, setLastDropped] = useState(null);
  const [hint, setHint] = useState(null);
  const [remote, setRemote] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [ghost, setGhost] = useState(null);
  const [visitorId, setVisitorId] = useState(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    const section = document.getElementById("garden");

    const load = async () => {
      if (useRemoteBows()) {
        try {
          const { bows: remoteBows, visitorId: vid } = await fetchRemoteBows();
          if (!cancelled) {
            visitorIdRef.current = vid;
            setVisitorId(vid);
            setBows(remoteBows.map(normalizeBow));
            setRemote(true);
            setUnavailable(false);
            setHasSigned(remoteBows.some((b) => b.visitor_id === vid));
          }
          return;
        } catch {
          if (import.meta.env.PROD) {
            if (!cancelled) {
              setUnavailable(true);
              setRemote(false);
            }
            return;
          }
        }
      }
      if (!cancelled) {
        const vid = getVisitorId();
        visitorIdRef.current = vid;
        setVisitorId(vid);
        const local = loadAndMigrateBows();
        setBows(local);
        setRemote(false);
        setUnavailable(false);
        setHasSigned(local.some((b) => b.visitor_id === vid));
      }
    };

    const start = () => {
      load().finally(() => {
        if (!cancelled) setLoaded(true);
      });
    };

    // Defer network until the guest book is near the viewport (keeps /api/bows off LCP path).
    if (typeof IntersectionObserver === "undefined" || !section) {
      start();
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            start();
          }
        },
        { rootMargin: "240px 0px" },
      );
      io.observe(section);
      return () => {
        cancelled = true;
        io.disconnect();
        if (hintTimerRef.current) window.clearTimeout(hintTimerRef.current);
      };
    }

    return () => {
      cancelled = true;
      if (hintTimerRef.current) window.clearTimeout(hintTimerRef.current);
    };
  }, []);

  const showHint = useCallback((key) => {
    setHint(key);
    if (hintTimerRef.current) window.clearTimeout(hintTimerRef.current);
    hintTimerRef.current = window.setTimeout(() => setHint(null), 3200);
  }, []);

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
    const { mx, y } = clampBowPosition(localX, localY);
    setGhost({ page, mx, y });
  }, [unavailable]);

  const clearGhost = useCallback(() => setGhost(null), []);

  const placeBowAt = useCallback(
    async (page, localX, localY) => {
      if (unavailable || syncingRef.current) return;
      if (remote && !visitorIdRef.current) return;

      const ref = page === "left" ? leftRef : rightRef;
      if (!ref.current) return;

      pressPage(ref);
      setGhost(null);

      const { mx, y } = clampBowPosition(localX, localY);
      const vid = remote ? visitorIdRef.current : getVisitorId();

      if (bowTooClose(page, mx, y, bows, vid)) {
        showHint("tooClose");
        return;
      }

      const existing = bows.find((b) => b.visitor_id === vid);
      const bow = normalizeBow({
        id:
          existing?.id ??
          `bow_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        page,
        mx,
        y,
        rotation: Math.round((Math.random() - 0.5) * 40),
        visitor_id: vid,
        created_at: existing?.created_at ?? new Date().toISOString(),
      });

      const snapshot = bows;

      if (remote) {
        setBows(mergeVisitorBow(bows, bow, vid));
        setLastDropped(bow.id);
        setHint(null);
        syncingRef.current = true;
      }

      try {
        if (remote) {
          const { bows: synced, visitorId: nextVid } = await postRemoteBow(bow);
          const resolved = nextVid ?? vid;
          visitorIdRef.current = resolved;
          setVisitorId(resolved);
          setBows(synced.map(normalizeBow));
        } else {
          const next = saveBow(bow);
          setBows(next);
          setLastDropped(bow.id);
          setHint(null);
        }
        setHasSigned(true);
        if (!existing) {
          showHint(page === "left" ? "placedLeft" : "placedRight");
        } else {
          showHint("moved");
        }
      } catch (err) {
        if (remote) {
          setBows(snapshot);
          setLastDropped(existing?.id ?? null);
        }
        if (err.code === "too_close") {
          showHint("tooClose");
          return;
        }
        showHint("error");
      } finally {
        syncingRef.current = false;
      }
    },
    [bows, remote, unavailable, showHint],
  );

  const handlePageClick = useCallback(
    (page, e) => {
      const ref = page === "left" ? leftRef : rightRef;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const localX = (e.clientX - rect.left) / rect.width;
      const localY = (e.clientY - rect.top) / rect.height;
      placeBowAt(page, localX, localY);
    },
    [placeBowAt],
  );

  const handlePageFocus = useCallback(
    (page) => {
      if (unavailable) return;
      setGhost((prev) =>
        prev?.page === page
          ? prev
          : { page, ...DEFAULT_KEYBOARD_POS },
      );
    },
    [unavailable],
  );

  const handlePageKeyDown = (page, e) => {
    if (unavailable) return;

    const moveKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (moveKeys.includes(e.key)) {
      e.preventDefault();
      setGhost((prev) => {
        const base =
          prev?.page === page ? prev : { page, ...DEFAULT_KEYBOARD_POS };
        let { mx, y } = base;
        if (e.key === "ArrowLeft") mx -= KEYBOARD_STEP;
        if (e.key === "ArrowRight") mx += KEYBOARD_STEP;
        if (e.key === "ArrowUp") y -= KEYBOARD_STEP;
        if (e.key === "ArrowDown") y += KEYBOARD_STEP;
        return { page, ...clampBowPosition(mx, y) };
      });
      return;
    }

    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    const pos =
      ghost?.page === page ? ghost : { page, ...DEFAULT_KEYBOARD_POS };
    placeBowAt(page, pos.mx, pos.y);
  };

  const leftBows = bows.filter((b) => b.page === "left");
  const rightBows = bows.filter((b) => b.page === "right");
  const showWatermarks = bows.length === 0;

  return (
    <section
      id="garden"
      tabIndex={-1}
      aria-labelledby="guestbook-heading"
      data-testid="jardin-section"
      className="relative py-16 sm:py-20 md:py-32 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-10 md:mb-12 flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TyingBow size={14} tie={false} />
              <motion.span
                aria-hidden="true"
                className="hairline w-10 md:w-14 origin-left"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={reduce ? undefined : { scaleX: 1 }}
                viewport={{ once: true, margin: "-48px 0px" }}
                transition={{ duration: 0.7, ease: MOTION_EASE, delay: 0.05 }}
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
              Guest book: focus the left or right page. Use arrow keys to move
              the preview bow, then press Enter or Space to place or move your
              signature. One bow per visitor.
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
          <div data-testid="jardin-canvas" className="guestbook-spread">
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
                loading signatures…
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

            <div
              className="guestbook-inner"
              role="group"
              aria-label="Guest book pages"
            >
              <div
                ref={leftRef}
                role="button"
                tabIndex={unavailable ? -1 : 0}
                aria-disabled={unavailable || undefined}
                aria-describedby="guestbook-keyboard-help"
                aria-label={`Left page, ${leftBows.length} ${
                  leftBows.length === 1 ? "signature" : "signatures"
                }. Place or move your bow with arrow keys, then Enter.`}
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
                aria-label={`Right page, ${rightBows.length} ${
                  rightBows.length === 1 ? "signature" : "signatures"
                }. Place or move your bow with arrow keys, then Enter.`}
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

export default JardinCanvas;
