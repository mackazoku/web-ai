# Hiến chương Web AI

## Nguyên tắc cốt lõi

### 1) Spec-First Delivery
Mọi công việc phải theo **spec → plan → tasks → implement**. Không được code trước khi spec và plan được cập nhật và phê duyệt.

### 2) Tài liệu là nguồn sự thật
Spec, plan, tasks định nghĩa phạm vi. Triển khai phải bám sát các tài liệu này.

### 3) Tài liệu song ngữ
Mỗi artifact có bản tiếng Anh và bản `_vn`. Tiếng Anh là bản chuẩn; tiếng Việt phải đồng bộ.

### 4) Cửa phê duyệt rõ ràng
Mọi thay đổi ảnh hưởng scope, logic, API hoặc data model đều cần user phê duyệt trước khi triển khai.

### 5) Thay đổi tối thiểu, thực dụng
Ưu tiên thay đổi nhỏ, có mục tiêu. Tránh refactor không liên quan.

## Chất lượng & Kiểm chứng
- Không hardcode text UI; dùng i18n.
- API mới phải có validation (Zod).
- Ghi lại bước kiểm chứng trong `specs/*/tasks.md` và cập nhật `docs/delivery/test_plan.md` cho tới khi retire hoàn toàn.

## Vận hành & Manual Setup
- Mọi bước thủ công phải ghi trong `specs/*/quickstart.md`.
- Thay đổi environment (DB, secrets, CI) cần được tài liệu hóa trước khi deploy.

## Quản trị
Hiến chương này thay thế các quy tắc agent trước đây. Mọi sửa đổi phải cập nhật cả EN/VN và được phê duyệt.

**Version**: 1.0.0 | **Ratified**: 2026-03-25 | **Last Amended**: 2026-03-25
