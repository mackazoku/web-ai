# Data Model: Customer Google Login

## Entities

- **User**
  - Customer account with email and role.
  - Stores the primary authentication method.
  - Tracks external identity linkage for Google sign-in.

## Relationships

- A user may be linked to a single Google identity for sign-in.

## Validation Rules

- Google sign-in must provide an email to proceed.
- Email must be unique across users.
- New users created via Google sign-in receive role `customer` and status `active`.

## State Transitions

- New Google sign-in creates an active customer account.
- Existing customer account can be linked to Google sign-in and remains active.
