const API = "/api/bows";

export async function fetchRemoteBows() {
  const res = await fetch(API, { credentials: "include" });
  if (!res.ok) throw new Error(`bows_fetch_${res.status}`);
  const data = await res.json();
  return data.bows ?? [];
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
  return data.bows ?? [];
}

export function useRemoteBows() {
  return import.meta.env.VITE_USE_REMOTE_BOWS === "true" || import.meta.env.PROD;
}
