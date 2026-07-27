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

/** Trim a value. Returns "" for anything that isn't a string. */
export function normalizeField(value) {
  return typeof value === "string" ? value.trim() : "";
}

/** Maximum accepted length per field. */
export const FIELD_LIMITS = {
  name: 200,
  email: 320, // RFC 5321 maximum
  phone: 40,
  dateOfBirth: 20,
  subject: 200,
  message: 5000,
};

/**
 * Returns the name of the first field that exceeds its cap in FIELD_LIMITS,
 * or null if they all fit. Over-length input is rejected rather than truncated
 * so the sender knows their message wasn't delivered in full.
 */
export function findOversizedField(fields) {
  for (const [key, value] of Object.entries(fields)) {
    const limit = FIELD_LIMITS[key];
    if (limit && typeof value === "string" && value.length > limit) {
      return key;
    }
  }
  return null;
}

const warned = new Set();

/** Log a configuration warning once per process, so logs don't flood. */
function warnOnce(key, message) {
  if (warned.has(key)) return;
  warned.add(key);
  console.error(message);
}

/**
 * Reports which abuse controls are actually switched on for this deployment.
 *
 * Both controls below fail open by design, so a deploy that is missing its env
 * vars would otherwise accept unlimited unverified submissions with nothing in
 * the logs to say so. Routes use this to refuse traffic when *neither* control
 * is active — a form that is loudly broken is better than an open relay.
 */
export function getProtectionStatus() {
  const rateLimit = Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  );
  const turnstile = Boolean(process.env.TURNSTILE_SECRET_KEY);

  if (!rateLimit) {
    warnOnce(
      "ratelimit",
      "[formSecurity] Rate limiting is DISABLED: UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set."
    );
  }
  if (!turnstile) {
    warnOnce(
      "turnstile",
      "[formSecurity] Turnstile verification is DISABLED: TURNSTILE_SECRET_KEY is not set."
    );
  }

  return { rateLimit, turnstile, any: rateLimit || turnstile };
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
    if (!result) {
      console.error(
        `[formSecurity] Rate limit check for "${prefix}" timed out after ${timeoutMs}ms - allowing request.`
      );
      return true;
    }
    return result.success;
  } catch (err) {
    console.error(
      `[formSecurity] Rate limit check for "${prefix}" failed - allowing request:`,
      err?.message || err
    );
    return true;
  }
}

/**
 * Verifies a Cloudflare Turnstile token server-side.
 * If TURNSTILE_SECRET_KEY isn't configured, verification is skipped (returns true)
 * so forms keep working before Turnstile is set up.
 */
export async function verifyTurnstile(token, remoteip) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    warnOnce(
      "turnstile",
      "[formSecurity] Turnstile verification is DISABLED: TURNSTILE_SECRET_KEY is not set."
    );
    return true;
  }
  if (!token) return false;

  try {
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
  } catch (err) {
    // Unlike rate limiting, this fails CLOSED: a token we couldn't verify is
    // not a token we should trust.
    console.error(
      "[formSecurity] Turnstile verification request failed - rejecting:",
      err?.message || err
    );
    return false;
  }
}
