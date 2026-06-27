import { AppShell } from "../components/AppShell";
import { Card } from "../components/Card";
import { EmptyState } from "../components/EmptyState";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";

const metrics = [
  { label: "Active routes", value: "128", tone: "blue" as const },
  { label: "On-time buses", value: "94%", tone: "green" as const },
  { label: "Open exceptions", value: "7", tone: "amber" as const },
];

export function AdminPage() {
  return (
    <AppShell sectionLabel="Admin shell">
      <PageHeader eyebrow="Operations dashboard" title="Static admin command center" description="A responsive dashboard shell for future route monitoring, exception triage, and transportation operations." />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-300">{metric.label}</p>
              <StatusBadge tone={metric.tone}>Demo</StatusBadge>
            </div>
            <p className="mt-4 text-4xl font-black text-white">{metric.value}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <h2 className="text-xl font-bold text-white">Exception queue</h2>
          <div className="mt-5 space-y-3">
            {["Route delay review", "Substitute bus assignment", "School dismissal note"].map((item) => (
              <div className="flex flex-col gap-3 rounded-2xl bg-slate-950/50 p-4 sm:flex-row sm:items-center sm:justify-between" key={item}>
                <p className="font-semibold text-white">{item}</p>
                <StatusBadge tone="amber">Static</StatusBadge>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <EmptyState title="No live data connected" message="Supabase, GPS, notifications, and production route data are intentionally outside Bootstrap 1." />
        </Card>
      </div>
    </AppShell>
  );
}
