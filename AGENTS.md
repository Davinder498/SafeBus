# Repository Instructions

This repository is for building SafeBus Alberta, a school transportation operations and live bus tracking SaaS platform.

## Agent Permissions

The coding agent is allowed to:

- create files and folders
- install dependencies
- modify source code
- run lint, typecheck, tests, and builds
- commit changes to Git

Do not operate in read-only QA mode unless the user explicitly asks for review-only work.

## Required Project Documents

Before making code changes, read and follow:

- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/UI_UX_PLAN.md`

## Product Scope

SafeBus Alberta is focused on:

- school bus transportation operations
- live bus visibility
- parent bus status
- driver trip workflow
- student pickup/drop-off accountability
- admin exception monitoring

Do not build:

- grade management
- report cards
- teacher classroom tools
- PowerSchool replacement
- SchoolEngage replacement
- PowerSchool API integration in MVP
- SchoolEngage API integration in MVP
- Alberta Education/PASI integration in MVP
- payment processing in MVP
- SMS in MVP

## Scale and Security Requirement

This MVP is part of a long-term SaaS platform intended to eventually support approximately:

- 1,000 schools
- 100,000 buses
- 1,000,000 users

Build milestone features simply, but do not use toy architecture.

Preserve:

- multi-tenant architecture
- tenant-aware data models
- role-based access
- strict TypeScript
- clean service boundaries
- reusable domain types
- privacy-first UI language
- scalable folder structure

Avoid:

- unscoped realtime subscriptions
- public student data
- insecure GPS assumptions
- direct insecure GPS writes
- hardcoded global assumptions
- overbuilding beyond the requested milestone

## Development Rules

- Build one milestone at a time.
- Do not add features outside the requested milestone.
- Use strict TypeScript.
- Avoid `any`.
- Avoid unsafe casts.
- Keep components small and readable.
- Prefer reusable shared types.
- Run lint, typecheck, and build before reporting completion.
- Commit after each completed milestone.

## Current Build Strategy

Milestone 1 should create only:

- monorepo setup
- web UI foundation
- mock/demo data
- public landing page
- admin dashboard shell
- parent dashboard shell
- driver demo shell
- shared packages

Milestone 1 must not implement:

- real Supabase auth
- real database
- real GPS
- real QR scanning
- real notifications
- native driver mobile app