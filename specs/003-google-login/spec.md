# Feature Specification: Customer Google Login

**Feature Branch**: `003-google-login`  
**Created**: 2026-03-25  
**Status**: Draft  
**Input**: User description: "Cài đặt login with google cho user"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Sign in with Google (Priority: P1)

As a customer, I want to sign in using my Google account so I can access booking features without creating a separate password.

**Why this priority**: This is the core value of the feature and removes friction for customers.

**Independent Test**: A customer can complete Google sign-in and land on their intended destination (e.g., booking page) without using email/password.

**Acceptance Scenarios**:

1. **Given** a customer is on the login page, **When** they choose Google sign-in and complete the flow, **Then** they are signed in and returned to the original page.
2. **Given** a customer is not signed in and tries to access a protected booking page, **When** they sign in with Google, **Then** access is granted and the page loads.

---

### User Story 2 - New customer account creation via Google (Priority: P2)

As a new customer, I want my account to be created automatically when I sign in with Google the first time.

**Why this priority**: Reduces onboarding friction and makes Google sign-in useful for first-time users.

**Independent Test**: A new Google account signs in once and a customer profile is created, allowing booking immediately.

**Acceptance Scenarios**:

1. **Given** a Google account has never signed in before, **When** the user completes Google sign-in, **Then** a new customer account is created and the user is signed in.

---

### User Story 3 - Error handling and recovery (Priority: P3)

As a customer, I want clear error feedback if Google sign-in fails so I can retry or use another method.

**Why this priority**: Ensures the login experience is reliable and understandable when issues occur.

**Independent Test**: Simulate a failed sign-in and verify a clear error message and fallback action.

**Acceptance Scenarios**:

1. **Given** Google sign-in fails, **When** the flow returns to the login page, **Then** a clear error message is shown and the user can retry or use email/password.

---

### Edge Cases

- What happens when the Google account email is already associated with an existing customer account created via email/password?
- How does the system handle a Google account that does not provide an email address?
- What happens when a user cancels the Google sign-in flow before completion?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST offer a Google sign-in option on the customer login screen.
- **FR-002**: The system MUST create a new customer account on first successful Google sign-in if no account exists for that email.
- **FR-003**: The system MUST sign in existing customer accounts when the Google email matches an existing account.
- **FR-004**: The system MUST assign the customer role and active status to newly created Google accounts.
- **FR-005**: The system MUST return users to their original destination after successful Google sign-in.
- **FR-006**: The system MUST show a clear, user-friendly error message when Google sign-in fails or is canceled.

### Key Entities *(include if feature involves data)*

- **User**: Customer account identified by email and role; can be created or linked during Google sign-in.
- **Authentication Method**: Represents which sign-in method the user used (Google or email/password) for tracking and support.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% of users who start Google sign-in complete it successfully.
- **SC-002**: New customers can complete Google sign-in and reach the booking page in under 2 minutes.
- **SC-003**: Fewer than 2% of Google sign-in attempts result in unclear or unhandled errors.
- **SC-004**: At least 50% of new registrations use Google sign-in within the first month after release.

## Assumptions

- Customers have active Google accounts and permission to use them for sign-in.
- Email/password login remains available as a fallback.
- Existing customer data is keyed by email and can be matched to Google email.
- No additional profile fields beyond email are required for booking access.
- Admin/staff authentication flows are unchanged by this feature.
