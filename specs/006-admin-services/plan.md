# Implementation Plan: Admin Services Screen

**Branch**: `006-admin-services` | **Date**: 2026-03-26 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/006-admin-services/spec.md
**Input**: Feature specification from `/specs/006-admin-services/spec.md`

## Summary

Implement the Admin Services screen to match the approved editorial design, including service list cards, status pills, summary insights, and action entry points.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: next-intl, Prisma, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma (existing services data)  
**Testing**: Manual smoke tests + `npm run build` and `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Services page renders < 2s for up to 50 services  
**Constraints**: Must mirror `docs/design/ui/admin/screens/services/` and follow admin UI system  
**Scale/Scope**: Single admin screen and supporting components

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan follows spec. PASS
- Documentation is source of truth: Plan references spec artifacts. PASS
- Bilingual documentation: `_vn` artifacts included. PASS
- Explicit approval gates: UI changes approved. PASS
- Minimal, pragmatic changes: No new deps. PASS
- Quality & verification: i18n + states required. PASS
- Operations & manual setup: No new secrets required. PASS

## Project Structure

### Documentation (this feature)

```text
specs/006-admin-services/
+-- plan.md
+-- spec.md
+-- ui.md
+-- checklists/
+-- brainstorming.md
+-- design_suggestions.md
```

### Source Code (repository root)

```text
src/
+-- app/
+-- components/
+-- i18n/
+-- messages/
+-- modules/
+-- providers/
+-- stores/
+-- styles/
+-- types/
```

**Structure Decision**: Build the admin services page under the admin route group, reusing shared admin layout and styles.

## Complexity Tracking

No violations.
