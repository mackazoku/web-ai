# Feature Specification: Admin Services Screen

**Feature Branch**: `006-admin-services`  
**Created**: 2026-03-26  
**Status**: Draft  
**Input**: User description: "Cai dat man hinh services cho admin dua tren docs/design/ui/admin/screens/services"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View services overview (Priority: P1)

As an admin, I want to view the services overview so I can understand the current offerings and their status at a glance.

**Why this priority**: This is the core purpose of the screen and delivers immediate operational visibility.

**Independent Test**: Open the Services screen and confirm the list and summary blocks render with available data.

**Acceptance Scenarios**:

1. **Given** services exist, **When** the admin opens the Services screen, **Then** service cards and summary blocks are displayed.
2. **Given** a service is active, **When** it is shown in the list, **Then** its status is visible.

---

### User Story 2 - Start managing a service (Priority: P2)

As an admin, I want clear actions on each service so I can start managing or editing it quickly.

**Why this priority**: Action entry points are required to make the list operational.

**Independent Test**: Hover or focus on a service card and confirm management actions are visible and actionable.

**Acceptance Scenarios**:

1. **Given** a service card is visible, **When** the admin focuses on it, **Then** management actions are available.

---

### User Story 3 - Start creating a new service (Priority: P3)

As an admin, I want an obvious "Add New Service" action so I can begin adding new offerings.

**Why this priority**: Supports growth of service catalog without hunting for actions.

**Independent Test**: Confirm the header includes a prominent action to add a new service.

**Acceptance Scenarios**:

1. **Given** the Services screen is loaded, **When** the admin scans the header, **Then** an add-service action is present.

---

### Edge Cases

- What happens when there are no services?
- What happens when service images are missing?
- What happens when a service name or description is unusually long?
- What happens when the services API fails to load?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST render the Services screen following the approved design in `docs/design/ui/admin/screens/services/`.
- **FR-002**: The system MUST display a list of services with status, duration, price, and description.
- **FR-003**: The system MUST show a summary/insight block for service totals.
- **FR-004**: The system MUST provide visible action entry points for managing each service.
- **FR-005**: The system MUST provide a primary action to start adding a new service.
- **FR-006**: The system MUST support loading, empty, and error states.

### Key Entities *(include if feature involves data)*

- **Service**: Represents a spa service offering with status, duration, price, description, and media.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The Services screen renders within 2 seconds for up to 50 services.
- **SC-002**: 90% of admins can locate the add-service action within 5 seconds.
- **SC-003**: Service cards remain readable with long names (no clipped essential info).
- **SC-004**: Empty and error states are displayed consistently when applicable.

## Assumptions

- Services data is available from existing admin services APIs.
- The initial delivery focuses on UI and entry points; deeper CRUD flows can be connected later if not already available.
- The screen is primarily used on desktop; mobile support is still required but not the primary target.
