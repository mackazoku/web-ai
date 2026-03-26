# Đặc tả tính năng: Sidebar dùng chung cho Admin

**Feature Branch**: `007-admin-shared-sidebar`  
**Created**: 2026-03-26  
**Status**: Draft  
**Input**: User description: "Fix admin sidebar to show on all admin pages"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Điều hướng admin nhất quán (Priority: P1)

Là admin, tôi muốn sidebar điều hướng giống nhau trên mọi trang admin để không bị mất ngữ cảnh.

**Why this priority**: Sidebar nhất quán là nền tảng cho trải nghiệm admin.

**Independent Test**: Di chuyển giữa các trang admin và xác nhận sidebar luôn hiển thị nhất quán.

**Acceptance Scenarios**:

1. **Given** admin đang ở bất kỳ trang admin, **When** trang render, **Then** sidebar hiển thị với danh mục giống nhau.
2. **Given** admin chuyển sang trang admin khác, **When** trang tải, **Then** sidebar vẫn hiển thị, không bị nhảy layout.

---

### User Story 2 - Active state chính xác (Priority: P2)

Là admin, tôi muốn menu hiện tại được highlight để biết mình đang ở đâu.

**Why this priority**: Active state giúp định hướng tốt hơn.

**Independent Test**: Mở nhiều trang admin và xác nhận active item cập nhật đúng.

**Acceptance Scenarios**:

1. **Given** admin đang ở trang users, **When** sidebar hiển thị, **Then** mục Users được highlight.

---

### Edge Cases

- Nếu non-admin vào trang admin thì sao?
- Nếu sidebar data không load được thì sao?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hệ thống MUST render sidebar chung trên mọi trang admin.
- **FR-002**: Hệ thống MUST highlight đúng menu theo route hiện tại.
- **FR-003**: Hệ thống MUST giữ nguyên style admin hiện có.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Sidebar hiển thị trên 100% route admin.
- **SC-002**: Active state đúng cho tất cả menu admin.

## Assumptions

- Admin routes nằm dưới `src/app/[locale]/(admin)/admin/*`.
- Auth gating admin hiện tại không đổi.
