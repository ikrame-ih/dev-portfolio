/** Minimum normalised distance between bow centres (same page). ~6% of page width/height. */
export const MIN_BOW_DISTANCE = 0.07;

/** Stable 0–1 value derived from an id — used once when migrating bows without mx/y. */
export const stableUnit = (id, salt = 0) => {
  let hash = salt;
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return (hash % 10000) / 10000;
};

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
      typeof bow.mx === "number"
        ? bow.mx
        : 0.12 + stableUnit(bow.id, 1) * 0.76,
    y:
      typeof bow.y === "number"
        ? bow.y
        : 0.08 + stableUnit(bow.id, 2) * 0.84,
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

export const clampBowPosition = (mx, y) => ({
  mx: Math.min(0.88, Math.max(0.12, mx)),
  y: Math.min(0.92, Math.max(0.08, y)),
});
