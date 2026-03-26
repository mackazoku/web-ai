# Đặc tả tính năng: Màn hình Services (Admin)

**Feature Branch**: `006-admin-services`  
**Created**: 2026-03-26  
**Status**: Draft  
**Input**: User description: "Cài đặt màn hình services cho admin dựa trên docs/design/ui/admin/screens/services"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Xem tổng quan dịch vụ (Priority: P1)

Là admin, tôi muốn xem tổng quan dịch vụ để nắm trạng thái các dịch vụ đang cung cấp.

**Why this priority**: Đây là mục tiêu cốt lõi của màn hình và mang lại giá trị ngay lập tức.

**Independent Test**: Mở màn hình Services và xác nhận danh sách + khối tổng quan hiển thị theo dữ liệu.

**Acceptance Scenarios**:

1. **Given** có dịch vụ, **When** admin mở màn hình Services, **Then** thẻ dịch vụ và khối tổng quan được hiển thị.
2. **Given** dịch vụ đang active, **When** dịch vụ được hiển thị, **Then** trạng thái được thể hiện rõ.

---

### User Story 2 - Bắt đầu quản lý dịch vụ (Priority: P2)

Là admin, tôi muốn có các hành động rõ ràng trên từng dịch vụ để bắt đầu quản lý hoặc chỉnh sửa nhanh.

**Why this priority**: Điểm vào thao tác là cần thiết để danh sách có thể vận hành.

**Independent Test**: Hover hoặc focus thẻ dịch vụ và xác nhận có hành động quản lý.

**Acceptance Scenarios**:

1. **Given** thẻ dịch vụ hiển thị, **When** admin focus vào thẻ, **Then** các hành động quản lý có sẵn.

---

### User Story 3 - Bắt đầu tạo dịch vụ mới (Priority: P3)

Là admin, tôi muốn có nút “Add New Service” rõ ràng để bắt đầu thêm dịch vụ mới.

**Why this priority**: Hỗ trợ mở rộng danh mục dịch vụ nhanh chóng.

**Independent Test**: Xác nhận header có hành động thêm dịch vụ.

**Acceptance Scenarios**:

1. **Given** màn hình Services đã tải, **When** admin quan sát header, **Then** có hành động thêm dịch vụ.

---

### Edge Cases

- Không có dịch vụ thì hiển thị như thế nào?
- Ảnh dịch vụ bị thiếu thì xử lý ra sao?
- Tên/mô tả dịch vụ quá dài thì hiển thị thế nào?
- API dịch vụ lỗi thì màn hình phản ứng ra sao?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hệ thống MUST render màn hình Services đúng theo design tại `docs/design/ui/admin/screens/services/`.
- **FR-002**: Hệ thống MUST hiển thị danh sách dịch vụ với trạng thái, thời lượng, giá và mô tả.
- **FR-003**: Hệ thống MUST hiển thị khối tổng quan/số liệu dịch vụ.
- **FR-004**: Hệ thống MUST có điểm vào hành động quản lý cho từng dịch vụ.
- **FR-005**: Hệ thống MUST có hành động chính để bắt đầu thêm dịch vụ mới.
- **FR-006**: Hệ thống MUST hỗ trợ trạng thái loading, empty và error.

### Key Entities *(include if feature involves data)*

- **Service**: Đại diện cho một dịch vụ spa với trạng thái, thời lượng, giá, mô tả và media.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Màn hình Services render trong vòng 2 giây với tối đa 50 dịch vụ.
- **SC-002**: 90% admin tìm thấy nút thêm dịch vụ trong 5 giây.
- **SC-003**: Thẻ dịch vụ vẫn đọc được khi tên dài (không cắt mất thông tin quan trọng).
- **SC-004**: Empty/error states hiển thị nhất quán khi có lỗi hoặc trống dữ liệu.

## Assumptions

- Dữ liệu services đã có từ các API admin hiện có.
- Bản đầu tập trung UI và điểm vào thao tác; luồng CRUD chi tiết có thể nối sau nếu chưa có.
- Màn hình ưu tiên desktop; mobile vẫn cần hỗ trợ nhưng không phải trọng tâm.
