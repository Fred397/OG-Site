import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Target, CheckCircle, ShieldCheck } from "lucide-react";

export function PhilosophySection() {
  const principles = [
    {
      num: "01",
      icon: Target,
      title: "Useful",
      tagline: "Does it solve a genuine problem?",
      description:
        "We avoid bloated features and decorative distractions. Every screen and feature exists to serve user intent and deliver real outcomes.",
    },
    {
      num: "02",
      icon: CheckCircle,
      title: "Simple",
      tagline: "Can users understand it immediately?",
      description:
        "Simplicity takes discipline. We reduce confusion through clear visual hierarchy, sensible layouts, and fast interactions.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Built to Last",
      tagline: "Can your team maintain it easily?",
      description:
        "We build with strict type safety, modular components, and standard technologies designed to evolve smoothly over time.",
    },
  ];

  return (
    <section className="py-20 relative border-t border-slate-800">
      <Container size="wide">
        <div className="max-w-3xl mb-16">
          <Badge variant="accent" className="mb-4">
            03 / How We Think
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
            We don&apos;t build for the sake of building.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We start with the problem, eliminate unnecessary fluff, and build websites and apps that are easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="rounded-3xl p-8 sm:p-9 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors bg-slate-900 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-cyan-400 tracking-widest font-semibold">
                      {item.num} / PRINCIPLE
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 block mb-4 font-medium">
                    {item.tagline}
                  </span>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500 font-medium">
                  <span>Opus Geeks Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
