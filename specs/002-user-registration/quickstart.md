# Quickstart: User Registration

## Manual Setup

- Run Prisma migrations after pulling changes (includes adding `customer` to Role enum for existing DBs).

## Verification

- Register with email + password and receive success response.
- Attempt duplicate email registration and receive conflict error.
- Submit invalid email/password and receive validation error.
- Log in with newly created credentials and proceed to booking.
