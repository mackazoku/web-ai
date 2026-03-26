# Đặc tả UI (Admin Portal)

## 1. Phạm vi
Xác định hành vi UI, quy tắc trạng thái và tương tác cho cổng quản trị SPA.

## 2. Ngôn ngữ thiết kế
- Tone: thư thái, editorial, cao cấp.
- Typography: headline serif, nhãn UI dùng sans.
- Màu sắc: nền trắng ngà ấm, CTA olive, thẻ màu be/xám nhạt.
- Layout: sidebar trái, nhiều khoảng trắng, card bo tròn, shadow nhẹ.

## 3. Quy tắc UI toàn cục
- Không hardcode text; dùng i18n.
- Mọi màn hình async phải hỗ trợ: loading, error, empty, success.
- Tái sử dụng component dùng chung khi có thể.
- Dùng chuẩn validation và thông báo lỗi thống nhất.

## 4. Điều hướng (Admin)
- Dashboard
- Users
- Calendar
- Appointments
- Customers
- Services
- Staff
- Payments
- Reports
- Settings
- Branches
- Đăng xuất

## 5. Đặc tả màn hình

### 5.1 Admin Dashboard
Vị trí: `docs/design/ui/admin/screens/dashboard/`
Ghi chú hành vi:
- Các thẻ dashboard load từ API DB, có trạng thái loading/empty/error.
- Sidebar hiển thị thông tin user theo session đang đăng nhập.
- Pending approvals hiển thị booking public mới tạo.
- Calendar dùng day view (09:00–18:00, slot 30 phút).
- Booking hiển thị theo slot 1 giờ trong calendar.
- Có điều hướng ngày trước/sau.
- Admin thấy toàn bộ booking; staff chỉ thấy lịch của mình.

### 5.2 Admin Users
Vị trí: `docs/design/ui/admin/screens/users/`

### 5.3 Calendar
Vị trí: `docs/design/ui/admin/screens/calendar/`

### 5.4 Appointments
Vị trí: `docs/design/ui/admin/screens/appointments/`

### 5.5 Customers
Vị trí: `docs/design/ui/admin/screens/customers/`

### 5.6 Customer Profile Drawer
Vị trí: `docs/design/ui/admin/screens/appointment_detail_drawer/`

### 5.7 Services
Vị trí: `docs/design/ui/admin/screens/services/`
Ghi chú hành vi:
- Tuân theo quy tắc thị giác và component trong `docs/design/ui/admin/screens/services/DESIGN.md`.
- Ưu tiên phân tầng bằng tone và áp dụng quy tắc "no-line" để phân tách section.

### 5.8 Staff
Vị trí: `docs/design/ui/admin/screens/staff/`

### 5.9 Reports
Vị trí: `docs/design/ui/admin/screens/reports/`

### 5.10 Settings
Vị trí: `docs/design/ui/admin/screens/settings/`
