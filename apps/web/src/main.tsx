

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router";
import { AdminPage } from "./pages/AdminPage";
import { DriverDemoPage } from "./pages/DriverDemoPage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { ParentPage } from "./pages/ParentPage";
import "./styles.css";

const topNavItems = [
  { to: "/login", label: "Login" },
  { to: "/admin", label: "Admin" },
  { to: "/parent", label: "Parent" },
  { to: "/driver-demo", label: "Driver demo" },
];


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/parent" element={<ParentPage />} />
      <Route path="/driver-demo" element={<DriverDemoPage />} />
    </Routes>
  );
}

function RootLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_32rem),#020617] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 shadow-lg shadow-slate-950/30 backdrop-blur">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <Link to="/" className="flex items-center gap-3 text-xl font-black tracking-tight" aria-label="SafeBus Alberta home">
            <span className="grid size-10 place-items-center rounded-2xl bg-sky-400 text-slate-950">SB</span>
            SafeBus Alberta
          </Link>
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:pb-0">

function RootLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_32rem),#020617] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" className="flex items-center gap-3 text-xl font-black tracking-tight">
            <span className="grid size-10 place-items-center rounded-2xl bg-sky-400 text-slate-950">SB</span>
            SafeBus Alberta
          </Link>
          <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">

            {topNavItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${
                    isActive ? "bg-white text-slate-950" : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <AppRoutes />
      </main>
    </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12"><Routes>

import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import "./styles.css";

type PageProps = {
  title: string;
  eyebrow: string;
  children: ReactNode;
};

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-900/80">
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            SafeBus Alberta
          </Link>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            <Link className="hover:text-white" to="/login">Login</Link>
            <Link className="hover:text-white" to="/admin">Admin</Link>
            <Link className="hover:text-white" to="/parent">Parent</Link>
            <Link className="hover:text-white" to="/driver-demo">Driver demo</Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
    </div>
  );
}

function Page({ title, eyebrow, children }: PageProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-sky-950/30">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">{eyebrow}</p>
      <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <div className="max-w-3xl text-lg leading-8 text-slate-200">{children}</div>
    </section>
  );
}

function LandingPage() {
  return (
    <Page title="Real-time school bus visibility for Alberta schools and parents." eyebrow="Operations foundation">
      <p>
        SafeBus Alberta will help transportation teams coordinate routes, exceptions, and family-facing bus status from a focused school transportation platform.
      </p>
      <p className="mt-6 rounded-2xl border border-sky-300/30 bg-sky-300/10 p-5 text-2xl font-semibold text-sky-100">
        Track the bus, not the child.
      </p>
    </Page>
  );
}

function LoginPage() {
  return (
    <Page title="Login placeholder" eyebrow="Future access">
      <p>No real authentication is included yet. Future milestones will add secure role-based access for school administrators, parents, and drivers.</p>
    </Page>
  );
}

function AdminPage() {
  return (
    <Page title="Admin operations placeholder" eyebrow="Future command center">
      <p>Administrators will monitor routes, bus status, driver workflow, and transportation exceptions. This page contains no real data.</p>
    </Page>
  );
}

function ParentPage() {
  return (
    <Page title="Parent bus status placeholder" eyebrow="Future family visibility">
      <p>Parents will see clear bus status updates designed around privacy, reliability, and school transportation context. This page contains no real tracking.</p>
    </Page>
  );
}

function DriverDemoPage() {
  return (
    <Page title="Driver workflow demo placeholder" eyebrow="Future trip workflow">
      <p>Future driver workflows will support trip start, route progress, pickup and drop-off accountability, and exception reporting.</p>
      <p className="mt-6 rounded-2xl border border-amber-300/40 bg-amber-300/10 p-5 font-semibold text-amber-100">
        Demo only. Production driver GPS tracking will use the native mobile app.
      </p>
    </Page>
  );
}

function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/driver-demo" element={<DriverDemoPage />} />

      </Routes></main>
    </div>

      </Routes>
    </Shell>

  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout />

      <RootLayout />

      <App />

    </BrowserRouter>
  </StrictMode>,
);
