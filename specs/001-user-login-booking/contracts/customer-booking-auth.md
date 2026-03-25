# Contract: Customer Booking Auth

## Scope
Define customer-facing API behavior changes to enforce login before booking and scope bookings to the authenticated user.

## Endpoints

### POST /api/bookings
**Auth**: Required (customer session)

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
- Reject if unauthenticated.
- Persist booking with a customer reference (customerId/userId).

**Responses**
- 201 Created: booking payload with customer reference included.
- 401 Unauthorized: `{ code, message }` when not logged in.

### GET /api/bookings/my
**Auth**: Required (customer session)

**Behavior**
- Return bookings belonging to the authenticated customer only.

**Responses**
- 200 OK: list of bookings scoped to the current user.
- 401 Unauthorized: `{ code, message }` when not logged in.

### GET /api/auth/me
**Auth**: Required

**Behavior**
- Returns the authenticated user profile for session validation in the UI.
