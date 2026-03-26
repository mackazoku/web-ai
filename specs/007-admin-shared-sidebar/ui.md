# UI Spec: Admin Shared Sidebar

## Overview
- **Screens**: All admin pages.
- **Intent**: Provide a consistent sidebar with active state highlighting.
 - **Approved Additions**: Collapsible sidebar on smaller screens and active rail indicator.

## Navigation and entry points
- Sidebar appears on all admin routes.
- Active nav item reflects current route.
 - Sidebar can collapse into an icon rail on tablet widths and below.

## States
- **Loading**: Not applicable (static sidebar).
- **Empty**: Not applicable.
- **Error**: Not applicable.

## Forms and validation rules
- None.

## Accessibility notes
- Sidebar links are keyboard focusable.
- Active item has clear visual contrast.
 - Collapse toggle is keyboard accessible with an aria-label.

## i18n keys (new/updated)
- `Admin.sidebar.toggle`
