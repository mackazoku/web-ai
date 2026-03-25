# Contract: Booking Success Dialog

## Scope
Define the success dialog behavior after a booking is created.

## Trigger
- A successful booking submission response from the booking flow.

## Expected Behavior
- Display the success dialog based on the approved design asset.
- Provide a clear confirmation action that continues to bookings.
- Provide a fallback action if automatic navigation fails.

## Navigation
- Destination: `/[locale]/bookings`.

## Errors
- No dialog is shown on booking failure.
- If navigation fails, show a manual route to bookings.
