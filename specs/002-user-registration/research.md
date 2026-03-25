# Research: User Registration

## Decision 1: Credentials-only registration (no verification)
- **Decision**: Create accounts with email + password without email verification.
- **Rationale**: Matches current requirement for immediate login and booking.
- **Alternatives considered**: Email verification or magic links (rejected: adds friction and scope).

## Decision 2: Customer role assignment
- **Decision**: Assign newly registered users the `customer` role.
- **Rationale**: Booking requires customer role; keeps admin/staff separate.
- **Alternatives considered**: Single role for all users (rejected: weak role separation).

## Decision 3: Reuse existing credentials auth
- **Decision**: Use existing NextAuth credentials login for customers.
- **Rationale**: Reduces implementation complexity and aligns with current auth strategy.
- **Alternatives considered**: Custom auth endpoint or third-party provider (rejected: unnecessary scope).
