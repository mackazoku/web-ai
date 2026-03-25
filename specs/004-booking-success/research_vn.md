# Nghiên cứu: Dialog đặt vé thành công

## Quyết định 1: Dùng asset design đã duyệt
- **Decision**: Implement dialog theo design tại `docs/design/ui/public/screens/booking_success_dialog`.
- **Rationale**: Đảm bảo đồng bộ thiết kế và tránh lệch hướng.
- **Alternatives considered**: Tạo dialog mới (loại bỏ: không cần thiết).

## Quyết định 2: Điều hướng sang bookings sau khi thành công
- **Decision**: Sau booking thành công, điều hướng khách hàng sang màn bookings.
- **Rationale**: Phù hợp kỳ vọng kiểm tra lịch sắp tới.
- **Alternatives considered**: Ở lại trang booking (loại bỏ: thiếu rõ ràng bước tiếp theo).

## Quyết định 3: Có fallback khi điều hướng lỗi
- **Decision**: Nếu tự điều hướng lỗi, hiển thị đường dẫn thủ công tới bookings.
- **Rationale**: Tránh người dùng bị kẹt sau khi đặt lịch thành công.
- **Alternatives considered**: Không xử lý (loại bỏ: UX kém).

## Quyết định 4: Dùng dialog shell dùng chung
- **Decision**: Tạo component dialog shell dùng chung cho public UI và render nội dung dialog booking bên trong.
- **Rationale**: Các dialog sắp tới có thể tái sử dụng focus trap, overlay, và hành vi đóng mà không lặp logic.
- **Alternatives considered**: Mỗi dialog tự xử lý (loại bỏ: lặp logic a11y/focus).
