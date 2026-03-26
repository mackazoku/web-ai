# Hợp đồng: API Notifications

## Phạm vi
Định nghĩa các endpoint cho thông báo trong ứng dụng.

## Endpoints

### GET /api/notifications
- **Auth**: Bắt buộc (admin hoặc customer)
- **Query**:
  - `limit` (tuỳ chọn, mặc định 20)
  - `cursor` (tuỳ chọn, phân trang)
- **Response**:
  - `items`: danh sách thông báo
  - `nextCursor`: string | null
  - `unreadCount`: number

### POST /api/notifications/read
- **Auth**: Bắt buộc
- **Body**:
  - `ids`: string[]
- **Response**:
  - `updated`: number

## Errors
- 401 nếu chưa đăng nhập
- 403 nếu cố đọc thông báo của user khác
