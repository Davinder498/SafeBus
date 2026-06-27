import { Link } from "react-router";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-sky-400 text-slate-950 shadow-lg shadow-sky-950/30 hover:bg-sky-300",
  secondary: "border border-white/15 bg-white/10 text-white hover:bg-white/15",
  ghost: "text-slate-200 hover:bg-white/10 hover:text-white",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950";

export function Button({ children, to, variant = "primary", type = "button" }: ButtonProps) {
  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
