import { prefersReducedMotion } from "./motion";

/** Matches fixed nav `h-16` — keep in sync with `scroll-padding-top`. */
export const NAV_SCROLL_OFFSET = 64;

export const scrollBehavior = () =>
  prefersReducedMotion() ? "auto" : "smooth";

const focusTarget = (el) => {
  if (!(el instanceof HTMLElement)) return;
  if (!el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "-1");
  }
  el.focus({ preventScroll: true });
};

export const scrollToElement = (id, block = "start", behavior) => {
  const el = document.getElementById(id);
  if (!el) return;
  const scrollOpts = {
    behavior: behavior ?? scrollBehavior(),
  };
  if (block === "start") {
    // Scroll first — focusing before scrollTo is cancelled on some mobile WebKits.
    const top =
      el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
    window.scrollTo({ top: Math.max(0, top), ...scrollOpts });
    focusTarget(el);
    return;
  }
  el.scrollIntoView({
    ...scrollOpts,
    block,
  });
  focusTarget(el);
};

export const scrollToTop = (behavior) => {
  const main = document.getElementById("main-content");
  window.scrollTo({
    top: 0,
    behavior: behavior ?? scrollBehavior(),
  });
  focusTarget(main);
};

/** In-page hash nav — smooth scroll + focus, then sync the URL. */
export const navigateToHash = (
  id,
  { updateHistory = true, behavior } = {},
) => {
  if (!id) {
    scrollToTop(behavior);
    if (updateHistory) {
      history.pushState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    return;
  }
  scrollToElement(id, "start", behavior);
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
