# UI Specification (Summary)

## Public
- Giao diện editorial dịu, headline serif, nút olive.
- Booking flow: service → branch → date/time → therapist → details → summary.
- Calendar dạng month grid, khóa ngày quá khứ.
- Danh sách therapist lấy từ DB theo branch/service.
- Màn My Bookings hiển thị lịch sắp tới và đã qua.

## Admin
- Sidebar navigation, dashboard là màn chính.
- Dashboard cards lấy từ API DB-backed.
- Day-view calendar (09:00–18:00, lưới 30 phút).
- Booking block hiển thị 1 giờ; admin thấy toàn bộ, staff chỉ thấy lịch của mình.
- Calendar có điều hướng ngày trước/sau.
- Nâng cấp dễ dùng:
  - Header giờ rõ ràng, canh đúng cột grid.
  - Layout full-width tránh bị xuống dòng header.
  - Legend + màu trạng thái pending/approved/cancelled.
  - Đường chỉ thời gian hiện tại ở ngày hôm nay.
  - Header giờ sticky khi scroll trên màn nhỏ.
  - Booking block hiển thị service + khách + staff, hover/tooltip xem chi tiết.
