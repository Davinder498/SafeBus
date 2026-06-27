import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";

export function LoginPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Access placeholder"
        title="Sign in will be added in a future milestone."
        description="This Bootstrap 1 page shows the intended access experience only. No credentials are collected and no authentication is connected."
      />
      <Card>
        <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Email
            <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-300" placeholder="name@school.ca" type="email" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Password
            <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-300" placeholder="Not connected" type="password" />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit">Demo sign in</Button>
            <p className="text-sm text-slate-400">No real auth. This button intentionally does not submit data.</p>
          </div>
        </form>
      </Card>
    </div>
  );
}
