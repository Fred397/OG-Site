import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/lib/constants/services";
import { ArrowUpRight, CheckCircle2, Terminal, Cpu, Database } from "lucide-react";

export const metadata = {
  title: "Web Development",
  description:
    "Custom full-stack web applications, Next.js architecture, API engineering, and scalable platforms by Opus Geeks.",
};

export default function WebDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "web-development")!;

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-24">
      <Container size="wide">
        <SectionHeader
          eyebrow="Specialized Discipline"
          title={service.title}
          description={service.tagline}
        />

        {/* Overview Hero Card */}
        <div className="rounded-3xl p-8 sm:p-14 mb-16 bg-slate-900 border border-slate-800 shadow-xl">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6">
              Websites and platforms built for speed, simplicity, and scale.
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {service.description}
            </p>
            <Button href="/contact" variant="primary" size="lg">
              <span>Discuss Web Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-slate-100">Modern Architecture</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              React Server Components, Next.js, TypeScript, and clean codebases with minimal client overhead.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-800/80 flex items-center justify-center text-indigo-400">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-slate-100">Solid Backends</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              PostgreSQL, fast caching, clean REST/GraphQL APIs, and robust data integrity.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-800/80 flex items-center justify-center text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-slate-100">Reliable Hosting & CDNs</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automated CI/CD pipelines, containerized deployments, edge caching, and monitoring.
            </p>
          </div>
        </div>

        {/* Capabilities Breakdown */}
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900 border border-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-100 mb-8">
            Detailed Capabilities & Deliverables
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-4">
                What We Build
              </h4>
              <ul className="space-y-3">
                {service.capabilities.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold mb-4">
                What You Receive
              </h4>
              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
