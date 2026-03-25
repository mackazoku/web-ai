# Đặc Tả Tính Năng: Nền Tảng Đặt Lịch & Quản Lý SPA

**Nhánh tính năng**: `spa-booking-platform`  
**Ngày tạo**: 2026-03-25  
**Trạng thái**: Approved  
**Đầu vào**: Mô tả người dùng: "SPA booking + admin management với multi-branch, payments, email notifications, staff scheduling."

## Tình huống người dùng & Kiểm thử *(bắt buộc)*

### User Story 1 - Luồng đặt lịch public (Ưu tiên: P1)
Khách hàng có thể chọn dịch vụ, chi nhánh, ngày/giờ, therapist (tùy chọn) và gửi booking.

**Lý do ưu tiên**: Luồng doanh thu cốt lõi và entry của MVP.  
**Test độc lập**: Tạo booking từ public page và thấy trên admin dashboard.

**Kịch bản chấp nhận**:
1. **Given** trang booking public, **When** khách gửi thông tin hợp lệ, **Then** tạo booking trạng thái `pending`.
2. **Given** có booking, **When** admin mở dashboard, **Then** booking xuất hiện ở pending approvals.

---

### User Story 2 - Dashboard admin/staff (Ưu tiên: P1)
Admin thấy toàn bộ booking; staff chỉ thấy booking của mình trên lịch ngày.

**Lý do ưu tiên**: Cần quan sát vận hành để cung cấp dịch vụ.  
**Test độc lập**: Đăng nhập staff/admin và kiểm tra lịch trong ngày.

**Kịch bản chấp nhận**:
1. **Given** admin login, **When** dashboard load, **Then** thấy tất cả booking.
2. **Given** staff login, **When** dashboard load, **Then** chỉ thấy booking của staff đó.

---

### User Story 3 - Quản lý người dùng (Ưu tiên: P2)
Admin có thể tạo/sửa/khóa tài khoản staff và gán role.

**Lý do ưu tiên**: Cần để quản lý access và phân therapist.  
**Test độc lập**: Tạo user staff và đăng nhập.

**Kịch bản chấp nhận**:
1. **Given** admin users page, **When** admin tạo staff, **Then** user đăng nhập được.

---

### User Story 4 - Payments + notifications (Ưu tiên: P3)
Hệ thống hỗ trợ thanh toán online và email xác nhận/nhắc lịch.

**Lý do ưu tiên**: Monetization và giảm no‑show.  
**Test độc lập**: Trigger payment intent và gửi email xác nhận (sandbox).

**Kịch bản chấp nhận**:
1. **Given** có booking, **When** payment thành công, **Then** booking chuyển trạng thái confirmed.

---

### Edge Cases
- Trùng lịch cùng staff/khung giờ.
- Staff-service mismatch khi đặt lịch.
- Chọn ngày trong quá khứ.
- Thiếu dữ liệu branch/service.

## Yêu cầu *(bắt buộc)*

### Yêu cầu chức năng

- **FR-001**: Hệ thống phải cho khách chọn service, branch, ngày/giờ và therapist (tùy chọn).
- **FR-002**: Hệ thống phải tạo booking trạng thái `pending` và hiển thị ở admin dashboard.
- **FR-003**: Admin phải quản lý user và role (admin/receptionist/staff).
- **FR-004**: Staff chỉ thấy lịch của mình; admin thấy toàn bộ.
- **FR-005**: Hệ thống hỗ trợ multi‑branch tách dữ liệu.
- **FR-006**: Hệ thống hỗ trợ thanh toán online (tích hợp provider).
- **FR-007**: Hệ thống gửi email xác nhận và nhắc lịch (MVP).
- **FR-008**: Calendar admin phải dễ quan sát với header giờ rõ ràng, legend trạng thái, booking block dễ đọc.

### Thực thể chính
- **User**: tài khoản staff/admin với role và status.
- **Branch**: chi nhánh spa.
- **Service**: dịch vụ (thời lượng/giá).
- **StaffService**: mapping therapist ↔ service.
- **Booking**: lịch hẹn.
- **BookingService**: mapping dịch vụ theo booking.
- **Payment**: giao dịch thanh toán.
- **Notification**: email nhắc lịch.

## Tiêu chí thành công *(bắt buộc)*

### Kết quả đo được
- **SC-001**: Khách hoàn tất booking trong dưới 2 phút.
- **SC-002**: Admin dashboard hiển thị booking mới trong 5 giây.
- **SC-003**: Staff dashboard chỉ hiển thị booking của staff đó cho ngày chọn.
- **SC-004**: Ít nhất 90% booking hợp lệ submit thành công.

## Giả định
- Payment và email provider có sẵn ở môi trường sandbox.
- Staff-service mapping được admin quản lý.

## Phụ thuộc
- PostgreSQL (Neon)
- Prisma ORM
- NextAuth (credentials)
- Email provider (TBD)
- Payment providers (VNPay/Momo/Stripe)
