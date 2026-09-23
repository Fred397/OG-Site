import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { insightsData } from "@/lib/constants/insights";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Insights & Technical Notes",
  description:
    "Engineering essays, design system patterns, and architecture breakdowns by the Opus Geeks team.",
};

export default function InsightsPage() {
  return (
    <div className="py-12 sm:py-20 flex flex-col gap-24">
      <Container size="wide">
        <SectionHeader
          eyebrow="Studio Dispatches"
          title="Insights, engineering notes & architectural breakdowns."
          description="Reflections on web engineering, user experience, and practical software patterns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group flex flex-col bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <Badge variant="glow">{article.category}</Badge>
                <span className="font-medium">{article.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">
                {article.excerpt}
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-200 font-semibold">
                    {article.author.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {article.author.role}
                  </span>
                </div>
                <div className="p-2 rounded-full bg-slate-800 group-hover:bg-[#00aeef] text-slate-300 group-hover:text-slate-950 transition-colors shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
