SafeBus Alberta — Architecture Document v1
1. Architecture Goal
SafeBus Alberta is a school transportation operations platform focused on:
live bus tracking
driver trip workflow
parent bus visibility
student pickup/drop-off confirmation
admin transportation monitoring
privacy-first student access control
The system must not be designed as a full Student Information System replacement. It should work alongside existing systems such as PowerSchool and SchoolEngage.

2. Core Architecture Decision
SafeBus will use a simple monorepo.
The monorepo should support:
admin web app
parent web app
driver mobile app
shared TypeScript types
shared API helpers
Supabase database migrations
Supabase Edge Functions
project documentation

3. Recommended Monorepo Structure
safebus-alberta/
  apps/
    web/
      # React/Vite web app
      # Admin portal
      # Parent portal
      # Driver demo screens only

    driver-mobile/
      # React Native / Expo driver app
      # Production driver tracking
      # Background GPS
      # QR scanning
      # Offline queue

  packages/
    types/
      # Shared TypeScript types
      # Student, Trip, Route, Bus, UserRole, Notification

    api/
      # Shared API clients and Supabase helpers
      # Shared validation helpers
      # Shared request/response contracts

    ui/
      # Shared UI components where practical
      # Buttons, cards, badges, status indicators

    config/
      # Shared TypeScript, ESLint, Tailwind config later if needed

  supabase/
    migrations/
      # Database migrations

    functions/
      # Supabase Edge Functions

    seed/
      # Demo seed data

  docs/
    PRD.md
    ARCHITECTURE.md
    SECURITY.md
    PILOT_PLAN.md

  package.json
  pnpm-workspace.yaml
  turbo.json
  README.md


4. App Responsibilities
4.1 Web App
Location:
apps/web

The web app is responsible for:
public landing page
login
password reset
admin dashboard
parent dashboard
driver demo screens during early development
role-based routing
live bus map for admins
live bus status for parents
admin CRUD screens
CSV import screens
reports
notifications view
The web app should use:
React
Vite
TypeScript
Tailwind CSS
React Router
Supabase client
The web app should initially include these route groups:
/
 /login
 /forgot-password
 /reset-password

/admin
/admin/live-map
/admin/trips
/admin/routes
/admin/students
/admin/guardians
/admin/drivers
/admin/buses
/admin/imports
/admin/reports
/admin/settings

/parent
/parent/students
/parent/bus
/parent/notifications

/driver-demo

The /driver-demo route is only for workflow testing. It must not be treated as production GPS tracking.

4.2 Driver Mobile App
Location:
apps/driver-mobile

The driver app is responsible for:
driver login
assigned trip list
start trip
end trip
background GPS tracking
5-second active trip location pings
GPS heartbeat
GPS permission handling
battery status if available
offline queue
QR scan for student pickup/drop-off
manual fallback
delay/breakdown reporting
The driver app should use:
React Native
Expo
TypeScript
Expo Location
Expo Task Manager
Secure storage where needed
Shared types from packages/types
Shared API logic from packages/api
Production GPS tracking must not depend on the browser/PWA alone.

5. Package Responsibilities
5.1 packages/types
Shared TypeScript types.
Examples:
export type UserRole =
  | "platform_super_admin"
  | "tenant_admin"
  | "school_admin"
  | "transportation_admin"
  | "driver"
  | "guardian";

export type TripStatus =
  | "scheduled"
  | "active"
  | "delayed"
  | "completed"
  | "cancelled"
  | "gps_lost";

export type LocationSource =
  | "driver_web"
  | "driver_mobile"
  | "hardware_tracker";

This package should contain shared domain types only. It should not contain UI code or database query logic.

5.2 packages/api
Shared API helpers.
Responsibilities:
Supabase client setup helpers
typed API contracts
GPS ping request type
QR scan request type
notification request type
validation helpers
shared error handling
Example GPS payload:
export type LocationPingRequest = {
  tripId: string;
  busId: string;
  driverId: string;
  latitude: number;
  longitude: number;
  speed?: number | null;
  heading?: number | null;
  accuracy?: number | null;
  batteryLevel?: number | null;
  recordedAt: string;
  locationSource: "driver_web" | "driver_mobile" | "hardware_tracker";
};


5.3 packages/ui
Shared UI components.
Examples:
Button
Card
Badge
StatusPill
EmptyState
FormField
DashboardCard
LoadingState
ErrorMessage
Important rule:
Only move UI into packages/ui when it is genuinely shared. Do not over-abstract too early.

6. Backend Architecture
The backend will use Supabase:
Supabase Auth
Supabase Postgres
Supabase Row Level Security
Supabase Realtime
Supabase Edge Functions
Supabase Storage only if needed later
The database is the source of truth for:
tenants
users/profiles
roles
students
guardians
buses
drivers
routes
stops
trips
live locations
scan events
notifications
audit logs

7. Tenant Model
SafeBus is a multi-tenant SaaS app.
Every school, school group, or bus contractor belongs to a tenant.
Most operational tables must include:
tenant_id

Tenant isolation is mandatory.
A user from Tenant A must never access Tenant B data.

8. Role-Based Access Model
Supported roles:
platform_super_admin
tenant_admin
school_admin
transportation_admin
driver
guardian

Platform Super Admin
Can:
create tenants
suspend tenants
view platform health
manage platform settings
Should not casually access student data.
Tenant Admin
Can:
manage tenant-level settings
manage schools
manage tenant users
view transportation data under tenant
School/Transportation Admin
Can:
manage students
manage guardians
manage buses
manage drivers
manage routes
manage trips
view reports
monitor live trips
Driver
Can:
view assigned trips
start/end assigned trips
send location for active assigned trips
scan students assigned to active route
report trip issues
Guardian
Can:
view own linked students
view assigned active bus only
receive pickup/drop-off notifications
view notification history

9. Core Database Tables
Minimum MVP tables:
tenants
schools
profiles
students
guardians
student_guardians
buses
drivers
routes
route_stops
student_route_assignments
trips
live_bus_locations
trip_location_history
student_badges
student_scan_events
trip_alerts
notifications
audit_logs
imports

Every sensitive table must have Row Level Security enabled.

10. Student Identifier Strategy
The system must use:
Internal UUID + secure random QR badge token

The Alberta Student Number must not be used as:
primary app ID
QR code value
public identifier
parent-facing ID
driver-facing ID
ASN may be stored only as optional restricted metadata if the school provides it for reconciliation.
QR code must contain only a random secure token.
The QR token must not reveal:
student name
ASN
school
route
address
parent information

11. GPS Tracking Architecture
SafeBus uses an active-trip tracking model.
No active trip = no GPS tracking
Active trip = GPS ping every 5 seconds
Trip ended = GPS tracking stops

11.1 Location Sources
The backend must support:
driver_web
driver_mobile
hardware_tracker

MVP demo may use driver_web.
Real pilot/production must use driver_mobile.
Hardware GPS may be added later.

11.2 Location Ping Interval
Default active trip location interval:
5 seconds

This applies only when:
driver is authenticated
driver is assigned to the trip
trip is active or delayed
location permission is granted
app is able to collect GPS
Tracking must stop when:
trip ends
driver logs out
driver is off duty
permission is revoked
no active trip exists

11.3 Location Ping Validation
Every GPS ping must be validated before saving.
Validation rules:
Is the user authenticated?
Is the user a driver?
Is the driver assigned to this trip?
Is the trip active or delayed?
Does the bus belong to the same tenant?
Does the trip belong to the same tenant?
Is the location timestamp reasonable?
Is the GPS accuracy acceptable?
Is the location source valid?

Invalid pings must be rejected and logged.

11.4 Location Payload
Each GPS ping should include:
trip_id
bus_id
driver_id
latitude
longitude
speed
heading
accuracy
battery_level
recorded_at
location_source


11.5 Live Location Storage
The system should maintain:
live_bus_locations

This stores the latest bus location for active trip display.
The system may also store:
trip_location_history

This stores historical GPS points for reporting, route review, and incident review.
Location history retention should be limited and configurable.

11.6 GPS Stale/Lost Logic
Initial thresholds:
Warning after 30 seconds without update
GPS lost after 60 seconds without update

Admin message:
GPS signal stale/lost for Bus [bus number].

Parent message:
Location temporarily unavailable. Last updated at [time].

The app must not pretend tracking is live when it is stale.

12. QR Scan Architecture
QR scan is used for:
pickup
boarding
drop-off
QR code must use a secure random badge token.
12.1 QR Scan Flow
Driver scans student QR
→ mobile app sends qr_token + trip_id + driver_id + timestamp + optional location
→ backend validates token
→ backend checks student assignment
→ backend checks driver/trip authorization
→ backend records scan event
→ backend creates parent notification
→ admin can view event


12.2 QR Scan Validation
Validation rules:
Is the driver authenticated?
Is the driver assigned to the trip?
Is the trip active?
Is the QR badge active?
Is the student assigned to the route/trip?
Has the student already been scanned for this event?
Is the event type allowed for this trip type?

Invalid scans should show a clear driver error.
Examples:
Student is not assigned to this route.
Badge has been revoked.
Student already picked up.
Trip is not active.


12.3 Manual Override
Manual override is required for real-world use.
Reasons:
student forgot badge
QR damaged
camera failed
phone issue
substitute driver situation
Manual override must:
be restricted to assigned route students
record driver ID
record timestamp
record location if available
be visible to admin
be marked as manual in reports

13. Notification Architecture
MVP notification priority:
in-app notifications
push notifications
email optional
SMS later only if needed
SMS is not part of MVP.
13.1 Parent Notification Events
Parent should receive notification for:
student picked up
student boarded afternoon bus
student dropped off
route delayed
GPS temporarily unavailable
trip cancelled
major route issue

13.2 Admin Alert Events
Admin should receive alert for:
trip not started
GPS stale
GPS lost
route delayed
manual scan override
bus breakdown
student issue
notification failure
driver reported issue


14. Parent Visibility Rules
Parent can see:
own linked student
assigned active bus
trip status
last updated time
pickup/drop-off notification
delay status
GPS unavailable message

Parent cannot see:
other students
other parents
full passenger list
other buses
unrelated routes
driver location outside active trip
bus location after trip ends


15. Driver App Rules
Driver app must be designed for low distraction.
Driver app should have:
large buttons
minimal typing
visible GPS status
visible sync status
clear trip status
simple issue reporting
QR scan button
manual fallback
start/end trip confirmation
Driver app should not require complex admin work.

16. CSV Import Architecture
MVP uses CSV import instead of PowerSchool/SchoolEngage API.
Importable data:
students
guardians
student_guardians
buses
drivers
routes
route_stops
student_route_assignments

CSV import should support:
upload
preview
validation
duplicate detection
missing field errors
import summary
import history
PowerSchool API integration is later, not MVP.

17. Realtime Architecture
Supabase Realtime may be used for:
admin live bus updates
parent assigned bus update
trip status updates
notification updates
Realtime access must be filtered by role and tenant.
Parent realtime subscription must only receive updates for assigned active trip.

18. Security Principles
Security is part of MVP, not a later feature.
Mandatory principles:
Row Level Security on all sensitive tables
tenant isolation
role-based authorization
no public student data
no public trip data
no ASN in QR
QR token revocation
audit logs for sensitive actions
minimal student data collection
location tracking only during active trip
location history retention limit
secure invitation-based user creation

19. Audit Logging
Audit logs should capture:
student created
student updated
guardian linked
route changed
driver assigned
trip started
trip ended
manual scan override
badge generated
badge revoked
admin viewed sensitive record
location ping rejected
trip cancelled
notification failure

Audit logs should include:
tenant_id
actor_profile_id
action
entity_type
entity_id
metadata
created_at


20. Build Milestones
Milestone 1 — Web UI Foundation
Build:
monorepo setup
apps/web
public landing page
login page
admin dashboard shell
parent dashboard shell
driver demo shell
mock data
responsive layout
role-based route placeholders
No real GPS.
No real QR.
No real notifications.
No Supabase production logic yet.

Milestone 2 — Supabase Foundation
Build:
Supabase project connection
auth
profiles
tenants
schools
roles
core database tables
RLS policies
seed/demo data

Milestone 3 — Admin CRUD and CSV Import
Build:
students CRUD
guardians CRUD
buses CRUD
drivers CRUD
routes CRUD
stops CRUD
CSV import
import validation

Milestone 4 — Driver Mobile Foundation
Build:
apps/driver-mobile
React Native / Expo setup
driver login
assigned trips
start trip
end trip
basic API connection

Milestone 5 — Native GPS Tracking
Build:
background location permission
active trip GPS tracking
5-second ping interval
offline queue
heartbeat
GPS stale/lost status
admin live map updates

Milestone 6 — Parent Bus View
Build:
guardian-student linkage
assigned active trip view
live bus status
last updated time
GPS unavailable state
trip timeline

Milestone 7 — QR Pickup/Drop-off
Build:
secure QR token generation
QR scanning in driver app
manual fallback
scan event recording
parent notification creation
admin manual override review

Milestone 8 — Pilot Readiness
Build:
reports
notification improvements
privacy/security review
support tools
pilot tenant setup
feedback collection
production deployment checklist

21. Non-Negotiable Rules
The project must follow these rules:
Do not build PowerSchool replacement.
Do not build SchoolEngage replacement.
Do not use ASN in QR code.
Do not track GPS outside active trip.
Do not expose other students to parents.
Do not rely on browser/PWA for production driver GPS.
Do not add SMS in MVP.
Do not add payments in MVP.
Do not add grades/report cards in MVP.
Do not overbuild before pilot validation.


22. Architecture Summary
SafeBus should start as:
React web app + Supabase backend + React Native driver app

The system should be:
privacy-first
tenant-isolated
role-based
GPS-aware
QR-secure
CSV-import-friendly
simple enough for a small school pilot
expandable later to PowerSchool integration and hardware GPS
The first goal is not to become a full school operating system.
The first goal is to prove:
Schools and parents will value real-time bus visibility and pickup/drop-off accountability.


