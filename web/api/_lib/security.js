export function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  if (typeof req.headers["x-real-ip"] === "string") {
    return req.headers["x-real-ip"];
  }
  return "unknown";
}

export function clampText(value, maxLen) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

export function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isHoneypotTripped(body) {
  return Boolean(body?.website?.trim() || body?._gotcha?.trim());
}
