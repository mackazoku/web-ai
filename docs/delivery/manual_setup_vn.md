# Thiết lập thủ công

## Mục đích
Liệt kê các bước thiết lập thủ công cho môi trường và triển khai.

## Checklist
- Môi trường: dev
  - Owner: TBD
  - Prerequisites: Node.js, truy cập database
  - Steps:
    - Tạo Neon Postgres và set `DATABASE_URL`.
    - Chạy Prisma migrations tạo bảng `User`, `Branch` và bảng liên quan.
    - Áp dụng migration StaffService để mapping therapist-service.
    - Seed admin đầu tiên (`npm run seed:admin`).
    - Tuỳ chọn: seed user mẫu (`npm run seed:users`).
    - Seed dữ liệu core cho chi nhánh/dịch vụ/booking (`npm run seed:core`).
    - Chạy lại `seed:core` sau khi cập nhật staff/service để refresh mapping therapist.
    - Cấu hình thông tin email provider (MVP gửi email).
    - Cấu hình key cho payment provider (VNPay/Momo/Stripe).
    - Cấu hình Google OAuth (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`).
    - Cấu hình timezone và giờ làm theo chi nhánh.
    - Thiết lập `NEXTAUTH_SECRET` và `NEXTAUTH_URL`.
    - Gỡ admin seed (`ADMIN_SEED_EMAIL`, `ADMIN_SEED_PASSWORD`) khi dùng DB users.
  - Verification:
    - Gửi thử email xác nhận.
    - Thực hiện thanh toán test ở sandbox.
    - Tạo booking ở từng timezone chi nhánh.
    - Đăng nhập `/[locale]/admin/login`.
  - Rollback:
    - Tắt gửi email và chuyển sang log-only.
    - Tắt payment provider và chuyển về pay-at-spa.
- Môi trường: prod (Vercel)
  - Owner: TBD
  - Prerequisites: tài khoản Vercel, quyền cấu hình domain production
  - Steps:
    - Tạo Neon Postgres và set `DATABASE_URL` trong Vercel.
    - Chạy Prisma migrations cho production.
    - Áp dụng migration StaffService để mapping therapist-service.
    - Seed admin đầu tiên (`npm run seed:admin`).
    - Tuỳ chọn: seed user mẫu (`npm run seed:users`).
    - Seed dữ liệu core cho chi nhánh/dịch vụ/booking (`npm run seed:core`).
    - Chạy lại `seed:core` sau khi cập nhật staff/service để refresh mapping therapist.
    - Tạo project Vercel cho `web-ai`.
    - Cấu hình biến môi trường (auth, database, email, payment).
    - Cấu hình Google OAuth (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`).
    - Thiết lập domain production và bản ghi DNS trên Vercel.
    - Bật tự động deploy từ nhánh `main`.
    - Thiết lập `NEXTAUTH_SECRET` và `NEXTAUTH_URL`.
    - Gỡ admin seed khi dùng DB users.
  - Verification:
    - Truy cập trang public và trang admin ở production.
    - Chạy thử booking và xác nhận email gửi thành công.
    - Đăng nhập `/[locale]/admin/login` trên production.
  - Rollback:
    - Revert về bản deploy trước đó trên Vercel.
    - Tắt domain production nếu gặp sự cố nghiêm trọng.
