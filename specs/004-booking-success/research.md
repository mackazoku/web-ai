# Research: Booking Success Dialog

## Decision 1: Reuse booking success design asset
- **Decision**: Implement the success dialog UI based on the approved design in `docs/design/ui/public/screens/booking_success_dialog`.
- **Rationale**: Keeps visual consistency with existing design approvals.
- **Alternatives considered**: Create a new dialog layout (rejected: unnecessary divergence).

## Decision 2: Redirect to bookings after success
- **Decision**: After a successful booking, navigate the user to the bookings screen.
- **Rationale**: Aligns with user expectation to review upcoming bookings.
- **Alternatives considered**: Stay on booking page (rejected: less clarity on next steps).

## Decision 3: Provide fallback path
- **Decision**: If automatic navigation fails, show a manual route to bookings.
- **Rationale**: Avoids the user getting stuck after success.
- **Alternatives considered**: Silent failure (rejected: poor UX).

## Decision 4: Shared dialog shell
- **Decision**: Introduce a shared dialog shell component for public UI and render the booking success dialog content inside it.
- **Rationale**: Upcoming dialogs can reuse focus trap, overlay, and close behavior without duplicating logic.
- **Alternatives considered**: Keep dialog logic inline in each feature (rejected: repeated a11y and focus handling).
