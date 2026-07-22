import { useEffect } from "react";

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function getFocusable(container) {
  return [...container.querySelectorAll(FOCUSABLE)].filter(
    (node) => !node.hasAttribute("disabled") && node.tabIndex !== -1,
  );
}

export function useFocusTrap(active, containerRef, onClose) {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const el = containerRef.current;
    const previous = document.activeElement;

    const focusFirst = () => {
      const focusable = getFocusable(el);
      const field = focusable.find(
        (node) => node.tagName === "INPUT" || node.tagName === "TEXTAREA",
      );
      (field || focusable[0])?.focus();
    };

    requestAnimationFrame(focusFirst);

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose?.();
        return;
      }
      if (e.key !== "Tab") return;

      // Forward-Tab in fields is reserved (e.g. CLI autocomplete) — don't steal focus.
      const tag = e.target?.tagName;
      if (
        !e.shiftKey &&
        (tag === "INPUT" || tag === "TEXTAREA")
      ) {
        return;
      }

      const focusable = getFocusable(el);
      if (!focusable.length) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first || !el.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last || !el.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    };

    el.addEventListener("keydown", onKeyDown);
    return () => {
      el.removeEventListener("keydown", onKeyDown);
      if (previous instanceof HTMLElement && document.contains(previous)) {
        previous.focus();
      }
    };
  }, [active, containerRef, onClose]);
}
