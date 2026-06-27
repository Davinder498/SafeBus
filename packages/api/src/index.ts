import type { LocationSource, Notification, StudentScanEvent, Trip } from "@safebus/types";
export type ApiResponse<T> = { ok: true; data: T } | { ok: false; error: string };
export type LocationPingRequest = { tripId: string; busId: string; driverId: string; latitude: number; longitude: number; speed?: number | null; heading?: number | null; accuracy?: number | null; batteryLevel?: number | null; recordedAt: string; locationSource: LocationSource; };
export type QrScanRequest = { tenantId: string; tripId: string; studentId: string; driverId: string; eventType: "pickup" | "dropoff"; recordedAt: string; };
export type NotificationRequest = { tenantId: string; guardianId: string; title: string; message: string; };
export const tripService = { listTrips: async (tenantId: string): Promise<ApiResponse<Trip[]>> => ({ ok: true, data: [] }), recordLocationPing: async (_request: LocationPingRequest): Promise<ApiResponse<{ accepted: boolean }>> => ({ ok: true, data: { accepted: true } }) };
export const studentService = { recordScan: async (_request: QrScanRequest): Promise<ApiResponse<StudentScanEvent | null>> => ({ ok: true, data: null }) };
export const notificationService = { queueNotification: async (_request: NotificationRequest): Promise<ApiResponse<Notification | null>> => ({ ok: true, data: null }) };
