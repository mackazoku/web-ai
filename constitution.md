# Web AI Constitution

## Core Principles

### 1) Spec-First Delivery
All work follows **spec → plan → tasks → implementation**. Coding is not allowed before specs and plans are updated and approved.

### 2) Documentation Is Source of Truth
Specs, plans, and tasks define the scope. Implementation must match these artifacts.

### 3) Bilingual Documentation
Every spec artifact has an English version and a Vietnamese `_vn` version. English is the source of truth; Vietnamese must be kept in sync.

### 4) Explicit Approval Gates
Any change that impacts scope, logic, API, or data model requires explicit user approval before implementation.

### 5) Minimal, Pragmatic Changes
Prefer small, targeted changes. Avoid unrelated refactors.

## Quality & Verification
- No hardcoded UI strings; use i18n keys.
- New API routes require validation (Zod).
- Record verification steps in `specs/*/tasks.md` and update `legacy_docs/delivery/test_plan.md` until fully retired.

## Operations & Manual Setup
- Manual steps must be tracked in `specs/*/quickstart.md`.
- Any environment changes (DB, secrets, CI) must be documented before deploy.

## Governance
This constitution supersedes prior agent rules. Amendments require updating both English and Vietnamese versions and explicit approval.

**Version**: 1.0.0 | **Ratified**: 2026-03-25 | **Last Amended**: 2026-03-25
