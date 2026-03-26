# Data Model: In-App Notifications

## Entities

- **Notification**
  - Represents an in-app notification delivered to a user.
  - Key attributes: recipient user id, title, body, type, status (read/unread), createdAt.

## Relationships

- Notification belongs to a User.

## Validation Rules

- Notifications are scoped to the authenticated user.
- Read status changes only by the recipient.

## State Transitions

- Unread → Read when user marks it as read.
