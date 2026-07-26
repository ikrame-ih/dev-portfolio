// ~5% of page — denser than the old 7%, without bows looking cramped.
export const MIN_BOW_DISTANCE = 0.05;

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

// Keep bows off the outer edge and out of the spine gutter (fold shade).
export const clampBowPosition = (mx, y, page) => {
  const minMx = page === "right" ? 0.16 : 0.1;
  const maxMx = page === "left" ? 0.84 : 0.9;
  return {
    mx: Math.min(maxMx, Math.max(minMx, mx)),
    y: Math.min(0.92, Math.max(0.08, y)),
  };
};
