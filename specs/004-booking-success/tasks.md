---
description: "Task list for Booking Success Dialog"
---

# Tasks: Booking Success Dialog

**Input**: Design documents from `/specs/004-booking-success/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Documentation updates required before implementation

- [X] T001 [P] Document success dialog UI in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/004-booking-success/ui.md and /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/004-booking-success/ui_vn.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core prerequisites shared by all stories

- [X] T002 [P] Add success dialog i18n keys in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/en.json and /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/vi.json

---

## Phase 3: User Story 1 - Confirm booking success (Priority: P1) 🎯 MVP

**Goal**: Show a success dialog after a successful booking submission using the approved design.

**Independent Test**: Complete a booking and verify the success dialog appears and no dialog is shown on failure.

### Implementation for User Story 1

- [X] T003 [P] [US1] Create success dialog component in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-success-dialog.tsx using the approved design asset
- [X] T004 [US1] Update booking submission flow in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-client.tsx to open the dialog on success and remove inline success text

**Checkpoint**: User Story 1 should be functional and testable independently

---

## Phase 4: User Story 2 - Dismiss or auto-advance (Priority: P2)

**Goal**: Provide a clear confirmation action and optional auto-advance to bookings.

**Independent Test**: Trigger the dialog, confirm to reach bookings, or wait for auto-advance to complete.

### Implementation for User Story 2

- [X] T005 [US2] Add confirm CTA handling to /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-success-dialog.tsx (expose onConfirm callback)
- [X] T006 [US2] Implement auto-advance timer to bookings in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-client.tsx with proper cleanup

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - Error fallback (Priority: P3)

**Goal**: Provide a manual path to bookings if automatic navigation fails.

**Independent Test**: Simulate a navigation failure and verify the manual route is displayed in the dialog.

### Implementation for User Story 3

- [X] T007 [US3] Add fallback UI state and manual route CTA in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-success-dialog.tsx
- [X] T008 [US3] Detect navigation failure/timeout in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-client.tsx and surface fallback state to the dialog

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Documentation and verification updates

- [X] T009 [P] Update verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/docs/delivery/test_plan.md
- [X] T010 Update task status and verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/004-booking-success/tasks.md

---

## Phase 7: Shared Dialog Shell (New Scope)

**Purpose**: Introduce a shared dialog shell for upcoming public dialogs

- [X] T011 [P] Create shared dialog shell in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/dialog-shell.tsx
- [X] T012 Refactor /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(public)/booking/booking-success-dialog.tsx to use the shared dialog shell

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P2)**: Can start after Foundational (Phase 2), builds on US1 component
- **User Story 3 (P3)**: Can start after Foundational (Phase 2), builds on US1/US2 dialog and navigation

### Parallel Opportunities

- T001 and T002 can run in parallel (different documentation/i18n files)
- T003 can run in parallel with T004 (component vs booking flow wiring)
- T007 can run in parallel with T008 (dialog UI vs navigation detection)
- T009 can run in parallel once implementation is complete

---

## Parallel Example: User Story 1

```bash
# Create dialog UI component
Task: "Create success dialog component in src/app/[locale]/(public)/booking/booking-success-dialog.tsx"

# Wire dialog state into booking flow
Task: "Update booking submission flow in src/app/[locale]/(public)/booking/booking-client.tsx to open the dialog on success"
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

### Parallel Team Strategy

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3

---

## Notes

- [P] tasks = different files, no dependencies
- Each user story should be independently completable and testable
- No automated tests requested for this feature

## Verification Notes

- Manual verification pending for success dialog flow and fallback behavior.
