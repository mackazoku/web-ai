# Checklist Chất Lượng (Quality Gates): Nền Tảng Đặt Lịch & Quản Lý SPA

**Mục đích**: Kiểm tra sẵn sàng phát hành cho MVP đặt lịch công khai và vận hành admin/staff.
**Ngày tạo**: 2026-03-25
**Tính năng**: [spec.md](../spec.md)

**Lưu ý**: Checklist này được tạo bởi lệnh `/speckit.checklist` dựa trên bối cảnh và yêu cầu của tính năng.

## Tài liệu & Phạm vi

- [ ] CHK001 Spec/plan/tasks đã cập nhật và được phê duyệt.
- [ ] CHK002 Tham chiếu UI trong `ui.md` khớp với các màn public/admin đã triển khai.
- [ ] CHK003 Data model + API contracts khớp schema Prisma và các route.
- [ ] CHK004 Hạng mục Pending (Payments, Email) được ghi rõ trong tasks/plan.

## Build & Chất lượng

- [ ] CHK005 `npm run lint` chạy pass.
- [ ] CHK006 `npm run build` chạy pass.
- [ ] CHK007 Không có hardcoded UI strings; dùng i18n keys ở public/admin pages.

## Dữ liệu & Seed

- [ ] CHK008 `DATABASE_URL` đã cấu hình và `prisma generate` chạy hoàn tất.
- [ ] CHK009 `npm run seed:core` chạy hoàn tất và có branches/services/bookings.
- [ ] CHK010 Có mapping staff-service cho chọn therapist.
- [ ] CHK011 Admin seed user đăng nhập thành công.

## Luồng Đặt Lịch Public

- [ ] CHK012 Trang booking public load dịch vụ và chi nhánh từ DB.
- [ ] CHK013 Calendar chặn ngày quá khứ và cho phép chọn ngày.
- [ ] CHK014 Danh sách therapist lọc theo service/branch đã chọn.
- [ ] CHK015 Gửi booking tạo bản ghi `pending`.
- [ ] CHK016 Màn "My bookings" hiển thị booking vừa tạo.
- [ ] CHK017 Trạng thái lỗi booking hiển thị phản hồi rõ ràng.

## Dashboard Admin/Staff

- [ ] CHK018 Admin login hiển thị đúng tên và role.
- [ ] CHK019 Staff login chỉ thấy lịch của chính mình trong ngày.
- [ ] CHK020 Admin view hiển thị toàn bộ booking theo chi nhánh/ngày.
- [ ] CHK021 Calendar hiển thị header theo giờ với block booking 1 giờ.
- [ ] CHK022 Approve/reject cập nhật trạng thái booking và refresh UI.

## Payments & Email (Phạm vi MVP)

- [ ] CHK023 Payment flow đã tích hợp (sandbox) hoặc được disable rõ ràng kèm note pending.
- [ ] CHK024 Email xác nhận/nhắc lịch đã gửi (sandbox) hoặc được đánh dấu pending.

## Deploy & Environment

- [ ] CHK025 `NEXTAUTH_URL` và `NEXTAUTH_SECRET` đã cấu hình cho môi trường đích.
- [ ] CHK026 Vercel build/deploy thành công, không bị 404/500.
- [ ] CHK027 Public home và admin login truy cập được sau deploy.

## Ghi chú

- Đánh dấu hoàn tất: `[x]`
- Thêm ghi chú/kết quả ngay từng mục
- Link tới tài liệu liên quan nếu cần
- Mã mục được đánh số tuần tự để tiện đối chiếu
