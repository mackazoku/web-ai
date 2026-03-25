# UI Specification (Summary)

## Public
- Calm editorial layout, serif headlines, olive actions.
- Booking flow: service → branch → date/time → therapist → details → summary.
- Calendar uses real month grid with past dates disabled.
- Therapist list loads from DB filtered by branch/service.
- My Bookings screen reflects upcoming/past visits.

## Admin
- Sidebar navigation with dashboard as primary view.
- Dashboard cards load from DB-backed API.
- Day-view calendar (09:00–18:00, 30-minute grid).
- Booking blocks display as 1-hour slots; admin sees all bookings, staff sees own.
- Calendar supports previous/next day navigation.
- Usability upgrades:
  - Clear hourly header labels aligned to grid columns.
  - Wider full-width layout to avoid header wrapping.
  - Status legend and color tokens for pending/approved/cancelled.
  - Current time indicator line on today view.
  - Sticky time header when scrolling on small screens.
  - Booking blocks show service + customer + staff, with hover/tooltip for full details.
