---
name: architecture
description: Architectural decision-making framework. Requirements analysis, trade-off evaluation, ADR documentation.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# 🏛️ Architecture Master Skill

> **Philosophy**: Simplicity is the ultimate sophistication. Start simple, evolve complex.
> **Core Principle**: Trade-offs inform decisions. Document rationale in ADRs.

## 🧠 Core Mental Model

Before architecting, **STOP** and answer:
1.  **Complexity**: Is the business logic complex (DDD) or simple (CRUD)?
2.  **Scale**: Independent scaling needs (Microservices) or unified (Monolith)?
3.  **Team**: Can the current team support this complexity?
4.  **Change**: Will the data source / business rules change frequently?

---

## 🌳 Decision Trees

### 1. High-Level Pattern
*   **Monolith**: Start here. Simple deployment, shared memory, easy refactoring.
*   **Modular Monolith**: Good middle ground. Clear boundaries, single deployment.
*   **Microservices**: Only if: >10 devs, distinct scaling needs, clear domains.
*   **Serverless**: Event-driven patches, sporadic usage, infinite scale.

### 2. Code Organization
*   **Transaction Script**: Simple CRUD. Logic in controllers/services.
*   **Domain Model**: Complex rules. Rich entities with behavior.
*   **Clean Architecture**: High abstraction. Protect core domain from framework.

### 3. Data Access
*   **Active Record (Prisma/ORM)**: Quick, direct. Best for simple apps.
*   **Repository Pattern**: Testable, decoupled. Best for complex apps / changing datasources.
*   **CQRS**: Separate Read/Write. High complexity. Best for heavy read vs write skew.

---

## 📝 ADR Template (Decision Record)

Document significant decisions using this format:

```markdown
# ADR-[XXX]: [Decision Title]

## Context
[Problem description & Constraints (Timeline, Team, Scale)]

## Decision
[What we chose]

## Rationale
[Why we chose it over alternatives]

## Trade-offs
*   [Good]: Benefit 1
*   [Bad]: Cost/Risk 1

## Consequences
[What happens next? New workflows? Learning curve?]
```

---

## 🛡️ Validation Checklist

**Before Finalizing:**
*   [ ] **YAGNI**: Did we solve a problem we *actually* have?
*   [ ] **KISS**: Is there a simpler way?
*   [ ] **Skill Fit**: Can the team maintain this?
*   [ ] **Exit Strategy**: How hard is it to change this later?

### ⚠️ Anti-Patterns
*   **Resume-Driven Development**: Choosing tech because it's trendy.
*   **Microservices Envy**: Splitting too early causes network latency hell.
*   **Golden Hammer**: Using the same pattern for every problem.
