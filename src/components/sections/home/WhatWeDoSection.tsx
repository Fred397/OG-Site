"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Code2, Smartphone, Layout, CheckCircle2, ChevronRight } from "lucide-react";
import { servicesData } from "@/lib/constants/services";

export function WhatWeDoSection() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("web-development");

  const activeService =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const serviceMeta = {
    "web-development": {
      icon: Code2,
      color: "text-cyan-400",
      bg: "bg-cyan-950/60",
      border: "border-cyan-800/80",
    },
    "app-development": {
      icon: Smartphone,
      color: "text-indigo-400",
      bg: "bg-indigo-950/60",
      border: "border-indigo-800/80",
    },
    "ui-ux-design": {
      icon: Layout,
      color: "text-purple-400",
      bg: "bg-purple-950/60",
      border: "border-purple-800/80",
    },
  };

  const currentMeta =
    serviceMeta[selectedServiceId as keyof typeof serviceMeta] ||
    serviceMeta["web-development"];

  return (
    <section className="py-20 relative">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="glow" className="mb-4">
              01 / Core Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              What we build.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Three focused disciplines designed to take ambitious concepts from initial planning to production-ready software.
            </p>
          </div>

          <Link
            href="/services"
            className="text-xs font-mono uppercase tracking-widest text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5"
          >
            <span>Explore All Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Capability Grid + Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {servicesData.map((service, index) => {
              const meta =
                serviceMeta[service.id as keyof typeof serviceMeta] ||
                serviceMeta["web-development"];
              const Icon = meta.icon;
              const isSelected = service.id === selectedServiceId;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`text-left p-6 sm:p-7 rounded-3xl border transition-colors flex items-start justify-between group cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500 shadow-md"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#00aeef]" />
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#00aeef] text-slate-950"
                          : `${meta.bg} ${meta.color} border ${meta.border}`
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-slate-100 tracking-tight mt-0.5">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1 font-medium">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 mt-3 transition-colors ${
                      isSelected
                        ? "text-cyan-400"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Card */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-slate-800 bg-slate-900 shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold block">
                    Selected Discipline
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mt-1">
                    {activeService.title}
                  </h3>
                </div>

                <Link
                  href={`/services/${activeService.slug}`}
                  className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold hover:bg-slate-700 transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Full Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-base text-slate-300 leading-relaxed mb-8 font-normal">
                {activeService.description}
              </p>

              {/* Verified Capabilities Checklist */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-4">
                  Scope of Work
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-200 bg-[#0b0f19] p-2.5 rounded-xl border border-slate-800 font-semibold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack & Metrics */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {activeService.stats && (
                <div className="flex items-center gap-4 text-xs font-mono">
                  {activeService.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col text-right">
                      <span className="font-extrabold text-cyan-400">{stat.value}</span>
                      <span className="text-slate-500 text-[10px] font-medium">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
