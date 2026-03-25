# Data Model: User Login Booking

## Entities

- **User**
  - Represents authenticated identities (customer or staff).
- **CustomerAccount**
  - Represents customer profile linked to a User.
- **Booking**
  - Represents a reservation created by a customer.

## Relationships

- **User 1-1 CustomerAccount**: Customer accounts are tied to a user identity.
- **CustomerAccount 1-N Booking**: Each booking must belong to exactly one customer account.

## Validation Rules

- Booking creation requires an authenticated customer session.
- New bookings must store a customer reference (customerId/userId); existing records may remain null.

## State Transitions

- Booking status follows existing lifecycle (`pending` → `confirmed`/`cancelled`), unchanged by this feature.
