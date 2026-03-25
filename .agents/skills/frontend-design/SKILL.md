---
name: frontend-design
description: Design thinking and decision-making for web UI. Covers layout, color, typography, and UX psychology principles.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# 🎨 Frontend Design Master Skill

> **Philosophy**: Every pixel has purpose. Restraint is luxury. User psychology drives decisions.
> **Core Principle**: THINK, don't memorize. ASK, don't assume.

## 🧠 Core Mental Model (Anti-Memorization)

Before designing, **STOP** and answer:
1.  **Constraints**: Timeline? Brand? Tech Stack? Audience?
2.  **Emotion**: What feeling should this evoke? (Trust, Excitement, Calm)
3.  **Audience**: Gen Z (Bold/Fast) vs Enterprise (Clean/Data) vs Boomers (High Contrast/Simple).
4.  **Layout**: Single Col (Mobile) vs Grid (Data) vs Split (Story).

---

## 🎭 UX Psychology Cheat Sheet

| Law | Principle | Application |
| :--- | :--- | :--- |
| **Hick's Law** | More choices = slower decisions | Max 5-7 nav items. Progressive disclosure. |
| **Fitts' Law** | Bigger + closer = easier to click | Big CTAs (min 44px). Magic corners. |
| **Miller's Law** | Working memory ~7 items | Chunk content. Group fields. |
| **Von Restorff** | Different = memorable | Make CTAs visually distinct. |
| **Serial Position**| First/Last remembered best | Key info at start/end. |

### 🎨 Color & Typography
*   **60-30-10 Rule**: 60% Primary/Neutral, 30% Secondary, 10% Accent (CTA).
*   **Emotions**: Blue (Trust), Green (Growth), Orange (Urgency), Black/Gold (Luxury).
*   **Type Scale**: `1.2` (Mobile/Dashboard) vs `1.4+` (Editorial/Marketing).
*   **Readability**: 45-75 chars per line. `1.5` line-height.

---

## 🌳 Decision Trees

### 1. Project Type
*   **E-Commerce**: Trust signals (Badges/SSL), clear CTAs, scannable lists.
*   **SaaS Dashboard**: Density, data clarity, muted colors, consistent nav.
*   **Marketing/Landing**: Emotional hero, big type, social proof, single goal.
*   **Portfolio**: Personality, unique grids, "Show don't tell".

### 2. Audience Direction
*   **Gen Z**: Bold, variable fonts, dark mode, micro-interactions.
*   **B2B**: Clean sans-serif, high contrast, white space, standard layouts.
*   **Luxury**: Serif headings, minimal palette, lots of breathing room.

---

## 🛡️ Technical & UX Constraints

### ⚠️ The "Don't Do This" List (Anti-Patterns)
*   **Dark Patterns**: Fake urgency, hidden costs, forced signups.
*   **Lazy UI**: "Bento Grids" everywhere, unreadable contrast, slow animations.
*   **Clutter**: Walls of text, excessive borders/shadows, >3 font families.
*   **Generic**: Don't just clone Vercel/Stripe. Match the BRAND.

### ⚡ "Wow Factor" Checklist
*   [ ] **Whitespace**: Is it breathable? (Luxury = Space).
*   [ ] **Hierarchy**: Is the primary action obvious at a glance?
*   [ ] **Motion**: Interaction feedback (hover/click) exists?
*   [ ] **Consistency**: Same margins, rounded corners, and colors throughout?
*   [ ] **Accessibility**: Alt text? Keyboard nav? Contrast check?

---

## 🏃 Quick Start Checkpoints

**Before You Design:**
```text
Type:     [E-com/SaaS/Landing]
Emotion:  [Trust/Excitement/Calm]
Audience: [GenZ/Pro/General]
Constraints: [Timeline/Brand]
```

**Quality Loop:**
1.  **Validate**: Does it solve the user's problem?
2.  **Verify**: Is it accessible?
3.  **Visual**: Is it distinct from defaults?
