import { NavLink, Outlet } from "react-router-dom";
import { AlertBanner } from "@safebus/ui";
const links = ["trips","active-trip","scan","manual","report-issue","summary"];
export function DriverLayout() { return <div className="mx-auto min-h-screen max-w-md bg-slate-100 p-4"><h1 className="text-2xl font-black">Driver Demo</h1><div className="my-4"><AlertBanner title="Demo only" message="Production driver GPS tracking will use the native mobile app." tone="yellow" /></div><nav className="mb-4 flex gap-2 overflow-x-auto">{links.map((l) => <NavLink className="rounded-full bg-white px-3 py-2 text-sm font-bold" to={`/driver-demo/${l}`} key={l}>{l}</NavLink>)}</nav><Outlet /></div>; }
