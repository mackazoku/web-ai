# Feature Specification: Booking Success Dialog

**Feature Branch**: `004-booking-success`  
**Created**: 2026-03-26  
**Status**: Draft  
**Input**: User description: "Dialog thông báo đặt vé thành công và nhảy sang màn hình bookings. design lấy từ docs/design/ui/public/screens/booking_success_dialog"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Confirm booking success (Priority: P1)

As a customer, I want to see a success dialog after placing a booking so I know the booking was created and I can continue to my bookings.

**Why this priority**: This confirms the most important action in the flow and guides the next step.

**Independent Test**: Complete a booking and verify the success dialog appears and then navigates to the bookings screen.

**Acceptance Scenarios**:

1. **Given** a customer submits a booking successfully, **When** the response returns success, **Then** a success dialog is displayed using the approved design.
2. **Given** the success dialog is shown, **When** the dialog completes its confirmation action, **Then** the user is navigated to the bookings screen.

---

### User Story 2 - Dismiss or auto-advance (Priority: P2)

As a customer, I want a clear path to leave the dialog so I can proceed without confusion.

**Why this priority**: Prevents users from getting stuck after a successful booking.

**Independent Test**: Trigger the success dialog and verify it can be dismissed or automatically advances to bookings.

**Acceptance Scenarios**:

1. **Given** the success dialog is visible, **When** the user confirms or the dialog auto-advances, **Then** navigation continues to the bookings screen.

---

### User Story 3 - Error fallback (Priority: P3)

As a customer, I want the dialog to not block me if navigation fails so I can still reach the bookings page.

**Why this priority**: Ensures a smooth path even if automatic navigation fails.

**Independent Test**: Simulate a navigation failure and verify the dialog provides a manual route to bookings.

**Acceptance Scenarios**:

1. **Given** the success dialog cannot navigate automatically, **When** the fallback action is shown, **Then** the customer can manually go to bookings.

---

### Edge Cases

- What happens if the booking API responds slowly and the dialog should not appear yet?
- What happens if the customer closes the dialog before navigation triggers?
- What happens if the bookings page is not reachable (network or routing error)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST display a booking success dialog after a successful booking submission.
- **FR-002**: The success dialog MUST follow the design in `docs/design/ui/public/screens/booking_success_dialog`.
- **FR-003**: The dialog MUST navigate the customer to the bookings screen after confirmation.
- **FR-004**: The dialog MUST offer a clear way to proceed if automatic navigation fails.
- **FR-005**: The dialog MUST not appear when booking submission fails.

### Key Entities *(include if feature involves data)*

- **Booking**: Represents the newly created booking referenced by the success dialog.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 95% of successful booking submissions show the success dialog within 2 seconds.
- **SC-002**: 95% of users reach the bookings screen within 10 seconds after a successful booking.
- **SC-003**: Less than 2% of successful bookings lead to confusion about next steps (measured by support tickets or feedback).

## Assumptions

- The booking submission already returns a success response and booking ID.
- The bookings screen exists at `/[locale]/bookings`.
- The approved UI design asset is available in `docs/design/ui/public/screens/booking_success_dialog`.
- Navigation is handled client-side after success.
