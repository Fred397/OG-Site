"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projectsData } from "@/lib/constants/projects";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Mobile Apps", "Websites", "Shopify"];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-12 sm:gap-16">
      <Container size="wide">
        <SectionHeader
          eyebrow="Our Work, Built to Inspire"
          title="Crafting exceptional mobile apps, websites, and platforms."
          description="Browse our selected case studies spanning mobile ecosystems, Webflow web platforms, and custom Shopify e-commerce."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer font-bold ${
                activeTab === cat
                  ? "bg-[#00aeef] text-slate-950 shadow-xs"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredProjects.map((project) => (
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
                {project.heroImage ? (
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#070a11]">
                    <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
                      {project.client}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
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

              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Key Result Metric & CTA */}
              <div className="mt-auto pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-mono font-extrabold text-cyan-400">
                    {project.results[0].metric}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">
                    {project.results[0].label}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">
                  Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
