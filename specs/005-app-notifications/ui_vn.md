# UI Spec: Thông báo trong ứng dụng

## Overview
- **Screens**: Header admin dashboard, header public cho customer.
- **Intent**: Hiển thị badge unread và danh sách thông báo gần đây.

## Navigation and Entry Points
- Vào từ icon chuông ở header.
- Click mở dropdown/panel.

## States
- **Empty**: hiển thị “chưa có thông báo”.
- **Unread**: có badge đếm.
- **Loading**: skeleton/spinner khi polling.
- **Error**: thông báo lỗi + nút retry.

## Forms and Validation Rules
- Không có form; chỉ mark-as-read.

## Accessibility Notes
- Icon chuông focus bằng bàn phím.
- Dropdown đóng bằng Escape.

## i18n Keys (new/updated)
- `Notifications.title`
- `Notifications.empty`
- `Notifications.error`
- `Notifications.retry`
- `Notifications.markRead`
