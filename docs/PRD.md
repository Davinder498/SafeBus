SafeBus Alberta — Product Requirements Document v2
1. Product Name
Working name: SafeBus Alberta
Alternative names:
SchoolRoute Alberta
SafeRoute School Transport
BusGuardian
RouteSafe
For now, the product will be referred to as SafeBus Alberta.

2. Product Overview
SafeBus Alberta is a school transportation operations and live bus tracking platform for Alberta schools, independent schools, charter schools, First Nations schools, and school bus contractors.
The platform helps schools and transportation operators manage:
live bus tracking
driver trip workflow
parent bus visibility
student pickup/drop-off confirmation
delay alerts
transportation reports
route accountability
basic transportation administration
SafeBus Alberta does not replace PowerSchool, SchoolEngage, or a full Student Information System.
Instead, SafeBus acts as a transportation layer that works alongside existing school systems.

3. Core Product Positioning
SafeBus Alberta helps schools answer three important transportation questions:
Where is the bus?
Was the student picked up or dropped off?
Is there a delay, route issue, GPS issue, or operational concern?
The product should be positioned as:
A transportation visibility and accountability platform for schools, parents, drivers, and bus operators.
It should not be positioned as:
A full school management system, PowerSchool replacement, or SchoolEngage replacement.

4. Target Customer
The first target customers are:
Alberta private schools
Alberta charter schools
Independent schools
First Nations schools
Small rural schools or divisions
School bus contractors
Small-to-mid-size transportation operators with approximately 5–50 buses
Large public school boards are not the first target because they usually have slower procurement, complex privacy/security review, and existing vendor contracts.

5. MVP Goal
The MVP must prove that SafeBus can:
Reduce parent uncertainty about school bus location and delays.
Give school/transportation admins live visibility into bus operations.
Confirm student pickup and drop-off events.
Create a privacy-conscious transportation record.
Operate without PowerSchool or SchoolEngage API integration.
Support real driver GPS tracking using a native mobile app.
Work for a small real-world pilot with 5–10 buses.

6. MVP Scope
The MVP includes three main product areas:
Admin web dashboard
Parent web/PWA app
Native driver mobile app
The MVP must support:
invitation-based login
role-based access
multi-tenant school/operator structure
CSV import of students, guardians, buses, drivers, routes, stops, and assignments
bus and route management
driver trip start/end
native driver GPS tracking
5-second GPS pings during active trips
parent live bus view during active trip only
student QR pickup/drop-off confirmation
manual pickup/drop-off fallback
parent pickup/drop-off notifications
admin live trip monitoring
GPS stale/lost status
basic trip history
audit logs
privacy-focused access control

7. Explicitly Excluded From MVP
The MVP will not include:
grade management
report cards
teacher classroom tools
full student onboarding
SchoolEngage replacement
PowerSchool replacement
PowerSchool API integration
Alberta Education/PASI integration
payment processing
payroll
full attendance management
SMS notifications
hardware GPS integration
advanced AI route optimization
parent-to-driver chat
public bus tracking links
open public route maps
marketplace features
school fee management
These may be considered later, but they must not be part of the first MVP.

8. Core Product Principle
The core privacy principle is:
Track the bus, not the child.
Parents should see the assigned bus and receive pickup/drop-off notifications for their own child, but the system should avoid exposing unnecessary student details or exact child-specific location data.

9. Major Locked Product Decisions
9.1 Transportation-first Product
SafeBus is a school transportation platform first.
It is not a school ERP, SIS, onboarding platform, or grade management platform.

9.2 CSV Import First
MVP will use CSV import for student, guardian, route, stop, bus, and driver data.
No PowerSchool or SchoolEngage API integration in MVP.

9.3 Native Driver App Required
The driver app for real pilot and production must be native mobile.
Preferred stack:
React Native
Expo
TypeScript
A browser/PWA driver screen may be used only for demo or workflow testing.
Production GPS tracking must not rely on a web app because web apps may not reliably send location when the phone is locked, browser is backgrounded, or app is suspended.

9.4 Active Trip GPS Model
SafeBus will use an Uber/DoorDash-style active work-session tracking model, but stricter for school privacy.
Rule:
No active trip = no GPS tracking
Active trip = GPS ping every 5 seconds
Trip ended = GPS tracking stops


9.5 QR Code Identifier Rule
Student QR codes must not use Alberta Student Number.
The system must use:
Internal UUID + secure random QR badge token

The QR code must not contain:
Alberta Student Number
student name
school name
route name
home address
parent information

9.6 Parent Visibility Rule
Parents can only see:
their linked child/student
assigned active bus
trip status
last updated time
pickup/drop-off notifications
delay status
GPS unavailable status
Parents cannot see:
other students
other parents
full passenger list
other buses
unrelated routes
driver location outside active trip
bus location after trip ends

10. User Roles
10.1 Platform Super Admin
The platform super admin manages the SaaS platform across all tenants.
Permissions:
create tenants
manage tenant accounts
view platform-level system health
configure global settings
suspend tenant access if required
access audit logs only when necessary
The platform super admin should not casually browse student records.

10.2 Tenant Admin
A tenant admin belongs to a school, school group, or bus contractor.
Permissions:
manage schools under the tenant
manage transportation admins
manage drivers
manage buses
manage routes
import students and guardians
view all trips under the tenant
view reports and logs

10.3 School/Transportation Admin
This role manages day-to-day transportation operations.
Permissions:
create and edit routes
assign students to routes
assign students to stops
assign drivers to trips
assign buses to trips
monitor live trips
view pickup/drop-off records
send delay alerts
review manual scan overrides
export trip reports

10.4 Driver
The driver uses the native mobile app.
Permissions:
view assigned trips
start assigned trip
end assigned trip
send GPS location during active trip
scan student QR badges
manually mark pickup/drop-off when needed
report delay, breakdown, route issue, or student issue
Drivers should only see information needed to operate their assigned trip.

10.5 Parent/Guardian
Parents use the parent app to monitor their child’s assigned bus.
Permissions:
view own linked student
view assigned bus during active trip
view trip status
receive pickup/drop-off notifications
receive delay alerts
view recent notification history
Parents must not see other students, full route passenger lists, or unrelated buses.

11. Core Workflows
11.1 Admin Setup Workflow
Tenant admin logs in.
Creates school profile.
Adds buses.
Adds drivers.
Imports students and guardians by CSV.
Imports or creates routes and stops.
Assigns students to route stops.
Assigns driver and bus to trip.
Activates route for use.

11.2 Morning Trip Workflow
Driver opens native mobile app.
Driver logs in.
Driver selects assigned morning trip.
Driver taps Start Trip.
App begins active trip GPS tracking.
App sends location ping every 5 seconds.
Admin sees bus live on map.
Parents assigned to that bus/route can see bus status.
Driver reaches pickup stop.
Student scans QR badge or driver manually marks pickup.
System validates scan/override.
System records pickup event.
Parent receives pickup notification.
Bus reaches school.
Driver confirms drop-off/arrival.
Parent receives drop-off-at-school notification.
Driver taps End Trip.
GPS tracking stops.
Admin sees trip summary.

11.3 Afternoon Trip Workflow
Driver opens native app.
Driver starts afternoon trip.
App begins 5-second GPS tracking.
Students board at school.
Driver scans student QR or manually marks boarding.
Parent receives boarded-bus notification.
Parent can track assigned active bus.
Driver reaches student stop.
Driver scans or marks student drop-off.
Parent receives drop-off notification.
Driver ends trip.
GPS tracking stops.
Admin sees completed trip record.

11.4 Delay Workflow
Driver taps Report Delay.
Driver selects reason:
traffic
weather
mechanical issue
student issue
road closure
other
Admin receives alert.
Parents assigned to affected route receive delay status.
Trip remains active.
GPS tracking continues.
Delay is recorded in trip history.

11.5 GPS Lost Workflow
Driver app stops sending location.
System detects missing GPS heartbeat.
After 30 seconds without ping, location is marked stale.
After 60 seconds without ping, GPS is marked lost.
Admin dashboard shows GPS stale/lost warning.
Parent app shows: “Location temporarily unavailable. Last updated at [time].”
Driver app continues attempting to reconnect.
When signal returns, GPS updates resume.
System records the offline period.

11.6 QR Scan Failure Workflow
Driver tries to scan student QR.
QR scan fails or student forgot badge.
Driver uses manual student list for assigned route.
Driver marks student as picked up/drop-off manually.
System records event as manual override.
Admin can review manual overrides later.
Parent still receives notification.

12. Pages and Screens
12.1 Public Website
Pages:
landing page
about
features
contact
login
Purpose:
explain product
build trust
capture school/contractor interest
Landing page sections:
hero section
problem statement
parent visibility
driver app
admin control
pickup/drop-off confirmation
privacy-first design
pilot invitation
contact form

12.2 Authentication Pages
Required pages:
login
forgot password
reset password
invite acceptance page
Signup should not be open to the public in MVP.
Users should be invited by school/tenant admin.

12.3 Admin Dashboard
Main sections:
overview
live map
trips
routes
stops
students
guardians
drivers
buses
imports
alerts
reports
settings
audit logs
Dashboard cards:
active trips
delayed buses
offline buses
students picked up
students dropped off
manual scan overrides
parent notification failures
GPS stale/lost buses

12.4 Driver Mobile App
Mobile app screens:
login
my trips
trip details
start trip
active trip
GPS status
scan student
manual student list
report issue
end trip
Driver screen must use:
large buttons
simple layout
minimal typing
clear trip status
visible GPS status
visible sync status
visible battery/permission warning where possible

12.5 Parent App
Mobile-first screens:
login
my students
active bus status
trip timeline
notifications
help/contact school
Parent app should show:
bus status
last updated time
pickup/drop-off event
delay status
simple map during active trip
GPS unavailable message when needed

13. Recommended Technical Architecture
13.1 Monorepo
Use a simple monorepo.
Recommended structure:
safebus-alberta/
  apps/
    web/
      # React/Vite web app
      # Admin portal
      # Parent portal
      # Driver demo screens only

    driver-mobile/
      # React Native / Expo driver app
      # Production GPS tracking
      # QR scanning
      # Offline queue

  packages/
    types/
      # Shared TypeScript types

    api/
      # Shared API helpers and contracts

    ui/
      # Shared UI components where practical

    config/
      # Shared config later if needed

  supabase/
    migrations/
    functions/
    seed/

  docs/
    PRD.md
    ARCHITECTURE.md
    SECURITY.md
    PILOT_PLAN.md

  package.json
  pnpm-workspace.yaml
  turbo.json
  README.md


13.2 Web App Stack
Use:
React
Vite
TypeScript
Tailwind CSS
React Router
Supabase client
The web app handles:
public website
admin portal
parent portal
driver demo screens only

13.3 Driver Mobile Stack
Use:
React Native
Expo
TypeScript
Expo Location
Expo Task Manager
secure storage where needed
shared types from packages/types
shared API contracts from packages/api
The driver mobile app handles:
real driver trip workflow
background GPS
active trip tracking
QR scanning
offline queue
issue reporting

13.4 Backend Stack
Use:
Supabase Auth
Supabase Postgres
Supabase Row Level Security
Supabase Realtime
Supabase Edge Functions
Supabase Storage only if needed later

14. Data Model
14.1 tenants
Represents a school group, school, or bus contractor.
Fields:
id
name
type
status
contact_email
created_at
updated_at

14.2 schools
Represents schools under a tenant.
Fields:
id
tenant_id
name
address
city
province
postal_code
phone
status
created_at
updated_at

14.3 profiles
Represents authenticated users.
Fields:
id
tenant_id
school_id nullable
full_name
email
phone nullable
role
status
created_at
updated_at
Roles:
platform_super_admin
tenant_admin
school_admin
transportation_admin
driver
guardian

14.4 students
Represents students.
Fields:
id
tenant_id
school_id
first_name
last_name
preferred_name nullable
grade nullable
school_student_number nullable
alberta_student_number nullable restricted
status
created_at
updated_at
Important:
Alberta Student Number must not be used in QR code.
Alberta Student Number must not be shown to drivers or parents unless specifically required and authorized.
Internal UUID is the primary identifier.

14.5 guardians
Represents parents/guardians.
Fields:
id
tenant_id
profile_id
full_name
email
phone nullable
status
created_at
updated_at

14.6 student_guardians
Links students to guardians.
Fields:
id
tenant_id
student_id
guardian_id
relationship
can_receive_notifications
created_at
updated_at

14.7 buses
Represents buses.
Fields:
id
tenant_id
bus_number
license_plate nullable
capacity nullable
status
created_at
updated_at

14.8 drivers
Represents driver profile.
Fields:
id
tenant_id
profile_id
employee_number nullable
phone
status
created_at
updated_at

14.9 routes
Represents bus routes.
Fields:
id
tenant_id
school_id
route_name
route_code
route_type
status
created_at
updated_at
Route types:
morning
afternoon
special
field_trip

14.10 route_stops
Represents stops on a route.
Fields:
id
tenant_id
route_id
stop_name
stop_order
latitude nullable
longitude nullable
planned_arrival_time nullable
status
created_at
updated_at

14.11 student_route_assignments
Links students to route stops.
Fields:
id
tenant_id
student_id
route_id
pickup_stop_id nullable
dropoff_stop_id nullable
effective_from
effective_to nullable
status
created_at
updated_at

14.12 trips
Represents a live or scheduled bus trip.
Fields:
id
tenant_id
school_id
route_id
bus_id
driver_id
trip_type
scheduled_start_time
actual_start_time nullable
actual_end_time nullable
status
created_at
updated_at
Trip statuses:
scheduled
active
delayed
completed
cancelled
gps_stale
gps_lost

14.13 live_bus_locations
Stores current/latest bus location.
Fields:
id
tenant_id
trip_id
bus_id
driver_id
latitude
longitude
speed nullable
heading nullable
accuracy nullable
battery_level nullable
location_source
recorded_at
created_at
Location sources:
driver_web
driver_mobile
hardware_tracker

14.14 trip_location_history
Stores historical GPS points if enabled.
Fields:
id
tenant_id
trip_id
bus_id
driver_id
latitude
longitude
speed nullable
heading nullable
accuracy nullable
battery_level nullable
location_source
recorded_at
created_at
Retention should be limited and configurable.

14.15 student_badges
Represents QR badge assigned to a student.
Fields:
id
tenant_id
student_id
qr_token_hash
status
issued_at
revoked_at nullable
created_at
updated_at
Important:
QR code must contain a random secure token.
QR code must not contain ASN.
QR code must not contain student name.
Lost badges can be revoked and replaced.

14.16 student_scan_events
Represents pickup/drop-off/boarding events.
Fields:
id
tenant_id
trip_id
student_id
route_id
stop_id nullable
driver_id
event_type
scan_method
latitude nullable
longitude nullable
event_time
created_at
Event types:
picked_up
dropped_off
boarded
absent
manual_override
Scan methods:
qr
manual
admin_adjustment

14.17 trip_alerts
Represents driver/admin alerts.
Fields:
id
tenant_id
trip_id
alert_type
message
severity
created_by
created_at
resolved_at nullable
Alert types:
delay
breakdown
route_blocked
gps_stale
gps_lost
student_issue
weather
other

14.18 notifications
Represents parent/admin notifications.
Fields:
id
tenant_id
recipient_profile_id
student_id nullable
trip_id nullable
notification_type
title
body
status
sent_at nullable
read_at nullable
created_at
Notification types:
pickup
dropoff
boarded
delay
gps_stale
gps_lost
trip_started
trip_completed
general

14.19 audit_logs
Records sensitive actions.
Fields:
id
tenant_id
actor_profile_id
action
entity_type
entity_id
metadata
created_at
Audit log examples:
student created
student updated
guardian linked
route changed
driver assigned
manual pickup recorded
badge generated
badge revoked
trip cancelled
admin viewed sensitive record
location ping rejected
GPS lost event triggered

14.20 imports
Records CSV import activity.
Fields:
id
tenant_id
imported_by
import_type
file_name
status
rows_total
rows_success
rows_failed
error_summary
created_at

15. GPS Tracking Requirements
15.1 Active Trip Tracking Rule
GPS tracking must only run during an active trip.
Rule:
No active trip = no GPS tracking
Active trip = GPS ping every 5 seconds
Trip ended = GPS tracking stops


15.2 GPS Ping Interval
Default active trip location interval:
5 seconds

This applies only when:
driver is authenticated
driver is assigned to trip
trip status is active or delayed
location permission is granted
app is able to collect GPS
The app must not send continuous GPS when:
no trip is active
driver is off duty
trip has ended
user is logged out
location permission is revoked
The 5-second interval should be configurable later at platform or tenant level.
Future configurable values:
5 seconds for active live tracking
10 seconds for lower-battery mode
15 seconds for lower-cost mode
pause when trip is ended

15.3 Location Ping Payload
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

15.4 Location Ping Validation
Every GPS ping must be validated before saving.
Validation rules:
user is authenticated
user role is driver
driver is assigned to this trip
trip is active or delayed
bus belongs to same tenant
trip belongs to same tenant
timestamp is reasonable
accuracy is acceptable
location source is valid
Invalid pings must be rejected and logged.

15.5 GPS Stale/Lost Thresholds
Initial thresholds:
GPS stale warning: 30 seconds without update
GPS lost status: 60 seconds without update

Admin message:
GPS signal stale/lost for Bus [bus number].

Parent message:
Location temporarily unavailable. Last updated at [time].

The app must not pretend tracking is live when it is stale.

15.6 Offline Queue
The driver mobile app should support an offline queue.
If connection drops:
App continues collecting location if permission allows.
App queues GPS pings locally.
App shows sync warning.
When connection returns, app uploads queued pings.
Backend accepts valid pings and marks delayed sync where appropriate.

16. QR Pickup/Drop-off Requirements
16.1 QR Badge Rule
QR codes must use secure random tokens.
The QR code must not contain:
ASN
student name
school name
route
address
parent info

16.2 QR Scan Flow
Driver scans student QR.
Mobile app sends QR token, trip ID, driver ID, timestamp, and optional location.
Backend validates token.
Backend checks student assignment.
Backend checks driver/trip authorization.
Backend records scan event.
Backend creates parent notification.
Admin can view event.

16.3 QR Scan Validation
Validation rules:
driver is authenticated
driver is assigned to trip
trip is active
QR badge is active
student is assigned to route/trip
event type is valid for trip type
duplicate scan is prevented or handled clearly
Invalid scan examples:
student is not assigned to this route
badge has been revoked
student already picked up
trip is not active

16.4 Manual Override
Manual override is required.
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

17. Security Requirements
17.1 Authentication
All private pages require login.
Public signup is disabled.
Users are invited by tenant/school admin.
Password reset is supported.
Sessions are securely managed.

17.2 Authorization
Access must be role-based and tenant-scoped.
Rules:
parent can only access their own linked student records
parent can only see bus location for active trips assigned to their child
driver can only access assigned trips
driver can only scan students assigned to active route
school admin can only access their school/tenant data
tenant admin can access all schools under their tenant
platform super admin can manage tenants but should not casually access student data
all sensitive access should be logged

17.3 Row Level Security
Supabase Row Level Security must be enabled for all tenant/student/transportation tables.
RLS must enforce:
tenant isolation
role-based access
parent-student relationship access
driver-trip assignment access
admin tenant access
No direct public access to student, route, guardian, or trip data.

17.4 Data Minimization
The app must not collect unnecessary data.
Do not collect in MVP:
grades
health information
discipline records
immigration information
parent financial information
unnecessary documents
exact home address unless required for route planning

18. Notification Requirements
18.1 MVP Notification Channels
MVP should start with:
in-app notifications
push notifications if technically ready
email optional
SMS is excluded from MVP.

18.2 Parent Notification Events
Parents should receive notifications for:
student picked up
student boarded afternoon bus
student dropped off
route delayed
GPS temporarily unavailable
trip cancelled
major route issue

18.3 Admin Notification Events
Admins should receive alerts for:
driver did not start trip
bus GPS stale
bus GPS lost
route delayed
manual scan override
student not picked up
bus breakdown
notification failure
driver reported issue

19. CSV Import Requirements
MVP must support CSV import for:
students
guardians
student-guardian links
routes
route stops
student route assignments
drivers
buses
Import should include:
preview before import
validation errors
duplicate detection
required field checks
import history
import summary
correction strategy if possible
PowerSchool and SchoolEngage API integration are not required for MVP.

20. Reports
MVP admin reports should include:
daily trip summary
pickup/drop-off history
delayed trips
GPS stale events
GPS lost events
manual scan overrides
student not picked up
route completion history
driver issue reports
Reports should be exportable as CSV in later MVP stages.

21. MVP Success Metrics
A pilot is successful if:
Parents use the app during active trips.
School receives fewer “where is the bus?” calls.
Admin can identify delayed/offline buses quickly.
Pickup/drop-off events are recorded reliably.
Drivers can use the app with minimal training.
Native GPS tracking works reliably enough during active trips.
The 5-second ping interval provides useful live visibility.
School is willing to continue after pilot.
School is willing to provide testimonial or referral.
Suggested pilot size:
5 buses
50–200 students
60–90 days

22. Build Milestones
Milestone 1: Monorepo and Web UI Foundation
Build:
monorepo setup
apps/web
packages/types
packages/ui
packages/api placeholder
public landing page
login page
admin dashboard shell
parent dashboard shell
driver demo shell
role-based routing placeholders
mock/demo data
responsive layout
No real GPS.
No real QR scanning.
No real notifications.
No production Supabase logic yet.
Goal:
prove app structure and user experience.

Milestone 2: Supabase Data Foundation
Build:
Supabase connection
auth
profiles
tenants
schools
roles
students
guardians
buses
drivers
routes
trips
RLS policies
seed/demo data
Goal:
build secure real data foundation.

Milestone 3: Admin CRUD and CSV Import
Build:
students CRUD
guardians CRUD
buses CRUD
drivers CRUD
routes CRUD
stops CRUD
CSV import
validation and import results
Goal:
make onboarding practical for pilot.

Milestone 4: Driver Mobile App Foundation
Build:
apps/driver-mobile
React Native / Expo setup
driver login
assigned trips
trip details
start trip
end trip
basic API connection
basic GPS permission screen
Goal:
prepare for real driver workflow.

Milestone 5: Native GPS Tracking
Build:
background location permission
active trip GPS tracking
5-second ping interval
GPS heartbeat
offline queue
battery level where available
GPS stale/lost status
admin live map updates
Goal:
prove live driver tracking works.

Milestone 6: Parent Live Bus View
Build:
guardian-student linkage
assigned active trip view
live bus status
last updated time
GPS unavailable state
delay state
trip timeline
Goal:
give parents useful live bus visibility.

Milestone 7: QR Pickup/Drop-off
Build:
secure QR token generation
QR scanning in driver mobile app
manual fallback
scan event recording
parent notification creation
admin manual override review
Goal:
prove student transportation accountability.

Milestone 8: Notifications and Reports
Build:
in-app notifications
push notification foundation if ready
trip reports
pickup/drop-off reports
delay reports
GPS stale/lost reports
notification history
Goal:
prepare for real pilot.

Milestone 9: Pilot Readiness
Build:
privacy/security review
tenant setup workflow
demo school setup
support/admin tools
pilot dashboard
issue logging
feedback collection
production deployment checklist
Goal:
be ready for a small real-world pilot.

23. Key Product Risks
Risk 1: Driver does not use app correctly
Mitigation:
simple driver UI
big buttons
minimal typing
training
admin alerts when trip not started

Risk 2: GPS is unreliable
Mitigation:
native driver app
heartbeat status
last known location
GPS lost alerts
offline queue
clear parent messaging

Risk 3: Web app cannot track in background
Mitigation:
do not rely on web/PWA for production GPS
use React Native / Expo driver app for real pilot

Risk 4: Parent expects perfect ETA
Mitigation:
avoid fake precision
show status and last updated time
use arrival window instead of exact ETA in early MVP

Risk 5: School data is messy
Mitigation:
CSV validation
import preview
duplicate checks
simple correction tools

Risk 6: Privacy concerns
Mitigation:
track bus, not child
no ASN in QR
tenant isolation
RLS
audit logs
limited data collection
GPS only during active trip

Risk 7: App becomes too broad
Mitigation:
no grades
no onboarding
no SIS replacement
no PowerSchool integration in MVP
focus only on transportation

24. Non-Negotiable Rules
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


25. Final Product Rule
Every feature must pass this question:
Does this improve transportation visibility, parent communication, driver workflow, or school transportation accountability?
If the answer is no, the feature should not be in MVP.

26. Final MVP Summary
SafeBus Alberta MVP should be:
React web app + React Native driver app + Supabase backend

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

