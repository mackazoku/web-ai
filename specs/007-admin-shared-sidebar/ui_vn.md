# UI Spec: Sidebar dùng chung cho Admin

## Overview
- **Screens**: Tất cả trang admin.
- **Intent**: Sidebar nhất quán, có active state rõ ràng.
 - **Approved Additions**: Sidebar thu gọn ở màn hình nhỏ và thanh active rail.

## Navigation and entry points
- Sidebar hiển thị trên mọi route admin.
- Active nav phản ánh route hiện tại.
 - Sidebar có thể thu gọn thành icon rail ở kích thước tablet trở xuống.

## States
- **Loading**: Không áp dụng (sidebar tĩnh).
- **Empty**: Không áp dụng.
- **Error**: Không áp dụng.

## Forms and validation rules
- Không có.

## Accessibility notes
- Link trong sidebar có thể focus bằng bàn phím.
- Active item có tương phản rõ ràng.
 - Nút thu gọn có aria-label và hỗ trợ bàn phím.

## i18n keys (new/updated)
- `Admin.sidebar.toggle`
