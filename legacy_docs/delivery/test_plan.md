# Test Plan (Legacy)

## 2026-03-25 - Customer login required booking
- executor: TBD
- environment: local
- result: pending
- notes:
  - Unauthenticated user redirected from /[locale]/booking to /[locale]/login?callbackUrl=/[locale]/booking
  - Unauthenticated user redirected from /[locale]/bookings to /[locale]/login?callbackUrl=/[locale]/bookings
  - Authenticated customer can create booking; booking has customerId
  - /api/bookings/my returns only current user's bookings

## 2026-03-25 - Customer registration
- executor: TBD
- environment: local
- result: pending
- notes:
  - User can register with email + password and receives success response
  - Duplicate email returns 409 with code email_exists
  - Invalid email or empty password returns 400 with code invalid_payload
  - User can sign in with new credentials and access booking flow

## 2026-03-25 - Customer Google login
- executor: TBD
- environment: local
- result: pending
- notes:
  - Google sign-in completes and redirects to booking
  - New Google account creates a customer user
  - Existing customer email can sign in with Google
  - Cancelled OAuth shows a clear error and retry guidance
