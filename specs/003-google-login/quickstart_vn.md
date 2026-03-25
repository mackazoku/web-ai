# Quickstart: Đăng nhập Google cho khách hàng

## Thiết lập thủ công

- Tạo Google OAuth credentials (client ID và client secret).
- Cấu hình authorized redirect URLs theo môi trường.
- Thêm credentials vào biến môi trường (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`).

## Xác minh

- Bấm “Đăng nhập bằng Google” và hoàn tất luồng.
- Xác nhận tài khoản Google mới tạo user khách hàng và truy cập booking.
- Xác nhận email khách hàng hiện có đăng nhập được bằng Google.
- Hủy Google sign-in và xác nhận có thông báo lỗi rõ ràng.
- Xác nhận trang login hiển thị hướng dẫn fallback sau lỗi OAuth.
