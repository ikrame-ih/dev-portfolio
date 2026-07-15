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

/** Scroll reveal preset — subtle y settle; content stays visible (opacity never 0). */
export const fadeUp = (reduce, delay = 0, y = 10) => {
  if (reduce) {
    return { initial: false, animate: { opacity: 1, y: 0 } };
  }
  return {
    initial: { opacity: 1, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: MOTION_DURATION.normal, ease: MOTION_EASE, delay },
  };
};

/** Accordion expand — height animation, or instant when reduced motion. */
export const accordionTransition = (reduce) =>
  reduce ? { duration: 0 } : { duration: 0.5, ease: MOTION_EASE };
