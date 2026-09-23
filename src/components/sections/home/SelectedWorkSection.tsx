import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/lib/constants/projects";
import { ArrowUpRight } from "lucide-react";

export function SelectedWorkSection() {
  const projectTheme = {
    "nexus-fintech": {
      metricColor: "text-cyan-400",
      badgeVariant: "glow" as const,
    },
    "aurora-health": {
      metricColor: "text-emerald-400",
      badgeVariant: "emerald" as const,
    },
    "strata-design-system": {
      metricColor: "text-purple-400",
      badgeVariant: "accent" as const,
    },
  };

  return (
    <section className="py-20 relative">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="accent" className="mb-4">
              02 / Proven Track Record
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Selected case studies.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Real products engineered for scale, reliability, and measurable business impact.
            </p>
          </div>

          <Button href="/work" variant="secondary" size="md">
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Projects Cards Layout */}
        {/* Projects Cards Layout with Uiverse Expanding Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projectsData.slice(0, 6).map((project, index) => {
            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="work-uiverse-card group focus:outline-none"
              >
                {/* Uiverse Corner Arrow Badge */}
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>

                {/* Expanding Image on Hover */}
                <div className="card-expand-image w-full h-52 sm:h-56 rounded-2xl border border-slate-800 relative overflow-hidden bg-[#070a11] shrink-0">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono text-white font-medium">
                      {project.client}
                    </span>
                  </div>
                </div>

                {/* Card Meta & Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 pr-8 font-medium">
                  <span className="text-cyan-400 font-semibold">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {project.summary}
                </p>

                {/* Key Result Metric & CTA */}
                <div className="mt-auto pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-mono font-extrabold text-cyan-400">
                      {project.results[0].metric}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">
                      {project.results[0].label}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
