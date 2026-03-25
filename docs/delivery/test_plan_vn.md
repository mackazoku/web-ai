# Kế hoạch kiểm thử

## Phạm vi
Xác định chiến lược kiểm thử cho các tính năng đã triển khai.

## Theo dõi thực thi
- executor
- executed_at (YYYY-MM-DD HH:mm)
- environment
- result (pass/fail/partial)
- notes

### 2026-03-19 23:58 (local)
- executor: TBD
- environment: local build
- result: pass
- notes: `npm run build` chạy thành công sau khi sửa kiểu locale i18n.

### 2026-03-19 24:05 (local)
- executor: TBD
- environment: local build
- result: pass
- notes: `npm run build` chạy thành công sau khi di chuyển middleware.

### 2026-03-19 24:45 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã cập nhật UI public; chưa chạy test.

### 2026-03-19 25:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã cập nhật UI dashboard admin; chưa chạy test.

### 2026-03-20 09:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã cập nhật redirect admin; chưa chạy test.

### 2026-03-20 09:35 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã cập nhật callback URL login admin; chưa chạy test.

### 2026-03-20 10:00 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã cập nhật vòng lặp redirect login admin; chưa chạy test.

### 2026-03-20 11:20 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã thêm API dashboard và CRUD users DB; chưa chạy test.

### 2026-03-20 12:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã thêm schema Prisma và seed script; chưa chạy test.

### 2026-03-20 12:40 (local)
- executor: TBD
- environment: local + Neon
- result: partial
- notes: Migration thành công; seed thất bại do lỗi kết nối DB.

### 2026-03-20 12:55 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã sửa cảnh báo lint trang admin users; chờ deploy.

### 2026-03-20 13:15 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã thêm script seed user mẫu; chưa chạy.

### 2026-03-20 13:45 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã mở rộng Home + booking flow; chưa chạy test.

### 2026-03-20 14:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã thêm tương tác chọn booking; chưa chạy test.

### 2026-03-20 15:30 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã cập nhật button chọn ngày trong booking; chưa chạy test.

### 2026-03-20 15:50 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã tăng cỡ input thông tin cá nhân; chưa chạy test.

### 2026-03-20 16:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã thêm schema core và script seed; chưa chạy migration/seed.

### 2026-03-20 16:35 (local + Neon)
- executor: TBD
- environment: local + Neon
- result: pass
- notes: Migration core_models đã áp dụng; seed:core chạy thành công.

### 2026-03-20 17:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã thêm đăng xuất admin; chưa chạy test.

### 2026-03-20 18:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Dashboard admin đã đọc DB; chưa chạy build/test.

### 2026-03-25 19:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã sửa tên user admin trong session; chưa chạy build/test.

### 2026-03-25 20:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã thêm gửi booking public; chưa chạy build/test.

### 2026-03-25 20:30 (local)
- executor: TBD
- environment: local build
- result: pass
- notes: `npm run build` chạy thành công sau khi cập nhật booking.

### 2026-03-25 21:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã chuyển asset booking_requests_queue sang public; chưa chạy test.

### 2026-03-25 21:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Đã apply typography my_bookings; chưa chạy test.

### 2026-03-25 22:20 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Cập nhật calendar public và fetch dashboard admin; chưa chạy test.

### 2026-03-25 23:05 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Thêm chọn therapist từ DB và mapping staff-service; chưa chạy test.

### 2026-03-25 23:20 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Thêm hiển thị lỗi booking chi tiết; chưa chạy test.

### 2026-03-25 23:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Sửa tên admin ở header; chưa chạy test.

### 2026-03-25 23:55 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Cập nhật dashboard staff và lọc lịch theo staff; chưa chạy test.

### 2026-03-26 00:15 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Thêm calendar admin day view đặt booking theo giờ; chưa chạy test.

### 2026-03-26 00:30 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Sửa spacing header calendar admin; chưa chạy test.

### 2026-03-26 00:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Mở rộng layout dashboard để calendar không xuống dòng; chưa chạy test.

### 2026-03-26 00:50 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Ép booking hiển thị 1 giờ trên calendar admin; chưa chạy test.

### 2026-03-26 01:05 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Thêm điều hướng ngày trước/sau cho calendar admin; chưa chạy test.

### 2026-03-26 01:15 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Cập nhật header calendar hiển thị theo giờ; chưa chạy test.

### 2026-03-25 23:55 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Thêm luồng đăng ký khách hàng; chưa chạy test.
