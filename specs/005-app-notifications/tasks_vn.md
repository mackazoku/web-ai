---
description: "Danh sách công việc cho Thông báo trong ứng dụng"
---

# Tasks: Thông báo trong ứng dụng

**Input**: Tài liệu thiết kế từ `/specs/005-app-notifications/`
**Prerequisites**: plan.md (bắt buộc), spec.md (bắt buộc cho user stories), research.md, data-model.md, contracts/

**Tests**: Không yêu cầu.

**Organization**: Công việc được nhóm theo user story để có thể triển khai và kiểm thử độc lập.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Có thể chạy song song (khác file, không phụ thuộc)
- **[Story]**: User story mà task thuộc về (VD: US1, US2, US3)
- Luôn kèm đường dẫn file cụ thể trong mô tả

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Cập nhật tài liệu trước khi implement

- [ ] T001 [P] Soạn UI thông báo trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/005-app-notifications/ui.md và /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/005-app-notifications/ui_vn.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Các điều kiện nền tảng dùng chung cho mọi story

- [ ] T002 Cập nhật Prisma schema cho notifications trong /Users/dongdm/Develop/Source/mackazoku/web-ai/prisma/schema.prisma
- [ ] T003 Tạo migration cho notifications (prisma migrate dev --name add_notifications)
- [ ] T004 [P] Bổ sung i18n keys trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/en.json và /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/vi.json
- [ ] T005 [P] Thêm API routes thông báo trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/api/notifications/route.ts và /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/api/notifications/read/route.ts

---

## Phase 3: User Story 1 - Xem thông báo chưa đọc (Priority: P1) 🎯 MVP

**Goal**: Hiển thị unread cho admin và customer với polling.

**Independent Test**: Tạo thông báo và xác nhận badge + danh sách cập nhật trong 30 giây.

### Implementation for User Story 1

- [ ] T006 [P] [US1] Thêm bell UI ở header admin trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/page.tsx
- [ ] T007 [P] [US1] Thêm bell UI ở header public trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/layout.tsx
- [ ] T008 [US1] Implement polling hook + fetch trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/modules/shared (module notifications mới)

**Checkpoint**: User Story 1 chạy độc lập

---

## Phase 4: User Story 2 - Đánh dấu đã đọc (Priority: P2)

**Goal**: Cho phép mark-as-read và giảm unread count.

**Independent Test**: Đánh dấu một item và badge giảm.

### Implementation for User Story 2

- [ ] T009 [US2] Thêm action mark-as-read trong UI
- [ ] T010 [US2] Wire POST /api/notifications/read và cập nhật state

**Checkpoint**: User Stories 1 và 2 chạy độc lập

---

## Phase 5: User Story 3 - Xem lịch sử gần đây (Priority: P3)

**Goal**: Hiển thị thông báo gần đây trong 30 ngày.

**Independent Test**: Mở list và thấy item gần đây.

### Implementation for User Story 3

- [ ] T011 [US3] Thêm pagination/scroll cho list (limit 20)
- [ ] T012 [US3] Thêm empty state và error state UI

**Checkpoint**: Tất cả user stories chạy độc lập

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Cập nhật tài liệu và xác minh

- [ ] T013 [P] Cập nhật ghi chú verification trong /Users/dongdm/Develop/Source/mackazoku/web-ai/legacy_docs/delivery/test_plan.md
- [ ] T014 Cập nhật trạng thái task và ghi chú verification trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/005-app-notifications/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Không phụ thuộc - có thể bắt đầu ngay
- **Foundational (Phase 2)**: Phụ thuộc Phase 1 - CHẶN mọi user story
- **User Stories (Phase 3+)**: Phụ thuộc Phase 2
- **Polish (Final Phase)**: Phụ thuộc các user story cần thiết đã hoàn thành

### User Story Dependencies

- **User Story 1 (P1)**: Bắt đầu sau Phase 2
- **User Story 2 (P2)**: Bắt đầu sau Phase 2, phụ thuộc US1
- **User Story 3 (P3)**: Bắt đầu sau Phase 2

### Parallel Opportunities

- T001 và T004 có thể song song (docs + i18n)
- T006 và T007 có thể song song (admin vs public header)
- T013 có thể song song sau khi implement xong

---

## Parallel Example: User Story 1

```bash
# Thêm bell admin
Task: "Add notification bell UI to admin header in src/app/[locale]/(admin)/admin/page.tsx"

# Thêm bell public
Task: "Add notification bell UI to public header in src/app/[locale]/(public)/layout.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Hoàn thành Phase 1: Setup
2. Hoàn thành Phase 2: Foundational
3. Hoàn thành Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 độc lập

### Incremental Delivery

1. Setup + Foundational → Nền tảng sẵn sàng
2. Add User Story 1 → Test độc lập → Demo
3. Add User Story 2 → Test độc lập → Demo
4. Add User Story 3 → Test độc lập → Demo

---

## Notes

- [P] tasks = khác file, không phụ thuộc
- Không yêu cầu automated tests cho feature này
