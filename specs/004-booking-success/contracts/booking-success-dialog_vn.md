# Hợp đồng: Dialog đặt vé thành công

## Phạm vi
Định nghĩa hành vi dialog thành công sau khi tạo booking.

## Trigger
- Booking submission trả về success.

## Hành vi kỳ vọng
- Hiển thị dialog theo design đã duyệt.
- Có hành động xác nhận để chuyển sang bookings.
- Có fallback nếu điều hướng tự động thất bại.

## Điều hướng
- Đích: `/[locale]/bookings`.

## Lỗi
- Không hiển thị dialog khi booking thất bại.
- Nếu điều hướng lỗi, hiển thị đường dẫn thủ công tới bookings.
