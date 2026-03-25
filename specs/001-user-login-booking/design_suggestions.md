# Design Suggestions: User Login Booking

## Suggestions
- ID: D-001
  - Title: Unified login entry points
  - Description: Ensure all booking entry points (Book Now buttons, booking flow routes, and booking API) redirect or block unless authenticated.
  - Scope impact: Public booking entry UI and API gating logic.
  - Related screens/features: Booking flow, login screen, booking API.
  - Trade-offs: Adds extra step for users vs. guarantees user-linked bookings.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: D-002
  - Title: Authenticated booking ownership enforcement
  - Description: Enforce non-null customer ownership on booking records and ensure My Bookings queries are user-scoped.
  - Scope impact: Data model validation and API query filtering.
  - Related screens/features: My Bookings, booking creation, reporting.
  - Trade-offs: Requires data backfill for existing bookings vs. stronger integrity.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
