# Design Suggestions: Thông Báo Trong Ứng Dụng

## Suggestions
- ID: D-001
  - Title: Component chuông thông báo dùng chung
  - Description: Tạo component chuông + dropdown dùng cho cả admin và public header.
  - Scope impact: UI component dùng chung và style.
  - Related screens/features: Header admin dashboard, header public.
  - Trade-offs: Tăng công việc ban đầu vs. UX nhất quán và giảm trùng lặp.
  - Estimated complexity: Medium
  - Status: proposed
  - Owner decision: pending
- ID: D-002
  - Title: Backoff khi polling lỗi
  - Description: Tăng dần thời gian polling khi lỗi để giảm spam lỗi liên tục.
  - Scope impact: Logic polling hook.
  - Related screens/features: Dropdown thông báo.
  - Trade-offs: Phục hồi chậm hơn một chút vs. ổn định hơn khi lỗi tạm thời.
  - Estimated complexity: Low
  - Status: proposed
  - Owner decision: pending
