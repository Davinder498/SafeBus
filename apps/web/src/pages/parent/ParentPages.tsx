import { BusStatusCard, Card, EmptyState, NotificationCard, Timeline } from "@safebus/ui";
import { MapPlaceholder } from "../../components/MapPlaceholder";
import { notifications, scanEvents, students } from "../../data/mockData";
export function ParentHome() { return <div className="space-y-4"><BusStatusCard status="Bus is on the way." detail="Last updated 15 seconds ago." /><Card><h2 className="font-black">Assigned student</h2><p className="mt-2">{students[0].firstName} {students[0].lastInitial}</p><p className="text-sm text-slate-500">Only linked guardian information is shown.</p></Card><MapPlaceholder parent /><ParentTimeline /></div>; }
export function ParentTimeline() { return <Timeline items={[{ time: "8:04 AM", title: "Your child was picked up at 8:04 AM.", detail: "Recorded on the assigned route." }, ...scanEvents.map((e) => ({ time: e.occurredAt, title: "Bus event confirmed", detail: e.eventType }))]} />; }
export function ParentNotifications() { return <div className="space-y-3">{notifications.map((n) => <NotificationCard key={n.id} title={n.title} message={n.message} meta={n.createdAt} />)}</div>; }
export function ParentBus() { return <div className="space-y-4"><BusStatusCard status="Bus location temporarily unavailable." detail="Last updated at 8:11 AM." /><MapPlaceholder parent /></div>; }
export function ParentPlaceholder({ title }: { title: string }) { return <EmptyState title={title} message="No active bus trip right now. SafeBus will show assigned route updates when a trip is active." />; }
