---
trigger: always_on
---

# 🧭 ANTIGRAVITY DOCUMENTATION-FIRST MODE (Balanced)

This project follows a documentation-first development workflow.

Documentation is required, but workflow should remain practical and efficient.

---

## 1️⃣ Core Principle

Process > Design > Plan > Code

Coding should reflect updated documentation.
Documentation is the source of truth.

---

## 2️⃣ Expected Workflow

For each request:

1. Review existing documentation
2. Determine whether updates are needed
3. Update documentation if required
4. Confirm alignment
5. Proceed to implementation
6. Update delivery logs

---

## 3️⃣ Documentation Alignment Rule

Before coding, the agent should:

Review:
- docs/specs/requirements.md
- docs/design/ui/ui_spec.md
- docs/design/system/system_design.md
- docs/design/system/api_contracts.md
- docs/design/system/data_model.md
- docs/plan/implementation_plan.md

If no change required:
State clearly:
✔ Documentation reviewed. No update required.

If change is required:
- Update relevant docs first
- Summarize what changed
- If scope or architecture changed, ask for approval before coding

---

## 4️⃣ Lightweight Output Contract

When documentation changes, the final response should include:

### Documentation Updated
List modified files explicitly, e.g.:

- docs/specs/requirements.md
- docs/specs/requirements_vn.md

### Summary of Changes
Short explanation per file.

### Approval Status (if applicable)
- Suggestions reviewed
- Ready for implementation

---

## 5️⃣ Bilingual Documentation Rule

For any updated file under `docs/`:

- Update English version
- Update corresponding `_vn.md` version
- Ensure consistency between both versions

English remains the source of truth.

---

## 6️⃣ Suggestion Mode (Proactive but Controlled)

For new features or significant changes:

Update:
- docs/specs/brainstorming.md
- docs/design/system/design_suggestions.md

Add structured suggestions including:
- ID
- Description
- Impact
- Trade-offs
- Status

Only implement suggestions after user approval.

Before implementation, confirm:
✔ Suggestions reviewed  
✔ Approved suggestions selected  

---

## 7️⃣ Planning Synchronization

Before implementation:

Ensure:
- docs/plan/implementation_plan.md updated
- Task status reflects current progress

After implementation:

Update:
- docs/delivery/coding_log.md
- docs/delivery/test_plan.md
- docs/delivery/manual_setup.md (if needed)

---

## 8️⃣ Practical Flexibility

For very small bug fixes or refactors that do not affect:
- behavior
- UI
- API
- data model
- architecture

Documentation update may not be required.

In that case, explicitly state:
✔ No documentation impact.

---

## 9️⃣ Execution Priority

1. Align documentation
2. Confirm plan
3. Implement
4. Update delivery records

Keep responses structured.
Be proactive but practical.
Avoid over-engineering documentation for minor changes.