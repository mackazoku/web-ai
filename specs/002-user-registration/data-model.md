# Data Model: User Registration

## Entities

- **User**
  - Represents a customer account with email and password.

## Relationships

- User accounts are standalone for registration and later used to own bookings.

## Validation Rules

- Email must be unique.
- Password must be non-empty.
- New users are assigned the `customer` role and `active` status.

## State Transitions

- User status defaults to `active` on creation.
