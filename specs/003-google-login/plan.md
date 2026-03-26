# Implementation Plan: Customer Google Login

**Branch**: `003-google-login` | **Date**: 2026-03-25 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/003-google-login/spec.md
**Input**: Feature specification from `/specs/003-google-login/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Add customer Google sign-in to the public login flow, automatically create customer accounts on first Google sign-in, and return users to their intended destination after successful authentication.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: NextAuth, next-intl, Prisma, Zod, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma  
**Testing**: Manual smoke tests + `npm run build` and `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Customers complete Google sign-in and reach booking in under 2 minutes  
**Constraints**: Requires Google OAuth credentials and approved redirect URLs  
**Scale/Scope**: Single app with public + admin route groups

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan follows spec. PASS
- Documentation is source of truth: Plan references spec artifacts. PASS
- Bilingual documentation: `_vn` artifacts included. PASS
- Explicit approval gates: OAuth changes require approval before implementation. PASS
- Minimal, pragmatic changes: Scope limited to customer Google sign-in. PASS
- Quality & verification: No hardcoded strings; validation for error handling; record verification in tasks + docs/delivery/test_plan.md. PASS
- Operations & manual setup: Google OAuth secrets must be documented. PASS

## Project Structure

### Documentation (this feature)

```text
specs/003-google-login/
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

No violations.
