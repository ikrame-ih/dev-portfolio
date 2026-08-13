import { getRedis } from "./redis.js";

export async function rateLimit({
  key,
  limit,
  windowSec,
  required = Boolean(process.env.VERCEL),
}) {
  const redis = getRedis();
  if (!redis) {
    if (required) {
      return { ok: false, limited: true, unavailable: true };
    }
    return { ok: true, limited: false };
  }

  const bucket = `rl:${key}`;
  const count = await redis.incr(bucket);
  if (count === 1) {
    await redis.expire(bucket, windowSec);
  }

  return {
    ok: count <= limit,
    limited: count > limit,
    count,
    limit,
  };
}
