# Bảng trạng thái

## Mục đích
Tóm tắt nhanh trạng thái triển khai.

## Trường dữ liệu
- phase
- owner
- status
- last_updated
- doc_impact
- manual_setup_required
- notes

## Trạng thái hiện tại
| phase | owner | status | last_updated | doc_impact | manual_setup_required | notes |
|---|---|---|---|---|---|---|
| D0 Documentation Alignment | TBD | done | 2026-03-19 | requirements, design, plan, brainstorming | no | MVP có payments + email + đa chi nhánh |
| F0 MVP Scope Definition | TBD | pending | 2026-03-19 | requirements, design, plan | no | định nghĩa task cho booking + payments + email + branches |
| F0.1 Tách code (Admin/Public) | TBD | done | 2026-03-19 | system_design, ui_spec, plan | no | tách route group admin và public |
| F0.2 Chuẩn bị deploy (Vercel) | TBD | done | 2026-03-19 | manual_setup, plan | yes | chuẩn bị checklist production và default |
| F0.3 Bảo vệ route admin | TBD | done | 2026-03-19 | system_design, plan | no | bảo vệ `/[locale]/admin` bằng middleware |
| F0.4 Tích hợp NextAuth | TBD | done | 2026-03-19 | system_design, api_contracts, data_model, ui_spec, plan | yes | đăng nhập credentials + role guard + admin login |
| F0.5 Tách UI docs (Admin/User) | TBD | done | 2026-03-19 | ui_spec, plan | no | tách UI spec và thư mục màn hình |
| F1 Màn hình public (Home + Booking) | TBD | done | 2026-03-19 | ui_spec, plan, coding_log, test_plan | no | triển khai public home, booking flow, và customer profile |
| F1.1 Hoàn thiện Home + Booking Public | TBD | done | 2026-03-20 | ui_spec, plan, coding_log, test_plan | no | thêm selector chi nhánh và các bước booking |
| F1.2 Tinh chỉnh chọn booking | TBD | done | 2026-03-20 | ui_spec, plan, coding_log, test_plan | no | polish chọn ngay-gio bằng button |
| F1.3 Tăng cỡ nhập thông tin cá nhân | TBD | done | 2026-03-20 | ui_spec, plan, coding_log, test_plan | no | tăng cỡ input và khoảng cách |
| F2 Màn hình admin (Dashboard) | TBD | done | 2026-03-19 | ui_spec, plan, coding_log, test_plan | no | triển khai layout và widget dashboard admin |
| F3 API dữ liệu dashboard | TBD | done | 2026-03-20 | system_design, api_contracts, plan, coding_log, test_plan | no | thêm /api/admin/dashboard và nối dashboard |
| F4 Auth DB + CRUD Users | TBD | done | 2026-03-20 | system_design, api_contracts, data_model, requirements, plan, manual_setup, coding_log, test_plan | yes | prisma + Neon, CRUD user, RBAC |
| F5 Model dữ liệu core + seed | TBD | done | 2026-03-20 | system_design, data_model, plan, manual_setup, coding_log, test_plan | yes | thêm schema Service/Booking và seed data |
| F6 Dữ liệu booking public từ DB | TBD | pending | 2026-03-20 | ui_spec, api_contracts, system_design, plan, coding_log, test_plan | no | thay fixtures bằng API |
| F7 KPI dashboard admin từ DB | TBD | done | 2026-03-20 | ui_spec, api_contracts, system_design, plan, coding_log, test_plan | no | tính KPI từ DB |
| F8 Hành động đăng xuất admin | TBD | done | 2026-03-20 | ui_spec, plan, coding_log, test_plan | no | thêm nút đăng xuất ở sidebar |
| F9 Gửi booking public | TBD | done | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, plan, coding_log, test_plan | no | tạo booking qua API và hiển thị admin |
| F10 Chuyển booking_requests_queue sang public | TBD | done | 2026-03-25 | ui_spec, plan, coding_log, test_plan | no | đổi tên thành my_bookings |
| F11 Calendar public thật + đồng bộ booking admin | TBD | done | 2026-03-25 | ui_spec, plan, coding_log, test_plan | no | calendar thật và dashboard admin hiển thị booking mới |
| F12 Chọn therapist từ DB | TBD | done | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, plan, manual_setup, coding_log, test_plan | yes | mapping staff-service + API therapists + cập nhật payload booking |
| F13 Calendar admin day view | TBD | done | 2026-03-25 | ui_spec, plan, coding_log, test_plan | no | grid giờ thật + đặt booking theo time |
| F14 Đăng ký khách hàng | TBD | done | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, plan, coding_log, test_plan | no | UI đăng ký + API + validation |
