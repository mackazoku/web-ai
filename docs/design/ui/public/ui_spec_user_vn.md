# Đặc tả UI (Public)

## 1. Phạm vi
Xác định hành vi UI, quy tắc trạng thái và tương tác cho màn hình public và phía khách hàng.

## 2. Ngôn ngữ thiết kế
- Tone: thư thái, editorial, cao cấp.
- Typography: headline serif, nhãn UI dùng sans.
- Màu sắc: nền trắng ngà ấm, CTA olive, thẻ be/xám nhạt.
- Layout: top navigation, section editorial, grid thoáng.

## 3. Quy tắc UI toàn cục
- Không hardcode text; dùng i18n.
- Mọi màn hình async phải hỗ trợ: loading, error, empty, success.
- Tái sử dụng component dùng chung khi có thể.
- Dùng chuẩn validation và thông báo lỗi thống nhất.

## 4. Điều hướng (Public)
- Home / Services
- Service Detail
- Spa Info
- Reviews
- Book Now
- Login / Register
- My Bookings
- Profile
- Payments

## 5. Đặc tả màn hình

### 5.1 Public Home / Services
Vị trí: `docs/design/ui/public/screens/public_booking_portal/`

### 5.2 Booking Flow - Full Journey
Vị trí: `docs/design/ui/public/screens/booking_flow/`

Ghi chú hành vi:
- Có thể chọn dịch vụ, chi nhánh, ngày, giờ với trạng thái active rõ ràng.
- Calendar hiển thị lưới tháng thật và có nút chuyển tháng trước/sau.
- Không cho chọn ngày trong quá khứ; chọn ngày sẽ cập nhật phần tóm tắt và payload booking.
- Danh sách therapist lấy từ DB, lọc theo chi nhánh và dịch vụ đã chọn.
- Chọn therapist là optional nhưng sẽ cập nhật phần tóm tắt và payload booking.
- Booking summary phản ánh lựa chọn dịch vụ, chi nhánh, ngày, giờ.
- Trường nhập thông tin cá nhân dùng cỡ chữ và khoảng cách lớn hơn để dễ đọc.
- Danh sách dịch vụ và chi nhánh load từ API, có trạng thái loading/empty.
- Gửi booking sẽ lưu DB và hiển thị trạng thái thành công.

### 5.3 My Bookings
Vị trí: `docs/design/ui/public/screens/my_bookings/`
