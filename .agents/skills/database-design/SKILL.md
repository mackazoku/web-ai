---
name: database-design
description: Database design principles and decision-making. Covers Selection, Schema, Indexing, and Optimization.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# 🗄️ Database Design Master Skill

> **Philosophy**: Fit for purpose. Data integrity first. Query performance second.
> **Core Principle**: Don't default to PostgreSQL. Choose based on CONTEXT.

## 🧠 Core Mental Model

Before designing, **STOP** and answer:
1.  **Workload**: Read-heavy (Cache/Replica)? Write-heavy (Sharding)?
2.  **Scale**: Single node? Edge distributed? Global?
3.  **Complexity**: Simple Relations (SQLite)? Complex/Graph (PG)?
4.  **Deployment**: Serverless (Neon/Turso)? Self-hosted?

---

## 🌳 Decision Trees

### 1. Database Engine
*   **PostgreSQL**: Default for relational, complex queries, vector search (pgvector).
*   **SQLite / Turso**: Edge deployment, low latency, local-first apps.
*   **Neon**: Serverless Postgres, branching workflow.
*   **Redis**: Caching, pub/sub, ephemeral data.

### 2. Primary Keys
*   **UUID (v4/v7)**: Distributed systems, security (unpredictable), merging data later.
*   **Auto-increment (Int)**: Simple, single-node, strictly ordered, smaller index.
*   **ULID**: Sortable like Int, Unique like UUID. Best of both worlds.

### 3. ORM Selection
*   **Prisma**: Developer experience, schema migration, heavy runtime.
*   **Drizzle**: Lightweight, SQL-like, edge-compatible, great TS support.
*   **TypeORM/Sequelize**: Legacy, avoid for new projects if possible.

---

## 📐 Schema Design Principles

*   **Normalization**: 3NF by default. Denormalize ONLY for proven read performance.
*   **Timestamps**: Always include `created_at` and `updated_at`. Use `TIMESTAMPTZ`.
*   **Soft Deletes**: proper `deleted_at` column vs Audit table (depends on compliance).
*   **JSONB**: Use for unstructured data, but don't abuse it to avoid modeling.

### ⚡ Performance Checklist
*   [ ] **Indexes**: FKs indexed? Search columns indexed?
*   [ ] **N+1**: Are you resolving relations in loops? (Use `include` / `JOIN`).
*   [ ] **Types**: correct integer sizes? (SmallInt vs BigInt).
*   [ ] **Constraints**: NOT NULL, CHECK, UNIQUE to enforce integrity at DB level.

---

## 🛠️ Optimization Cheatsheet

| Issue | Solution |
| :--- | :--- |
| **Slow Read** | Add Index (`EXPLAIN ANALYZE`), Caching (Redis), Read Replica. |
| **Slow Write** | Remove unused indexes, Batch inserts, Sharding. |
| **Deadlock** | Consistent lock ordering, shorter transactions. |
| **Connection**| Connection Ppooling (PgBouncer), Serverless Driver. |

---

## 🏃 Quick Start Checkpoints

**Before You Design:**
```text
Engine: [PG/SQLite/MySQL]
Scale:  [Single/Edge/Global]
ORM:    [Prisma/Drizzle/Raw]
```

**Quality Loop:**
1.  **Validate**: 3NF? Correct Types?
2.  **Verify**: Indexes on Foreign Keys?
3.  **Visual**: ER Diagram makes sense?
