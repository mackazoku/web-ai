# Implementation Plan: User Login Booking

**Branch**: `001-user-login-booking` | **Date**: 2026-03-25 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/001-user-login-booking/spec.md
**Input**: Feature specification from `/specs/001-user-login-booking/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Require customers to authenticate before starting or submitting a booking, and persist every booking under the authenticated user account. Enforce auth at entry points and booking APIs, and ensure “My Bookings” only shows the current user’s bookings. Use existing customer auth and booking data model while adding/confirming a booking-to-user association.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: next-intl, NextAuth, Prisma, Zod, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma  
**Testing**: Manual smoke tests + `npm run build` and `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Booking flow and My Bookings list load under 2 seconds in typical usage  
**Constraints**: No anonymous bookings; customer auth required for booking endpoints  
**Scale/Scope**: Single app with public + admin route groups

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan follows existing spec. PASS
- Documentation is source of truth: Plan references spec artifacts. PASS
- Bilingual documentation: English and Vietnamese artifacts present. PASS
- Explicit approval gates: Scope/logic/data changes require approval before coding. PASS
- Minimal, pragmatic changes: Scope limited to auth gating + booking-user association. PASS
- Quality & verification: No hardcoded strings; API validation via Zod; record verification in tasks.md and legacy_docs test plan. PASS
- Operations & manual setup: Track any manual steps in quickstart.md. PASS

## Project Structure

### Documentation (this feature)

```text
specs/001-user-login-booking/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── app/
├── components/
├── i18n/
├── messages/
├── modules/
├── providers/
├── stores/
├── styles/
└── types/
```

**Structure Decision**: Single Next.js web application with App Router using public/admin route groups under `src/app/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
