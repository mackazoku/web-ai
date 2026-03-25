# Web AI - System Requirements Specification (SPA Booking & Management)

## 1. Document Purpose
Define the product requirements baseline for a SPA booking and management website.

## 2. Product Overview
A web platform that serves both customers (public booking and account) and spa staff (operations, scheduling, and reporting).

Primary goals:
- Enable customers to discover services and book appointments online.
- Provide staff with a reliable calendar and conflict-free scheduling.
- Manage customers, services, staff availability, multi-branch operations, and payments.
- Send confirmations and reminders to reduce no-shows.

## 3. User Roles
- `Customer`: browse services, book, manage bookings, pay, and review.
- `Owner/Admin`: full access, configuration, staff management, reporting.
- `Receptionist`: manage bookings and customers, limited settings access.
- `Therapist/Staff`: view personal schedule, update appointment status and notes.

## 4. Functional Requirements

### 4.1 Public Site & Discovery
- Service list (massage, facial, therapy).
- Service detail (price, duration, description, images).
- Spa info (address, hours, gallery).
- Reviews & ratings.

### 4.2 Customer Booking
- Select service.
- Select branch (MVP).
- Select date/time slot with real-time availability.
- Select staff (optional, filtered by branch/service from DB).
- Enter personal info (name, phone, email).
- Create booking in `pending` status and surface it in admin views.

### 4.3 Customer Account & Booking Management
- Register / login.
- Profile management.
- View upcoming and past bookings.
- Reschedule or cancel within policy.
- Receive confirmation and reminders via email (MVP).

### 4.4 Payments
- Online payment (VNPay, Momo, Stripe) in MVP.
- Optional pay-at-spa.
- Payment history and invoice status.
- Admin confirmation for offline payments.

### 4.5 Service Management (Admin)
- Create/update/delete services.
- Set price, duration, category.
- Upload service images.

### 4.6 Staff Management (Admin)
- Add staff.
- Set working hours, shifts, off-days.
- Assign services to staff.
- Assign staff to branches.

### 4.6.1 User Management (Admin)
- Create/update/deactivate staff accounts.
- Assign roles (admin/receptionist/staff).
- Manage staff profile fields: name, email, phone, branch, notes, status.

### 4.7 Appointment Management (Admin/Receptionist)
- Calendar view of all bookings.
- Approve/reject booking requests.
- Check-in and mark completed.
- Auto conflict check for double booking.

### 4.8 Reports (Admin)
- Revenue by day/month.
- Popular services.
- Cancellation rate.

### 4.9 System Features
- Time slot configuration (30/60 minutes).
- Block breaks and unavailable times.
- Timezone per branch.
- Email notifications (confirmation + reminders) in MVP.
- Spam protection for public booking.

## 5. Non-Functional Requirements
- Performance: calendar load under 2 seconds for a typical week.
- Security: auth + RBAC, data privacy compliance, audit trail.
- Availability: 99.5% monthly uptime target.
- Accessibility: mobile-friendly, keyboard navigation for main flows.

## 6. MVP Scope (Approved)
- Service catalog and service detail.
- Booking flow with real-time slots and branch selection.
- Calendar view for staff with conflict checks.
- Online payments (VNPay, Momo, Stripe).
- Email notifications for confirmation and reminders.
- Multi-branch support.
- Admin user management (CRUD + role assignment).

## 7. Out of Scope (Post-MVP)
- SMS reminders.
- Voucher / promo codes.
- Loyalty / points.
- Chatbot consultation.
- Recommendation engine.
- PWA / mobile app.
