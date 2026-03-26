---
description: "Task list for Admin Services Screen"
---

# Tasks: Admin Services Screen

**Input**: Design documents from `/specs/006-admin-services/` and `docs/design/ui/admin/screens/services/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), ui.md, design_suggestions.md

**Tests**: Not requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Documentation updates required before implementation

- [x] T001 [P] Update UI spec details in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/006-admin-services/ui.md and /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/006-admin-services/ui_vn.md based on final design notes

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core prerequisites shared by all stories

- [x] T002 Add admin services route page in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T003 [P] Add services UI i18n keys in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/en.json and /Users/dongdm/Develop/Source/mackazoku/web-ai/src/messages/vi.json

---

## Phase 3: User Story 1 - View services overview (Priority: P1) 

**Goal**: Render the services overview with cards and insights matching the design.

**Independent Test**: Load the Services screen and verify service cards and insight block render.

### Implementation for User Story 1

- [x] T004 [US1] Implement services header, breadcrumb, and layout in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T005 [US1] Build service cards grid and insight block in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T006 [US1] Add loading/empty/error states UI in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx

**Checkpoint**: User Story 1 should be functional and testable independently

---

## Phase 4: User Story 2 - Start managing a service (Priority: P2)

**Goal**: Provide clear management actions per service.

**Independent Test**: Focus a service card and confirm manage/edit actions are visible.

### Implementation for User Story 2

- [x] T007 [US2] Add manage/edit actions for each service card in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T008 [US2] Implement status pill styling for active/draft/hidden in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T009 [US2] Add visibility toggle UI entry in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - Start creating a new service (Priority: P3)

**Goal**: Provide a prominent add-service entry point.

**Independent Test**: Verify header contains Add New Service action and it is clearly visible.

### Implementation for User Story 3

- [x] T010 [US3] Wire Add New Service action button styling and placement in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T011 [US3] Add search + quick filter UI in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx
- [x] T012 [US3] Add service health insight counts in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/admin/services/page.tsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Documentation and verification updates

- [x] T013 [P] Update verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/docs/delivery/test_plan.md
- [x] T014 Update task status and verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/006-admin-services/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P2)**: Can start after User Story 1, reuses shared UI
- **User Story 3 (P3)**: Can start after User Story 1

### Parallel Opportunities

- T001 and T003 can run in parallel (docs + i18n)
- T007 and T008 can run in parallel (actions + status styling)
- T013 can run in parallel once implementation is complete

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

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Setup + Foundational -> Foundation ready
2. Add User Story 1 -> Test independently -> Demo
3. Add User Story 2 -> Test independently -> Demo
4. Add User Story 3 -> Test independently -> Demo

---

## Notes

- [P] tasks = different files, no dependencies
- No automated tests requested for this feature

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
