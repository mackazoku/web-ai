# AGENTS.md — Quy tắc phát triển ứng dụng web Next.js

## 🎯 Sứ mệnh dự án
Phát triển ứng dụng web Next.js chất lượng cao theo vòng đời phát triển phần mềm chuẩn. Chỉ được coding sau khi yêu cầu, thiết kế và kế hoạch thực thi đã được xác định rõ và được rà soát.

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
- Nếu Next.js cung cấp tầng API thì dùng Prisma + PostgreSQL + Zod validation

### Kiến trúc
- Clean Architecture (đơn giản, thực dụng)
- Tách rõ UI / Logic / Data
- Ưu tiên Server Components, chỉ dùng Client Components khi cần tương tác

---

## 🔁 Quy trình phát triển chuẩn (BẮT BUỘC)

spec → plan → tasks → coding → review → test → deploy

Không được coding trước khi hoàn tất và cập nhật tài liệu.

### Definition of Ready (Trước khi coding)
- Phạm vi và hành vi được phản ánh trong `specs/<feature>/spec.md`.
- Quyết định thiết kế được phản ánh trong `specs/<feature>/research.md` và `specs/<feature>/data-model.md`.
- Hợp đồng giao tiếp được phản ánh trong `specs/<feature>/contracts/` khi có.
- Có kế hoạch thực thi trong `specs/<feature>/plan.md`.
- Có phân rã task trong `specs/<feature>/tasks.md`.
- Feature đang active được xác định theo prefix branch hiện tại hoặc thư mục `specs/<feature>/` được cập nhật gần nhất.
- Có xác nhận của user khi phạm vi/logic/kiến trúc/dữ liệu thay đổi.

### Definition of Done (Sau khi coding)
- Code được triển khai và phân tích/kiểm thử cho phạm vi thay đổi.
- Trạng thái được cập nhật trong `specs/<feature>/tasks.md`.
- Ghi nhận kiểm thử trong `specs/<feature>/tasks.md` và `legacy_docs/delivery/test_plan.md` cho tới khi retired.
- Bước thủ công được cập nhật trong `specs/<feature>/quickstart.md` (hoặc ghi rõ không cần).

---

## 📂 Cấu trúc dự án (Chuẩn)

```text
.specify/
  scripts/
  templates/

specs/
  <feature>/
    spec.md
    plan.md
    tasks.md
    research.md
    data-model.md
    ui.md
    quickstart.md
    contracts/
    checklists/

legacy_docs/
  delivery/

src/
  app/
  components/
  i18n/
  messages/
  providers/
  stores/
  styles/
```

---

## 🧠 Vai trò & Trách nhiệm Agent

### AGENT_SPECS
- Đọc và hiểu yêu cầu người dùng.
- Luôn đọc `specs/<feature>/spec.md`.
- Hợp nhất yêu cầu mới vào spec hiện tại.
- Làm rõ điểm mơ hồ trước khi thiết kế/coding.
- Dùng skill `specs-ui` khi phạm vi UI đáng kể.

### AGENT_ARCHITECTURE
- Rà soát UI artifacts trong `specs/<feature>/` nếu có.
- Cập nhật `specs/<feature>/spec.md` khi UI thay đổi.
- Cập nhật `specs/<feature>/data-model.md` khi mô hình/schema thay đổi.
- Cập nhật `specs/<feature>/contracts/` khi hợp đồng endpoint thay đổi.
- Xác định kiến trúc, data flow, DB models, API, và Mermaid diagrams khi cần.
- Dùng skill `nextjs-auth` khi thay đổi auth/session/guard.

### AGENT_IMPLEMENTATION
- Tạo hoặc cập nhật `specs/<feature>/plan.md`.
- Chia nhỏ yêu cầu thành task nguyên tử trong `specs/<feature>/tasks.md`.
- Không coding khi chưa có phê duyệt plan.

### AGENT_CODING
- Triển khai đúng theo `specs/<feature>/tasks.md`.
- Ưu tiên Server Components; chỉ dùng Client Components khi cần tương tác.
- Không thêm thư viện mới nếu không cần.
- Tránh trùng lặp component.
- Với danh sách dữ liệu lớn, dùng phân trang hoặc load-more.
- Với màn hình dữ liệu thay đổi, hỗ trợ refresh.
- Dùng skill `prisma-migrations` khi `schema.prisma` thay đổi.
- Dùng skill `i18n-playbook` khi thêm/sửa locale keys.

### AGENT_REVIEW
- Review tính đúng đắn, kiến trúc, trùng lặp, a11y, i18n.
- Không có hardcoded string hoặc debug print.
- Dùng skill `vercel-deploy` để kiểm tra deploy.

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
1. Cập nhật `specs/<feature>/brainstorming.md`
2. Cập nhật `specs/<feature>/design_suggestions.md`
3. Thêm đề xuất có trạng thái
4. Yêu cầu user phê duyệt trước khi triển khai

Không được triển khai đề xuất nếu chưa ở trạng thái:
APPROVED

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

Mọi tài liệu trong `specs/<feature>/` phải có:
- Bản tiếng Anh (gốc)
- Bản tiếng Việt với hậu tố `_vn`

Ví dụ:
- spec.md
- spec_vn.md

### Chính sách dịch
- Tiếng Anh là nguồn chuẩn.
- Bản tiếng Việt phải phản ánh chính xác nội dung tiếng Anh.
- Cập nhật cả hai bản khi thay đổi.
- Nếu dịch làm thay đổi nghĩa, phải nêu rõ để rà soát.

### Quy tắc phê duyệt

Trước khi triển khai, agent phải xác nhận:
✔ English documentation updated
✔ Vietnamese documentation updated
✔ Both versions consistent

---

## 📋 Hành động bắt buộc cho mọi request

1. Đọc `specs/<feature>/spec.md` và `specs/<feature>/plan.md`.
2. Rà soát `specs/<feature>/research.md`, `specs/<feature>/data-model.md`, và `specs/<feature>/contracts/` nếu có.
3. Cập nhật `specs/<feature>/plan.md`, `specs/<feature>/tasks.md`, và `specs/<feature>/ui.md` khi cần.
4. Chờ user phê duyệt (nếu thay đổi phạm vi/logic/kiến trúc/dữ liệu).
5. Thực hiện coding.
6. Review, sửa lint và test.
7. Cập nhật `specs/<feature>/tasks.md` với trạng thái và ghi chú kiểm thử.
8. Cập nhật `legacy_docs/delivery/test_plan.md` cho tới khi retired.
9. Cập nhật `specs/<feature>/quickstart.md` nếu có bước thủ công.
10. Đảm bảo mỗi task thay đổi có owner, status, last_updated, doc_impact, manual_setup_required.

---

## 📅 Thiết lập thủ công (BẮT BUỘC)

- Agent phải duy trì `specs/<feature>/quickstart.md`.
- Sau mỗi tính năng, bổ sung bước thủ công nếu có, gồm hosting, domain, DNS, SSL, secrets/env vars, CI/CD settings, DB migrations, và third-party providers.
- Mỗi bước phải có environment, owner, prerequisites, verification, và rollback nếu áp dụng.

Trước khi kết thúc, agent phải nói rõ:
`✔ Manual setup checklist updated (or none required)`

---

## 📌 Ma trận cập nhật tài liệu (BẮT BUỘC)

- Thay đổi yêu cầu/phạm vi: `specs/<feature>/spec.md`
- Thay đổi UI layout/state/interaction: `specs/<feature>/ui.md` (hoặc `spec.md` nếu thay đổi nhỏ)
- Thay đổi API signature/behavior: `specs/<feature>/contracts/`
- Thay đổi entity/schema/index/relations: `specs/<feature>/data-model.md`
- Thay đổi kiến trúc/flow/bảo mật/runtime: `specs/<feature>/research.md`
- Thay đổi task/progress: `specs/<feature>/tasks.md`
- Ghi nhận triển khai: `specs/<feature>/tasks.md`
- Cập nhật chiến lược kiểm thử: `legacy_docs/delivery/test_plan.md`
- Có bước thủ công: `specs/<feature>/quickstart.md`

---

## 🔄 Quy tắc rà soát tài liệu (BẮT BUỘC)

Với mọi input của user, agent phải:
1. Đọc lại `specs/<feature>/spec.md` và `specs/<feature>/plan.md`.
2. Đọc lại `specs/<feature>/research.md`, `specs/<feature>/data-model.md`, và `specs/<feature>/contracts/` nếu có.
3. So sánh request với docs.
4. Quyết định có cần cập nhật không.

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
 - Nếu `schema.prisma` thay đổi, chạy `npx prisma generate` và tạo migration (`npx prisma migrate dev --name <name> --create-only`), rồi cập nhật `tasks.md` và `quickstart.md`.

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
 - Dùng `.specify/scripts/bash/create-new-feature.sh` cho feature mới và `.specify/scripts/bash/setup-plan.sh` trước khi planning.

---

## ✅ Nguyên tắc cuối

Nếu tài liệu chưa rõ: dừng, làm rõ, cập nhật docs rồi mới tiếp tục.

## Recent Changes
- 001-user-login-booking: Added TypeScript 5, React 18, Next.js 14 (App Router) + next-intl, NextAuth, Prisma, Zod, React Query, Zustand
- 001-user-login-booking: Added PostgreSQL (Neon) via Prisma

## Active Technologies
- TypeScript 5, React 18, Next.js 14 (App Router) + next-intl, NextAuth, Prisma, Zod, React Query, Zustand (001-user-login-booking)
- PostgreSQL (Neon) via Prisma (001-user-login-booking)

## Retirement cho legacy docs
- Retire `legacy_docs/delivery/test_plan.md` sau 2 lần release liên tiếp khi mọi verification notes đã nằm trong `specs/<feature>/tasks.md` và CI xanh.
