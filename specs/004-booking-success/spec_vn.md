# Đặc tả tính năng: Dialog đặt vé thành công

**Feature Branch**: `004-booking-success`  
**Created**: 2026-03-26  
**Status**: Draft  
**Input**: User description: "Dialog thông báo đặt vé thành công và nhảy sang màn hình bookings. design lấy từ docs/design/ui/public/screens/booking_success_dialog"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Xác nhận đặt vé thành công (Priority: P1)

Là khách hàng, tôi muốn thấy dialog thông báo đặt vé thành công sau khi đặt lịch để biết đã tạo booking và có thể chuyển sang xem bookings.

**Vì sao ưu tiên**: Xác nhận hành động quan trọng nhất và định hướng bước tiếp theo.

**Kiểm thử độc lập**: Hoàn tất đặt booking và thấy dialog hiện ra rồi chuyển sang màn bookings.

**Kịch bản chấp nhận**:

1. **Given** khách hàng submit booking thành công, **When** phản hồi trả về success, **Then** hiển thị dialog theo design đã duyệt.
2. **Given** dialog thành công đang hiển thị, **When** hoàn tất hành động xác nhận, **Then** điều hướng sang màn bookings.

---

### User Story 2 - Đóng dialog hoặc tự chuyển trang (Priority: P2)

Là khách hàng, tôi muốn có đường thoát rõ ràng khỏi dialog để tiếp tục mà không bị mắc kẹt.

**Vì sao ưu tiên**: Tránh người dùng bị dừng lại sau khi đặt lịch thành công.

**Kiểm thử độc lập**: Kích hoạt dialog và xác nhận có thể đóng hoặc tự chuyển sang bookings.

**Kịch bản chấp nhận**:

1. **Given** dialog đang hiển thị, **When** người dùng xác nhận hoặc dialog tự chuyển, **Then** điều hướng sang bookings.

---

### User Story 3 - Fallback khi điều hướng lỗi (Priority: P3)

Là khách hàng, tôi muốn dialog không chặn tôi nếu tự điều hướng thất bại để vẫn vào được bookings.

**Vì sao ưu tiên**: Đảm bảo luồng không bị kẹt khi điều hướng tự động lỗi.

**Kiểm thử độc lập**: Giả lập lỗi điều hướng và xác nhận có đường dẫn thủ công tới bookings.

**Kịch bản chấp nhận**:

1. **Given** dialog không thể điều hướng tự động, **When** hiển thị hành động fallback, **Then** khách hàng có thể vào bookings thủ công.

---

### Edge Cases

- Điều gì xảy ra khi API booking phản hồi chậm và dialog chưa nên hiển thị?
- Điều gì xảy ra nếu khách hàng đóng dialog trước khi điều hướng?
- Điều gì xảy ra nếu trang bookings không truy cập được (lỗi mạng/route)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hệ thống MUST hiển thị dialog đặt vé thành công sau khi submit booking thành công.
- **FR-002**: Dialog MUST theo đúng design ở `docs/design/ui/public/screens/booking_success_dialog`.
- **FR-003**: Dialog MUST điều hướng khách hàng sang màn bookings sau khi xác nhận.
- **FR-004**: Dialog MUST có cách tiếp tục rõ ràng nếu điều hướng tự động thất bại.
- **FR-005**: Dialog MUST không hiển thị khi booking thất bại.

### Key Entities *(include if feature involves data)*

- **Booking**: Booking mới tạo được dùng để xác nhận trong dialog.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 95% booking thành công hiển thị dialog trong vòng 2 giây.
- **SC-002**: 95% người dùng tới màn bookings trong vòng 10 giây sau booking thành công.
- **SC-003**: Dưới 2% booking thành công gây nhầm lẫn về bước tiếp theo (theo support/feedback).

## Assumptions

- Booking submission đã trả về success và booking ID.
- Màn bookings tồn tại ở `/[locale]/bookings`.
- Asset UI đã được duyệt tại `docs/design/ui/public/screens/booking_success_dialog`.
- Điều hướng được xử lý phía client sau khi success.
