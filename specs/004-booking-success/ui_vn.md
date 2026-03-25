# UI Spec: Dialog đặt vé thành công

## Overview
- **Screen**: Dialog success overlay trong luồng booking public.
- **Intent**: Xác nhận booking thành công và hướng người dùng tới trang bookings.
- **Design source**: `docs/design/ui/public/screens/booking_success_dialog` (dùng layout modal, typography và CTA theo asset).
- **Shared UI**: Overlay dialog dùng chung dialog shell để xử lý focus trap và overlay.

## Navigation and Entry Points
- **Entry**: Sau khi `POST /api/bookings` trả về success trong `src/app/[locale]/(public)/booking/booking-client.tsx`.
- **Exit**:
  - CTA chính điều hướng tới `/<locale>/bookings`.
  - Auto-advance redirect tới `/<locale>/bookings` sau một khoảng delay ngắn.
  - CTA phụ đóng dialog (nếu có).
  - CTA fallback điều hướng tới `/<locale>/bookings` khi auto-navigation thất bại.

## States
- **Hidden**: Trạng thái mặc định trước khi booking thành công.
- **Visible (Success)**: Modal overlay với icon thành công, tiêu đề, mô tả, và CTA chính.
- **Auto-advance**: Timer chạy sau khi success (giữ dialog trong lúc chờ).
- **Navigation failure**: Hiện CTA fallback để điều hướng thủ công.

## Forms and Validation Rules
- Không có form mới. Validation giữ nguyên trong booking flow hiện tại.

## Accessibility Notes
- Trap focus trong dialog khi hiển thị.
- Có `aria-modal` và `role="dialog"`.
- CTA có thể focus bằng bàn phím và có trạng thái focus rõ ràng.

## i18n Keys (new/updated)
- `Booking.successDialog.title`
- `Booking.successDialog.description`
- `Booking.successDialog.cta`
- `Booking.successDialog.dismiss`
- `Booking.successDialog.fallbackCta`
- `Booking.successDialog.fallbackHint`
