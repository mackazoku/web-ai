# Design Suggestions

## Purpose
Track architecture and design suggestions with approval workflow.

## Suggestions
- ID: DS-001
  - Title: Event-driven reminder pipeline
  - Description: Add a job queue to schedule reminders and appointment status transitions.
  - Scope impact: Background jobs, provider integration, retry policies.
  - Related screens/features: Appointments, Settings
  - Trade-offs: Reliability vs. operational complexity.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: DS-002
  - Title: Audit log viewer
  - Description: Admin page to view appointment change history.
  - Scope impact: New UI and query APIs.
  - Related screens/features: Settings, Appointment detail
  - Trade-offs: Transparency vs. extra UI surface.
  - Estimated complexity: Low
  - Status: approved
  - Owner decision: approved
- ID: DS-003
  - Title: Availability optimization cache
  - Description: Cache staff availability windows per day to speed up calendar rendering.
  - Scope impact: Cache invalidation and refresh triggers.
  - Related screens/features: Calendar
  - Trade-offs: Faster UX vs. cache complexity.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: DS-004
  - Title: Core booking schema + seed pipeline
  - Description: Add Service/Booking models and seed scripts for realistic demo data.
  - Scope impact: Prisma schema, migrations, seed scripts.
  - Related screens/features: Booking flow, admin dashboard
  - Trade-offs: Faster demos vs. added schema complexity.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: DS-005
  - Title: Public data API + dashboard metrics
  - Description: Implement API handlers to serve branches/services and compute dashboard KPIs from DB.
  - Scope impact: API route handlers, caching strategy, error handling.
  - Related screens/features: Public booking, admin dashboard
  - Trade-offs: Live data accuracy vs. increased server load.
  - Estimated complexity: Medium
  - Status: proposed
  - Owner decision: pending
- ID: DS-006
  - Title: Staff-service mapping for therapist selection
  - Description: Add a join table so public booking can filter therapists by branch and service.
  - Scope impact: Prisma schema update, migrations, public therapists API, booking payload.
  - Related screens/features: Booking flow, staff management
  - Trade-offs: Better matching vs. added schema/seed maintenance.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
