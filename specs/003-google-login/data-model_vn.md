# Mô hình dữ liệu: Đăng nhập Google cho khách hàng

## Thực thể

- **User**
  - Tài khoản khách hàng có email và role.
  - Lưu phương thức đăng nhập chính.
  - Theo dõi liên kết định danh Google.

## Quan hệ

- Mỗi user có thể liên kết với một Google identity để đăng nhập.

## Quy tắc kiểm tra

- Google sign-in phải có email mới được tiếp tục.
- Email phải là duy nhất.
- User tạo mới qua Google có role `customer` và status `active`.

## Trạng thái

- Google sign-in lần đầu tạo user active.
- User hiện có có thể liên kết Google sign-in và giữ trạng thái active.
