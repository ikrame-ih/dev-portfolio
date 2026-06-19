import { getRedis } from "./redis.js";

/**
 * Sliding window rate limit via Upstash. Fails open if Redis is unavailable.
 */
export async function rateLimit({ key, limit, windowSec }) {
  const redis = getRedis();
  if (!redis) return { ok: true, limited: false };

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
