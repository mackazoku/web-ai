# Data Model: Thông báo trong ứng dụng

## Entities

- **Notification**
  - Đại diện cho thông báo trong ứng dụng gửi tới một user.
  - Thuộc tính chính: user nhận, tiêu đề, nội dung, loại, trạng thái (đã đọc/chưa đọc), createdAt.

## Relationships

- Notification thuộc về User.

## Validation Rules

- Thông báo chỉ hiển thị cho user đã đăng nhập.
- Trạng thái đọc chỉ thay đổi bởi chính user đó.

## State Transitions

- Chưa đọc → Đã đọc khi user đánh dấu.
