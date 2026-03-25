# Thiết lập GitHub Actions

## Mục đích
Tài liệu hóa bước thiết lập CI/CD và secret cần cho GitHub Actions.

## Secrets bắt buộc
- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL` (nếu dùng NextAuth)
- `PUBLIC_BASE_URL`

## Variables bắt buộc
- `NODE_VERSION`

## Ghi chú
- Lưu giá trị theo môi trường trong CI secret store.
