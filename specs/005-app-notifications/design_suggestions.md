# Design Suggestions: In-App Notifications

## Suggestions
- ID: D-001
  - Title: Shared notification bell component
  - Description: Build a reusable bell + dropdown component used in both admin and public headers.
  - Scope impact: Shared UI component and styling.
  - Related screens/features: Admin dashboard header, public header.
  - Trade-offs: Slight upfront component work vs. consistent UX and less duplication.
  - Estimated complexity: Medium
  - Status: proposed
  - Owner decision: pending
- ID: D-002
  - Title: Polling backoff on errors
  - Description: Add incremental backoff when polling fails to reduce repeated error spam.
  - Scope impact: Polling hook logic.
  - Related screens/features: Notifications dropdown.
  - Trade-offs: Slightly slower recovery vs. better stability on transient failures.
  - Estimated complexity: Low
  - Status: proposed
  - Owner decision: pending
