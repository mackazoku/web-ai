# UI Specification (Admin Portal)

## 1. Scope
Define UI behavior, state rules, and interaction patterns for the SPA back-office portal.

## 2. Visual System
- Tone: calm, editorial, premium wellness.
- Typography: serif headlines, restrained sans for UI labels.
- Colors: warm off-white backgrounds, olive primary actions, soft beige cards.
- Layout: left sidebar, generous whitespace, rounded cards with subtle shadows.

## 3. Global UI Rules
- No hardcoded strings; use i18n keys.
- All async screens must support: loading, error, empty, success.
- Reuse shared components where possible.
- Use consistent form validation and error messaging.

## 4. Navigation (Admin)
- Dashboard
- Users
- Calendar
- Appointments
- Customers
- Services
- Staff
- Payments
- Reports
- Settings
- Branches
- Logout

## 5. Screen Specifications

### 5.1 Admin Dashboard
Location: `docs/design/ui/admin/screens/dashboard/`
Behavior notes:
- Dashboard cards load from DB-backed API with loading/empty/error states.
- Sidebar user info reflects the authenticated admin session.
- Pending approvals include newly created public bookings.
- Calendar uses a day view grid (09:00–18:00, 30-minute slots).
- Booking blocks are displayed as 1-hour slots in the calendar.
- Date navigation supports previous/next day controls.
- Admin sees all bookings; staff sees only their own schedule.

### 5.2 Admin Users
Location: `docs/design/ui/admin/screens/users/`

### 5.3 Calendar
Location: `docs/design/ui/admin/screens/calendar/`

### 5.4 Appointments
Location: `docs/design/ui/admin/screens/appointments/`

### 5.5 Customers
Location: `docs/design/ui/admin/screens/customers/`

### 5.6 Customer Profile Drawer
Location: `docs/design/ui/admin/screens/appointment_detail_drawer/`

### 5.7 Services
Location: `docs/design/ui/admin/screens/services/`

### 5.8 Staff
Location: `docs/design/ui/admin/screens/staff/`

### 5.9 Reports
Location: `docs/design/ui/admin/screens/reports/`

### 5.10 Settings
Location: `docs/design/ui/admin/screens/settings/`
