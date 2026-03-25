# Web AI (Spec Kit)

This project uses GitHub Spec Kit for spec‑driven delivery.

## Structure

```text
constitution.md
specs/spa-booking-platform/
├── spec.md
├── plan.md
├── tasks.md
├── research.md
├── data-model.md
├── quickstart.md
├── ui.md
└── contracts/
    └── api.md
```

Legacy documentation is preserved at `legacy_docs/`.

## Workflow (Priority Order)

Priority when handling new requests:
1. System/Developer instructions
2. AGENTS.md / Spec‑Kit process
3. Specs/Plan/Tasks
4. Agent skills (methods & best practices)

Execution flow:
1. Update `spec.md` (and `spec_vn.md`) for new scope.
2. If logic/architecture changes, update `plan.md`, `tasks.md`, `data-model.md`, and `contracts/api.md`.
3. Get approval before coding.
4. Implement and record verification in `checklists/quality-gates.md`.

## Quickstart
See `specs/spa-booking-platform/quickstart.md`.

## Running
```bash
npm run dev
```
