import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_SCROLL_OFFSET } from "./scroll";

const SECTION_IDS = ["cv", "projects", "bento", "blog", "guestbook", "contact"];

/** How far below the nav the “active” line sits. */
const ACTIVE_LINE = NAV_SCROLL_OFFSET + 48;

/** Ignore observer/scroll updates briefly after a nav click. */
const LOCK_MS = 900;

function sectionFromScroll() {
  const marker = window.scrollY + ACTIVE_LINE;
  let current = null;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= marker) current = id;
  }
  return current;
}

/**
 * Active nav section from scroll position.
 * `lock(id)` pins the highlight during programmatic hash scrolls so the
 * underline does not chase every section along the way.
 */
export function useActiveSection() {
  const [active, setActive] = useState(null);
  const lockedUntil = useRef(0);
  const lockedId = useRef(null);
  const raf = useRef(0);

  const sync = useCallback(() => {
    if (Date.now() < lockedUntil.current && lockedId.current) {
      setActive(lockedId.current);
      return;
    }
    lockedId.current = null;
    setActive(sectionFromScroll());
  }, []);

  const lock = useCallback(
    (id) => {
      window.clearTimeout(raf.current);
      if (!id) {
        lockedId.current = null;
        lockedUntil.current = 0;
        setActive(null);
        return;
      }
      lockedId.current = id;
      lockedUntil.current = Date.now() + LOCK_MS;
      setActive(id);
      raf.current = window.setTimeout(() => {
        lockedId.current = null;
        lockedUntil.current = 0;
        sync();
      }, LOCK_MS);
    },
    [sync],
  );

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        sync();
      });
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(raf.current);
    };
  }, [sync]);

  return { active, lock };
}
