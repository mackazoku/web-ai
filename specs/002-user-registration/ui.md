# UI Spec: User Registration

## Overview
- Screens: Customer registration form
- Intent: Allow customers to create an account with email + password and proceed to login/booking

## Navigation & Entry Points
- Public route: `/<locale>/register`
- Success redirects to `/<locale>/login?callbackUrl=/<locale>/booking`

## States
- Loading: disable submit and show loading label
- Error: show inline error message
- Success: redirect to login

## Forms & Validation
- Email: required, valid email format
- Password: required, non-empty

## Accessibility
- Labels bound to inputs
- Clear error text

## i18n Keys
- Register.*
