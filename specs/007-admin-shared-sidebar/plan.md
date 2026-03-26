# Implementation Plan: Admin Shared Sidebar

**Branch**: `007-admin-shared-sidebar` | **Date**: 2026-03-26 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/007-admin-shared-sidebar/spec.md
**Input**: Feature specification from `/specs/007-admin-shared-sidebar/spec.md`

## Summary

Introduce a shared admin sidebar across all admin pages with correct active-state highlighting and responsive collapse behavior.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: next-intl, NextAuth  
**Storage**: None  
**Testing**: Manual smoke tests + `npm run build` and `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: No layout shift; sidebar renders instantly  
**Constraints**: Preserve admin design system and existing auth gating  
**Scale/Scope**: Admin layout and related components only

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan follows spec. PASS
- Documentation is source of truth: Plan references spec artifacts. PASS
- Bilingual documentation: `_vn` artifacts included. PASS
- Explicit approval gates: UI changes approved. PASS
- Minimal, pragmatic changes: No new deps. PASS
- Quality & verification: No hardcoded strings; active states required. PASS
- Operations & manual setup: No new secrets required. PASS

## Project Structure

### Documentation (this feature)

```text
specs/007-admin-shared-sidebar/
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

**Structure Decision**: Extract a shared AdminSidebar component and render it from the admin layout for all admin routes.

## Complexity Tracking

No violations.
