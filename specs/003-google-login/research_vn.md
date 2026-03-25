# Nghiên cứu: Đăng nhập Google cho khách hàng

## Quyết định 1: Dùng Google OAuth qua hệ thống auth hiện có
- **Decision**: Thêm Google sign-in qua hệ thống xác thực hiện có để khách hàng đăng nhập không cần mật khẩu.
- **Rationale**: Đồng bộ với luồng hiện tại và giảm ma sát.
- **Alternatives considered**: Tự triển khai OAuth (loại bỏ: rủi ro và bảo trì cao).

## Quyết định 2: Liên kết tài khoản theo email
- **Decision**: Match Google account với tài khoản khách hàng theo email và đăng nhập.
- **Rationale**: Tránh tạo tài khoản trùng và hỗ trợ khách hàng hiện có.
- **Alternatives considered**: Luôn tạo tài khoản mới (loại bỏ: trùng lặp và gây nhầm lẫn).

## Quyết định 3: Xử lý thiếu email hoặc hủy sign-in
- **Decision**: Nếu Google không trả email hoặc người dùng hủy, quay lại login với lỗi rõ ràng và cho phép retry hoặc email/password.
- **Rationale**: Có đường phục hồi rõ ràng và tránh tạo tài khoản không đầy đủ.
- **Alternatives considered**: Tạo tài khoản không có email (loại bỏ: không đủ điều kiện để đặt lịch).

## Quyết định 4: Giữ trang đích
- **Decision**: Sau khi sign-in thành công, redirect về trang đích ban đầu (ví dụ booking).
- **Rationale**: Phù hợp kỳ vọng và tăng trải nghiệm.
- **Alternatives considered**: Luôn về trang cố định (loại bỏ: phá vỡ luồng).
