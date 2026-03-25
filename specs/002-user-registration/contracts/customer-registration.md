# Contract: Customer Registration

## Scope
Define customer registration API behavior for email + password sign-up.

## Endpoints

### POST /api/auth/register
**Auth**: Not required

**Request**
- email
- password

**Behavior**
- Validate email format and non-empty password.
- Reject if email already exists.
- Create user with role `customer` and status `active`.

**Responses**
- 201 Created: `{ id, email }` (minimal user payload)
- 400 Bad Request: `{ code, message }` for validation errors
- 409 Conflict: `{ code, message }` if email exists
