# Feature Specification: User Login Booking

**Feature Branch**: `001-user-login-booking`  
**Created**: 2026-03-25  
**Status**: Draft  
**Input**: User description: "Cài đặt màn hình đăng nhập cho user, thông tin booking sẽ lưu theo user thay vì có thể book mà không cần đăng nhập như hiện tại"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Login to Book (Priority: P1)

As a customer, I must log in before making a booking so my booking is tied to my account.

**Why this priority**: This is the core behavior change that prevents anonymous bookings and ensures accountability.

**Independent Test**: Can be fully tested by logging in and completing one booking, verifying it is linked to the user.

**Acceptance Scenarios**:

1. **Given** a customer has a valid account, **When** they log in and complete a booking, **Then** the booking is saved under their account.
2. **Given** a customer is not logged in, **When** they attempt to start a booking, **Then** they are prompted to log in before proceeding.

---

### User Story 2 - View My Bookings (Priority: P2)

As a logged-in customer, I can view only my own bookings.

**Why this priority**: Users need confirmation and management of their own booking history after login is enforced.

**Independent Test**: Create two users with separate bookings and verify each user only sees their own list.

**Acceptance Scenarios**:

1. **Given** a logged-in customer with existing bookings, **When** they open their bookings view, **Then** only their bookings are shown.

---

### User Story 3 - Block Anonymous Booking (Priority: P3)

As a business, I want to block anonymous bookings so every booking has a user identity.

**Why this priority**: This ensures data integrity and enables user-based management and support.

**Independent Test**: Attempt to book without authentication and confirm booking cannot be completed.

**Acceptance Scenarios**:

1. **Given** a user is not logged in, **When** they try to submit a booking, **Then** the booking is rejected and they are asked to log in.

---

### Edge Cases

- What happens when credentials are invalid during login?
- How does the system handle a session expiring mid-booking?
- What happens if a user logs in on multiple devices and creates bookings concurrently?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a user login screen accessible from booking entry points.
- **FR-002**: System MUST require authentication before a booking can be initiated or submitted.
- **FR-003**: System MUST associate every booking with the authenticated user identity.
- **FR-004**: System MUST prevent anonymous/guest bookings.
- **FR-005**: System MUST show a clear error message when login fails.
- **FR-006**: Users MUST be able to see only their own bookings.
- **FR-007**: System MUST maintain the user’s authenticated session during the booking flow.

### Key Entities *(include if feature involves data)*

- **User**: Represents an authenticated customer identity.
- **Booking**: Represents a reservation created by a user and linked to a User.
- **Session**: Represents an authenticated login state for a User.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 95% of booking attempts are completed only after successful login.
- **SC-002**: 0% of completed bookings are anonymous after rollout.
- **SC-003**: 90% of users can log in and complete a booking within 3 minutes.
- **SC-004**: Users successfully view their own booking history without seeing others’ data in 99% of tests.

## Assumptions

- Existing user accounts and authentication capabilities already exist in the system.
- User registration and password recovery are out of scope for this feature.
- Booking data can be linked to a user identity without requiring a new booking workflow.
- Users have access to their login credentials when initiating bookings.
