# Brainstorming: User Login Booking

## Suggestions Log
- ID: S-001
  - Title: Chặn booking nếu chưa đăng nhập
  - Description: Chặn vào booking flow và gửi booking khi user chưa xác thực.
  - Scope impact: Booking flow public + booking APIs phải kiểm tra auth.
  - Related screens/features: Booking flow, login screen, booking API.
  - Trade-offs: Tăng friction vs. tăng tính toàn vẹn dữ liệu.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
- ID: S-002
  - Title: My Bookings theo user
  - Description: Đảm bảo My Bookings chỉ trả về và hiển thị booking của user đã xác thực.
  - Scope impact: Lọc dữ liệu ở API + logic hiển thị UI.
  - Related screens/features: My Bookings, booking API.
  - Trade-offs: Cần kiểm tra ownership vs. đảm bảo riêng tư và chính xác.
  - Estimated complexity: Low
  - Status: approved
  - Owner decision: approved
- ID: S-003
  - Title: Liên kết ownership cho booking
  - Description: Lưu tham chiếu customer trên booking và bắt buộc không null.
  - Scope impact: Data model và migration nếu thiếu.
  - Related screens/features: Booking creation, admin dashboards, reporting.
  - Trade-offs: Cần migration dữ liệu vs. tăng tính truy vết.
  - Estimated complexity: Medium
  - Status: approved
  - Owner decision: approved
