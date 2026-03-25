# Data Model (SPA Booking Web)

## 1. Scope
Describe entities and relationships for the SPA booking system.

## 2. Core Entities
- `User`
  - id, name, email, phone, role, status, passwordHash, authProvider (credentials/google), branchId?, notes
- `CustomerAccount`
  - userId, phone, preferences
- `StaffProfile`
  - userId, skills, workingHours, branchId
- `Branch`
  - id, name, address, timezone
  - (staff/users linked via branchId)
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

## 3. Relationships
- User 1-1 StaffProfile (for staff accounts)
- User 1-1 CustomerAccount (for customer accounts)
- Branch 1-N User (optional assignment for staff accounts)
- Branch 1-N StaffProfile
- Branch 1-N Booking
- CustomerAccount 1-N Booking
- User N-N Service (through staff_services)
- Service N-N Booking (through booking_services)
- Booking 1-N BookingService
- Service 1-N BookingService
- Booking 1-N Payment
- Booking 1-1 Review
- Booking 1-N AppointmentAudit
