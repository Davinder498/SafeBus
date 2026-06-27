import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <section className={`rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/20 ${className}`}>{children}</section>;
}
