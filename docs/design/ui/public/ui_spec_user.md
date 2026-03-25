# UI Specification (Public)

## 1. Scope
Define UI behavior, state rules, and interaction patterns for customer-facing and public screens.

## 2. Visual System
- Tone: calm, editorial, premium wellness.
- Typography: serif headlines, restrained sans for UI labels.
- Colors: warm off-white backgrounds, olive primary actions, soft beige cards.
- Layout: top navigation, editorial sections, spacious grids.

## 3. Global UI Rules
- No hardcoded strings; use i18n keys.
- All async screens must support: loading, error, empty, success.
- Reuse shared components where possible.
- Use consistent form validation and error messaging.

## 4. Navigation (Public)
- Home / Services
- Service Detail
- Spa Info
- Reviews
- Book Now
- Login / Register
- My Bookings
- Profile
- Payments

## 5. Screen Specifications

### 5.1 Public Home / Services
Location: `docs/design/ui/public/screens/public_booking_portal/`

### 5.2 Booking Flow - Full Journey
Location: `docs/design/ui/public/screens/booking_flow/`

Behavior notes:
- Service, branch, date, and time are selectable with visual active state.
- Calendar renders real month grid with previous/next navigation.
- Past dates are disabled; selecting a date updates the summary and booking payload.
- Therapist list loads from DB filtered by selected branch and service.
- Therapist selection is optional but updates summary and booking payload when chosen.
- Booking summary reflects selected service, branch, date, and time.
- Personal details inputs use larger typography and spacing for readability.
- Service and branch lists load from API with loading/empty handling.
- Submit booking persists to DB and shows a success confirmation state.

### 5.3 My Bookings
Location: `docs/design/ui/public/screens/my_bookings/`

### 5.4 Registration
Location: `src/app/[locale]/(public)/register/page.tsx`

Behavior notes:
- Email + password fields with required validation.
- Client-side validation shows inline error message before submission.
- Server errors map to clear messages (duplicate email, invalid input).
- Successful registration redirects to login with callback to booking.

### 5.5 Login
Location: `src/app/[locale]/(public)/login/page.tsx`

Behavior notes:
- Email + password login remains available.
- Google sign-in button is visible on the login screen.
- Google sign-in redirects back to the original destination after success.
- OAuth errors show a clear, user-friendly message with retry guidance.
- Provide a register link to switch to account creation.
