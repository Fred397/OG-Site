import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/lib/constants/services";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services & Capabilities",
  description:
    "Explore Opus Geeks engineering capabilities across Web Development, Mobile Application Development, and UI/UX Design Systems.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 flex flex-col gap-24">
      <Container size="wide">
        <SectionHeader
          eyebrow="Our Capabilities"
          title="Engineered for performance. Designed for impact."
          description="We take on product engineering challenges, crafting tailored software platforms that scale with your ambitions."
        />

        <div className="flex flex-col gap-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-12 justify-between items-start bg-slate-900 border border-slate-800 shadow-xl hover:border-slate-700 transition-colors"
            >
              {/* Left Column: Core Info */}
              <div className="lg:max-w-xl">
                <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
                  0{index + 1} / Discipline
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mt-2 mb-4">
                  {service.title}
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-mono text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button href={`/services/${service.slug}`} variant="primary" size="md">
                  <span>Explore {service.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Right Column: Capabilities & Deliverables */}
              <div className="w-full lg:max-w-md bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {service.capabilities.map((cap, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-slate-200 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.stats && (
                  <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xl font-mono font-bold text-slate-100">
                          {stat.value}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
