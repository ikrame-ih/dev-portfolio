import { prefersReducedMotion } from "./motion";

/** Pixels of `--nav-h` (nav content plus its border). Fallback matches that variable. */
export const navScrollOffset = () => {
  if (typeof document === "undefined") return 65;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-h")
    .trim();
  const value = Number.parseFloat(raw);
  return Number.isFinite(value) ? value : 65;
};

let alignGeneration = 0;

/** One instant nudge after the scroll stops, if the section is not under the nav. */
const correctUnderNav = (el, behavior) => {
  const generation = ++alignGeneration;
  const align = () => {
    if (generation !== alignGeneration) return;
    if (!(el instanceof HTMLElement) || !el.isConnected) return;
    const delta = el.getBoundingClientRect().top - navScrollOffset();
    if (Math.abs(delta) <= 1) return;
    window.scrollTo({
      top: Math.max(0, window.scrollY + delta),
      behavior: "auto",
    });
  };

  if (behavior === "auto") {
    window.requestAnimationFrame(() => window.requestAnimationFrame(align));
    return;
  }

  let settled = false;
  let timer = 0;
  const finish = () => {
    if (settled) return;
    settled = true;
    window.clearTimeout(timer);
    window.removeEventListener("scrollend", finish);
    window.requestAnimationFrame(align);
  };
  window.addEventListener("scrollend", finish);
  timer = window.setTimeout(finish, 1600);
};

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
    // Scroll first - focusing before scrollTo is cancelled on some mobile WebKits.
    const top =
      el.getBoundingClientRect().top + window.scrollY - navScrollOffset();
    window.scrollTo({ top: Math.max(0, top), ...scrollOpts });
    focusTarget(el);
    correctUnderNav(el, scrollOpts.behavior);
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

/** In-page hash nav - smooth scroll + focus, then sync the URL. */
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

/** Click handler for <a href="#section"> - keeps reduced-motion + focus behavior. */
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
