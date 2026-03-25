# Design Suggestions: User Login Booking

## Suggestions
- ID: D-001
  - Title: Đồng nhất điểm vào login
  - Description: Đảm bảo mọi điểm vào booking (nút Book Now, route booking, và booking API) đều chuyển hướng hoặc chặn nếu chưa đăng nhập.
  - Scope impact: UI entry point và logic chặn ở API.
  - Related screens/features: Booking flow, login screen, booking API.
  - Trade-offs: Tăng một bước cho user vs. đảm bảo booking gắn user.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: D-002
  - Title: Enforce ownership cho booking
  - Description: Bắt buộc booking có tham chiếu customer không null và đảm bảo My Bookings chỉ truy vấn theo user.
  - Scope impact: Validation data model và lọc query ở API.
  - Related screens/features: My Bookings, booking creation, reporting.
  - Trade-offs: Cần backfill dữ liệu booking cũ vs. tăng tính toàn vẹn.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
