# Implementation Plan: In-App Notifications

**Branch**: `005-app-notifications` | **Date**: 2026-03-26 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/005-app-notifications/spec.md
**Input**: Feature specification from `/specs/005-app-notifications/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Add in-app notifications for admin and customer using polling, a shared notification model, and UI bell dropdowns.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: NextAuth, next-intl, Prisma, Zod, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma  
**Testing**: Manual smoke tests + `npm run build` and `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Notification list loads < 2s for 100 items; unread count updates within 30s  
**Constraints**: Must support both admin and customer roles with a unified model  
**Scale/Scope**: Single app with public + admin route groups

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan follows spec. PASS
- Documentation is source of truth: Plan references spec artifacts. PASS
- Bilingual documentation: `_vn` artifacts included. PASS
- Explicit approval gates: UI + data-model changes require approval. PASS
- Minimal, pragmatic changes: Polling, no realtime infra. PASS
- Quality & verification: No hardcoded strings; record verification in tasks + legacy test plan. PASS
- Operations & manual setup: No new secrets required. PASS

## Project Structure

### Documentation (this feature)

```text
specs/005-app-notifications/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── ui.md
├── contracts/
└── tasks.md
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

**Structure Decision**: Single Next.js app with App Router using public/admin route groups.

## Complexity Tracking

No violations.
