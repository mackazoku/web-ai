# Mô hình dữ liệu (Web đặt lịch SPA)

## 1. Phạm vi
Mô tả thực thể và quan hệ cho hệ thống đặt lịch SPA.

## 2. Thực thể chính
- `User`
  - id, name, email, phone, role, status, passwordHash, authProvider (credentials/google), branchId?, notes
- `CustomerAccount`
  - userId, phone, preferences
- `StaffProfile`
  - userId, skills, workingHours, branchId
- `Branch`
  - id, name, address, timezone
  - (user nhân viên liên kết qua branchId)
- `Service`
  - id, name, durationMinutes, priceCents, category, active, createdAt, updatedAt
- `StaffService`
  - staffId, serviceId, createdAt
- `ServiceMedia`
  - serviceId, imageUrl
- `Booking`
  - id, customerName, customerEmail, customerPhone, branchId, staffId?, startAt, endAt, status, notes, source, createdAt, updatedAt
- `BookingService`
  - bookingId, serviceId, createdAt
- `Review`
  - id, bookingId, customerId, rating, comment, createdAt
- `Payment`
  - id, bookingId, provider, amount, currency, status, paidAt
- `Notification`
  - id, userId, type, channel, scheduledAt, sentAt, status
- `AppointmentAudit`
  - id, bookingId, actorUserId, action, before, after, createdAt

## 3. Quan hệ
- User 1-1 StaffProfile (tài khoản nhân viên)
- User 1-1 CustomerAccount (tài khoản khách hàng)
- Branch 1-N User (gán chi nhánh cho nhân viên)
- Branch 1-N StaffProfile
- Branch 1-N Booking
- CustomerAccount 1-N Booking
- User N-N Service (qua staff_services)
- Service N-N Booking (qua booking_services)
- Booking 1-N BookingService
- Service 1-N BookingService
- Booking 1-N Payment
- Booking 1-1 Review
- Booking 1-N AppointmentAudit
