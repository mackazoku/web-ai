---
description: "Danh sach task cho Admin Shared Sidebar"
---

# Tasks: Admin Shared Sidebar

**Input**: Design documents from `/specs/007-admin-shared-sidebar/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), ui.md, design_suggestions.md

**Tests**: Không yêu cầu.

**Organization**: Tasks được nhóm theo user story để triển khai độc lập.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Có thể chạy song song (khác file, không phụ thuộc)
- **[Story]**: User story tương ứng (US1, US2)
- Bao gồm đường dẫn file cụ thể

## Phase 1: Setup (Hạ tầng chung)

**Mục đích**: Cập nhật tài liệu trước khi implement

- [x] T001 [P] Cập nhật UI spec ở /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/007-admin-shared-sidebar/ui.md và /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/007-admin-shared-sidebar/ui_vn.md theo hành vi sidebar

---

## Phase 2: Foundational (Điều kiện bắt buộc)

**Mục đích**: Nền tảng dùng chung

- [x] T002 Tách AdminSidebar dùng chung vào /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/admin/admin-sidebar.tsx
- [x] T003 Cập nhật admin layout để render sidebar chung tại /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/layout.tsx

---

## Phase 3: User Story 1 - Điều hướng admin nhất quán (Priority: P1)

**Goal**: Sidebar hiển thị trên mọi trang admin.

**Independent Test**: Chuyển giữa các route admin và xác nhận sidebar hiển thị.

### Implementation for User Story 1

- [x] T004 [US1] Gắn AdminSidebar vào layout admin ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/layout.tsx
- [x] T005 [US1] Bổ sung hành vi thu gọn responsive ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/admin/admin-sidebar.tsx

**Checkpoint**: User Story 1 chạy độc lập được

---

## Phase 4: User Story 2 - Active state chính xác (Priority: P2)

**Goal**: Active nav highlight theo route hiện tại.

**Independent Test**: Mở nhiều trang admin và xác nhận active cập nhật đúng.

### Implementation for User Story 2

- [x] T006 [US2] Logic highlight active nav ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/admin/admin-sidebar.tsx
- [x] T007 [US2] Style active rail indicator ở /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/admin/admin-sidebar.tsx

**Checkpoint**: User Stories 1-2 chạy độc lập được

---

## Phase 5: Polish & Cross-Cutting Concerns

**Mục đích**: Cập nhật tài liệu và kiểm thử

- [x] T008 [P] Cập nhật ghi chú verification trong /Users/dongdm/Develop/Source/mackazoku/web-ai/docs/delivery/test_plan.md
- [x] T009 Cập nhật trạng thái task và ghi chú verification trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/007-admin-shared-sidebar/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Không phụ thuộc
- **Foundational (Phase 2)**: Sau Phase 1
- **User Stories (Phase 3+)**: Sau Phase 2
- **Polish (Final Phase)**: Sau khi hoàn tất user stories

### User Story Dependencies

- **User Story 1 (P1)**: Sau Phase 2
- **User Story 2 (P2)**: Sau User Story 1

### Parallel Opportunities

- T001 và T002 chạy song song (docs + component)
- T008 chạy song song sau khi implement xong

---

## Parallel Example: User Story 2

```bash
# Active nav logic
Task: "Implement active nav highlight logic in src/components/admin/admin-sidebar.tsx"

# Active rail indicator
Task: "Add active rail indicator styling in src/components/admin/admin-sidebar.tsx"
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

---

## Notes

- [P] tasks = khac file, khong phu thuoc
- Khong yeu cau test tu dong

## Task Metadata

| Task | Owner | Status | Last Updated | Doc Impact | Manual Setup Required |
| --- | --- | --- | --- | --- | --- |
| T001 | codex | done | 2026-03-26 | ui_spec | no |
| T002 | codex | done | 2026-03-26 | admin_sidebar | no |
| T003 | codex | done | 2026-03-26 | admin_layout | no |
| T004 | codex | done | 2026-03-26 | admin_layout | no |
| T005 | codex | done | 2026-03-26 | admin_sidebar | no |
| T006 | codex | done | 2026-03-26 | admin_sidebar | no |
| T007 | codex | done | 2026-03-26 | admin_sidebar | no |
| T008 | codex | done | 2026-03-26 | test_plan | no |
| T009 | codex | done | 2026-03-26 | tasks | no |
