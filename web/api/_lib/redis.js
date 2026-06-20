import { Redis } from "@upstash/redis";

let client = null;
let initFailed = false;

export function getRedis() {
  if (initFailed) return null;
  if (client) return client;

  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) return null;

  try {
    client = new Redis({ url, token });
    return client;
  } catch (err) {
    console.error("redis_init_error", err);
    initFailed = true;
    return null;
  }
}
