/**
 * GoatCounter — privacy-friendly, cookieless pageviews (free personal tier).
 * Default site: https://ikrame.goatcounter.com — override with VITE_GOATCOUNTER_CODE.
 */

const DEFAULT_CODE = "ikrame";
const SKIP_HASHES = new Set(["", "main-content"]);

const sectionPath = () => {
  const hash = window.location.hash.replace(/^#/, "");
  if (SKIP_HASHES.has(hash)) return "/";
  return `/${hash}`;
};

const whenReady = (fn, { tries = 50, ms = 100 } = {}) => {
  let n = 0;
  const tick = () => {
    if (window.goatcounter?.count) {
      fn();
      return;
    }
    if (++n >= tries) return;
    window.setTimeout(tick, ms);
  };
  tick();
};

export const initAnalytics = () => {
  const code =
    String(import.meta.env.VITE_GOATCOUNTER_CODE ?? "").trim() || DEFAULT_CODE;
  if (!code) return;

  const allowLocal =
    Boolean(import.meta.env.DEV) ||
    import.meta.env.VITE_GOATCOUNTER_ALLOW_LOCAL === "true";

  // Must be set before count.js runs so the first pageview uses our path.
  window.goatcounter = {
    ...(allowLocal ? { allow_local: true } : {}),
    path: sectionPath,
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
  document.head.appendChild(script);

  // SPA section jumps (#cv, #projects, …) as extra paths.
  window.addEventListener("hashchange", () => {
    whenReady(() => window.goatcounter.count());
  });
};
