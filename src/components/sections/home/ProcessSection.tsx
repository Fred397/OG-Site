"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Compass, FileCode2, Layout, Terminal, Rocket, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      name: "Discover",
      icon: Compass,
      tagline: "Uncovering user needs, technical constraints, and key goals.",
      deliverables: ["Product Discovery Brief", "Technical Feasibility Audit", "User Journey Map"],
    },
    {
      num: "02",
      name: "Define",
      icon: FileCode2,
      tagline: "Structuring information architecture and clear requirements.",
      deliverables: ["System Architecture Schema", "Data Modeling Blueprint", "Milestone Roadmap"],
    },
    {
      num: "03",
      name: "Design",
      icon: Layout,
      tagline: "Crafting intuitive layouts, typography, and interactive prototypes.",
      deliverables: ["Modular Figma Token System", "Interactive Prototypes", "Component Design Specs"],
    },
    {
      num: "04",
      name: "Build",
      icon: Terminal,
      tagline: "Full-stack engineering with strict type safety and testing.",
      deliverables: ["Production-Ready Codebase", "Automated CI/CD Pipeline", "Security & Load Test Reports"],
    },
    {
      num: "05",
      name: "Launch",
      icon: Rocket,
      tagline: "Smooth deployment, monitoring, and ongoing support.",
      deliverables: ["Reliable Cloud Deployment", "Monitoring Setup", "Post-Launch Audit"],
    },
  ];

  return (
    <section className="py-20 relative border-t border-slate-800">
      <Container size="wide">
        <div className="max-w-2xl mb-16">
          <Badge variant="glow" className="mb-4">
            07 / Execution Protocol
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
            How we work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A clear five-phase engineering lifecycle designed to eliminate guesswork and ship reliable software on schedule.
          </p>
        </div>

        {/* Step Indicator Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left border transition-colors cursor-pointer ${
                activeStep === idx
                  ? "bg-cyan-950/70 border-cyan-500 text-cyan-300 font-bold"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                Stage {step.num}
              </span>
              <span className="text-sm font-bold tracking-tight mt-1 block">
                {step.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-900 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                  Phase {steps[activeStep].num}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-slate-400 font-medium">
                  Milestone
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-4">
                {steps[activeStep].name} Phase
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                {steps[activeStep].tagline}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 sm:p-7">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
                Key Artifacts & Deliverables
              </h4>
              <ul className="space-y-3">
                {steps[activeStep].deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
