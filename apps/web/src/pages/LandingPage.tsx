import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { StatusBadge } from "../components/StatusBadge";

const highlights = [
  "Transportation exception visibility",
  "Family-friendly bus status language",
  "Driver workflow foundation",
];

const audiences = [
  { title: "For schools", text: "A calm operations view for route status, exceptions, and transportation coordination." },
  { title: "For parents", text: "Simple bus status updates focused on confidence without exposing student tracking." },
  { title: "For drivers", text: "A future trip workflow designed around safe, accountable school transportation." },
];

export function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <StatusBadge tone="blue">SafeBus Alberta</StatusBadge>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            Real-time school bus visibility for Alberta schools and parents.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A focused transportation platform for school bus operations, parent confidence, driver workflow, and admin exception monitoring.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/parent">View parent shell</Button>
            <Button to="/admin" variant="secondary">Explore admin shell</Button>
          </div>
          <p className="mt-8 rounded-3xl border border-sky-300/30 bg-sky-300/10 p-5 text-2xl font-black text-sky-100">
            Track the bus, not the child.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-slate-900 to-sky-950/70">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-300">Demo route status</p>
              <p className="mt-1 text-3xl font-black text-white">Route 42</p>
            </div>
            <StatusBadge tone="green">On time</StatusBadge>
          </div>
          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div className="rounded-2xl bg-white/10 p-4" key={item}>
                <p className="font-semibold text-white">{item}</p>
                <div className="mt-3 h-2 rounded-full bg-slate-700">
                  <div className="h-2 w-2/3 rounded-full bg-sky-300" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-300">Static demo content only. No live GPS, student tracking, or production data is connected.</p>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {audiences.map((audience) => (
          <Card key={audience.title}>
            <h2 className="text-xl font-bold text-white">{audience.title}</h2>
            <p className="mt-3 leading-7 text-slate-300">{audience.text}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
