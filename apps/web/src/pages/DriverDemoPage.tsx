import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";

const workflow = ["Pre-trip check", "Start route", "Report exception", "Complete route"];

export function DriverDemoPage() {
  return (
    <AppShell sectionLabel="Driver demo">
      <PageHeader eyebrow="Static workflow" title="Driver trip workflow demo" description="A responsive concept page for future driver trip steps, designed without native mobile, live GPS, QR scanning, or production data." />
      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-white">Route 18 afternoon run</h2>
            <p className="mt-2 text-slate-300">Demo-only route workflow preview.</p>
          </div>
          <StatusBadge tone="blue">Demo mode</StatusBadge>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {workflow.map((step, index) => (
            <div className="rounded-2xl bg-slate-950/50 p-4" key={step}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 font-bold text-white">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-amber-300/40 bg-amber-300/10 p-5 font-bold text-amber-100">
          Demo only. Production driver GPS tracking will use the native mobile app.
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button variant="secondary">Start demo step</Button>
          <Button variant="ghost">Report demo exception</Button>
        </div>
      </Card>
    </AppShell>
  );
}
