# Brainstorming: User Login Booking

## Suggestions Log
- ID: S-001
  - Title: Login gating at booking entry
  - Description: Block entry to booking flow and submission unless the user is authenticated.
  - Scope impact: Public booking flow + booking APIs must check auth.
  - Related screens/features: Booking flow, login screen, booking API.
  - Trade-offs: Higher friction vs. improved data integrity.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: S-002
  - Title: My Bookings scoped to user
  - Description: Ensure My Bookings only returns and displays bookings owned by the authenticated user.
  - Scope impact: API filtering + UI list logic.
  - Related screens/features: My Bookings, booking API.
  - Trade-offs: Requires ownership checks vs. privacy and correctness.
  - Estimated complexity: Low
  - Status: approved
  - Owner decision: approved
- ID: S-003
  - Title: Booking ownership data link
  - Description: Persist a customer reference on each booking and enforce non-null ownership.
  - Scope impact: Data model and migration if missing.
  - Related screens/features: Booking creation, admin dashboards, reporting.
  - Trade-offs: Requires data migration vs. strong data lineage.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
