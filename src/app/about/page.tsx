import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Cpu, Compass, Layers, Zap } from "lucide-react";

export const metadata = {
  title: "About Opus Geeks Studio",
  description:
    "We are a digital studio crafting clear websites, mobile apps, and design systems.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Cpu,
      title: "Real Performance",
      description:
        "Every byte matters. We profile rendering loops, optimize network bundles, and target fast, reliable loading on real devices.",
    },
    {
      icon: Compass,
      title: "Clear Intentionality",
      description:
        "We reject generic templates and decorative clutter. Every layout, typography choice, and interaction serves a clear purpose.",
    },
    {
      icon: Layers,
      title: "Maintainable Systems",
      description:
        "Clean structure, modular components, and strict type safety ensure your codebase remains maintainable for years to come.",
    },
    {
      icon: Zap,
      title: "Direct Collaboration",
      description:
        "No bloated agency layers or lost-in-translation briefs. You work directly with senior designers and engineers.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-24">
      <Container size="wide">
        <SectionHeader
          eyebrow="Our Story & Vision"
          title="Crafting websites and apps that genuinely work."
          description="Opus Geeks was founded to bridge the gap between high-quality visual design and resilient, production-grade engineering."
        />

        {/* Studio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image
              src="/images/studio/studio-culture.jpg"
              alt="Opus Geeks Studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="flex items-center gap-2 bg-slate-900/90 px-4 py-2 rounded-full border border-slate-700 text-slate-100 text-xs font-mono">
                Opus Geeks Design & Engineering
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-12 bg-slate-900 border border-slate-800 shadow-xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              The Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-2 mb-4">
              Building with clarity and conviction.
            </h3>
            <p className="text-base text-slate-300 leading-relaxed mb-4">
              The web is full of generic templates and empty visual noise. At Opus Geeks, we design and build tools that respect the user&apos;s time and attention.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              Whether building responsive websites, native apps, or scalable component libraries, we focus on what matters: clear paths, fast performance, and clean code.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-8">
            Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:border-slate-700 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">{v.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900 border border-slate-800 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-100">
              Interested in collaborating with our team?
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              We work with a select number of teams on key product initiatives.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg">
            <span>Schedule Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
