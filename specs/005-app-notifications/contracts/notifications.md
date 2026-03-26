# Contract: Notifications API

## Scope
Define API endpoints for in-app notifications.

## Endpoints

### GET /api/notifications
- **Auth**: Required (admin or customer session)
- **Query**:
  - `limit` (optional, default 20)
  - `cursor` (optional, for pagination)
- **Response**:
  - `items`: list of notifications
  - `nextCursor`: string | null
  - `unreadCount`: number

### POST /api/notifications/read
- **Auth**: Required
- **Body**:
  - `ids`: string[]
- **Response**:
  - `updated`: number

## Errors
- 401 if unauthenticated
- 403 if attempting to read notifications for another user
