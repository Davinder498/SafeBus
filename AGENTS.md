# SafeBus Alberta Agent Instructions

## Scope
These instructions apply to the entire repository.

## Product boundaries
SafeBus Alberta is a school transportation operations and bus visibility platform. Keep this repository focused on active bus trips, parent bus status, driver trip workflow, student pickup/drop-off accountability, and admin exception monitoring.

Do not add grade management, report cards, classroom tooling, PowerSchool or SchoolEngage integrations, PASI integrations, payment processing, SMS, real GPS, real QR scanning, real notifications, real Supabase logic, or a native driver app in Milestone 1.

## Engineering standards
- Preserve tenant-aware data structures and service boundaries.
- Use strict TypeScript and reusable domain types.
- Keep UI language privacy-first: track buses and route events, not public student data.
- Prefer small components and mock data files over large unstructured pages.
- Avoid `any`, unsafe casts, and suppressed TypeScript errors.

## Validation
Run these before committing when dependencies are available:

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
```
