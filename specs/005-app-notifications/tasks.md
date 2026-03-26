---
description: "Task list for In-App Notifications"
---

# Tasks: In-App Notifications

**Input**: Design documents from `/specs/005-app-notifications/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Documentation updates required before implementation

- [ ] T001 [P] Document notification UI in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/005-app-notifications/ui.md and /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/005-app-notifications/ui_vn.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core prerequisites shared by all stories

- [ ] T002 Update Prisma schema for notifications in /Users/dongdm/Develop/Source/mackazoku/web-ai/prisma/schema.prisma
- [ ] T003 Create migration for notifications (prisma migrate dev --name add_notifications)
- [ ] T004 [P] Add notification i18n keys in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/en.json and /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/vi.json
- [ ] T005 [P] Add notification API routes in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/api/notifications/route.ts and /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/api/notifications/read/route.ts

---

## Phase 3: User Story 1 - View unread notifications (Priority: P1) 🎯 MVP

**Goal**: Show unread notifications for admin and customer with polling.

**Independent Test**: Create a notification and verify unread badge and list update within 30 seconds.

### Implementation for User Story 1

- [ ] T006 [P] [US1] Add notification bell UI to admin header in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/page.tsx
- [ ] T007 [P] [US1] Add notification bell UI to public header in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/layout.tsx
- [ ] T008 [US1] Implement polling hook and fetch in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/modules/shared (new notifications module)

**Checkpoint**: User Story 1 should be functional and testable independently

---

## Phase 4: User Story 2 - Mark notifications as read (Priority: P2)

**Goal**: Allow marking notifications as read and reduce unread count.

**Independent Test**: Mark an unread item and confirm badge decrements.

### Implementation for User Story 2

- [ ] T009 [US2] Add mark-as-read action in notification UI components
- [ ] T010 [US2] Wire POST /api/notifications/read and update local state

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - See recent history (Priority: P3)

**Goal**: Show recent notifications within 30-day retention window.

**Independent Test**: Open list and verify recent items render.

### Implementation for User Story 3

- [ ] T011 [US3] Add pagination/scroll for notifications list (limit 20)
- [ ] T012 [US3] Add empty state and error state UI

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Documentation and verification updates

- [ ] T013 [P] Update verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/legacy_docs/delivery/test_plan.md
- [ ] T014 Update task status and verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/005-app-notifications/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P2)**: Can start after Foundational (Phase 2), builds on US1 components
- **User Story 3 (P3)**: Can start after Foundational (Phase 2)

### Parallel Opportunities

- T001 and T004 can run in parallel (docs + i18n)
- T006 and T007 can run in parallel (admin vs public header)
- T013 can run in parallel once implementation is complete

---

## Parallel Example: User Story 1

```bash
# Add admin notification bell
Task: "Add notification bell UI to admin header in src/app/[locale]/(admin)/admin/page.tsx"

# Add public notification bell
Task: "Add notification bell UI to public header in src/app/[locale]/(public)/layout.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Demo
3. Add User Story 2 → Test independently → Demo
4. Add User Story 3 → Test independently → Demo

---

## Notes

- [P] tasks = different files, no dependencies
- No automated tests requested for this feature
