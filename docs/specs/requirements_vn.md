# Web AI - Đặc tả yêu cầu hệ thống (Đặt lịch & quản lý SPA)

## 1. Mục đích tài liệu
Xác định baseline yêu cầu sản phẩm cho website đặt lịch và quản lý SPA.

## 2. Tổng quan sản phẩm
Nền tảng web phục vụ cả khách hàng (đặt lịch công khai và tài khoản) và nhân sự spa (vận hành, lịch hẹn, báo cáo).

Mục tiêu chính:
- Cho phép khách hàng khám phá dịch vụ và đặt lịch online.
- Cung cấp lịch nhân viên ổn định, tránh trùng lịch.
- Quản lý khách hàng, dịch vụ, lịch làm việc, đa chi nhánh và thanh toán.
- Gửi xác nhận và nhắc lịch để giảm no-show.

## 3. Vai trò người dùng
- `Customer`: xem dịch vụ, đặt lịch, quản lý booking, thanh toán, đánh giá.
- `Owner/Admin`: toàn quyền, cấu hình, quản lý nhân sự, báo cáo.
- `Receptionist`: quản lý booking và khách hàng, hạn chế quyền cài đặt.
- `Therapist/Staff`: xem lịch cá nhân, cập nhật trạng thái và ghi chú.

## 4. Yêu cầu chức năng

### 4.1 Trang công khai & khám phá
- Danh sách dịch vụ (massage, facial, trị liệu).
- Chi tiết dịch vụ (giá, thời lượng, mô tả, hình ảnh).
- Thông tin spa (địa chỉ, giờ mở cửa, gallery).
- Đánh giá / review khách hàng.

### 4.2 Đặt lịch
- Chọn dịch vụ.
- Chọn chi nhánh (MVP).
- Chọn ngày/giờ theo slot còn trống realtime.
- Chọn nhân viên (optional, lọc theo chi nhánh/dịch vụ từ DB).
- Nhập thông tin cá nhân (tên, SĐT, email).
- Tạo booking trạng thái `pending` và hiển thị ở admin.

### 4.3 Tài khoản & quản lý booking
- Đăng ký / đăng nhập.
- Quản lý hồ sơ.
- Xem lịch sắp tới và lịch sử.
- Đổi/hủy lịch theo policy.
- Nhận email xác nhận và nhắc lịch (MVP).

### 4.4 Thanh toán
- Thanh toán online (VNPay, Momo, Stripe) trong MVP.
- Có thể chọn trả tại spa.
- Lịch sử thanh toán và trạng thái hóa đơn.
- Admin xác nhận thanh toán offline.

### 4.5 Quản lý dịch vụ (Admin)
- Thêm/sửa/xóa dịch vụ.
- Thiết lập giá, thời lượng, danh mục.
- Upload hình ảnh dịch vụ.

### 4.6 Quản lý nhân viên (Admin)
- Thêm nhân viên.
- Thiết lập giờ làm, ca, ngày nghỉ.
- Gán dịch vụ cho nhân viên.
- Gán nhân viên vào chi nhánh.

### 4.6.1 Quản lý người dùng (Admin)
- Tạo/cập nhật/khóa tài khoản nhân viên.
- Gán role (admin/receptionist/staff).
- Quản lý trường hồ sơ: tên, email, phone, chi nhánh, ghi chú, trạng thái.

### 4.7 Quản lý lịch hẹn (Admin/Receptionist)
- Xem tất cả booking (calendar view).
- Approve/reject booking.
- Check-in/hoàn thành dịch vụ.
- Auto conflict check tránh trùng lịch.

### 4.8 Báo cáo (Admin)
- Doanh thu theo ngày/tháng.
- Dịch vụ phổ biến.
- Tỷ lệ hủy lịch.

### 4.9 Tính năng hệ thống
- Chia slot (30p, 60p).
- Block giờ nghỉ / giờ kín.
- Timezone theo chi nhánh.
- Notification email (xác nhận + nhắc lịch) trong MVP.
- Chống spam booking công khai.

## 5. Yêu cầu phi chức năng
- Hiệu năng: tải lịch tuần dưới 2 giây.
- Bảo mật: auth + RBAC, bảo vệ dữ liệu cá nhân, audit trail.
- Sẵn sàng: mục tiêu uptime 99.5%/tháng.
- UX: responsive, mobile-friendly, hỗ trợ bàn phím.

## 6. Phạm vi MVP (Đã duyệt)
- Danh mục dịch vụ và chi tiết dịch vụ.
- Luồng đặt lịch với slot realtime và chọn chi nhánh.
- Calendar view cho staff kèm conflict checks.
- Thanh toán online (VNPay, Momo, Stripe).
- Email xác nhận và nhắc lịch.
- Hỗ trợ đa chi nhánh.
- Quản lý user admin (CRUD + gán role).

## 7. Ngoài phạm vi (Sau MVP)
- SMS nhắc lịch.
- Voucher / mã giảm giá.
- Loyalty / tích điểm.
- Chatbot tư vấn.
- Gợi ý dịch vụ.
- PWA / mobile app.
