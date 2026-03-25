# Suggestion Governance Policy

## Purpose
Define how suggestions are proposed, reviewed, approved, and implemented.

## Rules
- Every suggestion must include: ID, title, description, scope impact, related screens/features, trade-offs, estimated complexity, status, owner decision.
- Status flow: proposed → under_review → approved → implemented (or rejected).
- Implementation is only allowed after explicit approval by the user.
- Suggestions must be logged in:
  - `docs/specs/brainstorming.md`
  - `docs/design/system/design_suggestions.md`

## Audit
- Keep a changelog entry in `docs/delivery/coding_log.md` when a suggestion is implemented.
