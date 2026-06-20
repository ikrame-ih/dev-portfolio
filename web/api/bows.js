import { randomUUID } from "node:crypto";
import { getRedis } from "./_lib/redis.js";
import { rateLimit } from "./_lib/rateLimit.js";
import { getClientIp } from "./_lib/security.js";

const BOWS_KEY = "guestbook:bows";
const MIN_DISTANCE = 0.07;
const MAX_BOWS = 500;

const normalizeStored = (bow) => ({
  id: bow.id,
  page: bow.page,
  mx: bow.mx,
  y: bow.y,
  rotation: bow.rotation ?? 0,
  visitor_id: bow.visitor_id,
  created_at: bow.created_at,
});

function getVisitorFromCookie(req, res) {
  const match = req.headers.cookie?.match(/(?:^|;\s*)ik_visitor=([^;]+)/);
  if (match?.[1]) return match[1];

  const id = `v_${randomUUID().replace(/-/g, "").slice(0, 10)}`;
  const secure = process.env.VERCEL ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `ik_visitor=${id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000${secure}`,
  );
  return id;
}

function tooClose(page, mx, y, bows) {
  return bows.some((b) => {
    if (b.page !== page) return false;
    return Math.hypot(b.mx - mx, b.y - y) < MIN_DISTANCE;
  });
}

async function loadBowsFromStore(redis) {
  const bows = await redis.get(BOWS_KEY);
  return Array.isArray(bows) ? bows : [];
}

export default async function handler(req, res) {
  const redis = getRedis();
  if (!redis) {
    return res.status(503).json({ error: "redis_not_configured" });
  }

  res.setHeader("Cache-Control", "no-store");

  try {
    if (req.method === "GET") {
      const bows = await loadBowsFromStore(redis);
      return res.status(200).json({ bows });
    }

    if (req.method === "POST") {
    const ip = getClientIp(req);
    const postLimit = await rateLimit({
      key: `bows:${ip}`,
      limit: 20,
      windowSec: 60 * 60,
    });
    if (postLimit.limited) {
      return res.status(429).json({ error: "rate_limited" });
    }

    const visitorId = getVisitorFromCookie(req, res);
    const { page, mx, y, rotation } = req.body ?? {};

    if (page !== "left" && page !== "right") {
      return res.status(400).json({ error: "invalid_page" });
    }
    if (typeof mx !== "number" || typeof y !== "number") {
      return res.status(400).json({ error: "invalid_position" });
    }
    if (!Number.isFinite(mx) || !Number.isFinite(y)) {
      return res.status(400).json({ error: "invalid_position" });
    }

    const clampedMx = Math.min(0.88, Math.max(0.12, mx));
    const clampedY = Math.min(0.92, Math.max(0.08, y));
    const safeRotation =
      typeof rotation === "number" && Number.isFinite(rotation)
        ? Math.min(180, Math.max(-180, rotation))
        : 0;

    const existing = await loadBowsFromStore(redis);
    const withoutVisitor = existing.filter((b) => b.visitor_id !== visitorId);

    if (tooClose(page, clampedMx, clampedY, withoutVisitor)) {
      return res.status(409).json({ error: "too_close" });
    }

    const previous = existing.find((b) => b.visitor_id === visitorId);
    const bow = normalizeStored({
      id: previous?.id ?? `bow_${Date.now()}_${randomUUID().slice(0, 6)}`,
      page,
      mx: clampedMx,
      y: clampedY,
      rotation: safeRotation,
      visitor_id: visitorId,
      created_at: previous?.created_at ?? new Date().toISOString(),
    });

    const next = [bow, ...withoutVisitor].slice(0, MAX_BOWS);
    await redis.set(BOWS_KEY, next);
    return res.status(200).json({ bows: next });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method_not_allowed" });
  } catch (err) {
    console.error("bows_handler_error", err);
    return res.status(500).json({ error: "server_error" });
  }
}
