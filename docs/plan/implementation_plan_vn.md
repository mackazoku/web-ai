# Web AI - Kế hoạch triển khai

## 1. Mục đích
Xác định kế hoạch thực thi sau khi đồng bộ tài liệu.

## 2. Metadata bắt buộc
Mỗi task phải có:
- owner
- status (pending/in_progress/blocked/done)
- last_updated (YYYY-MM-DD)
- doc_impact
- manual_setup_required (yes/no)

## 3. Giai đoạn
| phase | feature | status | owner | last_updated | doc_impact | manual_setup_required | notes |
|---|---|---|---|---|---|---|---|
| D0 | Documentation Alignment | done | TBD | 2026-03-19 | requirements, ui_spec, system_design, api_contracts, data_model, brainstorming | no | MVP gồm payments, email, đa chi nhánh |
| F0 | MVP Scope Definition | pending | TBD | 2026-03-19 | requirements, ui_spec, implementation_plan | no | chia nhỏ booking, services, calendar, payments, email, branches |
| F0.1 | Tách code (Admin/Public) | done | TBD | 2026-03-19 | system_design, ui_spec, implementation_plan, status_board | no | tách route group `(public)` và `(admin)` |
| F0.2 | Chuẩn bị deploy (Vercel) | done | TBD | 2026-03-19 | manual_setup, implementation_plan, status_board | yes | chuẩn bị checklist triển khai và default environment |
| F0.3 | Bảo vệ route admin | done | TBD | 2026-03-19 | system_design, implementation_plan, status_board | no | middleware guard cho `/[locale]/admin` |
| F0.4 | Tích hợp NextAuth | done | TBD | 2026-03-19 | system_design, api_contracts, data_model, ui_spec, implementation_plan, status_board | yes | đăng nhập credentials + role guard + admin login |
| F0.5 | Tách UI docs (Admin/User) | done | TBD | 2026-03-19 | ui_spec, implementation_plan, status_board | no | tách UI spec và thư mục màn hình |
| F1 | Màn hình public (Home + Booking) | done | TBD | 2026-03-19 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | triển khai public home, booking flow, và customer profile |
| F1.1 | Hoàn thiện Home + Booking Public | done | TBD | 2026-03-20 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | thêm selector chi nhánh và các bước booking |
| F1.2 | Tinh chỉnh chọn booking | done | TBD | 2026-03-20 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | đổi ô ngày thành button và rõ trạng thái chọn |
| F1.3 | Tăng cỡ nhập thông tin cá nhân | done | TBD | 2026-03-20 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | tăng cỡ chữ và khoảng cách input |
| F2 | Màn hình admin (Dashboard) | done | TBD | 2026-03-19 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | triển khai layout và widget dashboard admin |
| F3 | API dữ liệu dashboard (JSON nội bộ) | done | TBD | 2026-03-20 | system_design, api_contracts, implementation_plan, status_board, coding_log, test_plan | no | thêm /api/admin/dashboard và nối dashboard |
| F4 | Auth DB + CRUD Users | done | TBD | 2026-03-20 | system_design, api_contracts, data_model, requirements, implementation_plan, status_board, manual_setup, coding_log, test_plan | yes | prisma + Neon, CRUD user, kiểm tra role |
| F5 | Model dữ liệu core + seed (branch/service/booking) | done | TBD | 2026-03-20 | system_design, data_model, implementation_plan, status_board, manual_setup, coding_log, test_plan | yes | thêm schema Service/Booking và script seed |
| F6 | Dữ liệu booking public từ DB | pending | TBD | 2026-03-20 | ui_spec, api_contracts, system_design, implementation_plan, status_board, coding_log, test_plan | no | thay fixtures bằng API branch/service |
| F7 | KPI dashboard admin từ DB | done | TBD | 2026-03-20 | ui_spec, api_contracts, system_design, implementation_plan, status_board, coding_log, test_plan | no | tính KPI từ booking/service |
| F8 | Hành động đăng xuất admin | done | TBD | 2026-03-20 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | thêm nút đăng xuất ở sidebar |
| F9 | Gửi booking public | done | TBD | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, implementation_plan, status_board, coding_log, test_plan | no | tạo booking qua API và hiển thị ở dashboard |
| F10 | Chuyển màn booking_requests_queue sang public | done | TBD | 2026-03-25 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | đổi tên thành my_bookings |
| F11 | Calendar public thật + đồng bộ booking admin | done | TBD | 2026-03-25 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | thay calendar tĩnh bằng calendar thật và đảm bảo dashboard admin thấy booking mới |
| F12 | Chọn therapist từ DB | done | TBD | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, implementation_plan, status_board, manual_setup, coding_log, test_plan | yes | thêm mapping staff-service, API therapists, payload booking có staffId |
| F13 | Calendar admin day view | done | TBD | 2026-03-25 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | hiển thị grid giờ thật và đặt booking theo start/end |
| F14 | Đăng ký khách hàng | done | TBD | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, implementation_plan, status_board, coding_log, test_plan | no | thêm UI đăng ký + API, validation, và chuyển hướng login |
| F15 | Đăng nhập Google khách hàng | done | TBD | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, implementation_plan, status_board, coding_log, test_plan | yes | thêm Google OAuth sign-in cho khách hàng |
