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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/parent" element={<ParentPage />} />
          <Route path="/driver-demo" element={<DriverDemoPage />} />
        </Routes>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  </StrictMode>,
);
