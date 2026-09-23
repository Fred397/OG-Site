import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/lib/constants/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-20">
      <Container size="wide">
        {/* Navigation Breadcrumb */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-slate-200 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>

        {/* Header Title Section */}
        <div className="flex flex-col gap-4 max-w-4xl mb-12">
          <div className="flex items-center gap-3">
            <Badge variant="glow">{project.category}</Badge>
            <span className="text-xs font-mono text-slate-400 font-medium">
              {project.year} • {project.client}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-100 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mt-2">
            {project.summary}
          </p>
        </div>

        {/* Hero Showcase Image */}
        {project.heroImage && (
          <div className="w-full h-[320px] sm:h-[480px] md:h-[540px] rounded-3xl relative overflow-hidden border border-slate-800 shadow-2xl mb-16 bg-[#070a11]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-medium">
                    Delivered Product
                  </span>
                  <span className="text-white text-lg sm:text-2xl font-bold">
                    {project.client} — {project.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 px-4 py-2 rounded-full border border-slate-700 text-white text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Live in Production
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-3xl bg-slate-900 border border-slate-800 mb-16 shadow-sm">
          {project.results.map((res, idx) => (
            <div key={idx} className="flex flex-col border-l border-slate-800 pl-6 first:border-none first:pl-0">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-cyan-400">
                {res.metric}
              </span>
              <span className="text-xs font-mono text-slate-400 mt-1 uppercase font-semibold">
                {res.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-3xl p-8 sm:p-10 bg-slate-900 border border-slate-800 shadow-sm">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
              01 / The Challenge
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 bg-slate-900 border border-slate-800 shadow-sm">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4">
              02 / Our Solution & Execution
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack & Tags */}
        <div className="rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-slate-900 border border-slate-800 shadow-sm">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Core Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-cyan-950/70 text-xs font-mono text-cyan-300 border border-cyan-800/80 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Button href="/contact" variant="primary" size="md">
            <span>Build Similar Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
