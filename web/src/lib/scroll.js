import { prefersReducedMotion } from "./motion";

export const scrollBehavior = () =>
  prefersReducedMotion() ? "auto" : "smooth";

const focusTarget = (el) => {
  if (!(el instanceof HTMLElement)) return;
  if (!el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "-1");
  }
  el.focus({ preventScroll: true });
};

export const scrollToElement = (id, block = "start") => {
  const el = document.getElementById(id);
  if (!el) return;
  // Focus first so SR/keyboard land correctly even if smooth scroll is long.
  focusTarget(el);
  el.scrollIntoView({
    behavior: scrollBehavior(),
    block,
  });
};

export const scrollToTop = () => {
  const main = document.getElementById("main-content");
  focusTarget(main);
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
};

/** In-page hash nav — smooth scroll + focus, then sync the URL. */
export const navigateToHash = (id, { updateHistory = true } = {}) => {
  if (!id) {
    scrollToTop();
    if (updateHistory) {
      history.pushState(null, "", window.location.pathname + window.location.search);
    }
    return;
  }
  scrollToElement(id);
  if (updateHistory) {
    history.pushState(null, "", `#${id}`);
  }
};

/** Click handler for <a href="#section"> — keeps reduced-motion + focus behavior. */
export const onHashLinkClick = (e) => {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;
  e.preventDefault();
  const id = href.slice(1);
  if (!id || id === "main-content" || id === "top") {
    navigateToHash("", { updateHistory: true });
    if (id === "main-content") {
      const main = document.getElementById("main-content");
      focusTarget(main);
    }
    return;
  }
  navigateToHash(id);
};
