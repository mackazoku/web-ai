# Research: User Login Booking

## Decision 1: Enforce login before booking
- **Decision**: Yêu cầu session khách hàng đã xác thực ở điểm vào booking và API booking.
- **Rationale**: Phù hợp với yêu cầu chặn booking ẩn danh và đảm bảo mọi booking gắn với user.
- **Alternatives considered**: Cho phép guest booking và liên kết sau (loại bỏ: vẫn tạo booking ẩn danh và dữ liệu kém tin cậy).

## Decision 2: Associate booking to customer account
- **Decision**: Lưu tham chiếu user/customer trên mỗi booking (ví dụ customerId/userId).
- **Rationale**: Cho phép “My Bookings” lọc đúng theo user và hỗ trợ kiểm soát trách nhiệm.
- **Alternatives considered**: Chỉ lưu email/phone (loại bỏ: không đảm bảo quyền sở hữu, dễ sai khi thay đổi thông tin).

## Decision 3: Use existing auth and booking endpoints
- **Decision**: Tái sử dụng auth và booking APIs hiện có, chỉ bổ sung auth gating và kiểm tra ownership.
- **Rationale**: Giảm phạm vi thay đổi, tận dụng thiết kế hiện có.
- **Alternatives considered**: Tạo luồng booking/auth mới (loại bỏ: tăng độ phức tạp không cần thiết).
