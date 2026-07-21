/** Shared motion grammar — calm editorial easing across the site. */
export const MOTION_EASE = [0.2, 0.7, 0.2, 1];

export const MOTION_DURATION = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.55,
  reveal: 0.85,
  settle: 1.2,
};

export const motionTransition = (delay = 0, duration = MOTION_DURATION.reveal) => ({
  duration,
  ease: MOTION_EASE,
  delay,
});

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Hero cascade entrance — real fade-up so items appear in sequence.
 * Keep y small (6–8px) to avoid the old float/settle feel.
 */
export const heroEnter = (
  reduce,
  delay = 0,
  { y = 8, scale, duration = MOTION_DURATION.reveal } = {},
) => {
  if (reduce) {
    return { initial: false, animate: { opacity: 1, y: 0, scale: 1 } };
  }
  return {
    initial: {
      opacity: 0,
      y,
      ...(scale != null ? { scale } : {}),
    },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration,
      ease: MOTION_EASE,
      delay,
    },
  };
};

/**
 * Scroll-into-view entrance — soft fade + short rise (not the old float-only settle).
 */
export const scrollEnter = (
  reduce,
  delay = 0,
  { y = 14, duration = MOTION_DURATION.reveal } = {},
) => {
  if (reduce) {
    return {
      initial: false,
      whileInView: { opacity: 1, y: 0 },
    };
  }
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, ease: MOTION_EASE, delay },
  };
};
