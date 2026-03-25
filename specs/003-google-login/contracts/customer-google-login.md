# Contract: Customer Google Login

## Scope
Define the customer-facing Google sign-in flow and expected outcomes.

## Entry Points

### Public Login UI
- A visible “Sign in with Google” option on the customer login page.

## Expected Behavior
- Successful Google sign-in authenticates the user and redirects to the original destination.
- First-time Google sign-in creates a customer account and authenticates the user.
- Existing account with matching email is authenticated without duplication.
- Missing email or canceled sign-in returns the user to login with a clear error and retry option.

## Errors
- Display a user-friendly error message when the sign-in flow fails or is canceled.
