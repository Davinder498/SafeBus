import { AppShell } from "../components/AppShell";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";

export function ParentPage() {
  return (
    <AppShell sectionLabel="Parent shell">
      <PageHeader eyebrow="Family bus status" title="A calm parent-facing status view" description="Static demo cards show how families may understand bus progress without exposing student tracking or production data." />
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-300">Morning route</p>
              <h2 className="mt-2 text-3xl font-black text-white">Bus 18 is on schedule</h2>
            </div>
            <StatusBadge tone="green">On time</StatusBadge>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">

            {["Depot", "School zone", "Arrival window"].map((step, index) => (

            {['Depot', 'School zone', 'Arrival window'].map((step, index) => (

              <div className="rounded-2xl bg-slate-950/50 p-4" key={step}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</p>
                <p className="mt-2 font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-bold text-white">Privacy principle</h2>
          <p className="mt-4 rounded-2xl border border-sky-300/30 bg-sky-300/10 p-5 text-2xl font-black text-sky-100">Track the bus, not the child.</p>
          <p className="mt-4 text-sm leading-6 text-slate-300">This shell contains no GPS, QR scanning, student records, or live notifications.</p>
        </Card>
      </div>
    </AppShell>
  );
}
