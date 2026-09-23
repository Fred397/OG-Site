import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Users, Crosshair, Cpu, ShieldCheck } from "lucide-react";

export function WhyOpusSection() {
  const differentiators = [
    {
      icon: Users,
      title: "Design & Engineering Together",
      description:
        "Designers understand the code constraints; engineers care about UX details. No handoff friction or lost fidelity.",
    },
    {
      icon: Crosshair,
      title: "Outcome-Driven Focus",
      description:
        "We optimize for real usability, conversion rates, and reliable performance—not just aesthetic mockups.",
    },
    {
      icon: Cpu,
      title: "Zero Agency Overhead",
      description:
        "Direct communication with senior engineers and product designers. No middle layers slowing your momentum down.",
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Maintainability",
      description:
        "Clean TypeScript, well-structured components, and documentation make it easy for your internal team to take over.",
    },
  ];

  return (
    <section className="py-20 relative">
      <Container size="wide">
        <div className="max-w-2xl mb-16">
          <Badge variant="accent" className="mb-4">
            06 / Why Opus Geeks
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
            How we differ from typical agencies.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We operate as your dedicated product partner—combining thoughtful design with disciplined software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 tracking-tight mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
                  <span>Differentiator 0{idx + 1}</span>
                  <span className="text-indigo-400 font-semibold">Standard Practice</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
