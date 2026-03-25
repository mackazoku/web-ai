# Research: User Login Booking

## Decision 1: Enforce login before booking
- **Decision**: Require authenticated customer session for booking entry points and booking APIs.
- **Rationale**: Aligns with requirement to prevent anonymous bookings and ensures every booking is tied to a user.
- **Alternatives considered**: Allow guest booking with optional post-login linking (rejected: allows anonymous bookings and weakens data integrity).

## Decision 2: Associate booking to customer account
- **Decision**: Persist a user/customer reference on each booking (e.g., link to CustomerAccount/User).
- **Rationale**: Enables “My Bookings” to be scoped to the authenticated user and supports auditability.
- **Alternatives considered**: Only store email/phone (rejected: cannot guarantee ownership, fragile when credentials change).

## Decision 3: Use existing auth and booking endpoints
- **Decision**: Reuse existing auth endpoints and booking APIs, adding auth gating and ownership checks.
- **Rationale**: Minimizes scope and leverages current system design and contracts.
- **Alternatives considered**: Introduce a new booking flow or new auth provider (rejected: unnecessary complexity for this change).
