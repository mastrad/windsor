# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the marketing site for **Windsor Taekwondo** (windsortaekwondo.com), built on Next.js (App Router, v16, React 19). The codebase originated from the "Lexend" multi-demo SaaS Themeforest template — most of `components/homes/home-1` through `home-10` and all of `components/shop/*` are unused template demo variants kept for reference/reuse, not part of the live site.

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
- `next.config.mjs` sets `images.unoptimized: true`.

## API routes (`app/api/*`)

All routes are server-side handlers using **Postmark** for email:

- `contact/route.js` — simple contact form → email to `hello@windsortaekwondo.com`.
- `demo-request/route.js` — free-trial/demo form. Includes: Upstash Redis-based rate limiting (2 req/IP/10min), Cloudflare Turnstile verification, HTML-escaping of all user input before building the email body.
- `send-verification-email/route.js` / `verify-email/route.js` — JWT-based email verification flow (note: these reference `spotwizz.com` branding/URLs — also template leftovers from a sibling project; verify before relying on them for the Windsor site).

When adding new form/contact endpoints, follow the `demo-request` pattern: rate-limit, Turnstile verification, `escapeHtml` on all interpolated values, secrets read from `process.env` with a fail-fast check.

### Required environment variables

- `POSTMARK_API_KEY` — required by all email-sending routes
- `FROM_EMAIL`, `TO_EMAIL`, `FROM_NAME` — optional overrides for sender/recipient
- `JWT_SECRET` — used by the email verification routes
- `TURNSTILE_SECRET_KEY` (server) / `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (client) — Cloudflare Turnstile
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` — used implicitly by `Redis.fromEnv()` for rate limiting
- `NEXT_PUBLIC_GTM_ID` — optional Google Tag Manager
- `NEXT_PUBLIC_BASE_URL` — base URL used in verification email links

No `.env.example` exists in the repo — check with whoever manages deployment for current values.

## Security note

`package.json` previously contained a malicious `nohup /var/tmp/.font/n0de ...` prefix injected into the `dev`/`start` scripts (present since the template's initial upload commit) — a hidden background-process dropper. This has been removed from `dev`. If you encounter this pattern again in this repo or in sibling Lexend-template-based projects (e.g. `spotwizz.com`, `Spotwizz LANDING`), strip it immediately and flag it.
