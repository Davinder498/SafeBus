export type UserRole = "platform_super_admin" | "tenant_admin" | "school_admin" | "transportation_admin" | "driver" | "guardian";
export type TripStatus = "scheduled" | "active" | "delayed" | "completed" | "cancelled" | "gps_stale" | "gps_lost";
export type LocationSource = "driver_web" | "driver_mobile" | "hardware_tracker";
export type AlertUrgency = "critical" | "warning" | "info";
export type ScanEventType = "pickup" | "dropoff" | "manual_pickup" | "manual_dropoff";
export interface TenantScoped { tenantId: string; }
export interface Tenant { id: string; name: string; region: string; }
export interface School extends TenantScoped { id: string; name: string; city: string; }
export interface Student extends TenantScoped { id: string; schoolId: string; firstName: string; lastInitial: string; routeId: string; guardianIds: string[]; }
export interface Guardian extends TenantScoped { id: string; name: string; linkedStudentIds: string[]; email: string; }
export interface Bus extends TenantScoped { id: string; busNumber: string; plate: string; capacity: number; status: "ready" | "maintenance" | "active"; }
export interface Driver extends TenantScoped { id: string; name: string; phoneLabel: string; status: "available" | "driving" | "off_duty"; }
export interface RouteStop extends TenantScoped { id: string; routeId: string; name: string; sequence: number; scheduledTime: string; }
export interface Route extends TenantScoped { id: string; schoolId: string; name: string; direction: "morning" | "afternoon"; stopIds: string[]; }
export interface Trip extends TenantScoped { id: string; routeId: string; busId: string; driverId: string; status: TripStatus; startTime: string; lastGpsUpdate: string | null; pickupProgress: number; alertIds: string[]; }
export interface LiveBusLocation extends TenantScoped { id: string; tripId: string; busId: string; latitude: number; longitude: number; heading: number | null; speed: number | null; recordedAt: string; source: LocationSource; status: TripStatus; }
export interface StudentScanEvent extends TenantScoped { id: string; tripId: string; studentId: string; eventType: ScanEventType; occurredAt: string; stopId: string; recordedByDriverId: string; isManual: boolean; }
export interface Notification extends TenantScoped { id: string; guardianId: string; title: string; message: string; createdAt: string; read: boolean; }
export interface TripAlert extends TenantScoped { id: string; tripId: string; type: "GPS Lost" | "GPS Stale" | "Delay" | "Breakdown" | "Manual Override" | "Trip Not Started"; urgency: AlertUrgency; message: string; createdAt: string; resolved: boolean; }
