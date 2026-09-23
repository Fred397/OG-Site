import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "glow" | "accent" | "emerald" | "amber";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-slate-800 text-slate-300 border border-slate-700/80",
    outline: "border border-slate-700 text-slate-300 bg-slate-900/60",
    glow: "bg-cyan-950/60 text-cyan-300 border border-cyan-800/80 font-semibold",
    accent: "bg-indigo-950/60 text-indigo-300 border border-indigo-800/80 font-semibold",
    emerald: "bg-emerald-950/60 text-emerald-300 border border-emerald-800/80 font-semibold",
    amber: "bg-amber-950/60 text-amber-300 border border-amber-800/80 font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
