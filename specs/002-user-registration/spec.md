# Feature Specification: User Registration

**Feature Branch**: `002-user-registration`  
**Created**: 2026-03-25  
**Status**: Draft  
**Input**: User description: "Cài đặt tính năng đăng kí tài khoản cho user, tạm thời chỉ cần email và mật khẩu không cần xác thực. Tạo xong có thể đăng nhập và booking luôn"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Register and Book (Priority: P1)

As a customer, I can create an account with email and password and then immediately log in to book a service.

**Why this priority**: Registration is required to unlock booking since booking now requires login.

**Independent Test**: Register a new account, log in, and complete a booking successfully.

**Acceptance Scenarios**:

1. **Given** a visitor without an account, **When** they register with email and password, **Then** the account is created and they can log in.
2. **Given** a newly registered customer, **When** they log in, **Then** they can access booking and submit a booking.

---

### User Story 2 - Prevent Duplicate Accounts (Priority: P2)

As a customer, I cannot register with an email that already exists.

**Why this priority**: Prevents conflicts and confusion for login and booking ownership.

**Independent Test**: Register an email, then attempt to register the same email again and confirm it is rejected.

**Acceptance Scenarios**:

1. **Given** an existing account, **When** the same email is used for registration, **Then** the system rejects the attempt with a clear message.

---

### User Story 3 - Handle Invalid Input (Priority: P3)

As a customer, I receive clear errors when registration input is invalid.

**Why this priority**: Avoids failed registrations and reduces support.

**Independent Test**: Attempt registration with missing/invalid email or missing password and confirm errors are shown.

**Acceptance Scenarios**:

1. **Given** invalid or missing input, **When** registration is submitted, **Then** validation errors are shown and no account is created.

---

### Edge Cases

- What happens if the email is already registered?
- What happens if the password does not meet minimum requirements?
- What happens if registration is attempted while the user is already logged in?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a customer registration screen using email and password.
- **FR-002**: System MUST validate email format and require a non-empty password.
- **FR-003**: System MUST reject registration for an email that already exists.
- **FR-004**: System MUST create a customer account that can log in immediately after registration.
- **FR-005**: System MUST show clear error messages for registration failures.
- **FR-006**: System MUST allow newly registered users to log in and proceed to booking without email verification.

### Key Entities *(include if feature involves data)*

- **User**: Represents a customer account with email and password.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can complete registration in under 2 minutes.
- **SC-002**: 95% of successful registrations can log in immediately without support.
- **SC-003**: 0% of duplicate email registrations are accepted.
- **SC-004**: 90% of registration attempts succeed on the first try when inputs are valid.

## Assumptions

- Existing authentication system supports credential-based login.
- Email verification is out of scope for this feature.
- Password policy is minimal (non-empty) unless specified later.
- Registration is for customer accounts only (not staff/admin).
