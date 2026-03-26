---
description: "Danh sach task cho man hinh Services (Admin)"
---

# Tasks: Màn hình Services (Admin)

**Input**: Design documents from `/specs/006-admin-services/` and `docs/design/ui/admin/screens/services/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), ui.md, design_suggestions.md

**Tests**: Không yêu cầu.

**Organization**: Tasks được nhóm theo user story để có thể triển khai và test độc lập.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Có thể chạy song song (khác file, không phụ thuộc)
- **[Story]**: User story tương ứng (VD: US1, US2, US3)
- Bao gồm đường dẫn file cụ thể trong mô tả

## Phase 1: Setup (Hạ tầng chung)

**Mục đích**: Cập nhật tài liệu trước khi implement

- [x] T001 [P] Cập nhật chi tiết UI spec ở /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/006-admin-services/ui.md và /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/006-admin-services/ui_vn.md theo design cuối

---

## Phase 2: Foundational (Điều kiện bắt buộc)

**Mục đích**: Nền tảng dùng chung

- [x] T002 Tạo route trang services admin ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T003 [P] Bổ sung i18n keys ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/en.json và /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/vi.json

---

## Phase 3: User Story 1 - Xem tổng quan dịch vụ (Priority: P1)

**Goal**: Render tổng quan dịch vụ với thẻ và insight theo design.

**Independent Test**: Mở Services screen và xác nhận service cards + insight block hiển thị.

### Implementation for User Story 1

- [x] T004 [US1] Implement header/breadcrumb/layout ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T005 [US1] Dựng grid thẻ dịch vụ + insight block ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T006 [US1] Thêm loading/empty/error states ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx

**Checkpoint**: User Story 1 chạy độc lập được

---

## Phase 4: User Story 2 - Bắt đầu quản lý dịch vụ (Priority: P2)

**Goal**: Có hành động quản lý rõ ràng cho từng dịch vụ.

**Independent Test**: Focus thẻ dịch vụ và thấy action manage/edit.

### Implementation for User Story 2

- [x] T007 [US2] Thêm action manage/edit cho từng thẻ dịch vụ ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T008 [US2] Style status pill active/draft/hidden ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T009 [US2] Thêm UI toggle hiển thị ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx

**Checkpoint**: User Stories 1-2 chạy độc lập được

---

## Phase 5: User Story 3 - Bắt đầu tạo dịch vụ mới (Priority: P3)

**Goal**: Có điểm vào hành động thêm dịch vụ rõ ràng.

**Independent Test**: Header có nút Add New Service.

### Implementation for User Story 3

- [x] T010 [US3] Wire nút Add New Service (style + vị trí) ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T011 [US3] Thêm search + quick filter UI ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T012 [US3] Thêm insight counts ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx

**Checkpoint**: Tất cả user stories chạy độc lập được

---

## Phase 6: Polish & Cross-Cutting Concerns

**Mục đích**: Cập nhật tài liệu và kiểm thử

- [x] T013 [P] Cập nhật ghi chú verification trong /Users/dongdm/Develop/Source/mackazoku/web-ai/docs/delivery/test_plan.md
- [x] T014 Cập nhật trạng thái task và ghi chú verification trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/006-admin-services/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Không phụ thuộc, bắt đầu được ngay
- **Foundational (Phase 2)**: Phải xong Phase 1 trước
- **User Stories (Phase 3+)**: Phụ thuộc Phase 2
- **Polish (Final Phase)**: Sau khi hoàn tất các user story

### User Story Dependencies

- **User Story 1 (P1)**: Sau Phase 2
- **User Story 2 (P2)**: Sau User Story 1
- **User Story 3 (P3)**: Sau User Story 1

### Parallel Opportunities

- T001 và T003 chạy song song (docs + i18n)
- T007 và T008 chạy song song (actions + status styling)
- T013 chạy song song sau khi implement xong

---

## Parallel Example: User Story 2

```bash
# Add manage/edit actions
Task: "Add manage/edit actions for each service card in src/app/[locale]/(admin)/admin/services/page.tsx"

# Add status pill styling
Task: "Implement status pill styling in src/app/[locale]/(admin)/admin/services/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Hoan thanh Phase 1: Setup
2. Hoan thanh Phase 2: Foundational
3. Hoan thanh Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 doc lap

### Incremental Delivery

1. Setup + Foundational -> San sang
2. Add User Story 1 -> Test doc lap -> Demo
3. Add User Story 2 -> Test doc lap -> Demo
4. Add User Story 3 -> Test doc lap -> Demo

---

## Notes

- [P] tasks = khac file, khong phu thuoc
- Khong yeu cau test tu dong

## Task Metadata

| Task | Owner | Status | Last Updated | Doc Impact | Manual Setup Required |
| --- | --- | --- | --- | --- | --- |
| T001 | codex | done | 2026-03-26 | ui_spec | no |
| T002 | codex | done | 2026-03-26 | admin_services_page | no |
| T003 | codex | done | 2026-03-26 | i18n | no |
| T004 | codex | done | 2026-03-26 | admin_services_page | no |
| T005 | codex | done | 2026-03-26 | admin_services_page | no |
| T006 | codex | done | 2026-03-26 | admin_services_page | no |
| T007 | codex | done | 2026-03-26 | admin_services_page | no |
| T008 | codex | done | 2026-03-26 | admin_services_page | no |
| T009 | codex | done | 2026-03-26 | admin_services_page | no |
| T010 | codex | done | 2026-03-26 | admin_services_page | no |
| T011 | codex | done | 2026-03-26 | admin_services_page | no |
| T012 | codex | done | 2026-03-26 | admin_services_page | no |
| T013 | codex | done | 2026-03-26 | test_plan | no |
| T014 | codex | done | 2026-03-26 | tasks | no |
