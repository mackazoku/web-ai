# Implementation Plan: User Login Booking

**Branch**: `001-user-login-booking` | **Date**: 2026-03-25 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/001-user-login-booking/spec.md
**Input**: Feature specification from `/specs/001-user-login-booking/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Yêu cầu khách hàng phải đăng nhập trước khi bắt đầu hoặc gửi booking, và mọi booking phải gắn với tài khoản đã xác thực. Áp dụng chặn ở điểm vào UI và ở API booking, đồng thời đảm bảo “My Bookings” chỉ hiển thị booking của user hiện tại. Tận dụng auth và data model hiện có, chỉ bổ sung/khẳng định quan hệ booking–user.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: next-intl, NextAuth, Prisma, Zod, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma  
**Testing**: Manual smoke tests + `npm run build` và `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Booking flow và danh sách My Bookings tải dưới 2 giây trong điều kiện bình thường  
**Constraints**: Không cho phép booking ẩn danh; API booking yêu cầu xác thực  
**Scale/Scope**: Một ứng dụng với route group public + admin

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan bám theo spec hiện có. PASS
- Documentation is source of truth: Plan tham chiếu đúng spec. PASS
- Bilingual documentation: Đã có bản song ngữ cho tài liệu feature. PASS
- Explicit approval gates: Thay đổi phạm vi/logic/data cần phê duyệt trước khi coding. PASS
- Minimal, pragmatic changes: Phạm vi gói gọn ở auth gating + liên kết booking-user. PASS
- Quality & verification: Không hardcode string; API validate bằng Zod; ghi kiểm thử trong tasks.md và legacy_docs test plan. PASS
- Operations & manual setup: Theo dõi bước thủ công trong quickstart.md. PASS

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

**Structure Decision**: Ứng dụng Next.js đơn (App Router) với route group public/admin trong `src/app/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
