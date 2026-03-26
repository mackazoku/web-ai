# UI Spec: Admin Services Screen

## Overview
- **Screens**: Admin Services.
- **Intent**: Provide an editorial, high-end services overview with clear action entry points.
- **Design Source**: `docs/design/ui/admin/screens/services/`.
 - **Approved Additions**: Search + filters, status pill system, visibility toggle, and service health insights.

## Navigation and entry points
- Entry via admin sidebar "Services".
- Breadcrumb header indicates Admin -> Services.
- Primary action: "Add New Service" button in header.
 - Secondary actions: Search input, status filters, and quick duration filter chips.

## States
- **Loading**: Skeleton cards or placeholders in the grid.
- **Empty**: Friendly empty state with CTA to add a service.
- **Error**: Inline message with retry action.
- **Success**: List of services plus summary/insight block.

## Forms and validation rules
- No inline forms in v1. Actions route to dedicated forms if/when enabled.

## Accessibility notes
- Action buttons are keyboard focusable.
- Cards have visible focus states and readable contrast.
- Icons include accessible labels.

## i18n keys (new/updated)
- `AdminServices.title`
- `AdminServices.subtitle`
- `AdminServices.add`
- `AdminServices.search.placeholder`
- `AdminServices.filters.status`
- `AdminServices.filters.duration`
- `AdminServices.filters.all`
- `AdminServices.status.active`
- `AdminServices.status.draft`
- `AdminServices.status.hidden`
- `AdminServices.actions.manage`
- `AdminServices.actions.edit`
- `AdminServices.actions.visibility`
- `AdminServices.insights.title`
- `AdminServices.insights.total`
- `AdminServices.insights.active`
- `AdminServices.insights.draft`
- `AdminServices.fallback.description`
- `AdminServices.empty.title`
- `AdminServices.empty.description`
- `AdminServices.empty.action`
- `AdminServices.error.title`
- `AdminServices.error.retry`
