# Kế hoạch triển khai: Màn hình Services (Admin)

**Branch**: `006-admin-services` | **Date**: 2026-03-26 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/006-admin-services/spec.md
**Input**: Feature specification from `/specs/006-admin-services/spec.md`

## Summary

Triển khai màn hình Services (Admin) theo đúng design đã duyệt, gồm thẻ dịch vụ, status pill, khối insight và các hành động chính.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: next-intl, Prisma, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma (dữ liệu services hiện có)  
**Testing**: Manual smoke tests + `npm run build` và `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Trang services render < 2s với tối đa 50 dịch vụ  
**Constraints**: Bám sát `docs/design/ui/admin/screens/services/` và hệ UI admin  
**Scale/Scope**: Một màn hình admin và component liên quan

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan theo spec. PASS
- Documentation là source of truth: Plan tham chiếu đủ spec artifacts. PASS
- Bilingual documentation: có bản `_vn`. PASS
- Explicit approval gates: UI đã được duyệt. PASS
- Minimal, pragmatic changes: Không thêm deps mới. PASS
- Quality & verification: Có i18n và state. PASS
- Operations & manual setup: Không cần secrets mới. PASS

## Project Structure

### Documentation (feature này)

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

**Structure Decision**: Xây màn hình services dưới admin route group, tái sử dụng layout admin hiện có.

## Complexity Tracking

No violations.
