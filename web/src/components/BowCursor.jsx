import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

const isTextTarget = (el) => {
  if (!(el instanceof Element)) return false;
  return Boolean(
    el.closest(
      'input, textarea, select, [contenteditable="true"], .cli-terminal-panel',
    ),
  );
};

/**
 * Desktop bow cursor with a soft press squash on click.
 * Position tracks the pointer with no lag; spring is click-only.
 * Falls back to the CSS cursor on touch / reduced motion.
 */
export const BowCursor = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (reduce) {
      setActive(false);
      return undefined;
    }

    const mq = window.matchMedia(FINE_POINTER);
    const sync = () => setActive(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [reduce]);

  useEffect(() => {
    document.documentElement.classList.toggle("has-bow-cursor", active);
    return () => document.documentElement.classList.remove("has-bow-cursor");
  }, [active]);

  useEffect(() => {
    if (!active) return undefined;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(isTextTarget(e.target));
    };
    const onDown = (e) => {
      if (e.button !== 0) return;
      if (isTextTarget(e.target)) return;
      setPressed(true);
    };
    const onUp = () => setPressed(false);
    const onLeave = () => {
      setPressed(false);
      setHidden(true);
    };
    const onEnter = (e) => {
      setHidden(isTextTarget(e.target));
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [active, x, y]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden="true"
      data-testid="bow-cursor"
      className="bow-cursor pointer-events-none fixed top-0 left-0 z-[200] -ml-[14px] -mt-[14px] mix-blend-multiply"
      style={{ x, y }}
      animate={{
        opacity: hidden ? 0 : 1,
        scale: pressed ? 0.78 : 1,
        rotate: pressed ? -14 : 0,
      }}
      transition={{
        opacity: { duration: 0.12 },
        scale: { type: "spring", stiffness: 520, damping: 22, mass: 0.4 },
        rotate: { type: "spring", stiffness: 480, damping: 20, mass: 0.4 },
      }}
    >
      <Bow size={28} strokeWidth={2.2} />
    </motion.div>
  );
};

export default BowCursor;
