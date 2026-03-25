# Research: Customer Google Login

## Decision 1: Use Google OAuth through existing auth system
- **Decision**: Add Google sign-in using the existing authentication system so customers can sign in without a password.
- **Rationale**: Aligns with current auth flow and reduces friction for customers.
- **Alternatives considered**: Custom OAuth implementation (rejected: higher risk and maintenance).

## Decision 2: Account linking by email
- **Decision**: Match Google accounts to existing customer accounts by email and sign them in.
- **Rationale**: Prevents duplicate accounts and allows existing customers to use Google sign-in.
- **Alternatives considered**: Always create a new account (rejected: duplicates and confusion).

## Decision 3: Handle missing or canceled Google sign-in
- **Decision**: If Google does not provide an email or the user cancels, return to login with a clear error and allow retry or email/password.
- **Rationale**: Ensures a clear recovery path and avoids partial accounts.
- **Alternatives considered**: Partial account creation without email (rejected: cannot support booking access).

## Decision 4: Destination preservation
- **Decision**: After successful Google sign-in, redirect to the original destination (e.g., booking page).
- **Rationale**: Matches existing login flow expectations and improves user experience.
- **Alternatives considered**: Always redirect to a fixed home page (rejected: breaks intended flow).
