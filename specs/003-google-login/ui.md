# UI Spec: Customer Google Login

## Scope
Customer-facing login screen updates to support Google sign-in while preserving email/password login.

## Screens

### Login (Public)
Location: `src/app/[locale]/(public)/login/page.tsx`

## Layout & Components
- Header with title/subtitle matching existing login style.
- Primary button for “Sign in with Google”.
- Divider text between Google and email/password form.
- Existing email/password form with submit button.
- Inline error message area for OAuth or credential errors.

## States
- Default: Google button visible, email/password form enabled.
- Loading: Google button shows loading state while redirecting to provider.
- Error: OAuth failure or cancel shows a clear error message.
- Success: Redirect to callback destination.

## Behavior
- Clicking Google button starts OAuth sign-in with callbackUrl.
- After success, user returns to original destination (e.g., booking page).
- If OAuth fails or user cancels, show a friendly error with retry guidance.
- Email/password login remains unchanged.
