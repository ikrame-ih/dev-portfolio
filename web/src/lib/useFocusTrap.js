import { useEffect } from "react";

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(active, containerRef, onClose) {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const el = containerRef.current;
    const focusable = [...el.querySelectorAll(FOCUSABLE)].filter(
      (node) => !node.hasAttribute("disabled") && node.tabIndex !== -1,
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const previous = document.activeElement;

    requestAnimationFrame(() => first?.focus());

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose?.();
        return;
      }
      if (e.key !== "Tab" || !focusable.length) return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
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
