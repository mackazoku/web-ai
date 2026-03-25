# UI Spec: Booking Success Dialog

## Overview
- **Screen**: Booking success dialog overlay shown on the public booking flow.
- **Intent**: Confirm successful booking creation and guide the customer to their bookings page.
- **Design source**: `docs/design/ui/public/screens/booking_success_dialog` (use modal layout, typography, and CTA styling from the asset).
- **Shared UI**: Dialog overlay should use a shared dialog shell component for focus trap and overlay behavior.

## Navigation and Entry Points
- **Entry**: After a successful `POST /api/bookings` response in `src/app/[locale]/(public)/booking/booking-client.tsx`.
- **Exit**:
  - Primary CTA navigates to `/<locale>/bookings`.
  - Auto-advance redirects to `/<locale>/bookings` after a short delay.
  - Secondary CTA closes the dialog (if provided).
  - Fallback CTA navigates to `/<locale>/bookings` if auto-navigation fails.

## States
- **Hidden**: Default state before booking success.
- **Visible (Success)**: Modal overlay with success icon, headline, body text, and primary CTA.
- **Auto-advance**: Timer active after success (keep dialog visible while waiting).
- **Navigation failure**: Show fallback CTA text indicating manual navigation.

## Forms and Validation Rules
- No new forms. Booking validation remains in existing booking flow.

## Accessibility Notes
- Trap focus within the dialog while visible.
- Provide `aria-modal` and `role="dialog"`.
- Ensure CTA buttons are keyboard focusable and have visible focus states.

## i18n Keys (new/updated)
- `Booking.successDialog.title`
- `Booking.successDialog.description`
- `Booking.successDialog.cta`
- `Booking.successDialog.dismiss`
- `Booking.successDialog.fallbackCta`
- `Booking.successDialog.fallbackHint`
