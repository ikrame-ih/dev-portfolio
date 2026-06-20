const API = "/api/bows";

export async function fetchRemoteBows() {
  const res = await fetch(API, { credentials: "include" });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `bows_fetch_${res.status}`);
    err.code = data.error;
    throw err;
  }
  return {
    bows: data.bows ?? [],
    visitorId: data.visitorId ?? null,
  };
}

export async function postRemoteBow(bow) {
  const res = await fetch(API, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page: bow.page,
      mx: bow.mx,
      y: bow.y,
      rotation: bow.rotation,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `bows_post_${res.status}`);
    err.code = data.error;
    throw err;
  }
  return {
    bows: data.bows ?? [],
    visitorId: data.visitorId ?? null,
  };
}

export function useRemoteBows() {
  if (import.meta.env.VITE_USE_REMOTE_BOWS === "true") return true;
  if (import.meta.env.VITE_USE_REMOTE_BOWS === "false") return false;

  if (typeof window === "undefined") return import.meta.env.PROD;

  const host = window.location.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";
  if (isLocal) return false;

  return import.meta.env.PROD;
}
