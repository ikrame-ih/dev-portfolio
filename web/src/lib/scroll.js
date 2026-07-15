import { prefersReducedMotion } from "./motion";

export const scrollBehavior = () =>
  prefersReducedMotion() ? "auto" : "smooth";

export const scrollToElement = (id, block = "start") => {
  document.getElementById(id)?.scrollIntoView({
    behavior: scrollBehavior(),
    block,
  });
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
};
