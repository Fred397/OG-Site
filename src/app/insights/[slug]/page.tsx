import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { insightsData } from "@/lib/constants/insights";
import { ArrowLeft, Clock, User } from "lucide-react";

interface InsightPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function InsightPostPage({ params }: InsightPostProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-16">
      <Container size="narrow">
        {/* Navigation Breadcrumb */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-slate-200 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </Link>

        {/* Article Header */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-3">
            <Badge variant="glow">{article.category}</Badge>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-800">
            <div className="w-10 h-10 rounded-full bg-cyan-950/70 border border-cyan-800/80 flex items-center justify-center text-cyan-400 shadow-xs">
              <User className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-200 block">
                {article.author.name}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {article.author.role} • {article.publishedAt}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="rounded-3xl p-8 sm:p-12 prose prose-invert max-w-none text-slate-300 space-y-6 leading-relaxed bg-slate-900 border border-slate-800 shadow-xl">
          <p className="text-lg text-slate-200 font-normal leading-relaxed">
            {article.excerpt}
          </p>
          <div className="h-[1px] bg-slate-800 my-8" />
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
            1. The Core Architectural Challenge
          </h2>
          <p>
            When architecting modern digital platforms, the primary performance bottleneck is rarely the framework itself; it is the uncontrolled accumulation of client-side JavaScript, unoptimized render loops, and uncoordinated state management.
          </p>
          <p>
            By adopting a server-first mindset, computing data models upstream, and delegating only essential interactions to the client, we achieve fast time-to-interactive scores while preserving responsive interactions.
          </p>
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight mt-8">
            2. Benchmarking & Profile Strategy
          </h2>
          <p>
            Hardware variability across client devices requires realistic performance testing. Rather than targeting only high-end machines, our testing pipeline verifies usability on everyday mobile devices, guaranteeing consistent responsiveness.
          </p>
        </div>
      </Container>
    </div>
  );
}
