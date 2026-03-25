# Implementation Plan: SPA Booking Platform

**Nhánh**: `spa-booking-platform` | **Ngày**: 2026-03-25 | **Spec**: [spec.md](./spec.md)  
**Đầu vào**: Đặc tả tính năng từ `/specs/spa-booking-platform/spec.md`

## Tóm tắt
Triển khai public booking portal và admin/staff dashboard cho spa đa chi nhánh, dùng DB cho dịch vụ, chọn therapist và hiển thị lịch.

## Bối cảnh kỹ thuật
**Ngôn ngữ/Phiên bản**: Next.js 14, React 18, TypeScript  
**Phụ thuộc chính**: next-intl, Prisma, NextAuth, Tailwind  
**Lưu trữ**: PostgreSQL (Neon)  
**Kiểm thử**: `npm run build` + manual flows  
**Nền tảng**: Web  
**Loại dự án**: Web application  
**Mục tiêu hiệu năng**: Calendar load < 2s  
**Ràng buộc**: Không hardcoded UI strings, bắt buộc i18n  
**Phạm vi**: Admin + public flows, multi-branch

## Constitution Check
- Spec-first và tài liệu song ngữ bắt buộc.
- Approval gate bắt buộc khi thay đổi scope/API/data.

## Cấu trúc dự án

```text
specs/spa-booking-platform/
├── spec.md
├── plan.md
├── tasks.md
├── research.md
├── data-model.md
├── quickstart.md
├── ui.md
└── contracts/
    └── api.md
```

```text
src/
├── app/
├── components/
├── i18n/
├── modules/
└── providers/
```

**Quyết định cấu trúc**: Một Next.js app với route groups `(public)` và `(admin)`.

## Các phase (High-Level)
- **Phase A**: Public booking flow + calendar + therapist selection.
- **Phase B**: Admin dashboard + schedule + staff filtering + cải thiện usability calendar.
- **Phase C**: User management + seed data.
- **Phase D**: Payments + notifications (post‑MVP).

## Rủi ro
- DB availability ảnh hưởng booking flow.
- Calendar dày trên màn nhỏ.
