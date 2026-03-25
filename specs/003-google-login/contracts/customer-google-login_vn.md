# Hợp đồng: Đăng nhập Google cho khách hàng

## Phạm vi
Định nghĩa luồng Google sign-in phía khách hàng và kết quả kỳ vọng.

## Điểm vào

### UI Login Public
- Có nút “Đăng nhập bằng Google” trên màn login khách hàng.

## Hành vi kỳ vọng
- Google sign-in thành công sẽ xác thực user và redirect về trang đích.
- Google sign-in lần đầu tạo tài khoản khách hàng và đăng nhập.
- Tài khoản có email trùng sẽ được đăng nhập, không tạo trùng.
- Thiếu email hoặc hủy sign-in sẽ quay lại login với lỗi rõ ràng và cho phép retry.

## Lỗi
- Hiển thị thông báo lỗi thân thiện khi sign-in thất bại hoặc bị hủy.
