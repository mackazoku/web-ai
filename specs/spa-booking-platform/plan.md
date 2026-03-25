# Implementation Plan: SPA Booking Platform

**Branch**: `spa-booking-platform` | **Date**: 2026-03-25 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/spa-booking-platform/spec.md`

## Summary
Deliver a public booking portal and admin/staff dashboard for a multi‑branch spa, with DB-backed services, therapist selection, and schedule visibility.

## Technical Context
**Language/Version**: Next.js 14, React 18, TypeScript  
**Primary Dependencies**: next-intl, Prisma, NextAuth, Tailwind  
**Storage**: PostgreSQL (Neon)  
**Testing**: `npm run build` + manual flows  
**Target Platform**: Web  
**Project Type**: Web application  
**Performance Goals**: Calendar loads < 2s  
**Constraints**: No hardcoded UI strings, i18n required  
**Scale/Scope**: Admin + public flows, multi-branch

## Constitution Check
- Spec-first and bilingual documentation enforced.
- Approval gates required for scope/API/data changes.

## Project Structure

```text
specs/spa-booking-platform/
├── spec.md
├── plan.md
├── tasks.md
├── research.md
├── data-model.md
├── quickstart.md
├── ui.md
└── contracts/
    └── api.md
```

```text
src/
├── app/
├── components/
├── i18n/
├── modules/
└── providers/
```

**Structure Decision**: Single Next.js app with route groups `(public)` and `(admin)`.

## Phases (High-Level)
- **Phase A**: Public booking flow + calendar + therapist selection.
- **Phase B**: Admin dashboard + schedule + staff filtering + calendar usability refresh.
- **Phase C**: User management + seed data.
- **Phase D**: Payments + notifications (post‑MVP).

## Risks
- DB availability affects booking flow.
- Calendar density on smaller screens.
