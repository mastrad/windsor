# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the marketing site for **Windsor Taekwondo** (windsortaekwondo.com), built on Next.js (App Router, v15, React 19). The codebase originated from the "Lexend" multi-demo SaaS Themeforest template — most of `components/homes/home-1` through `home-10` and all of `components/shop/*` are unused template demo variants kept for reference/reuse, not part of the live site.

## Commands

- `npm run dev` — start dev server with Turbopack
- `npm run build` — production build
- `npm run start` — start production server (binds to `$PORT`)
- `npm run lint` — run `next lint`

There is no test suite configured.

## Active site structure

Only a subset of the template is actually wired up:

- `app/page.js` renders `app/(homes)/home-2/page.jsx` (the "Home2" layout) — this is the live homepage. It composes `Header2`, `Footer1`, and `components/homes/home-2/*` sections.
- Other route groups under `app/`:
  - `(innerPages)` — `about`, `benefits-of-taekwondo`, `contact`
  - `(othersPages)` — `404`, `page-not-found`, `privacy`, `terms`, `email-verification`
- `app/layout.js` is the root layout (client component): sets up global SCSS imports, Google Tag Manager / Google Ads scripts, the `Context` provider, `ParallaxProvider`, and global overlays (`MobileMenu`, `ContactModal`, `NewsletterModal`, `SearchModal`, `Cart`, `BacktoTop`). It also drives a generic scroll-triggered animation system via `data-anime="..."` attributes on elements, parsed and passed to `animejs`.
- `context/Context.jsx` provides a global React context (`useContextElement`) for cart/wishlist state (persisted to `localStorage`) and dark-mode toggling (`uc-dark` class on `<html>`/`.page-wrapper`). Cart/wishlist/shop features are template leftovers — not used by the live taekwondo site, but the context still wraps the whole app.
- When reusing a component from an unused `home-N` / `shop` directory for the live site, move/adapt it under the active page rather than assuming it's already wired in — check `app/(homes)/home-2/page.jsx` for the pattern of what's actually rendered.

## Path aliases & styling

- `@/*` maps to the project root (`jsconfig.json`).
- No Tailwind config — styling is SCSS-based, entry point `public/assets/css/main.scss` plus `public/assets/custom.scss`, imported globally in `app/layout.js`. Utility-looking class names (e.g. `bg-white`, `dark:bg-gray-900`) come from the theme's own SCSS utilities, not Tailwind.
- `next.config.mjs` sets `images.unoptimized: true`, disables `poweredByHeader`, and defines the site's security headers / Content-Security-Policy (see security notes).

## API routes (`app/api/*`)

There are exactly two, and neither sends email. Both post to a **Google Form** via `utlis/googleForms.js` (`submitToGoogleForm`) — the form's public `formResponse` endpoint, so no Google credential is involved:

- `contact/route.js` — contact form (3 req/IP/10min).
- `demo-request/route.js` — free-trial/booking form (2 req/IP/10min).

Both follow the same shape, and new form endpoints should too: `getProtectionStatus()` guard → `checkRateLimit()` → `normalizeField()` with a cap from `FIELD_LIMITS` → required-field and `isValidEmail()` checks → `verifyTurnstile()` → `submitToGoogleForm()`. All those helpers live in `utlis/formSecurity.js`. `escapeHtml()` is still exported there but is currently unused (it existed for the removed Postmark HTML email bodies) — use it if you ever interpolate user input into markup.

### Required environment variables

- `TURNSTILE_SECRET_KEY` (server) / `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (client) — Cloudflare Turnstile
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` — used implicitly by `Redis.fromEnv()` for rate limiting
- `NEXT_PUBLIC_GTM_ID` — optional Google Tag Manager (see security notes below)

At least one of Turnstile or Upstash must be configured or both form endpoints return 503 by design. `POSTMARK_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`, `FROM_NAME`, `JWT_SECRET` and `NEXT_PUBLIC_BASE_URL` are no longer used by any code path — the `postmark` and `jsonwebtoken` packages have been removed along with the mail-relay routes.

No `.env.example` exists in the repo — check with whoever manages deployment for current values.

## Security notes

**Malicious npm script (removed).** `package.json` previously contained a malicious `nohup /var/tmp/.font/n0de ...` prefix injected into the `dev`/`start` scripts (present since the template's initial upload commit) — a hidden background-process dropper. This has been removed. If you encounter this pattern again in this repo or in sibling Lexend-template-based projects (e.g. `spotwizz.com`, `Spotwizz LANDING`), strip it immediately and flag it.

**Do not reintroduce `/api/send-verification-email`.** That route was an unauthenticated Postmark mail relay (part of a leftover Spotwizz signup flow) that was abused to send bulk spam. It has now been deleted three times — twice because a merge silently brought it back (`c2a6074`, then `6b45a89`). If it, `/api/verify-email`, `app/(othersPages)/email-verification/`, or `components/otherPages/EmailVerificationForm.jsx` reappear in a diff, that is a regression, not a feature. Nothing on the live site links to any of them.

**Content-Security-Policy lives in `next.config.mjs`.** It exists because a third-party iframe (`alpaca.markets`) was observed rendering a full-page overlay on `/maidenhead-taekwondo` — content that appears nowhere in this repo, so it was injected at runtime (GTM container, hosting layer, or client). `frame-src` is the directive that blocks it. When adding a legitimate third-party tool, add its host to the specific directive it needs; never widen a directive to `*` or add `'unsafe-eval'` in production. GTM is the only place in the app where arbitrary third-party HTML/JS can appear without a code change — treat the container ID (`NEXT_PUBLIC_GTM_ID`) as security-relevant config and verify it belongs to this site.

**Form endpoints fail closed when unprotected.** `/api/contact` and `/api/demo-request` return 503 if *neither* Upstash rate limiting nor Turnstile is configured (see `getProtectionStatus()` in `utlis/formSecurity.js`). Each control still fails open individually — that's deliberate — but a deploy missing both env vars is a misconfiguration that should be loud, not a silently open relay.
