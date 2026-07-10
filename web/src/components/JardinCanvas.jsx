import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TyingBow } from "./TyingBow";
import { BOW_BOARD } from "@/data/portfolio";
import { getVisitorId, loadAndMigrateBows, saveBow } from "@/lib/storage";
import { fetchRemoteBows, postRemoteBow, useRemoteBows } from "@/lib/bowsApi";
import { normalizeBow, bowTooClose, clampBowPosition } from "@/lib/bowUtils";
import Reveal from "./Reveal";

const BOW_MOTION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
};

const HINTS = {
  tooClose: "Too close to another signature — try a nearby spot.",
  error: "Could not save your bow. Try again.",
  unavailable:
    "Guest book is temporarily unavailable. Signatures will be back soon.",
};

// Replace any existing bow from the same visitor — one bow per person.
function mergeVisitorBow(bows, bow, visitorId) {
  const withoutVisitor = bows.filter((b) => b.visitor_id !== visitorId);
  return [bow, ...withoutVisitor].map(normalizeBow);
}

export const JardinCanvas = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const visitorIdRef = useRef(null);
  const syncingRef = useRef(false); // blocks double-clicks while a remote POST is in flight
  const [bows, setBows] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [lastDropped, setLastDropped] = useState(null);
  const [hint, setHint] = useState(null);
  const [remote, setRemote] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      // Production uses the shared API; localhost falls back to localStorage.
      if (useRemoteBows()) {
        try {
          const { bows: remoteBows, visitorId } = await fetchRemoteBows();
          if (!cancelled) {
            visitorIdRef.current = visitorId;
            setBows(remoteBows.map(normalizeBow));
            setRemote(true);
            setUnavailable(false);
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
        visitorIdRef.current = getVisitorId();
        setBows(loadAndMigrateBows());
        setRemote(false);
        setUnavailable(false);
      }
    };

    load().finally(() => {
      if (!cancelled) setLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const showHint = useCallback((key) => {
    setHint(key);
    setTimeout(() => setHint(null), 2400);
  }, []);

  const handlePageClick = useCallback(
    async (page, e) => {
      if (unavailable || syncingRef.current) return;
      if (remote && !visitorIdRef.current) return;

      const ref = page === "left" ? leftRef : rightRef;
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const localX = (e.clientX - rect.left) / rect.width;
      const localY = (e.clientY - rect.top) / rect.height;
      const { mx, y } = clampBowPosition(localX, localY);
      const visitorId = remote ? visitorIdRef.current : getVisitorId();

      if (bowTooClose(page, mx, y, bows, visitorId)) {
        showHint("tooClose");
        return;
      }

      const existing = bows.find((b) => b.visitor_id === visitorId);
      const bow = normalizeBow({
        id:
          existing?.id ??
          `bow_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        page,
        mx,
        y,
        rotation: Math.round((Math.random() - 0.5) * 40),
        visitor_id: visitorId,
        created_at: existing?.created_at ?? new Date().toISOString(),
      });

      const snapshot = bows; // keep a copy to roll back if the POST fails

      if (remote) {
        setBows(mergeVisitorBow(bows, bow, visitorId));
        setLastDropped(bow.id);
        setHint(null);
        syncingRef.current = true;
      }

      try {
        if (remote) {
          const { bows: synced, visitorId: vid } = await postRemoteBow(bow);
          visitorIdRef.current = vid ?? visitorId;
          setBows(synced.map(normalizeBow));
        } else {
          const next = saveBow(bow);
          setBows(next);
          setLastDropped(bow.id);
          setHint(null);
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

  const leftBows = bows.filter((b) => b.page === "left");
  const rightBows = bows.filter((b) => b.page === "right");

  return (
    <section
      id="garden"
      data-testid="jardin-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TyingBow size={14} tie={false} />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                {BOW_BOARD.overline}
              </span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
              {BOW_BOARD.title}
              <br />
              <em className="not-italic text-burgundy">
                {BOW_BOARD.titleAccent}
              </em>
            </h2>
            <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl leading-relaxed">
              {BOW_BOARD.kicker}
            </p>
          </div>
          <div className="font-mono text-xs text-ink-soft text-right">
            <p data-testid="bow-count" className="text-burgundy text-base">
              {bows.length}{" "}
              <span className="text-ink-mute">{BOW_BOARD.countLabel}</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute mt-1">
              {BOW_BOARD.marginHint}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div data-testid="jardin-canvas" className="guestbook-spread">
            {unavailable && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 font-mono text-[10px] uppercase tracking-[0.18em] text-ink bg-bone border border-ink/20 px-3 py-1.5 max-w-[90%] text-center">
                {HINTS.unavailable}
              </div>
            )}

            {!loaded && (
              <div className="absolute inset-0 z-20 flex items-center justify-center font-mono text-xs text-ink-mute bg-bone/80">
                loading signatures…
              </div>
            )}

            {hint && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 font-mono text-[10px] uppercase tracking-[0.18em] text-burgundy bg-bone border border-burgundy/30 px-3 py-1.5 max-w-[90%] text-center">
                {HINTS[hint]}
              </div>
            )}

            <div className="guestbook-inner">
              <div
                ref={leftRef}
                role="button"
                tabIndex={0}
                aria-label="Left page — click to sign"
                onClick={(e) => handlePageClick("left", e)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handlePageClick("left", e)
                }
                className="guestbook-page guestbook-page-left cursor-pointer"
              >
                <div className="guestbook-page-texture" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-10 md:px-14 py-10">
                  <p className="font-serif italic text-sm md:text-base text-ink/15 text-center max-w-[16rem] leading-relaxed select-none">
                    For everyone who scrolled past the projects and stayed for
                    the details.
                  </p>
                </div>
                <AnimatePresence>
                  {leftBows.map((b) => (
                    <motion.div
                      key={`${b.id}-${b.mx}-${b.y}`}
                      initial={BOW_MOTION.initial}
                      animate={{
                        ...BOW_MOTION.animate,
                        rotate: b.rotation || 0,
                      }}
                      exit={BOW_MOTION.exit}
                      transition={BOW_MOTION.transition}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${b.mx * 100}%`,
                        top: `${b.y * 100}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <TyingBow
                        size={b.id === lastDropped ? 32 : 24}
                        strokeWidth={1.2}
                        tie={b.id === lastDropped}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="guestbook-spine" aria-hidden="true" />

              <div
                ref={rightRef}
                role="button"
                tabIndex={0}
                aria-label="Right page — click to sign"
                onClick={(e) => handlePageClick("right", e)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handlePageClick("right", e)
                }
                className="guestbook-page guestbook-page-right cursor-pointer"
              >
                <div className="guestbook-page-texture" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-10 md:px-14 py-10">
                  <p className="font-serif italic text-sm md:text-base text-ink/15 text-center max-w-[16rem] leading-relaxed select-none">
                    A small thank-you. Your bow here means you were here.
                  </p>
                </div>
                <AnimatePresence>
                  {rightBows.map((b) => (
                    <motion.div
                      key={`${b.id}-${b.mx}-${b.y}`}
                      initial={BOW_MOTION.initial}
                      animate={{
                        ...BOW_MOTION.animate,
                        rotate: b.rotation || 0,
                      }}
                      exit={BOW_MOTION.exit}
                      transition={BOW_MOTION.transition}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${b.mx * 100}%`,
                        top: `${b.y * 100}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <TyingBow
                        size={b.id === lastDropped ? 32 : 24}
                        strokeWidth={1.2}
                        tie={b.id === lastDropped}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {bows.length === 0 && loaded && (
              <div className="absolute inset-x-0 top-[32%] md:top-[34%] flex justify-center pointer-events-none z-10">
                <p className="font-serif italic text-lg md:text-xl text-ink-mute bg-bone/60 px-4 py-2">
                  {BOW_BOARD.emptyState}
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default JardinCanvas;
