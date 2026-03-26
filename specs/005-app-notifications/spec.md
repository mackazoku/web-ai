# Feature Specification: In-App Notifications

**Feature Branch**: `005-app-notifications`  
**Created**: 2026-03-26  
**Status**: Draft  
**Input**: User description: "In-app notifications, polling, hiển thị cho cả admin và customer"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View unread notifications (Priority: P1)

As an admin or customer, I want to see unread notifications so I can quickly identify new booking-related activity.

**Why this priority**: This is the core value of notifications and should work as an MVP.

**Independent Test**: Create a booking event and verify the unread badge and list update within the polling interval.

**Acceptance Scenarios**:

1. **Given** a booking-related notification exists, **When** the user opens the notifications menu, **Then** the unread item is visible.
2. **Given** there are unread notifications, **When** the polling interval elapses, **Then** the unread count updates.

---

### User Story 2 - Mark notifications as read (Priority: P2)

As an admin or customer, I want to mark notifications as read so I can clear the unread state once I’ve reviewed them.

**Why this priority**: Keeps the notification list actionable and prevents persistent unread noise.

**Independent Test**: Open a notification and confirm the unread badge decreases accordingly.

**Acceptance Scenarios**:

1. **Given** a notification is unread, **When** the user marks it as read, **Then** the unread count decreases.

---

### User Story 3 - See recent history (Priority: P3)

As an admin or customer, I want to view recent notifications so I can reference recent booking activity.

**Why this priority**: Provides context beyond just unread items.

**Independent Test**: Load the notifications list and confirm it shows recent items within the retention window.

**Acceptance Scenarios**:

1. **Given** notifications exist in the last 30 days, **When** the user opens the list, **Then** those items are displayed.

---

### Edge Cases

- What happens when there are no notifications?
- What happens if the polling request fails temporarily?
- What happens if a user has a large number of notifications?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST create notifications for booking-related events for both admin and customer roles.
- **FR-002**: The system MUST expose a list of recent notifications for the current user.
- **FR-003**: The system MUST support polling to refresh unread counts at a 30-second interval.
- **FR-004**: The system MUST allow marking notifications as read.
- **FR-005**: The system MUST retain notifications for 30 days.

### Key Entities *(include if feature involves data)*

- **Notification**: Represents a booking-related event delivered to a specific user.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Unread count updates within 30 seconds of a new booking notification.
- **SC-002**: Users can mark a notification as read in under 3 seconds.
- **SC-003**: 95% of notification polls succeed without errors.
- **SC-004**: Notification list loads in under 2 seconds for up to 100 items.

## Assumptions

- Existing authentication is used to identify the current user.
- Notification triggers are limited to booking events for v1.
- Retention is enforced at 30 days with periodic cleanup.
- Both admin and customer interfaces can render a notification bell/dropdown.
