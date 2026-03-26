# Kế hoạch triển khai: Sidebar dùng chung cho Admin

**Branch**: `007-admin-shared-sidebar` | **Date**: 2026-03-26 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/007-admin-shared-sidebar/spec.md
**Input**: Feature specification from `/specs/007-admin-shared-sidebar/spec.md`

## Summary

Tạo sidebar dùng chung cho tất cả trang admin với active state chính xác và hành vi thu gọn responsive.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: next-intl, NextAuth  
**Storage**: None  
**Testing**: Manual smoke tests + `npm run build` và `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Không layout shift; sidebar render tức thì  
**Constraints**: Giữ nguyên thiết kế admin và auth gating hiện có  
**Scale/Scope**: Chỉ layout admin và component liên quan

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan theo spec. PASS
- Documentation là source of truth: Plan tham chiếu đủ spec artifacts. PASS
- Bilingual documentation: có bản `_vn`. PASS
- Explicit approval gates: UI đã được duyệt. PASS
- Minimal, pragmatic changes: Không thêm deps mới. PASS
- Quality & verification: Không hardcode strings; yêu cầu active state. PASS
- Operations & manual setup: Không cần secrets mới. PASS

## Project Structure

### Documentation (feature này)

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

**Structure Decision**: Tách AdminSidebar dùng chung và render từ admin layout cho mọi route admin.

## Complexity Tracking

No violations.
