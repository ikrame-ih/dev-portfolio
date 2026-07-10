// ~7% of page width felt right after testing on different screen sizes.
export const MIN_BOW_DISTANCE = 0.07;

// Deterministic hash from id — random placement made bows jump on every re-render.
export const stableUnit = (id, salt = 0) => {
  let hash = salt;
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return (hash % 10000) / 10000;
};

// Older bows stored a single `x` coordinate — map that to left/right page + margin position.
export const normalizeBow = (bow) => {
  const page =
    bow.page === "left" || bow.page === "right"
      ? bow.page
      : bow.x < 0.5
        ? "left"
        : "right";

  return {
    ...bow,
    page,
    mx:
      typeof bow.mx === "number" ? bow.mx : 0.12 + stableUnit(bow.id, 1) * 0.76,
    y: typeof bow.y === "number" ? bow.y : 0.08 + stableUnit(bow.id, 2) * 0.84,
  };
};

export const bowTooClose = (page, mx, y, bows, excludeVisitorId = null) => {
  return bows.some((b) => {
    if (b.page !== page) return false;
    if (excludeVisitorId && b.visitor_id === excludeVisitorId) return false;
    const dx = b.mx - mx;
    const dy = b.y - y;
    return Math.hypot(dx, dy) < MIN_BOW_DISTANCE;
  });
};

// Keep bows away from the page edges so they don't clip under the book spine.
export const clampBowPosition = (mx, y) => ({
  mx: Math.min(0.88, Math.max(0.12, mx)),
  y: Math.min(0.92, Math.max(0.08, y)),
});
