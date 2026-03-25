# Data Model: User Login Booking

## Entities

- **User**
  - Đại diện cho danh tính đã xác thực (khách hoặc nhân viên).
- **CustomerAccount**
  - Đại diện cho hồ sơ khách hàng gắn với User.
- **Booking**
  - Đại diện cho đặt chỗ do khách hàng tạo.

## Relationships

- **User 1-1 CustomerAccount**: CustomerAccount gắn với User.
- **CustomerAccount 1-N Booking**: Mỗi booking phải thuộc đúng một CustomerAccount.

## Validation Rules

- Tạo booking yêu cầu session khách hàng đã xác thực.
- Booking mới phải lưu tham chiếu customer (customerId/userId); dữ liệu cũ có thể vẫn null.

## State Transitions

- Trạng thái booking giữ nguyên vòng đời hiện có (`pending` → `confirmed`/`cancelled`).
