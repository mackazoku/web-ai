# Kế hoạch triển khai: Đăng nhập Google cho khách hàng

**Branch**: `003-google-login` | **Date**: 2026-03-25 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/003-google-login/spec.md
**Input**: Feature specification from `/specs/003-google-login/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Thêm Google sign-in cho khách hàng ở màn login public, tự tạo tài khoản khách hàng lần đầu và trả về trang đích sau khi đăng nhập.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: NextAuth, next-intl, Prisma, Zod, React Query, Zustand  
**Storage**: PostgreSQL (Neon) via Prisma  
**Testing**: Manual smoke tests + `npm run build` và `npm run lint`  
**Target Platform**: Web (Vercel)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: Khách hàng hoàn tất Google sign-in và đến trang booking trong dưới 2 phút  
**Constraints**: Cần Google OAuth credentials và redirect URLs hợp lệ  
**Scale/Scope**: Ứng dụng đơn với route group public + admin

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan bám spec. PASS
- Documentation is source of truth: Plan tham chiếu spec. PASS
- Bilingual documentation: Đã có `_vn` cho feature. PASS
- Explicit approval gates: Thay đổi OAuth cần approval trước khi implement. PASS
- Minimal, pragmatic changes: Phạm vi gọn cho Google sign-in. PASS
- Quality & verification: Không hardcode strings; ghi nhận verification trong tasks + docs/delivery/test_plan.md. PASS
- Operations & manual setup: Cần ghi nhận secrets Google OAuth. PASS

## Project Structure

### Documentation (this feature)

```text
specs/003-google-login/
├── plan.md              # File này (/speckit.plan)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks)
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

**Structure Decision**: Ứng dụng Next.js App Router với route group public/admin dưới `src/app/`.

## Complexity Tracking

Không có vi phạm.
