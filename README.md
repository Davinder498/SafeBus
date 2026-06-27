# SafeBus Alberta

SafeBus Alberta is a school transportation operations and live bus tracking SaaS platform for Alberta schools, families, drivers, and administrators.

This repository currently contains the Bootstrap foundation only: a minimal pnpm + Turborepo monorepo with one Vite React TypeScript app at `apps/web`.

## Current app

- `apps/web` — minimal web app with landing, login placeholder, admin placeholder, parent placeholder, and driver demo placeholder routes.

## Local development

Use the pinned pnpm version from the root `package.json`.

```bash
corepack enable
corepack prepare pnpm@9.15.4 --activate
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

By default, `pnpm dev` runs the Vite app from `apps/web` through Turborepo.

## Manual QA checklist

Before reporting a UI milestone as ready, open the local web app and verify:

- Routes load without client-side navigation errors:
  - `/`
  - `/login`
  - `/admin`
  - `/parent`
  - `/driver-demo`
- Mobile responsiveness: check a small phone viewport around 320px to 390px wide and confirm the sticky navigation remains usable.
- Desktop responsiveness: check a desktop viewport around 1280px wide and confirm cards, dashboard shells, and navigation spacing look balanced.
- Required messages remain visible:
  - `Real-time school bus visibility for Alberta schools and parents.`
  - `Track the bus, not the child.`
  - `Demo only. Production driver GPS tracking will use the native mobile app.`
- Boundary check: confirm the app remains no-auth and no-backend with no Supabase, GPS tracking, QR scanning, notifications, native mobile app code, shared packages, or production data logic.

## Product boundaries for Bootstrap work

This foundation intentionally does not include shared packages, Supabase, real authentication, GPS, QR scanning, notifications, SMS, payments, native mobile apps, or production data logic.
