import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/** Escape HTML special characters to prevent injection in email bodies. */
export function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Basic email format check. */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Best-effort client IP extraction for rate limiting. */
export function getClientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

const ratelimiters = {};

/**
 * Returns a sliding-window rate limiter for the given key, or null if
 * Upstash isn't configured (UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN).
 * Callers should skip rate limiting when this returns null.
 */
export function getRateLimiter(prefix, limit, window) {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  if (!ratelimiters[prefix]) {
    ratelimiters[prefix] = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(limit, window),
      analytics: false,
      prefix: `ratelimit:${prefix}`,
    });
  }
  return ratelimiters[prefix];
}

/**
 * Checks the rate limit for `ip`, returning true if the request may proceed.
 *
 * The limiter is built lazily on first use rather than at module scope, so
 * importing a route never opens a Redis connection at build time. Redis
 * problems must never take the forms down, so this fails open: if Upstash is
 * unconfigured, errors, or doesn't answer within `timeoutMs`, the request is
 * allowed through (Turnstile still guards it).
 */
export async function checkRateLimit(prefix, limit, window, ip, timeoutMs = 1500) {
  let ratelimit;
  try {
    ratelimit = getRateLimiter(prefix, limit, window);
  } catch {
    return true;
  }
  if (!ratelimit) return true;

  try {
    const result = await Promise.race([
      ratelimit.limit(ip),
      new Promise((resolve) => setTimeout(() => resolve(null), timeoutMs)),
    ]);
    // null = timed out; treat as allowed rather than stalling the submission.
    return result ? result.success : true;
  } catch {
    return true;
  }
}

/**
 * Verifies a Cloudflare Turnstile token server-side.
 * If TURNSTILE_SECRET_KEY isn't configured, verification is skipped (returns true)
 * so forms keep working before Turnstile is set up.
 */
export async function verifyTurnstile(token, remoteip) {
  if (!process.env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip,
      }),
    }
  );
  const data = await res.json();
  return data.success === true;
}
