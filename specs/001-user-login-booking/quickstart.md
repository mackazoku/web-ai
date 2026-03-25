# Quickstart: User Login Booking

## Manual Setup

- Run Prisma migrations after pulling changes (adds booking ownership fields and customer role).

## Verification

- Attempt booking while logged out → redirected to login or blocked.
- Log in and complete a booking → booking is linked to the user.
- Open My Bookings → only current user’s bookings are listed.
