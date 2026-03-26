---
description: "Danh sách công việc cho Dialog đặt vé thành công"
---

# Tasks: Dialog đặt vé thành công

**Input**: Tài liệu thiết kế từ `/specs/004-booking-success/`
**Prerequisites**: plan.md (bắt buộc), spec.md (bắt buộc cho user stories), research.md, data-model.md, contracts/

**Tests**: Không yêu cầu.

**Organization**: Công việc được nhóm theo user story để có thể triển khai và kiểm thử độc lập.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Có thể chạy song song (khác file, không phụ thuộc)
- **[Story]**: User story mà task thuộc về (VD: US1, US2, US3)
- Luôn kèm đường dẫn file cụ thể trong mô tả

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Cập nhật tài liệu trước khi implement

- [X] T001 [P] Soạn UI dialog thành công trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/004-booking-success/ui.md và /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/004-booking-success/ui_vn.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Các điều kiện nền tảng dùng chung cho mọi story

- [X] T002 [P] Bổ sung i18n keys cho dialog thành công trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/en.json và /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/vi.json

---

## Phase 3: User Story 1 - Xác nhận đặt vé thành công (Priority: P1) 🎯 MVP

**Goal**: Hiển thị dialog thành công sau khi booking thành công theo đúng design đã duyệt.

**Independent Test**: Tạo booking thành công và thấy dialog; không hiển thị dialog khi booking thất bại.

### Implementation for User Story 1

- [X] T003 [P] [US1] Tạo component dialog thành công trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-success-dialog.tsx theo design đã duyệt
- [X] T004 [US1] Cập nhật luồng submit trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-client.tsx để mở dialog khi thành công và bỏ thông báo success inline

**Checkpoint**: User Story 1 phải chạy độc lập

---

## Phase 4: User Story 2 - Đóng hoặc tự chuyển (Priority: P2)

**Goal**: Có hành động xác nhận rõ ràng và tự động chuyển sang bookings nếu cần.

**Independent Test**: Mở dialog, nhấn xác nhận để tới bookings, hoặc chờ auto-advance.

### Implementation for User Story 2

- [X] T005 [US2] Thêm xử lý CTA xác nhận trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-success-dialog.tsx (expose onConfirm callback)
- [X] T006 [US2] Implement timer auto-advance sang bookings trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-client.tsx và cleanup đúng cách

**Checkpoint**: User Stories 1 và 2 chạy độc lập

---

## Phase 5: User Story 3 - Fallback khi lỗi điều hướng (Priority: P3)

**Goal**: Có đường dẫn thủ công tới bookings nếu điều hướng tự động lỗi.

**Independent Test**: Giả lập lỗi điều hướng và thấy đường dẫn thủ công trong dialog.

### Implementation for User Story 3

- [X] T007 [US3] Bổ sung trạng thái fallback và CTA thủ công trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-success-dialog.tsx
- [X] T008 [US3] Phát hiện lỗi/timeout điều hướng trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-client.tsx và truyền trạng thái fallback vào dialog

**Checkpoint**: Tất cả user stories chạy độc lập

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Cập nhật tài liệu và xác minh

- [X] T009 [P] Cập nhật ghi chú verification trong /Users/dongdm/Develop/Source/mackazoku/web-ai/docs/delivery/test_plan.md
- [X] T010 Cập nhật trạng thái task và ghi chú verification trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/004-booking-success/tasks.md

---

## Phase 7: Dialog Shell dùng chung (Scope mới)

**Purpose**: Tạo dialog shell dùng chung cho các dialog public sắp tới

- [X] T011 [P] Tạo dialog shell dùng chung trong /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/dialog-shell.tsx
- [X] T012 Refactor /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-success-dialog.tsx để dùng dialog shell chung

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Không phụ thuộc - có thể bắt đầu ngay
- **Foundational (Phase 2)**: Phụ thuộc Phase 1 - CHẶN mọi user story
- **User Stories (Phase 3+)**: Phụ thuộc Phase 2
- **Polish (Final Phase)**: Phụ thuộc các user story cần thiết đã hoàn thành

### User Story Dependencies

- **User Story 1 (P1)**: Bắt đầu sau Phase 2
- **User Story 2 (P2)**: Bắt đầu sau Phase 2, phụ thuộc component US1
- **User Story 3 (P3)**: Bắt đầu sau Phase 2, phụ thuộc dialog + navigation của US1/US2

### Parallel Opportunities

- T001 và T002 có thể song song (khác file tài liệu/i18n)
- T003 có thể song song với T004 (component vs wiring)
- T007 có thể song song với T008 (UI fallback vs phát hiện lỗi)
- T009 có thể song song sau khi implement xong

---

## Parallel Example: User Story 1

```bash
# Tạo UI dialog
Task: "Create success dialog component in src/app/[locale]/(public)/booking/booking-success-dialog.tsx"

# Wiring dialog vào booking flow
Task: "Update booking submission flow in src/app/[locale]/(public)/booking/booking-client.tsx to open the dialog on success"
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

### Parallel Team Strategy

1. Team hoàn thành Setup + Foundational
2. Sau khi Foundational xong:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3

---

## Notes

- [P] tasks = khác file, không phụ thuộc
- Mỗi user story phải hoàn thành và test độc lập
- Không yêu cầu automated tests cho feature này

## Verification Notes

- Chưa thực hiện kiểm tra thủ công cho dialog thành công và fallback.
