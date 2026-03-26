# UI Spec: Màn hình Services (Admin)

## Overview
- **Screens**: Admin Services.
- **Intent**: Tổng quan dịch vụ theo phong cách editorial, có điểm vào thao tác rõ ràng.
- **Design Source**: `docs/design/ui/admin/screens/services/`.
 - **Approved Additions**: Search + filter, status pill, toggle hiển thị, và khối insight dịch vụ.

## Navigation and entry points
- Vào từ sidebar admin "Services".
- Breadcrumb header hiển thị Admin -> Services.
- Hành động chính: nút "Add New Service" ở header.
 - Hành động phụ: ô tìm kiếm, filter trạng thái, filter nhanh theo thời lượng.

## States
- **Loading**: Skeleton cards hoặc placeholder trong grid.
- **Empty**: Empty state kèm CTA thêm dịch vụ.
- **Error**: Thông báo lỗi kèm nút retry.
- **Success**: Danh sách dịch vụ + khối tổng quan.

## Forms and validation rules
- Không có form inline ở v1. Hành động sẽ dẫn tới form riêng nếu/ khi có.

## Accessibility notes
- Nút hành động có thể focus bằng bàn phím.
- Card có focus state rõ ràng và đảm bảo tương phản.
- Icon có nhãn trợ năng.

## i18n keys (new/updated)
- `AdminServices.title`
- `AdminServices.subtitle`
- `AdminServices.add`
- `AdminServices.search.placeholder`
- `AdminServices.filters.status`
- `AdminServices.filters.duration`
- `AdminServices.filters.all`
- `AdminServices.status.active`
- `AdminServices.status.draft`
- `AdminServices.status.hidden`
- `AdminServices.actions.manage`
- `AdminServices.actions.edit`
- `AdminServices.actions.visibility`
- `AdminServices.insights.title`
- `AdminServices.insights.total`
- `AdminServices.insights.active`
- `AdminServices.insights.draft`
- `AdminServices.fallback.description`
- `AdminServices.empty.title`
- `AdminServices.empty.description`
- `AdminServices.empty.action`
- `AdminServices.error.title`
- `AdminServices.error.retry`
