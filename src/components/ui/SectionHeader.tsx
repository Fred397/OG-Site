import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClasses[align], className)}>
      {eyebrow && (
        <Badge variant="glow" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-100 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
