# Brainstorming: In-App Notifications

## Suggestions Log
- ID: S-001
  - Title: Automated retention cleanup
  - Description: Add a scheduled cleanup job to delete notifications older than 30 days.
  - Scope impact: Background job or cron setup.
  - Related screens/features: Notifications list, storage maintenance.
  - Trade-offs: Extra ops setup vs. bounded storage size.
  - Estimated complexity: Medium
  - Status: proposed
  - Owner decision: pending
- ID: S-002
  - Title: Mark all as read
  - Description: Provide a single action to mark all visible notifications as read.
  - Scope impact: UI + API endpoint enhancement.
  - Related screens/features: Notifications dropdown.
  - Trade-offs: Faster cleanup vs. extra endpoint and UI complexity.
  - Estimated complexity: Low
  - Status: proposed
  - Owner decision: pending
- ID: S-003
  - Title: Deep link to booking details
  - Description: Include booking reference data in notifications so users can jump to the related booking.
  - Scope impact: Notification payload + UI link routing.
  - Related screens/features: Notifications dropdown, booking detail page.
  - Trade-offs: More context vs. increased data coupling.
  - Estimated complexity: Medium
  - Status: proposed
  - Owner decision: pending
