import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#00aeef] text-slate-950 hover:bg-[#009bd6] font-bold shadow-xs",
    secondary:
      "bg-slate-900 text-slate-200 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-800 shadow-xs",
    outline:
      "border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-500",
    ghost:
      "text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60",
    cyan:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold shadow-xs",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant as keyof typeof variantStyles] || variantStyles.primary,
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
