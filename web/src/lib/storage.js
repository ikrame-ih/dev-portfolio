import { normalizeBow } from "./bowUtils";

// localStorage keys — bows (guest book) and CLI guestbook are separate features.
const BOWS_KEY = "ik_bows";
const GUESTBOOK_KEY = "ik_guestbook";
const VISITOR_KEY = "ik_visitor_id";

export function getVisitorId() {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = `v_${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    // private mode — id won't survive refresh but clicks still work
    return `v_${Math.random().toString(36).slice(2, 10)}`;
  }
}

export function loadBows() {
  try {
    const raw = localStorage.getItem(BOWS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// old x coords — migrate once
export function loadAndMigrateBows() {
  const raw = loadBows();
  const normalized = raw.map(normalizeBow);
  const changed = raw.some(
    (bow, i) =>
      bow.mx !== normalized[i].mx ||
      bow.y !== normalized[i].y ||
      bow.page !== normalized[i].page,
  );
  if (changed) {
    try {
      localStorage.setItem(BOWS_KEY, JSON.stringify(normalized));
    } catch {
      /* quota */
    }
  }
  return normalized;
}

// one bow per visitor
export function saveBow(bow) {
  const visitorId = bow.visitor_id;
  const withoutVisitor = loadBows().filter((b) => b.visitor_id !== visitorId);
  const stored = {
    id: bow.id,
    page: bow.page,
    mx: bow.mx,
    y: bow.y,
    rotation: bow.rotation,
    visitor_id: visitorId,
    created_at: bow.created_at,
  };
  const next = [stored, ...withoutVisitor].slice(0, 200);
  localStorage.setItem(BOWS_KEY, JSON.stringify(next));
  return next.map(normalizeBow);
}

export function loadGuestbook() {
  try {
    const raw = localStorage.getItem(GUESTBOOK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveGuestbookEntry(entry) {
  const entries = loadGuestbook();
  const next = [entry, ...entries].slice(0, 100);
  localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(next));
  return next;
}
