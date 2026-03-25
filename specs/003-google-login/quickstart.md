# Quickstart: Customer Google Login

## Manual Setup

- Create Google OAuth credentials (client ID and client secret).
- Configure authorized redirect URLs for the environment.
- Add the Google OAuth credentials to environment variables (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`).

## Verification

- Click “Sign in with Google” and complete the flow successfully.
- Verify a new Google account creates a customer user and can access booking.
- Verify an existing customer with matching email can sign in with Google.
- Cancel the Google sign-in flow and confirm a clear error message is shown.
- Verify the login page shows a fallback hint to use email/password after OAuth errors.
