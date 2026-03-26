---
description: "Task list for Admin Shared Sidebar"
---

# Tasks: Admin Shared Sidebar

**Input**: Design documents from `/specs/007-admin-shared-sidebar/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), ui.md, design_suggestions.md

**Tests**: Not requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Documentation updates required before implementation

- [x] T001 [P] Update UI spec details in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/007-admin-shared-sidebar/ui.md and /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/007-admin-shared-sidebar/ui_vn.md based on final sidebar behavior

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core prerequisites shared by all stories

- [x] T002 Extract shared AdminSidebar component into /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/admin/admin-sidebar.tsx
- [x] T003 Update admin layout to render shared sidebar in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/layout.tsx

---

## Phase 3: User Story 1 - Consistent admin navigation (Priority: P1)

**Goal**: Sidebar is visible on all admin pages.

**Independent Test**: Navigate across admin routes and confirm sidebar is visible.

### Implementation for User Story 1

- [x] T004 [US1] Wire AdminSidebar into admin pages in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/app/[locale]/(admin)/layout.tsx
- [x] T005 [US1] Ensure responsive collapse behavior for sidebar in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/admin/admin-sidebar.tsx

**Checkpoint**: User Story 1 should be functional and testable independently

---

## Phase 4: User Story 2 - Correct active state (Priority: P2)

**Goal**: Active nav item highlights based on current route.

**Independent Test**: Visit multiple admin pages and verify active nav updates.

### Implementation for User Story 2

- [x] T006 [US2] Implement active nav highlight logic in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/admin/admin-sidebar.tsx
- [x] T007 [US2] Add active rail indicator styling in /Users/dongdm/Develop/Source/mackazoku/web-ai/src/components/admin/admin-sidebar.tsx

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Documentation and verification updates

- [x] T008 [P] Update verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/docs/delivery/test_plan.md
- [x] T009 Update task status and verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/007-admin-shared-sidebar/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P2)**: Can start after User Story 1

### Parallel Opportunities

- T001 and T002 can run in parallel (docs + component extraction)
- T008 can run in parallel once implementation is complete

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

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Setup + Foundational -> Foundation ready
2. Add User Story 1 -> Test independently -> Demo
3. Add User Story 2 -> Test independently -> Demo

---

## Notes

- [P] tasks = different files, no dependencies
- No automated tests requested for this feature

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
