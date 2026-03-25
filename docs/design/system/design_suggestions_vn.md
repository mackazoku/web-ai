# Đề xuất thiết kế

## Mục đích
Theo dõi đề xuất kiến trúc/thiết kế với quy trình phê duyệt.

## Đề xuất
- ID: DS-001
  - Title: Pipeline nhắc lịch theo sự kiện
  - Description: Thêm job queue để lập lịch nhắc và chuyển trạng thái lịch hẹn.
  - Scope impact: Background jobs, tích hợp provider, chính sách retry.
  - Related screens/features: Appointments, Settings
  - Trade-offs: Độ tin cậy vs. tăng độ phức tạp vận hành.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: DS-002
  - Title: Màn hình audit log
  - Description: Trang Admin xem lịch sử thay đổi lịch hẹn.
  - Scope impact: UI mới và API truy vấn.
  - Related screens/features: Settings, Appointment detail
  - Trade-offs: Minh bạch vs. thêm bề mặt UI.
  - Estimated complexity: Low
  - Status: approved
  - Owner decision: approved
- ID: DS-003
  - Title: Cache tối ưu khả dụng
  - Description: Cache cửa sổ khả dụng của nhân viên theo ngày để tăng tốc lịch.
  - Scope impact: Invalidate cache và trigger làm mới.
  - Related screens/features: Calendar
  - Trade-offs: UX nhanh hơn vs. phức tạp cache.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: DS-004
  - Title: Schema booking cốt lõi + seed dữ liệu
  - Description: Thêm model Service/Booking và script seed để demo dữ liệu thật.
  - Scope impact: Prisma schema, migration, script seed.
  - Related screens/features: Booking flow, dashboard admin
  - Trade-offs: Demo nhanh hơn vs. tăng độ phức tạp schema.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: DS-005
  - Title: API public dữ liệu + KPI dashboard
  - Description: Implement API cho branch/service và tính KPI dashboard từ DB.
  - Scope impact: API route handlers, caching, xử lý lỗi.
  - Related screens/features: Booking public, dashboard admin
  - Trade-offs: Dữ liệu thật vs. tăng tải server.
  - Estimated complexity: Medium
  - Status: proposed
  - Owner decision: pending
- ID: DS-006
  - Title: Mapping staff-service cho chọn therapist
  - Description: Thêm bảng nối để booking public lọc therapist theo chi nhánh và dịch vụ.
  - Scope impact: Cập nhật Prisma schema, migration, API therapists public, payload booking.
  - Related screens/features: Booking flow, quản lý nhân viên
  - Trade-offs: Match tốt hơn vs. thêm schema/seed cần bảo trì.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
