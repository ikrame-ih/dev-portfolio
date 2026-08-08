/** Shared motion grammar — calm editorial easing across the site. */
/** Strong ease-out (Emil): starts fast so UI feels responsive, not sluggish. */
export const MOTION_EASE = [0.23, 1, 0.32, 1];

export const MOTION_DURATION = {
  fast: 0.16,
  normal: 0.28,
  /** Hero/marketing focal moment — still under ~700ms. */
  reveal: 0.55,
};

/** Micro-interaction spring for CTAs and tactile controls. */
export const CTA_SPRING = {
  type: "spring",
  stiffness: 480,
  damping: 32,
  mass: 0.85,
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
  // Transform-only (no opacity:0) so WAVE/a11y tools never see invisible text.
  if (reduce) {
    return {
      initial: false,
      whileInView: { y: 0 },
    };
  }
  return {
    initial: { y },
    whileInView: { y: 0 },
    transition: { duration, ease: MOTION_EASE, delay },
  };
};
