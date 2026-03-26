# Design Suggestions: GitHub Vercel CI/CD

## Suggestions
- ID: D-001
  - Title: Separate build and deploy jobs
  - Description: Split workflow into build/test job and deploy job with explicit dependency.
  - Scope impact: CI workflow structure.
  - Related screens/features: CI/CD pipeline.
  - Trade-offs: More YAML vs. clearer pipeline stages.
  - Estimated complexity: Low
  - Status: approved
  - Owner decision: approved
