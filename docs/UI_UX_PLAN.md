SafeBus Alberta — UI/UX Plan v1
1. UI/UX Goal
SafeBus Alberta must feel:
trustworthy
simple
school-safe
professional
calm during stressful transportation situations
easy for non-technical parents, drivers, and school staff
The UI should not feel like a generic SaaS dashboard. It should feel like a real transportation operations tool.
The main design goal is:
Make bus status, student pickup/drop-off events, and transportation exceptions clear at a glance.

2. User Experience Principles
2.1 Track the Bus, Not the Child
The UI must reinforce the privacy principle:
Parents track the assigned bus, not the child.
Parent screens should avoid showing unnecessary student or route details.

2.2 Show Status Before Data
Users should immediately understand the current state.
Examples:
Bus is on route
Bus has not started
Bus is delayed
GPS signal lost
Student picked up
Student dropped off
No active trip today
Status should be more prominent than raw data.

2.3 Use Plain Language
Avoid technical wording.
Use:
“Bus location temporarily unavailable”
“Last updated 20 seconds ago”
“Trip started”
“Student picked up”
“Driver reported delay”
Avoid:
“GPS heartbeat failed”
“Realtime subscription stale”
“Location payload rejected”
Technical details can exist in admin logs, not parent/driver screens.

2.4 Mobile First for Driver and Parent
Driver and parent screens must be designed first for phone use.
Minimum width target:
320px

Driver actions must be usable with large touch targets.

2.5 Admin Needs Exception Visibility
Admin UI should prioritize:
active trips
delayed buses
GPS lost buses
manual scan overrides
missing pickup/drop-off events
driver reported issues
The admin should not need to dig through menus to find problems.

3. Visual Style Direction
3.1 Brand Feel
SafeBus should feel like:
Alberta-based
school transportation focused
safety-conscious
reliable
modern but not flashy
Avoid:
childish cartoon design
overly corporate finance style
dark emergency-style UI
too many bright colors

3.2 Suggested Color Direction
Use a calm professional palette.
Suggested direction:
Deep navy or dark blue for trust
School bus yellow as accent
Soft green for success
Amber for warning
Red only for serious alerts
Light gray backgrounds
White cards
Example usage:
Blue: navigation, primary buttons, active route
Yellow/amber: bus status, caution, delay
Green: completed pickup/drop-off
Red: GPS lost, breakdown, urgent issue
Gray: inactive/no trip/empty states
Do not overuse yellow. It should be an accent, not the whole UI.

3.3 Typography
Use clean modern fonts.
Recommended:
Inter
system UI fallback
Text should be readable on phones.
Avoid tiny dashboard text.

4. Navigation Structure
4.1 Public Website Navigation
Top nav:
Home
Features
How It Works
Pilot Program
Contact
Login
Primary CTA:
Request Pilot

Secondary CTA:
View Features


4.2 Admin Navigation
Desktop sidebar:
Overview
Live Map
Trips
Routes
Stops
Students
Guardians
Drivers
Buses
Imports
Alerts
Reports
Settings
Audit Logs
Mobile admin navigation:
bottom nav or collapsible menu
prioritize Overview, Live Map, Trips, Alerts

4.3 Driver Navigation
Driver app should not have complex navigation.
Main screens:
My Trips
Active Trip
Scan
Report Issue
Trip Summary
Driver should always be able to return to the active trip screen quickly.

4.4 Parent Navigation
Parent app navigation:
Bus Status
Timeline
Notifications
Help
Keep parent app extremely simple.

5. Public Landing Page
5.1 Purpose
The landing page should build trust with schools and bus operators.
It should explain:
the transportation problem
parent uncertainty
admin visibility
driver workflow
pickup/drop-off confirmation
privacy-first design
pilot availability

5.2 Landing Page Sections
Hero
Headline:
Real-time school bus visibility for Alberta schools and parents.

Subheadline:
SafeBus helps schools track active bus trips, notify parents, confirm pickup and drop-off events, and manage transportation exceptions from one simple platform.

Buttons:
Request Pilot
See How It Works

Hero visual:
dashboard preview card
bus status card
parent notification card

Problem Section
Show three pain points:
Parents do not know where the bus is.
Schools receive repeated “where is the bus?” calls.
Transportation teams lack real-time trip visibility.

Solution Section
Show three modules:
Admin live operations dashboard
Driver mobile app
Parent bus status app

Privacy Section
Main message:
Track the bus, not the child.

Support points:
parents see only assigned active bus
no public tracking links
QR codes do not contain student identity
GPS tracking runs only during active trips

Pilot Program Section
Target wording:
Built for small-to-mid-size Alberta schools, independent schools, First Nations schools, and bus operators.

Pilot CTA:
Start with 5 buses for a limited pilot.


Contact Section
Fields:
name
school/operator name
email
phone optional
number of buses
message

6. Admin Dashboard UX
6.1 Admin Overview Page
The admin overview should answer:
What is happening right now?
What needs attention?

Top dashboard cards:
Active Trips
Delayed Buses
GPS Lost
Students Picked Up
Students Dropped Off
Manual Overrides
Main layout:
[Status Cards]

[Live Trip Map Preview]     [Alerts Panel]

[Active Trips Table]

[Recent Pickup/Drop-off Events]


6.2 Admin Live Map
Map should show:
active buses only
bus number
route name
driver name
trip status
last updated time
GPS stale/lost state
Map markers:
normal active bus
delayed bus
GPS stale bus
GPS lost bus
Admin should be able to click a bus and see:
bus number
driver
route
trip start time
last location update
speed if available
issue alerts
students picked up/dropped off count

6.3 Admin Trips Page
Trip table columns:
Trip
Route
Bus
Driver
Status
Start Time
Last GPS Update
Pickup Progress
Alerts
Filters:
active
scheduled
delayed
completed
GPS lost
morning
afternoon
Trip detail page should show:
trip summary
route stops
assigned students count
pickup/drop-off timeline
GPS history if available
alerts
manual overrides

6.4 Admin Alerts Page
Alerts should be grouped by urgency.
Urgent examples:
GPS lost
bus breakdown
trip not started
route blocked
Warning examples:
GPS stale
delay
manual override
notification failed
Alert card should show:
alert type
bus/route
affected trip
created time
status
action button
Actions:
view trip
mark resolved
message affected parents later
add internal note later

6.5 Admin Students Page
Student list columns:
Student name
School
Grade
Assigned route
Guardian linked
Badge status
Status
Important:
Do not show Alberta Student Number by default.
If ASN exists, keep it hidden/restricted.
Student detail page:
basic student info
guardian links
route assignment
badge status
recent pickup/drop-off history

6.6 Admin Imports Page
CSV import should have four steps:
Select import type
Upload CSV
Preview and validate
Confirm import
Import result should show:
total rows
successful rows
failed rows
duplicate warnings
missing fields
downloadable error report later

7. Driver Mobile App UX
7.1 Driver Design Priority
Driver app must be:
simple
fast
low distraction
large-button based
usable with gloves if possible
clear about GPS and sync status
The driver should never need to manage complex school data.

7.2 Driver Home / My Trips
Show today’s assigned trips.
Card per trip:
Morning Route 12
Bus 104
Scheduled start time
Status: Not Started / Active / Completed
Start Trip button
Empty state:
No trips assigned for today.


7.3 Start Trip Screen
Before starting:
Show checklist:
Assigned bus
Assigned route
GPS permission status
Internet status
Battery warning if low
Button:
Start Trip

If GPS permission missing:
Enable Location to Start Trip


7.4 Active Trip Screen
This is the most important driver screen.
Top status:
Route 12 Morning
Bus 104
Trip Active
GPS: Live
Last sync: 5 sec ago

Main buttons:
Scan Student
Manual Pickup/Drop-off
Report Issue
End Trip

Show progress:
Picked up: 18 / 24
Remaining stops: 5

Do not show too much detail while driving.

7.5 Scan Student Screen
Camera opens.
After successful scan:
Picked up: Aman S.

or:
Dropped off: Aman S.

Use partial/minimized name display where possible.
Invalid scan examples:
Student is not assigned to this route.
Badge has been revoked.
Student already picked up.
Trip is not active.


7.6 Manual Student List
Used only when QR fails.
Search/list should show assigned route students only.
Actions:
Mark Picked Up
Mark Dropped Off
Mark Absent
Manual action must require confirmation:
Confirm manual pickup for Aman S.?

Manual events must be flagged for admin review.

7.7 Report Issue Screen
Issue options:
Delay
Breakdown
Road Blocked
Weather
Student Issue
Other
Driver should be able to submit quickly.
Optional note field.

7.8 End Trip Screen
Before ending:
Show summary:
students picked up
students dropped off
manual overrides
unresolved alerts
GPS sync status
Button:
End Trip

Confirmation:
Are you sure you want to end this trip? GPS tracking will stop.


8. Parent App UX
8.1 Parent Design Priority
Parent app must reduce anxiety.
The parent should immediately know:
is the bus active?
where is the bus?
was my child picked up/dropped off?
is there a delay?
when was the location last updated?

8.2 Parent Home / Bus Status
Main status card examples:
Bus is on the way
Last updated 15 seconds ago

Your child was picked up at 8:04 AM

Bus location temporarily unavailable
Last updated at 8:11 AM

No active trip right now


8.3 Parent Live Bus Screen
Show:
assigned bus number
route status
simple map
last updated time
delay status
pickup/drop-off timeline
Do not show:
other students
full bus passenger list
all route details
driver phone/location outside active trip

8.4 Parent Timeline
Timeline examples:
7:52 AM — Trip started
8:04 AM — Picked up
8:33 AM — Arrived at school

Afternoon:
3:16 PM — Boarded bus
3:41 PM — Dropped off

GPS unavailable:
8:12 AM — Bus location temporarily unavailable
8:14 AM — Location updates resumed


8.5 Parent Notifications
Notification card:
title
short message
time
related student
status
Examples:
Picked up
Aman was picked up at 8:04 AM.

Delay reported
Route 12 is delayed due to traffic.

Location unavailable
Bus location is temporarily unavailable. Last update was 8:11 AM.


9. Empty, Loading, and Error States
9.1 No Active Trip
Parent message:
No active bus trip right now.
You will see bus status here when your child’s route starts.

Admin message:
No active trips at this time.


9.2 GPS Lost
Parent message:
Bus location temporarily unavailable.
Last updated at 8:11 AM.

Admin message:
GPS signal lost for Bus 104.
Last update: 8:11 AM.


9.3 Trip Not Started
Parent message:
Bus trip has not started yet.

Admin message:
Route 12 has not started. Scheduled start was 7:45 AM.


9.4 QR Scan Error
Driver message:
This student is not assigned to this route.

or:
Badge could not be verified. Try again or use manual pickup.


10. Core Components
Shared UI components should include:
Button
Card
StatusBadge
AlertBanner
DashboardMetricCard
TripStatusPill
BusStatusCard
Timeline
EmptyState
LoadingState
ErrorState
DataTable
FormField
SearchInput
Sidebar
MobileHeader
MapPanel placeholder
NotificationCard
DriverActionButton

11. Status Language
Use consistent status words.
Trip statuses:
Scheduled
Active
Delayed
Completed
Cancelled
GPS Stale
GPS Lost
Pickup/drop-off statuses:
Not Picked Up
Picked Up
Boarded
Dropped Off
Absent
Manual Override
GPS statuses:
Live
Stale
Lost
Permission Needed
Syncing
Offline

12. Milestone 1 UI Scope
Milestone 1 should build UI only with mock data.
Build:
public landing page
login page
admin dashboard shell
admin live map placeholder
admin active trips table
admin alerts panel
parent bus status page
parent timeline page
parent notifications page
driver demo trip list
driver demo active trip page
driver demo scan/manual/report issue screens
responsive layout
reusable components
Do not build yet:
real Supabase auth
real GPS
real QR scanning
real notifications
real CSV import
native mobile app
maps API integration

13. UX Acceptance Criteria for Milestone 1
Milestone 1 is successful if:
A visitor understands the product from the landing page.
Admin can visually understand active trips, alerts, and GPS status from mock data.
Parent can understand bus status, pickup/drop-off timeline, and GPS lost state.
Driver demo screens show a simple start/active/scan/report/end flow.
UI works on desktop and mobile widths.
There is no confusing school management/grade/onboarding feature.
The product clearly feels transportation-focused.
The design is clean enough to show to a pilot school contact.

14. Design Warning
Do not overbuild the UI.
The MVP should not look like a giant enterprise system with too many menus.
The first version should feel like:
A focused transportation command center.

Not:
A full school ERP.

Every screen should support one of these goals:
transportation visibility
parent communication
driver workflow
pickup/drop-off accountability
admin exception management

