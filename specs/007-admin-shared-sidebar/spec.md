# Feature Specification: Admin Shared Sidebar

**Feature Branch**: `007-admin-shared-sidebar`  
**Created**: 2026-03-26  
**Status**: Draft  
**Input**: User description: "Fix admin sidebar to show on all admin pages"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Consistent admin navigation (Priority: P1)

As an admin, I want the same sidebar navigation on every admin page so I can move around without losing context.

**Why this priority**: A consistent sidebar is foundational to admin usability.

**Independent Test**: Navigate between admin pages and confirm the sidebar remains visible and consistent.

**Acceptance Scenarios**:

1. **Given** an admin is on any admin page, **When** the page renders, **Then** the sidebar is visible with the same items.
2. **Given** the admin navigates to another admin page, **When** it loads, **Then** the sidebar still appears without layout jumps.

---

### User Story 2 - Correct active state (Priority: P2)

As an admin, I want the current section highlighted in the sidebar so I can see where I am.

**Why this priority**: Active state improves orientation and reduces navigation errors.

**Independent Test**: Visit multiple admin pages and verify the active nav item updates.

**Acceptance Scenarios**:

1. **Given** the admin is on the users page, **When** the sidebar renders, **Then** Users is highlighted.

---

### Edge Cases

- What happens if a non-admin role reaches an admin page?
- What happens if the sidebar data cannot load?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST render a shared admin sidebar across all admin pages.
- **FR-002**: The system MUST highlight the active nav item based on the current route.
- **FR-003**: The system MUST preserve existing admin layout styling.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Sidebar is visible on 100% of admin routes.
- **SC-002**: Active state is correct for all admin nav items.

## Assumptions

- Admin routes are under `src/app/[locale]/(admin)/admin/*`.
- Existing admin auth gating remains unchanged.
