# Brainstorming: Thông Báo Trong Ứng Dụng

## Suggestions Log
- ID: S-001
  - Title: Tự động dọn dẹp theo thời hạn
  - Description: Thêm job định kỳ để xóa thông báo cũ hơn 30 ngày.
  - Scope impact: Thiết lập job nền hoặc cron.
  - Related screens/features: Danh sách thông báo, bảo trì lưu trữ.
  - Trade-offs: Tăng vận hành vs. giới hạn dung lượng lưu trữ.
  - Estimated complexity: Medium
  - Status: proposed
  - Owner decision: pending
- ID: S-002
  - Title: Đánh dấu tất cả là đã đọc
  - Description: Cung cấp thao tác một lần để đánh dấu tất cả thông báo đang hiển thị là đã đọc.
  - Scope impact: UI + API bổ sung.
  - Related screens/features: Dropdown thông báo.
  - Trade-offs: Dọn dẹp nhanh hơn vs. tăng độ phức tạp UI/API.
  - Estimated complexity: Low
  - Status: proposed
  - Owner decision: pending
- ID: S-003
  - Title: Liên kết đến chi tiết booking
  - Description: Bổ sung thông tin booking để người dùng có thể nhảy tới booking liên quan.
  - Scope impact: Payload thông báo + routing UI.
  - Related screens/features: Dropdown thông báo, trang chi tiết booking.
  - Trade-offs: Nhiều ngữ cảnh hơn vs. tăng độ phụ thuộc dữ liệu.
  - Estimated complexity: Medium
  - Status: proposed
  - Owner decision: pending
