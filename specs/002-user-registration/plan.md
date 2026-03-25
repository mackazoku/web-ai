# Implementation Plan: User Registration

**Branch**: `002-user-registration` | **Date**: 2026-03-25 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/002-user-registration/spec.md
**Input**: Feature specification from `/specs/002-user-registration/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Add a customer registration flow with email + password (no verification) so users can immediately log in and book. Use existing credential auth, create a customer user record, and provide a public registration screen with validation and clear errors.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: next-intl, NextAuth, Prisma, Zod, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma  
**Testing**: Manual smoke tests + `npm run build` and `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Registration flow completes in under 2 minutes in typical usage  
**Constraints**: No email verification; credentials auth only; customer role only  
**Scale/Scope**: Single app with public + admin route groups

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan follows spec. PASS
- Documentation is source of truth: Plan references spec artifacts. PASS
- Bilingual documentation: Will require `_vn` artifacts for this feature. NEEDS FOLLOW-UP
- Explicit approval gates: Scope/logic/data changes require approval before coding. PASS
- Minimal, pragmatic changes: Scope limited to registration and login enablement. PASS
- Quality & verification: No hardcoded strings; API validation via Zod; record verification in tasks.md and legacy_docs test plan. PASS
- Operations & manual setup: Track manual steps in quickstart.md. PASS

## Project Structure

### Documentation (this feature)

```text
specs/002-user-registration/
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
| Bilingual spec artifacts missing | Spec-kit feature artifacts do not yet have `_vn` versions | Must add `_vn` documents before implementation |
