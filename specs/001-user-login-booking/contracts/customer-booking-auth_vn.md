# Contract: Customer Booking Auth

## Scope
Xác định thay đổi hành vi API phía khách hàng để bắt buộc đăng nhập trước khi booking và chỉ trả về booking theo user đã xác thực.

## Endpoints

### POST /api/bookings
**Auth**: Bắt buộc (customer session)

**Request**
- serviceId
- branchId
- startAt
- endAt
- staffId (optional)
- customerName
- customerEmail
- customerPhone

**Behavior**
- Từ chối nếu chưa xác thực.
- Lưu booking kèm tham chiếu customer (customerId/userId).

**Responses**
- 201 Created: booking payload có tham chiếu customer.
- 401 Unauthorized: `{ code, message }` khi chưa đăng nhập.

### GET /api/bookings/my
**Auth**: Bắt buộc (customer session)

**Behavior**
- Trả về danh sách booking chỉ thuộc user hiện tại.

**Responses**
- 200 OK: danh sách booking theo user.
- 401 Unauthorized: `{ code, message }` khi chưa đăng nhập.

### GET /api/auth/me
**Auth**: Bắt buộc

**Behavior**
- Trả về thông tin user đã xác thực để xác nhận session ở UI.
