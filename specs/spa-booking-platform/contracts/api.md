# API Contracts (SPA Booking Web)

## 1. Scope
Define API contracts used by the SPA booking web client.

## 2. Conventions
- Transport: REST
- Auth: session/token
- Error model: `{ code, message, details? }`

## 3. Endpoints (MVP + Core)

### Public Site
- `GET /api/public/services`
- `GET /api/public/services/:id`
- `GET /api/public/spa-info`
- `GET /api/public/reviews?serviceId=`
- `GET /api/public/therapists?branchId=&serviceId=&branchName=&serviceName=`

### Customer Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### Admin Auth (NextAuth)
- `GET /api/auth/*`
- `POST /api/auth/*`

### Customer Booking
- `POST /api/bookings` (creates booking with `pending` status; optional `staffId`)
- `GET /api/bookings/my`
- `PATCH /api/bookings/:id/reschedule`
- `POST /api/bookings/:id/cancel`

### Branches
- `GET /api/public/branches`
- `GET /api/branches`
- `POST /api/branches`
- `PATCH /api/branches/:id`

### Payments
- `POST /api/payments/intent`
- `POST /api/payments/verify`
- `GET /api/payments/my`

### Notifications
- `POST /api/notifications/subscribe`
- `GET /api/notifications/my`

### Back-office
- `GET /api/admin/dashboard` (returns `user` and booking KPIs)
- `GET /api/admin/users?role=&status=&branchId=&q=`
- `POST /api/admin/users`
- `PATCH /api/admin/users/:id`
- `DELETE /api/admin/users/:id`

- `GET /api/services`
- `POST /api/services`
- `PATCH /api/services/:id`

- `GET /api/staff`
- `POST /api/staff`
- `PATCH /api/staff/:id`
- `GET /api/staff/:id/availability`

- `GET /api/appointments?from=&to=&staffId=&status=&branchId=`
- `PATCH /api/appointments/:id`

- `GET /api/booking-requests?status=&from=&to=&branchId=`
- `POST /api/booking-requests/:id/approve`
- `POST /api/booking-requests/:id/reject`

- `GET /api/reports/summary?from=&to=&branchId=`
