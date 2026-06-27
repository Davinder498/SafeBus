# SafeBus Alberta

SafeBus Alberta is a school transportation operations and live bus tracking SaaS platform for Alberta schools, families, drivers, and administrators.

This repository currently contains the Bootstrap 0 foundation only: a minimal pnpm + Turborepo monorepo with one Vite React TypeScript app at `apps/web`.

## Current app

- `apps/web` — minimal web app with landing, login placeholder, admin placeholder, parent placeholder, and driver demo placeholder routes.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

## Product boundaries for Bootstrap 0

This foundation intentionally does not include shared packages, Supabase, real authentication, GPS, QR scanning, notifications, SMS, payments, native mobile apps, or production data logic.
