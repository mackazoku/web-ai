# Đặc tả UI: Đăng nhập Google cho khách hàng

## Phạm vi
Cập nhật màn đăng nhập public để hỗ trợ Google sign-in, vẫn giữ đăng nhập email/mật khẩu.

## Màn hình

### Login (Public)
Vị trí: `src/app/[locale]/(public)/login/page.tsx`

## Layout & Thành phần
- Header với title/subtitle theo style hiện tại.
- Nút chính “Đăng nhập bằng Google”.
- Divider giữa Google và form email/mật khẩu.
- Form email/mật khẩu hiện có với nút submit.
- Khu vực hiển thị lỗi OAuth hoặc lỗi credentials.

## Trạng thái
- Default: Hiển thị nút Google, form email/mật khẩu khả dụng.
- Loading: Nút Google hiển thị trạng thái loading khi chuyển tới provider.
- Error: OAuth lỗi hoặc hủy hiển thị thông báo rõ ràng.
- Success: Redirect về trang đích theo callbackUrl.

## Hành vi
- Bấm nút Google sẽ bắt đầu OAuth sign-in kèm callbackUrl.
- Thành công sẽ quay lại trang đích (ví dụ trang booking).
- Nếu OAuth lỗi hoặc bị hủy, hiển thị lỗi thân thiện kèm hướng dẫn retry.
- Đăng nhập email/mật khẩu giữ nguyên.
