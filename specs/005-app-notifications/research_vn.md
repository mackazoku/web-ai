# Nghiên cứu: Thông báo trong ứng dụng

## Quyết định 1: Polling thay vì realtime
- **Decision**: Dùng polling (30s) thay vì WebSocket/SSE.
- **Rationale**: Dễ vận hành trên serverless và đủ cho thông báo booking.
- **Alternatives considered**: WebSocket (loại bỏ: phức tạp), SSE (loại bỏ: giới hạn kết nối).

## Quyết định 2: Dùng chung cho admin và customer
- **Decision**: Dùng một model notification chung, gắn theo user.
- **Rationale**: Tránh trùng schema và dùng chung pipeline.
- **Alternatives considered**: Tách bảng theo role (loại bỏ: phức tạp).

## Quyết định 3: Retention 30 ngày
- **Decision**: Lưu thông báo 30 ngày và có dọn dẹp định kỳ.
- **Rationale**: Giữ UI hữu ích, tránh tăng dữ liệu vô hạn.
- **Alternatives considered**: Không dọn dẹp (loại bỏ: dữ liệu phình).
