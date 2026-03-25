# AGENTS.md — Quy tắc phát triển ứng dụng web Next.js

## 🎯 Sứ mệnh dự án
Phát triển ứng dụng web Next.js chất lượng cao theo vòng đời phát triển phần mềm chuẩn. Chỉ được coding sau khi yêu cầu, thiết kế UI, thiết kế hệ thống và kế hoạch triển khai đã được xác định rõ và được rà soát.

Tư duy cốt lõi:
- Quy trình > Thiết kế > Kế hoạch > Code
- Tài liệu là nguồn sự thật
- Không suy đoán, không coding sớm

---

## 🧱 Công nghệ sử dụng

### Client / Web
- Next.js (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- i18n với next-intl
- React Query
- Zustand

### Backend / Hạ tầng
- Ưu tiên dùng hợp đồng backend hiện có (REST/GraphQL/Serverpod) nếu có
- Nếu Next.js cung cấp tầng API:
  - Prisma
  - PostgreSQL
  - Zod validation

### Kiến trúc
- Clean Architecture (đơn giản, thực dụng)
- Tách rõ UI / Logic / Data
- Ưu tiên Server Components, chỉ dùng Client Components khi cần tương tác

---

## 🔁 Quy trình phát triển chuẩn (BẮT BUỘC)

requirements → ui design → system design → tasks → coding → review → test → deploy

Không được coding trước khi hoàn tất và cập nhật tài liệu.

### Definition of Ready (Trước khi coding)
- Phạm vi được phản ánh trong `docs/specs/requirements.md`.
- Hành vi/trạng thái UI được phản ánh trong `docs/design/ui/ui_spec.md`.
- Ảnh hưởng hệ thống/API/mô hình dữ liệu được phản ánh trong tài liệu thiết kế.
- Có kế hoạch thực thi trong `docs/plan/implementation_plan.md` với trạng thái task.
- Có xác nhận của user khi phạm vi/logic/kiến trúc thay đổi.

### Definition of Done (Sau khi coding)
- Code được triển khai và phân tích/kiểm thử cho phạm vi thay đổi.
- Trạng thái được cập nhật trong `docs/plan/implementation_plan.md`.
- Nhật ký bàn giao được cập nhật trong `docs/delivery/coding_log.md` và `docs/delivery/test_plan.md`.
- Bước thủ công được cập nhật trong `docs/delivery/manual_setup.md` (hoặc ghi rõ không cần).

---

## 📂 Cấu trúc dự án (Chuẩn)

docs/
 ├─ README.md
 ├─ specs/
 │   └─ requirements.md
 ├─ design/
 │   ├─ ui/
 │   │   ├─ ui_spec.md
 │   │   └─ screens/
 │   ├─ system/
 │   │   ├─ system_design.md
 │   │   ├─ api_contracts.md
 │   │   └─ data_model.md
 ├─ plan/
 │   ├─ implementation_plan.md
 │   ├─ milestones.md
 │   └─ status_board.md
 └─ delivery/
     ├─ coding_log.md
     ├─ test_plan.md
     └─ manual_setup.md

src/
 ├─ app/
 ├─ components/
 ├─ i18n/
 ├─ messages/
 ├─ providers/
 ├─ stores/
 └─ styles/

---

## 🧠 Vai trò & Trách nhiệm Agent

### AGENT_SPECS
- Đọc và hiểu yêu cầu người dùng.
- Luôn đọc `docs/specs/requirements.md`.
- Hợp nhất yêu cầu mới vào specs hiện có.
- Làm rõ điểm mơ hồ trước khi thiết kế/coding.

### AGENT_ARCHITECTURE
- Rà soát thiết kế UI trong `docs/design/ui/screens/`.
- Cập nhật `docs/design/ui/ui_spec.md` khi UI thay đổi.
- Cập nhật `docs/design/system/system_design.md`.
- Cập nhật `docs/design/system/api_contracts.md` khi hợp đồng endpoint thay đổi.
- Cập nhật `docs/design/system/data_model.md` khi mô hình/schema thay đổi.
- Xác định kiến trúc, data flow, DB models, API, và Mermaid diagrams khi cần.

### AGENT_IMPLEMENTATION
- Tạo hoặc cập nhật `docs/plan/implementation_plan.md`.
- Chia nhỏ yêu cầu thành task nguyên tử, gồm coding/review/test.
- Không coding khi chưa có phê duyệt plan.

### AGENT_CODING
- Triển khai đúng theo `docs/plan/implementation_plan.md`.
- Ưu tiên Server Components; chỉ dùng Client Components khi cần tương tác.
- Không thêm thư viện mới nếu không cần.
- Tránh trùng lặp component.
- Với danh sách dữ liệu lớn, dùng phân trang hoặc load-more.
- Với màn hình dữ liệu thay đổi, hỗ trợ refresh.

### AGENT_REVIEW
- Review tính đúng đắn, kiến trúc, trùng lặp, a11y, i18n.
- Không có hardcoded string hoặc debug print.

---

## 💡 Chế độ đề xuất chủ động (BẮT BUỘC)

Agent phải chủ động đề xuất:

- Cải thiện specs
- Tính năng phụ và user stories
- Phương án thiết kế hệ thống
- Tối ưu kiến trúc
- Cải tiến công nghệ
- Best practices

Với mỗi tính năng mới/đổi lớn:

1. Cập nhật `docs/specs/brainstorming.md`
2. Cập nhật `docs/design/system/design_suggestions.md`
3. Thêm đề xuất có trạng thái
4. Yêu cầu user phê duyệt trước khi triển khai

Không được triển khai đề xuất nếu chưa ở trạng thái:

APPROVED

---

### Quy tắc quản trị đề xuất

Mỗi đề xuất phải có:
- Unique ID
- Title
- Description
- Scope impact
- Related screens / features
- Trade-offs
- Estimated complexity
- Status: (proposed / under_review / approved / rejected / implemented)
- Owner decision (user)

Agent không được tự suy diễn phê duyệt.
Chỉ triển khai khi user chọn và phê duyệt.

Trước khi coding, agent phải nói rõ:

✔ Suggestions reviewed  
✔ Approved suggestions selected  
✔ Ready for implementation

---

## 🌏 Quy tắc tài liệu song ngữ (BẮT BUỘC)

Mọi tài liệu trong `docs/` phải có:

- Bản tiếng Anh (gốc)
- Bản tiếng Việt với hậu tố `_vn`

---

### Chính sách dịch

- Tiếng Anh là nguồn chuẩn.
- Bản tiếng Việt phải phản ánh chính xác nội dung tiếng Anh.
- Cập nhật cả hai bản khi thay đổi.
- Nếu dịch làm thay đổi nghĩa, phải nêu rõ để rà soát.

---

### Quy tắc phê duyệt

Trước khi triển khai, agent phải xác nhận:

✔ English documentation updated  
✔ Vietnamese documentation updated  
✔ Both versions consistent

---

## 📋 Hành động bắt buộc cho mọi request

1. Đọc `docs/specs/requirements.md`.
2. Rà soát `docs/design/ui/screens/` và `docs/design/ui/ui_spec.md`.
3. Đối chiếu tài liệu kiến trúc:
   - `docs/design/system/system_design.md`
   - `docs/design/system/api_contracts.md`
   - `docs/design/system/data_model.md`
4. Cập nhật tài liệu kế hoạch:
   - `docs/plan/implementation_plan.md`
   - `docs/plan/status_board.md`
5. Chờ user phê duyệt (nếu thay đổi phạm vi/logic/kiến trúc).
6. Thực hiện coding.
7. Review, sửa lint và test.
8. Cập nhật delivery docs:
   - `docs/delivery/coding_log.md`
   - `docs/delivery/test_plan.md`
   - `docs/delivery/manual_setup.md` (khi có bước thủ công)
9. Cập nhật trạng thái task trong `docs/plan/implementation_plan.md` và bổ sung flowchart/diagram khi logic thay đổi.
10. Đồng bộ tiến độ ở `docs/plan/status_board.md`.
11. Mỗi plan item phải có metadata:
   - `owner`
   - `status`
   - `last_updated`
   - `doc_impact`
   - `manual_setup_required`

---

## 📅 Thiết lập thủ công (BẮT BUỘC)
- Agent phải duy trì `docs/delivery/manual_setup.md`.
- Sau mỗi tính năng, bổ sung bước thủ công (nếu có):
  - Hosting, domain, DNS, SSL
  - Secrets/env vars, CI/CD settings
  - DB migrations
  - Third-party providers
- Mỗi bước phải có: environment, owner, prerequisites, verification, rollback.

Trước khi kết thúc, agent phải nói rõ:
`✔ Manual setup checklist updated (or none required)`

---

## 📌 Ma trận cập nhật tài liệu (BẮT BUỘC)

- Thay đổi yêu cầu/phạm vi:
  - `docs/specs/requirements.md`
- Thay đổi UI layout/state/interaction:
  - `docs/design/ui/ui_spec.md`
  - tài sản liên quan trong `docs/design/ui/screens/`
- Thay đổi API signature/behavior:
  - `docs/design/system/api_contracts.md`
- Thay đổi entity/schema/index/relations:
  - `docs/design/system/data_model.md`
- Thay đổi kiến trúc/flow/bảo mật/runtime:
  - `docs/design/system/system_design.md`
- Thay đổi task/progress:
  - `docs/plan/implementation_plan.md`
  - `docs/plan/status_board.md`
- Ghi nhận triển khai:
  - `docs/delivery/coding_log.md`
- Cập nhật chiến lược kiểm thử:
  - `docs/delivery/test_plan.md`
- Có bước thủ công:
  - `docs/delivery/manual_setup.md`

---

## 🔄 Quy tắc rà soát tài liệu (BẮT BUỘC)

Với mọi input của user, agent phải:

1. Đọc lại:
   - `docs/specs/requirements.md`
   - `docs/design/ui/ui_spec.md`
   - `docs/design/ui/screens/`
   - `docs/design/system/system_design.md`
   - `docs/design/system/api_contracts.md`
   - `docs/design/system/data_model.md`
   - `docs/plan/implementation_plan.md`
   - `docs/plan/status_board.md`
   - `docs/delivery/coding_log.md`
   - `docs/delivery/test_plan.md`
   - `docs/delivery/manual_setup.md`
2. So sánh request với docs.
3. Quyết định có cần cập nhật không.

Nếu vẫn hợp lệ, nêu rõ:
`✔ Documentation reviewed. No update required.`

Nếu cần cập nhật:
- Cập nhật docs trước.
- Tóm tắt thay đổi.
- Nếu phạm vi/logic/kiến trúc thay đổi, dừng và xin phê duyệt.

Không được coding trước khi docs thống nhất.

---

## 🔍 Rà soát thay đổi chưa commit (BẮT BUỘC)

Trước khi xác nhận yêu cầu/triển khai, agent phải:
1. Rà soát mọi file thay đổi chưa commit.
2. Đảm bảo nhất quán giữa request, docs, và các thay đổi đang có.

Agent phải nêu rõ:
`✔ Uncommitted changes reviewed and confirmed consistent.`

Nếu có xung đột:
- Dừng
- Nêu rõ mâu thuẫn
- Hỏi user muốn xử lý thế nào

---

## 🔧 Quy tắc Next.js (BẮT BUỘC)

### Chung
- Tôn trọng cấu trúc dự án và clean architecture thực dụng.
- Thay đổi tối thiểu, tránh refactor không liên quan.
- Sửa lint trước khi kết thúc.
- Code/comment/docs bằng tiếng Anh.

### Next.js
- Ưu tiên Server Components; dùng Client Components khi cần.
- Tránh fetch client khi server render đủ.
- Không hardcode UI strings (dùng i18n).
- Không `console.log` trong production.
- Dùng `next/image` cho ảnh; cấu hình `images.domains` rõ ràng.
- Dùng `next/headers` và `cookies()` chỉ trong server components/actions.
- Validate server actions và API routes bằng Zod.

### Performance & SEO
- Dùng `metadata` và `generateMetadata` đúng chỗ.
- Tránh waterfall fetch; dùng load song song.
- Giữ bundle nhỏ; tách client component lớn.
- Đảm bảo tương phản màu và hỗ trợ bàn phím.

---

## ⚠️ Quy tắc tuyệt đối

- Không coding trước khi cập nhật tài liệu.
- Không sửa file generated thủ công.
- Luôn regenerate khi cần.

---

## ✅ Nguyên tắc cuối

Nếu tài liệu chưa rõ: dừng, làm rõ, cập nhật docs rồi mới tiếp tục.
