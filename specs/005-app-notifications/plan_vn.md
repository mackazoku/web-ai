# Implementation Plan: Thông báo trong ứng dụng

**Branch**: `005-app-notifications` | **Date**: 2026-03-26 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/005-app-notifications/spec.md
**Input**: Feature specification from `/specs/005-app-notifications/spec.md`

**Note**: Template này được tạo bởi `/speckit.plan`.

## Summary

Thêm thông báo trong ứng dụng cho admin và customer bằng polling, model chung và UI dropdown chuông.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: NextAuth, next-intl, Prisma, Zod, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma  
**Testing**: Manual smoke tests + `npm run build` và `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Danh sách tải < 2s cho 100 item; unread cập nhật trong 30s  
**Constraints**: Hỗ trợ admin và customer với model chung  
**Scale/Scope**: Một app, public + admin

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan theo spec. PASS
- Documentation is source of truth: Plan tham chiếu spec. PASS
- Bilingual documentation: Có `_vn`. PASS
- Explicit approval gates: UI + data-model cần approval. PASS
- Minimal, pragmatic changes: Polling, không realtime infra. PASS
- Quality & verification: Không hardcode strings; ghi verification. PASS
- Operations & manual setup: Không cần secret mới. PASS

## Project Structure

### Documentation (feature này)

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

### Source Code (root)

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

**Structure Decision**: Một app Next.js dùng App Router.

## Complexity Tracking

Không có vi phạm.
