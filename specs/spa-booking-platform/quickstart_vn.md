# Quickstart & Manual Setup

## Development
1. Thiết lập `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`.
2. Chạy migrations:
   - `npx prisma migrate deploy`
3. Generate Prisma client:
   - `npx prisma generate`
4. Seed dữ liệu:
   - `npm run seed:admin`
   - `npm run seed:users` (tuỳ chọn)
   - `npm run seed:core`

## Production (Vercel)
1. Cấu hình biến môi trường trên Vercel.
2. Chạy migrations trên DB production.
3. Seed admin + core data.
4. Verify đăng nhập admin và booking flow.

## Verification
- Tạo booking public và kiểm tra ở dashboard admin.
- Đăng nhập staff và kiểm tra lịch theo staff.
