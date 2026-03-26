# Feature Specification: Thông báo trong ứng dụng

**Feature Branch**: `005-app-notifications`  
**Created**: 2026-03-26  
**Status**: Draft  
**Input**: User description: "In-app notifications, polling, hiển thị cho cả admin và customer"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Xem thông báo chưa đọc (Priority: P1)

Là admin hoặc customer, tôi muốn thấy thông báo chưa đọc để nhanh chóng nhận biết các hoạt động booking mới.

**Why this priority**: Đây là giá trị cốt lõi và đủ làm MVP.

**Independent Test**: Tạo một booking event và xác nhận badge unread + danh sách cập nhật trong khoảng polling.

**Acceptance Scenarios**:

1. **Given** có thông báo booking, **When** người dùng mở menu thông báo, **Then** item chưa đọc hiển thị.
2. **Given** có thông báo chưa đọc, **When** đến thời điểm polling, **Then** badge unread được cập nhật.

---

### User Story 2 - Đánh dấu đã đọc (Priority: P2)

Là admin hoặc customer, tôi muốn đánh dấu thông báo đã đọc để dọn trạng thái unread sau khi xem.

**Why this priority**: Giữ danh sách gọn và tránh unread tồn tại mãi.

**Independent Test**: Mở một thông báo và xác nhận badge unread giảm.

**Acceptance Scenarios**:

1. **Given** thông báo chưa đọc, **When** người dùng đánh dấu đã đọc, **Then** unread count giảm.

---

### User Story 3 - Xem lịch sử gần đây (Priority: P3)

Là admin hoặc customer, tôi muốn xem lịch sử thông báo gần đây để tham chiếu hoạt động booking.

**Why this priority**: Bổ sung ngữ cảnh ngoài unread.

**Independent Test**: Tải danh sách thông báo và xác nhận các item trong 30 ngày hiển thị.

**Acceptance Scenarios**:

1. **Given** có thông báo trong 30 ngày gần đây, **When** người dùng mở danh sách, **Then** các item đó được hiển thị.

---

### Edge Cases

- Khi không có thông báo sẽ hiển thị gì?
- Nếu polling lỗi tạm thời thì xử lý ra sao?
- Khi người dùng có rất nhiều thông báo thì sao?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hệ thống PHẢI tạo thông báo booking cho cả admin và customer.
- **FR-002**: Hệ thống PHẢI cung cấp danh sách thông báo gần đây cho user hiện tại.
- **FR-003**: Hệ thống PHẢI hỗ trợ polling cập nhật unread mỗi 30 giây.
- **FR-004**: Hệ thống PHẢI cho phép đánh dấu thông báo đã đọc.
- **FR-005**: Hệ thống PHẢI lưu thông báo trong 30 ngày.

### Key Entities *(include if feature involves data)*

- **Notification**: Đại diện cho event booking gửi tới một user cụ thể.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Unread count cập nhật trong 30 giây sau khi có booking mới.
- **SC-002**: Người dùng đánh dấu đã đọc trong dưới 3 giây.
- **SC-003**: 95% polling thành công không lỗi.
- **SC-004**: Danh sách thông báo tải dưới 2 giây cho tối đa 100 item.

## Assumptions

- Dùng auth hiện có để nhận diện user.
- V1 chỉ trigger từ booking events.
- Retention 30 ngày và có dọn dẹp định kỳ.
- Giao diện admin và customer đều có thể hiển thị chuông/bảng thông báo.
