export const PROJECT_HASH_PREFIX = "project-";

export const projectIdFromHash = (hashOrId = "") => {
  const id = String(hashOrId).replace(/^#/, "");
  if (!id.startsWith(PROJECT_HASH_PREFIX)) return null;
  return id.slice(PROJECT_HASH_PREFIX.length) || null;
};

export const projectHash = (projectId) => `#${PROJECT_HASH_PREFIX}${projectId}`;

export const setLocationHash = (hashWithoutOrWithHash) => {
  const next = hashWithoutOrWithHash.startsWith("#")
    ? hashWithoutOrWithHash.slice(1)
    : hashWithoutOrWithHash;
  if (window.location.hash.replace(/^#/, "") === next) return;
  const url = `${window.location.pathname}${window.location.search}#${next}`;
  window.history.replaceState(null, "", url);
};
