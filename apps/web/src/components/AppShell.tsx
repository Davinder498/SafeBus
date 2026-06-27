import { NavLink } from "react-router";
import type { ReactNode } from "react";

const navItems = [
  { to: "/admin", label: "Admin" },
  { to: "/parent", label: "Parent" },
  { to: "/driver-demo", label: "Driver demo" },
];

type AppShellProps = {
  children: ReactNode;
  sectionLabel: string;
};

export function AppShell({ children, sectionLabel }: AppShellProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[16rem_1fr]">
      <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 lg:min-h-[calc(100vh-10rem)]">
        <p className="px-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">{sectionLabel}</p>

        <nav aria-label={`${sectionLabel} navigation`} className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">

        <nav className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">

          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isActive ? "bg-sky-400 text-slate-950" : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`
              }
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
}
