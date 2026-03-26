# Research: In-App Notifications

## Decision 1: Polling over realtime
- **Decision**: Use polling (30s interval) instead of WebSockets/SSE.
- **Rationale**: Simpler to operate on serverless and sufficient for booking notifications.
- **Alternatives considered**: WebSockets (rejected: higher complexity), SSE (rejected: connection limits on serverless).

## Decision 2: Shared notifications for admin and customer
- **Decision**: Use a unified notification model that targets a specific user (admin or customer).
- **Rationale**: Minimizes schema duplication and supports both roles with one pipeline.
- **Alternatives considered**: Separate tables per role (rejected: unnecessary complexity).

## Decision 3: Retention window
- **Decision**: Retain notifications for 30 days with periodic cleanup.
- **Rationale**: Keeps UI useful without unbounded growth.
- **Alternatives considered**: No cleanup (rejected: unbounded storage).
