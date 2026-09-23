import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { insightsData } from "@/lib/constants/insights";
import { ArrowUpRight } from "lucide-react";

export function HomeInsightsSection() {
  return (
    <section className="py-20 relative">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="glow" className="mb-4">
              10 / Engineering Notes
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
              Dispatches & notes.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Technical breakdowns, performance best practices, and design system methodologies.
            </p>
          </div>

          <Link
            href="/insights"
            className="text-xs font-mono uppercase tracking-widest text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5"
          >
            <span>All Dispatches</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group flex flex-col bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <span className="text-cyan-400 font-semibold">{article.category}</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                {article.excerpt}
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-medium text-slate-200">{article.author.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
