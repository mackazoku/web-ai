---
name: "i18n-playbook"
description: "i18n key naming, fallback behavior, and locale checks."
---

# i18n Playbook

## Key Naming
- Use feature namespaces: `Login.*`, `Booking.*`, `CustomerProfile.*`.
- Avoid reusing admin keys for public UI.

## Fallbacks
- Always provide both `en` and `vi` entries for new keys.
- If a key is removed, remove it in both locales.

## Checks
- No hardcoded UI strings outside of mock data.
- Ensure pluralization uses ICU patterns where needed.
