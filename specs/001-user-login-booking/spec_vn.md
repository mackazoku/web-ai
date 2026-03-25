# Feature Specification: User Login Booking

**Feature Branch**: `001-user-login-booking`  
**Created**: 2026-03-25  
**Status**: Draft  
**Input**: User description: "Cài đặt màn hình đăng nhập cho user, thông tin booking sẽ lưu theo user thay vì có thể book mà không cần đăng nhập như hiện tại"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Login to Book (Priority: P1)

Là khách hàng, tôi phải đăng nhập trước khi đặt lịch để booking được gắn với tài khoản của tôi.

**Why this priority**: Đây là thay đổi cốt lõi nhằm ngăn booking ẩn danh và đảm bảo trách nhiệm.

**Independent Test**: Có thể kiểm thử độc lập bằng cách đăng nhập và hoàn tất một booking, xác nhận booking được gắn với user.

**Acceptance Scenarios**:

1. **Given** khách hàng có tài khoản hợp lệ, **When** họ đăng nhập và hoàn tất booking, **Then** booking được lưu dưới tài khoản của họ.
2. **Given** khách hàng chưa đăng nhập, **When** họ bắt đầu booking, **Then** họ được yêu cầu đăng nhập trước khi tiếp tục.

---

### User Story 2 - View My Bookings (Priority: P2)

Là khách hàng đã đăng nhập, tôi có thể xem chỉ các booking của mình.

**Why this priority**: Người dùng cần xác nhận và quản lý lịch sử booking của chính họ sau khi login bắt buộc.

**Independent Test**: Tạo hai user với booking riêng và xác nhận mỗi user chỉ thấy booking của mình.

**Acceptance Scenarios**:

1. **Given** khách hàng đã đăng nhập và có booking, **When** họ mở My Bookings, **Then** chỉ booking của họ được hiển thị.

---

### User Story 3 - Block Anonymous Booking (Priority: P3)

Là doanh nghiệp, tôi muốn chặn booking ẩn danh để mọi booking đều có danh tính user.

**Why this priority**: Đảm bảo dữ liệu chính xác và hỗ trợ quản lý theo user.

**Independent Test**: Thử đặt lịch khi chưa đăng nhập và xác nhận không thể hoàn tất booking.

**Acceptance Scenarios**:

1. **Given** user chưa đăng nhập, **When** họ cố gửi booking, **Then** booking bị từ chối và yêu cầu đăng nhập.

---

### Edge Cases

- Điều gì xảy ra khi thông tin đăng nhập không hợp lệ?
- Hệ thống xử lý thế nào nếu session hết hạn giữa chừng?
- Điều gì xảy ra nếu user đăng nhập nhiều thiết bị và đặt lịch đồng thời?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hệ thống PHẢI cung cấp màn hình đăng nhập cho user từ các điểm vào booking.
- **FR-002**: Hệ thống PHẢI yêu cầu xác thực trước khi khởi tạo hoặc gửi booking.
- **FR-003**: Hệ thống PHẢI gắn mọi booking với danh tính user đã xác thực.
- **FR-004**: Hệ thống PHẢI chặn booking ẩn danh/guest.
- **FR-005**: Hệ thống PHẢI hiển thị thông báo lỗi rõ ràng khi đăng nhập thất bại.
- **FR-006**: User PHẢI chỉ xem được booking của chính mình.
- **FR-007**: Hệ thống PHẢI duy trì session xác thực trong suốt booking flow.

### Key Entities *(include if feature involves data)*

- **User**: Đại diện cho danh tính khách hàng đã xác thực.
- **Booking**: Đại diện cho đặt chỗ do user tạo và gắn với User.
- **Session**: Đại diện cho trạng thái đăng nhập của User.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 95% lần đặt lịch chỉ hoàn tất sau khi đăng nhập thành công.
- **SC-002**: 0% booking hoàn tất là ẩn danh sau khi triển khai.
- **SC-003**: 90% user có thể đăng nhập và hoàn tất booking trong vòng 3 phút.
- **SC-004**: 99% bài kiểm thử xác nhận user chỉ thấy booking của mình.

## Assumptions

- Hệ thống đã có user account và khả năng xác thực.
- Đăng ký mới và quên mật khẩu nằm ngoài phạm vi của tính năng này.
- Booking có thể gắn với user mà không cần thay đổi luồng booking hiện tại.
- User có thông tin đăng nhập khi bắt đầu booking.
