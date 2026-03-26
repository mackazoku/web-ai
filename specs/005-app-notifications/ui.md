# UI Spec: In-App Notifications

## Overview
- **Screens**: Admin dashboard header, customer public header.
- **Intent**: Show unread badge and a list of recent notifications.

## Navigation and Entry Points
- Entry via notification bell icon in header.
- Click opens dropdown/panel with recent items.

## States
- **Empty**: show “no notifications yet”.
- **Unread**: badge count visible.
- **Loading**: skeleton or spinner while polling refresh.
- **Error**: inline message and retry action.

## Forms and Validation Rules
- No forms; actions are mark-as-read.

## Accessibility Notes
- Bell icon is keyboard focusable.
- Dropdown is dismissible via Escape.

## i18n Keys (new/updated)
- `Notifications.title`
- `Notifications.empty`
- `Notifications.error`
- `Notifications.retry`
- `Notifications.markRead`
