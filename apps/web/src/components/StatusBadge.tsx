type StatusTone = "green" | "amber" | "blue" | "slate";

type StatusBadgeProps = {
  children: string;
  tone?: StatusTone;
};

const toneClasses: Record<StatusTone, string> = {
  green: "border-emerald-300/40 bg-emerald-300/10 text-emerald-100",
  amber: "border-amber-300/40 bg-amber-300/10 text-amber-100",
  blue: "border-sky-300/40 bg-sky-300/10 text-sky-100",
  slate: "border-slate-300/30 bg-slate-300/10 text-slate-100",
};

export function StatusBadge({ children, tone = "slate" }: StatusBadgeProps) {
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${toneClasses[tone]}`}>{children}</span>;
}
