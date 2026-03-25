# Đặc tả tính năng: Đăng nhập Google cho khách hàng

**Feature Branch**: `003-google-login`  
**Created**: 2026-03-25  
**Status**: Draft  
**Input**: User description: "Cài đặt login with google cho user"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Đăng nhập bằng Google (Priority: P1)

Là khách hàng, tôi muốn đăng nhập bằng tài khoản Google để truy cập đặt lịch mà không cần tạo mật khẩu riêng.

**Vì sao ưu tiên**: Đây là giá trị chính của tính năng và giảm ma sát cho khách hàng.

**Kiểm thử độc lập**: Khách hàng có thể hoàn tất Google sign-in và về đúng trang đích (ví dụ trang booking) mà không cần email/mật khẩu.

**Kịch bản chấp nhận**:

1. **Given** khách hàng đang ở trang login, **When** chọn Google và hoàn tất sign-in, **Then** đăng nhập thành công và quay lại trang đích.
2. **Given** khách hàng chưa đăng nhập và truy cập trang booking, **When** đăng nhập bằng Google, **Then** được phép truy cập và trang tải thành công.

---

### User Story 2 - Tạo tài khoản khách hàng mới qua Google (Priority: P2)

Là khách hàng mới, tôi muốn hệ thống tự tạo tài khoản khi đăng nhập Google lần đầu.

**Vì sao ưu tiên**: Giảm ma sát onboarding và giúp Google sign-in hữu ích cho người mới.

**Kiểm thử độc lập**: Tài khoản Google mới đăng nhập một lần và có tài khoản khách hàng để đặt lịch ngay.

**Kịch bản chấp nhận**:

1. **Given** tài khoản Google chưa từng đăng nhập, **When** hoàn tất sign-in, **Then** hệ thống tạo tài khoản khách hàng mới và đăng nhập.

---

### User Story 3 - Xử lý lỗi và phục hồi (Priority: P3)

Là khách hàng, tôi muốn thấy thông báo rõ ràng nếu Google sign-in thất bại để có thể thử lại hoặc dùng cách khác.

**Vì sao ưu tiên**: Đảm bảo trải nghiệm đăng nhập ổn định và dễ hiểu khi lỗi xảy ra.

**Kiểm thử độc lập**: Giả lập sign-in thất bại và xác nhận có thông báo lỗi rõ ràng kèm hành động fallback.

**Kịch bản chấp nhận**:

1. **Given** Google sign-in thất bại, **When** quay lại trang login, **Then** hiển thị lỗi rõ ràng và cho phép retry hoặc dùng email/mật khẩu.

---

### Edge Cases

- Nếu email Google đã gắn với tài khoản khách hàng tạo bằng email/mật khẩu thì sao?
- Nếu Google không trả về email thì xử lý thế nào?
- Nếu người dùng hủy luồng Google sign-in thì sao?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hệ thống MUST hiển thị tùy chọn đăng nhập Google trên màn login khách hàng.
- **FR-002**: Hệ thống MUST tạo tài khoản khách hàng mới khi Google sign-in lần đầu nếu chưa có tài khoản theo email đó.
- **FR-003**: Hệ thống MUST đăng nhập tài khoản khách hàng hiện có khi email Google trùng.
- **FR-004**: Hệ thống MUST gán role customer và trạng thái active cho tài khoản tạo mới qua Google.
- **FR-005**: Hệ thống MUST đưa người dùng về trang đích ban đầu sau khi đăng nhập Google thành công.
- **FR-006**: Hệ thống MUST hiển thị thông báo lỗi rõ ràng khi Google sign-in thất bại hoặc bị hủy.

### Key Entities *(include if feature involves data)*

- **User**: Tài khoản khách hàng xác định bởi email và role; có thể được tạo hoặc liên kết trong Google sign-in.
- **Authentication Method**: Phương thức đăng nhập của người dùng (Google hoặc email/mật khẩu) để theo dõi và hỗ trợ.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% người dùng bắt đầu Google sign-in hoàn tất thành công.
- **SC-002**: Khách hàng mới hoàn tất Google sign-in và đến trang booking trong dưới 2 phút.
- **SC-003**: Dưới 2% lượt Google sign-in gặp lỗi không rõ ràng hoặc không được xử lý.
- **SC-004**: Ít nhất 50% đăng ký mới dùng Google sign-in trong tháng đầu sau khi phát hành.

## Assumptions

- Khách hàng có tài khoản Google hợp lệ và được phép dùng để đăng nhập.
- Đăng nhập email/mật khẩu vẫn khả dụng làm phương án dự phòng.
- Dữ liệu khách hàng hiện tại được định danh theo email và có thể match với email Google.
- Không yêu cầu thêm thông tin hồ sơ ngoài email để đặt lịch.
- Luồng xác thực admin/nhân viên không thay đổi.
