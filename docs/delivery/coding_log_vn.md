# Nhật ký coding

## Mục đích
Theo dõi lịch sử thực thi theo task, quyết định và ghi chú.

## Mẫu ghi nhận
- Ngày
- Phạm vi
- Quyết định
- Ghi chú triển khai
- Rủi ro / việc cần theo dõi

### 2026-03-08 - Triển khai UI public (Home, Booking, Customer Profile)
- Phạm vi:
  - Triển khai layout public home, booking flow và customer profile.
  - Thêm data fixture và i18n (EN/VN) cho public.
  - Bổ sung bảng màu olive trong Tailwind để khớp ngôn ngữ thiết kế.
- Quyết định:
  - Giữ public UI dạng server-rendered với dữ liệu placeholder.
  - Dùng olive làm màu CTA/nhấn theo thiết kế đã duyệt.
- Ghi chú triển khai:
  - Thêm màn hình customer profile tại `/[locale]/bookings`.
  - Đồng bộ màu olive trên home và booking.
- Rủi ro / theo dõi:
  - Thay data fixture bằng API khi endpoint sẵn sàng.
  - Kiểm tra responsive và tương phản màu trước khi launch.

### 2026-03-08 - Sửa lỗi Vercel 404 bằng cấu hình build Next.js
- Phạm vi:
  - Thêm cấu hình Vercel buộc dùng `@vercel/next`.
- Quyết định:
  - Ép nhận diện framework để tránh deployment rỗng.
- Ghi chú triển khai:
  - `vercel.json` đã có `builds` cho Next.js và version 2.
- Rủi ro / theo dõi:
  - Rà soát lại khi nâng cấp cấu hình Vercel để tránh deprecate.

### 2026-03-08 - Triển khai UI dashboard admin
- Phạm vi:
  - Triển khai layout dashboard admin, navigation, thẻ thống kê, lịch, chờ duyệt, và activity feed.
  - Thêm data fixture và mở rộng i18n (EN/VN) cho admin.
- Quyết định:
  - Giữ dữ liệu dashboard dạng tĩnh cho đến khi API sẵn sàng.
- Ghi chú triển khai:
  - Đồng bộ màu olive trong UI dashboard admin.
  - Thay trang admin placeholder bằng layout theo thiết kế.
- Rủi ro / theo dõi:
  - Thay fixtures bằng dữ liệu thật từ admin endpoints.
  - Xác nhận responsive trên tablet.

### 2026-03-08 - Cập nhật phạm vi MVP: cổng đặt lịch công khai
- Phạm vi:
  - Bổ sung yêu cầu, UI spec, system design, API contracts và data model cho cổng đặt lịch công khai.
- Quyết định:
  - MVP có booking request kèm chống spam; các mục đã duyệt khác để sau MVP.
- Ghi chú triển khai:
  - Thêm entity BookingRequest và API công khai.
- Rủi ro / theo dõi:
  - Cần chốt cơ chế chống spam (rate limit hay captcha).

### 2026-03-19 - Baseline tài liệu cho web đặt lịch SPA
- Phạm vi:
  - Xác định yêu cầu, UI spec, system design, API contracts và data model cho SPA.
  - Thêm brainstorming và design suggestions kèm quy trình phê duyệt.
- Quyết định:
  - MVP không bao gồm đặt lịch công khai, thanh toán online, nhắc lịch tự động (đã bị thay thế bởi cập nhật sau).
- Ghi chú triển khai:
  - Tài liệu đã bao phủ vai trò, luồng lịch hẹn, lịch, khách hàng, dịch vụ, nhân viên và báo cáo.
- Rủi ro / theo dõi:
  - Cần user phê duyệt đề xuất trước khi triển khai.

### 2026-03-19 - Bổ sung tài liệu ngang mức với study-ai
- Phạm vi:
  - Thêm governance, runbooks và CI setup docs.
  - Thêm placeholder UI dưới docs/design/ui/admin/screens và docs/design/ui/public/screens.
  - Cập nhật UI spec thêm điều hướng/màn hình Booking Requests.
- Quyết định:
  - Placeholder sẽ được thay thế bằng thiết kế chính thức.
- Ghi chú triển khai:
  - Thêm code.html và screen.png rỗng cho từng màn.
- Rủi ro / theo dõi:
  - Thay placeholder bằng UI đã phê duyệt trong thư mục admin/user.

### 2026-03-19 - Mở rộng yêu cầu sang phạm vi sản phẩm đầy đủ
- Phạm vi:
  - Bổ sung tính năng phía khách hàng, thanh toán, review, notification.
  - Cập nhật UI spec, system design, API contracts và data model.
- Quyết định:
  - MVP vẫn tập trung booking + services + calendar + notifications.
- Ghi chú triển khai:
  - Thêm cấu trúc điều hướng public/customer/back-office.
- Rủi ro / theo dõi:
  - Cần chốt provider thanh toán và kênh SMS cho MVP.

### 2026-03-19 - Quyết định MVP: thanh toán online, email notifications, đa chi nhánh
- Phạm vi:
  - Cập nhật requirements và UI spec cho đa chi nhánh và email-only notifications.
  - Cập nhật system design, API contracts và data model cho branches và payments.
- Quyết định:
  - MVP có thanh toán online và đa chi nhánh; SMS để sau MVP.
- Ghi chú triển khai:
  - Thêm endpoints chi nhánh và filter theo chi nhánh.
- Rủi ro / theo dõi:
  - Cần chốt cấu hình provider thanh toán và email.

### 2026-03-19 - Chốt phạm vi MVP: payments + email + đa chi nhánh
- Phạm vi:
  - Cập nhật requirements, UI spec, system design, API contracts và data model.
  - Cập nhật manual setup cho email và payment providers.
- Quyết định:
  - MVP có thanh toán online và đa chi nhánh; SMS để sau MVP.
- Ghi chú triển khai:
  - Thêm endpoints chi nhánh và filter theo chi nhánh.
- Rủi ro / theo dõi:
  - Chốt nhà cung cấp thanh toán triển khai trước.

### 2026-03-19 - Cập nhật UI theo Figma
- Phạm vi:
  - Cập nhật UI spec khớp ngôn ngữ thiết kế và layout từ Figma.
  - Thêm README cho các screen folder đã nhận ảnh.
- Quyết định:
  - Dùng phong cách editorial, headline serif, màu olive.
- Ghi chú triển khai:
  - Chờ thay thế screen.png placeholder bằng export.
- Rủi ro / theo dõi:
  - Cần file ảnh export cho thư mục admin/user.

### 2026-03-19 - Tách nhóm route admin/public
- Phạm vi:
  - Tạo route group cho admin và public theo App Router.
  - Thêm trang admin placeholder và thư mục module.
- Quyết định:
  - MVP dùng đường dẫn admin dưới `/[locale]/admin`.
- Ghi chú triển khai:
  - Di chuyển public pages vào `(public)`, tạo layout/page cho admin.
  - Thêm `src/modules/{admin,public,shared}`.
- Rủi ro / theo dõi:
  - Cần bổ sung auth guard cho admin.

### 2026-03-20 - Thêm auth guard admin (middleware)
- Phạm vi:
  - Bảo vệ `/[locale]/admin` bằng middleware và cookie placeholder.
  - Thêm notice truy cập trên trang public.
- Quyết định:
  - Dùng cookie `admin_session=1` cho MVP trước khi tích hợp auth thật.
- Ghi chú triển khai:
  - Chuyển hướng truy cập admin trái phép về `/{defaultLocale}?reason=admin_auth_required`.
- Rủi ro / theo dõi:
  - Thay placeholder bằng auth thật và kiểm tra quyền theo role.

### 2026-03-20 - Tích hợp NextAuth credentials
- Phạm vi:
  - Thêm NextAuth credentials provider và trang login admin.
  - Middleware kiểm tra JWT role thay cho cookie placeholder.
- Quyết định:
  - MVP dùng admin seed từ biến môi trường.
- Ghi chú triển khai:
  - Thêm route `/api/auth/[...nextauth]` và UI login admin.
  - Bảo vệ `/[locale]/admin` với role=admin.
- Rủi ro / theo dõi:
  - Thay seed user bằng user trong database.
  - Thêm UI quản lý user admin và gán role.

### 2026-03-20 - Deploy production Vercel
- Phạm vi:
  - Link project với Vercel và cấu hình env production.
  - Deploy bản production.
- Quyết định:
  - Dùng domain mặc định `project-4i26o.vercel.app`.
- Ghi chú triển khai:
  - Deploy production hoàn tất và đã alias về domain mặc định.
- Rủi ro / theo dõi:
  - Nâng cấp Next.js lên bản vá bảo mật.

### 2026-03-20 - Hotfix: tắt middleware locale (Vercel 500)
- Phạm vi:
  - Tắt middleware locale để tránh lỗi edge `__dirname`.
- Quyết định:
  - Giữ routing theo `/[locale]` cho đến khi xử lý xong middleware.
- Ghi chú triển khai:
  - Middleware chỉ trả `NextResponse.next()`.
- Rủi ro / theo dõi:
  - Kiểm tra tương thích next-intl middleware và bật lại.

### 2026-03-19 - Hotfix: chuyển middleware vào src/
- Phạm vi:
  - Chuyển middleware sang `src/middleware.ts` để Next.js nhận diện đúng.
  - Giữ middleware dạng no-op để tránh crash edge runtime.
- Quyết định:
  - Ưu tiên ổn định site thay vì locale middleware.
- Ghi chú triển khai:
  - Redeploy production và xóa lỗi 500 từ edge-middleware.
- Rủi ro / theo dõi:
  - Bật lại locale middleware sau khi xác nhận tương thích.

### 2026-03-20 - Làm mới alias Vercel
- Phạm vi:
  - Gán lại alias `project-4i26o.vercel.app` về deployment mới nhất.
- Quyết định:
  - Refresh alias để loại trừ cache/propagation cũ.
- Ghi chú triển khai:
  - Alias trỏ đến `project-4i26o-rh3b1fxw3-...`.

### 2026-03-19 - Sửa redirect NextAuth về localhost trên production
- Phạm vi:
  - Thêm redirect callback để resolve base URL từ `NEXTAUTH_URL` hoặc `VERCEL_URL`.
- Quyết định:
  - Ưu tiên `VERCEL_URL` khi `NEXTAUTH_URL` bị trống hoặc là localhost.
- Ghi chú triển khai:
  - Tránh redirect login về `http://localhost:3000` trên production.
- Rủi ro / theo dõi:
  - Đồng bộ lại `NEXTAUTH_URL` theo domain production khi cập nhật env.

### 2026-03-20 - Sửa origin redirect cho admin auth
- Phạm vi:
  - Dùng `x-forwarded-host` và `x-forwarded-proto` để dựng URL login.
- Quyết định:
  - Ưu tiên header request để tránh phụ thuộc `NEXTAUTH_URL` trên production.
- Ghi chú triển khai:
  - Guard admin redirect về đúng host thay vì localhost.
- Rủi ro / theo dõi:
  - Giữ nguyên header proxy khi gắn custom domain.

### 2026-03-20 - Sửa callback URL ở trang login admin
- Phạm vi:
  - Dựng callback URL bằng `window.location.origin` ở client.
- Quyết định:
  - Luôn dùng callback URL tuyệt đối để tránh base localhost.
- Ghi chú triển khai:
  - Login redirect về đúng domain hiện tại dù env chưa ổn.
- Rủi ro / theo dõi:
  - Thay bằng `NEXTAUTH_URL` chuẩn khi env ổn định.

### 2026-03-20 - Sửa vòng lặp redirect login admin
- Phạm vi:
  - Truyền header `x-pathname` qua middleware và cho phép `/admin/login` trong layout admin.
- Quyết định:
  - Bỏ guard cho trang login để tránh redirect vô hạn.
- Ghi chú triển khai:
  - Layout admin cho phép login route khi chưa xác thực.
- Rủi ro / theo dõi:
  - Giữ middleware hoạt động khi bật lại xử lý locale.

### 2026-03-20 - API dashboard + CRUD users DB
- Phạm vi:
  - Thêm `/api/admin/dashboard` đọc JSON nội bộ.
  - Thêm schema Prisma và API CRUD users DB.
  - Thêm UI Users để CRUD và chỉnh role/trạng thái.
- Quyết định:
  - Dùng Prisma + Neon Postgres và bcrypt cho credentials.
- Ghi chú triển khai:
  - NextAuth xác thực bằng DB users.
  - Dashboard admin lấy dữ liệu qua API.
- Rủi ro / theo dõi:
  - Chạy Prisma migrations và seed admin đầu tiên trên Neon.
  - Thay dashboard JSON bằng metrics DB sau.

### 2026-03-20 - Đã migrate Neon, seed còn pending
- Phạm vi:
  - Chạy Prisma migration trên Neon.
  - Thử seed admin bằng script.
- Quyết định:
  - Dùng connection string Neon do user cung cấp.
- Ghi chú triển khai:
  - Migration thành công.
  - Seed thất bại do không kết nối được DB từ môi trường này.
- Rủi ro / theo dõi:
  - Chạy lại `npm run seed:admin` từ máy local có thể kết nối Neon.

### 2026-03-20 - Thêm script seed user mẫu
- Phạm vi:
  - Thêm script `seed:users` với 10 tài khoản mẫu.
- Quyết định:
  - Dùng một mật khẩu mặc định cho user mẫu.
- Ghi chú triển khai:
  - Seed user bằng lệnh `npm run seed:users`.
- Rủi ro / theo dõi:
  - Đổi mật khẩu mẫu nếu cần demo production.

### 2026-03-20 - Hoàn thiện Home + Booking Public
- Phạm vi:
  - Thêm selector chi nhánh trên trang chủ.
  - Mở rộng booking flow thêm bước chọn dịch vụ và chi nhánh.
- Quyết định:
  - Giữ UI-only cho đến khi backend booking/payment sẵn sàng.
- Ghi chú triển khai:
  - Cập nhật fixtures và i18n cho các bước mới.
- Rủi ro / theo dõi:
  - Thay UI-only bằng availability thật và payment intent.

### 2026-03-20 - Tương tác chọn booking
- Phạm vi:
  - Thêm chọn dịch vụ, chi nhánh, ngày, giờ trong booking flow.
  - Booking summary phản ánh lựa chọn.
- Quyết định:
  - Dùng state client với dữ liệu fixture.
- Ghi chú triển khai:
  - Booking page chuyển sang client component.
- Rủi ro / theo dõi:
  - Thay state bằng availability từ API.

### 2026-03-20 - Sửa lỗi lint ở trang admin users
- Phạm vi:
  - Tắt cảnh báo `react-hooks/exhaustive-deps` cho lần fetch đầu.
- Quyết định:
  - Giữ `fetchUsers` dạng local cho đến khi có filter/search.
- Ghi chú triển khai:
  - Tránh build fail trên Vercel.
- Rủi ro / theo dõi:
  - Refactor hook khi mở rộng tính năng.

### 2026-03-20 - Button chọn ngày trong booking
- Phạm vi:
  - Đổi ô ngày trong lịch thành button để thao tác chọn.
  - Giữ tương tác chọn chi nhánh/ngày/giờ trên booking.
- Quyết định:
  - Dùng button để rõ hành vi focus và accessibility.
- Ghi chú triển khai:
  - Booking vẫn dùng state client với dữ liệu fixture.
- Rủi ro / theo dõi:
  - Thay dữ liệu availability tĩnh bằng API thực.

### 2026-03-20 - Tăng cỡ nhập thông tin cá nhân
- Phạm vi:
  - Tăng cỡ chữ và khoảng cách cho các trường personal details.
- Quyết định:
  - Ưu tiên dễ đọc khi nhập liệu trên desktop và mobile.
- Ghi chú triển khai:
  - Tăng cỡ chữ và padding dưới của input.
- Rủi ro / theo dõi:
  - Kiểm tra focus/contrast trên màn hình nhỏ.

### 2026-03-20 - Schema core + script seed
- Phạm vi:
  - Thêm model Service, Booking, BookingService.
  - Thêm script seed cho chi nhánh, dịch vụ và booking.
- Quyết định:
  - Lưu thông tin khách hàng trực tiếp trên Booking để đơn giản hóa booking public.
- Ghi chú triển khai:
  - Script seed dùng dữ liệu demo cố định và gán staff nếu có.
- Rủi ro / theo dõi:
  - Chạy migration và seed lên Neon sau khi có DATABASE_URL.

### 2026-03-20 - Migrate schema core + chạy seed
- Phạm vi:
  - Áp dụng migration schema core booking trên Neon.
  - Seed dữ liệu chi nhánh, dịch vụ, booking.
- Quyết định:
  - Dùng pooled connection của Neon cho migrate/seed.
- Ghi chú triển khai:
  - Migration `core_models` đã áp dụng thành công.
- Rủi ro / theo dõi:
  - Kết nối model mới vào app khi lấy dữ liệu thật.

### 2026-03-20 - Đăng xuất admin
- Phạm vi:
  - Thêm nút đăng xuất ở sidebar admin.
- Quyết định:
  - Dùng NextAuth `signOut` với callback về trang login.
- Ghi chú triển khai:
  - Thêm component logout client kèm label i18n.
- Rủi ro / theo dõi:
  - Xác nhận redirect đúng domain production.

### 2026-03-20 - Dashboard admin dùng dữ liệu DB
- Phạm vi:
  - Thay JSON dashboard bằng KPI và booking lấy từ DB.
  - Hiển thị user đăng nhập ở sidebar.
- Quyết định:
  - Tính doanh thu từ booking confirmed/completed qua BookingService.
- Ghi chú triển khai:
  - API dashboard trả user + KPI + pending booking + activity feed.
- Rủi ro / theo dõi:
  - Cân chỉnh icon activity và delta KPI khi chốt metrics.

### 2026-03-25 - Sửa hiển thị tên user admin
- Phạm vi:
  - Lưu name/email vào JWT/session của NextAuth.
  - Fallback lookup DB khi thiếu name.
- Quyết định:
  - Lưu name/email trên token để giảm truy vấn DB.
- Ghi chú triển khai:
  - Dashboard nhận đúng tên hiển thị của admin.
- Rủi ro / theo dõi:
  - Kiểm tra role/status đồng bộ khi thay đổi trong DB.

### 2026-03-25 - Gửi booking public
- Phạm vi:
  - Thêm POST /api/bookings để lưu booking trạng thái pending.
  - Booking UI gửi form và hiển thị trạng thái thành công.
- Quyết định:
  - Tạo booking pending, chưa tích hợp payment.
- Ghi chú triển khai:
  - Dashboard admin hiển thị booking mới từ DB.
- Rủi ro / theo dõi:
  - Bổ sung payment intent trước khi chuyển trạng thái confirmed.

### 2026-03-25 - Chuyển màn booking_requests_queue sang public
- Phạm vi:
  - Di chuyển asset booking_requests_queue từ admin sang public.
  - Đổi tên thư mục thành my_bookings.
- Quyết định:
  - Đồng bộ UI xem booking với màn "My Bookings" phía public.
- Ghi chú triển khai:
  - Cập nhật UI spec cho admin/public.
- Rủi ro / theo dõi:
  - Đảm bảo trang bookings public khớp asset mới.

### 2026-03-25 - Apply thiết kế my_bookings
- Phạm vi:
  - Cập nhật typography trang bookings theo thiết kế my_bookings.
- Quyết định:
  - Dùng heading serif italic cho Upcoming/Past để khớp design.
- Ghi chú triển khai:
  - Trang bookings đã khớp asset my_bookings.
- Rủi ro / theo dõi:
  - Thay ảnh placeholder khi có export cuối.

### 2026-03-25 - Calendar public thật + đồng bộ booking admin
- Phạm vi:
  - Thay calendar tĩnh bằng lưới tháng thật và nút điều hướng.
  - Forward cookie session khi gọi API dashboard admin để lấy dữ liệu DB thật.
- Quyết định:
  - Tự xây calendar không thêm dependency mới.
- Ghi chú triển khai:
  - Calendar khóa ngày quá khứ và cập nhật tóm tắt khi chọn ngày.
  - Dashboard admin đọc booking qua API có xác thực.
- Rủi ro / theo dõi:
  - Thay fixture booking bằng dữ liệu API (F6).
  - Bổ sung test end-to-end cho flow booking.

### 2026-03-25 - Chọn therapist từ DB
- Phạm vi:
  - Thêm schema mapping staff-service và migration.
  - Thêm API therapists public và nối chọn therapist vào booking flow.
  - Cho phép gán staffId khi tạo booking.
- Quyết định:
  - Lọc therapist theo chi nhánh/dịch vụ; lựa chọn là optional.
- Ghi chú triển khai:
  - Booking flow gọi `/api/public/therapists`.
  - Seed core gán staff vào chi nhánh và map dịch vụ.
- Rủi ro / theo dõi:
  - Thay fixtures service/branch bằng API thật (F6).
  - Bổ sung validation availability khi có rule lịch làm việc.

### 2026-03-25 - Hiển thị lỗi booking chi tiết
- Phạm vi:
  - Hiển thị message lỗi từ API khi đặt lịch thất bại.
- Quyết định:
  - Gắn message backend vào thông báo lỗi chung để dễ debug.
- Ghi chú triển khai:
  - Khi booking fail sẽ thấy reason nếu API trả về.
- Rủi ro / theo dõi:
  - Chuẩn hoá lỗi theo i18n khi hoàn thiện error codes.

### 2026-03-25 - Sửa tên admin ở header
- Phạm vi:
  - Dùng tên admin đăng nhập cho lời chào trên dashboard.
- Quyết định:
  - Dùng lại userName đã resolve ở sidebar.
- Ghi chú triển khai:
  - Header admin hiển thị đúng tên người dùng.
- Rủi ro / theo dõi:
  - Đảm bảo session name đồng bộ khi user đổi profile.

### 2026-03-25 - Hiển thị đúng tên & lịch của staff
- Phạm vi:
  - Cho phép staff/receptionist truy cập dashboard admin.
  - Lọc lịch và số liệu theo staff đang đăng nhập.
- Quyết định:
  - Giữ trang admin khác chỉ dành cho admin.
- Ghi chú triển khai:
  - Session có user id; dashboard API lọc theo staff id khi role=staff.
  - Layout admin chuyển hướng role khác khỏi các trang giới hạn.
- Rủi ro / theo dõi:
  - Cần portal riêng cho staff khi workflow mở rộng.

### 2026-03-25 - Calendar admin day view
- Phạm vi:
  - Hiển thị day view (09:00–18:00, slot 30 phút).
  - Đặt booking đúng vị trí theo start/end trong grid.
- Quyết định:
  - Dùng day view theo ngày hiện tại để giữ layout gọn.
- Ghi chú triển khai:
  - API dashboard trả start/end cho block lịch.
  - Calendar render block đúng cột thời gian.
- Rủi ro / theo dõi:
  - Bổ sung week view và điều hướng ngày khi cần.

### 2026-03-25 - Sửa layout header calendar admin
- Phạm vi:
  - Canh lại header thời gian theo đúng design, tránh chữ bị chồng.
- Quyết định:
  - Dùng marker mỗi 2 giờ, span theo slot để giữ khoảng cách.
- Ghi chú triển khai:
  - Header giờ đã đúng spacing theo design.
- Rủi ro / theo dõi:
  - Cân nhắc giảm mật độ marker ở màn hình nhỏ.

### 2026-03-25 - Mở rộng layout dashboard admin
- Phạm vi:
  - Mở rộng chiều ngang dashboard để calendar không bị xuống dòng.
- Quyết định:
  - Tăng max-width nhưng vẫn căn giữa.
- Ghi chú triển khai:
  - Calendar có thêm không gian ngang.
- Rủi ro / theo dõi:
  - Xem xét full-bleed nếu thêm cột mới.

### 2026-03-25 - Ép booking hiển thị 1 giờ trên calendar admin
- Phạm vi:
  - Booking trên calendar luôn hiển thị span 1 giờ.
- Quyết định:
  - Dùng start time + 60 phút khi render lịch.
- Ghi chú triển khai:
  - Nhãn giờ và độ rộng block theo slot 1 giờ.
- Rủi ro / theo dõi:
  - Cần cập nhật lại nếu muốn hiển thị theo duration thật.

### 2026-03-25 - Điều hướng ngày trên calendar admin
- Phạm vi:
  - Thêm nút ngày trước/sau cho calendar admin.
- Quyết định:
  - Dùng query param `?date=YYYY-MM-DD` để điều hướng.
- Ghi chú triển khai:
  - API dashboard lọc booking theo ngày đã chọn.
- Rủi ro / theo dõi:
  - Bổ sung date picker khi cần.

### 2026-03-25 - Hiển thị header theo từng giờ
- Phạm vi:
  - Hiển thị nhãn giờ cho từng tiếng trên header calendar.
- Quyết định:
  - Dùng marker 60 phút để đúng yêu cầu UI.
- Ghi chú triển khai:
  - Header calendar đã hiển thị từng giờ.
- Rủi ro / theo dõi:
  - Cân nhắc giảm mật độ trên màn hình nhỏ.
