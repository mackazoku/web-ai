# Feature Specification: SPA Booking & Management Platform

**Feature Branch**: `spa-booking-platform`  
**Created**: 2026-03-25  
**Status**: Approved  
**Input**: User description: "SPA booking + admin management with multi-branch, payments, email notifications, staff scheduling."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Public booking flow (Priority: P1)
Customers can select a service, branch, date/time, optional therapist, and submit a booking.

**Why this priority**: Core revenue flow and MVP entry point.  
**Independent Test**: Complete a booking from the public page and see it in admin dashboard.

**Acceptance Scenarios**:
1. **Given** the public booking page, **When** a customer submits valid details, **Then** a pending booking is created.
2. **Given** a booking exists, **When** admin opens dashboard, **Then** the booking appears in pending approvals.

---

### User Story 2 - Admin/staff dashboard schedule (Priority: P1)
Admin sees all bookings; staff sees only their bookings on the day calendar.

**Why this priority**: Operations visibility is required to deliver services.  
**Independent Test**: Log in as staff/admin and verify schedule blocks for the day.

**Acceptance Scenarios**:
1. **Given** admin login, **When** dashboard loads, **Then** all bookings appear.
2. **Given** staff login, **When** dashboard loads, **Then** only staff bookings appear.

---

### User Story 3 - User management (Priority: P2)
Admin can create/edit/disable staff accounts and assign roles.

**Why this priority**: Needed to manage access and therapist assignments.  
**Independent Test**: Create a staff user and sign in.

**Acceptance Scenarios**:
1. **Given** admin users page, **When** admin creates a staff user, **Then** the user can log in.

---

### User Story 4 - Payments + notifications (Priority: P3)
System supports online payment flow and email confirmation/reminders.

**Why this priority**: Monetization and no‑show reduction.  
**Independent Test**: Trigger a payment intent and send a confirmation email (sandbox).

**Acceptance Scenarios**:
1. **Given** a booking, **When** payment succeeds, **Then** booking status is confirmed.

---

### Edge Cases
- Double booking the same staff/time slot.
- Staff-service mismatch during booking.
- Past dates selected in booking flow.
- Missing branch/service data.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow customers to select service, branch, date/time, and optional therapist.
- **FR-002**: System MUST create bookings in `pending` state and surface them in admin dashboard.
- **FR-003**: Admin MUST be able to manage users and roles (admin/receptionist/staff).
- **FR-004**: Staff MUST see only their own schedule; admin sees all.
- **FR-005**: System MUST support multi‑branch data separation.
- **FR-006**: System MUST support online payments (provider integrations).
- **FR-007**: System MUST send email confirmation and reminders (MVP).
- **FR-008**: Admin calendar MUST be easy to scan with clear hourly headers, status legend, and readable booking blocks.

### Key Entities
- **User**: staff/admin accounts with role and status.
- **Branch**: spa locations.
- **Service**: offerings with duration/price.
- **StaffService**: therapist ↔ service mapping.
- **Booking**: appointment records.
- **BookingService**: service mapping per booking.
- **Payment**: transaction records.
- **Notification**: email reminders.

## Success Criteria *(mandatory)*

### Measurable Outcomes
- **SC-001**: A customer can complete a booking in under 2 minutes.
- **SC-002**: Admin dashboard shows new bookings within 5 seconds of creation.
- **SC-003**: Staff dashboard shows only staff bookings for the selected day.
- **SC-004**: At least 90% of booking submissions succeed with valid input.

## Assumptions
- Payments and email providers are available in sandbox environments.
- Staff-service mappings are maintained by admin.

## Dependencies
- PostgreSQL (Neon)
- Prisma ORM
- NextAuth (credentials)
- Email provider (TBD)
- Payment providers (VNPay/Momo/Stripe)
