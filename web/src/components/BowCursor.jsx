import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

const HOTSPOT = 14;
/** Relative luminance below this counts as a dark fill (ink / burgundy). */
const DARK_LUMA = 0.42;

const asElement = (target) => {
  if (target instanceof Element) return target;
  if (target instanceof Node) return target.parentElement;
  return null;
};

const isTextTarget = (el) => {
  if (!el) return false;
  return Boolean(
    el.closest(
      'input, textarea, select, [contenteditable="true"], .cli-terminal-panel',
    ),
  );
};

const parseRgba = (color) => {
  if (!color || color === "transparent") return null;
  // rgb(74, 14, 14) | rgba(74, 14, 14, 0.8) | rgb(74 14 14 / 0.8)
  const m = color.match(
    /rgba?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)\s*[, ]\s*([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)/i,
  );
  if (!m) return null;
  let a = 1;
  if (m[4] !== undefined) {
    a = m[4].endsWith("%") ? Number(m[4]) / 100 : Number(m[4]);
  }
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]), a };
};

const luminance = ({ r, g, b }) =>
  (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

/** Walk up to the first opaque background and test if it's dark. */
const hasDarkFill = (el) => {
  let node = el;
  while (node && node.nodeType === 1 && node !== document.documentElement) {
    const rgba = parseRgba(getComputedStyle(node).backgroundColor);
    if (rgba && rgba.a >= 0.55) {
      return luminance(rgba) < DARK_LUMA;
    }
    node = node.parentElement;
  }
  return false;
};

/**
 * Dark surfaces where the burgundy lacito should yield to the cream CSS cursor.
 * Markers for overlays/footer; luminance for burgundy / ink fills (incl. hover).
 */
const isDarkSurface = (el) => {
  if (!el) return false;

  const darkMark = el.closest("[data-cursor-on-dark], .footer-inverse");
  const lightMark = el.closest("[data-cursor-on-light]");

  if (darkMark) {
    // Light panel nested inside a dark overlay wins — unless the fill itself is dark.
    if (lightMark && darkMark.contains(lightMark)) {
      return hasDarkFill(el);
    }
    return true;
  }

  return hasDarkFill(el);
};

/**
 * Desktop bow cursor.
 * Light surfaces: DOM lacito (burgundy).
 * Dark surfaces (footer, overlays, burgundy CTAs): native CSS cream cursor —
 * a moving DOM/SVG layer over ink was raster-blurring in Chrome.
 * Falls back to the CSS cursor on touch / reduced motion.
 */
export const BowCursor = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const rootRef = useRef(null);
  const rafRef = useRef(0);
  const stateRef = useRef({
    x: -100,
    y: -100,
    hidden: true,
    onDark: false,
  });

  useEffect(() => {
    if (reduce) {
      setActive(false);
      return undefined;
    }

    const mq = window.matchMedia(FINE_POINTER);
    const sync = () => setActive(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [reduce]);

  useEffect(() => {
    document.documentElement.classList.toggle("has-bow-cursor", active);
    if (!active) {
      document.documentElement.classList.remove("has-bow-on-dark");
    }
    return () => {
      document.documentElement.classList.remove("has-bow-cursor");
      document.documentElement.classList.remove("has-bow-on-dark");
    };
  }, [active]);

  useEffect(() => {
    if (!active) return undefined;

    const paint = () => {
      rafRef.current = 0;
      const node = rootRef.current;
      if (!node) return;
      const { x, y, hidden, onDark } = stateRef.current;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      node.style.opacity = hidden || onDark ? "0" : "1";
      document.documentElement.classList.toggle(
        "has-bow-on-dark",
        onDark && !hidden,
      );
    };

    const schedulePaint = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(paint);
    };

    const syncFromEvent = (e) => {
      const el =
        asElement(e.target) ||
        document.elementFromPoint(e.clientX, e.clientY);

      stateRef.current.x = Math.round(e.clientX - HOTSPOT);
      stateRef.current.y = Math.round(e.clientY - HOTSPOT);
      // Recompute every move: hover:bg-* can darken without changing target.
      stateRef.current.hidden = isTextTarget(el);
      stateRef.current.onDark = isDarkSurface(el);
      schedulePaint();
    };

    const onMove = (e) => syncFromEvent(e);
    const onDown = (e) => {
      if (e.button !== 0) return;
      const el = asElement(e.target);
      if (isTextTarget(el) || isDarkSurface(el)) return;
      setPressed(true);
    };
    const onUp = () => setPressed(false);
    const onLeave = () => {
      setPressed(false);
      stateRef.current.hidden = true;
      stateRef.current.onDark = false;
      schedulePaint();
    };
    const onEnter = (e) => syncFromEvent(e);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    schedulePaint();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-bow-on-dark");
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  if (!active || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={rootRef}
      aria-hidden="true"
      data-testid="bow-cursor"
      className={`bow-cursor${pressed ? " is-pressed" : ""}`}
    >
      <span className="bow-cursor__glyph">
        <Bow size={28} strokeWidth={2.2} color="#4A0E0E" />
      </span>
    </div>,
    document.body,
  );
};

export default BowCursor;
