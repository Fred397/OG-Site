import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Code, Layers, Cloud, Cpu } from "lucide-react";

export function CapabilitiesSection() {
  const capabilityGroups = [
    {
      category: "Product & Strategy",
      icon: Layers,
      items: [
        "Product Scoping & Roadmapping",
        "User Flow & Information Architecture",
        "Figma Design Systems & Components",
        "Interactive Prototypes",
      ],
    },
    {
      category: "Web & Frontend",
      icon: Code,
      items: [
        "Next.js & React Server Components",
        "TypeScript Architecture",
        "Responsive, Accessible Layouts",
        "High-Performance Web Apps",
      ],
    },
    {
      category: "Mobile Engineering",
      icon: Cpu,
      items: [
        "iOS (Swift) & Android (Kotlin)",
        "React Native Cross-Platform",
        "Offline-First SQLite Caching",
        "Push Notifications & Device Integrations",
      ],
    },
    {
      category: "Cloud, Backend & APIs",
      icon: Cloud,
      items: [
        "Node.js, Go & Clean REST/GraphQL APIs",
        "PostgreSQL & Redis Caching",
        "Docker & Automated Deployments",
        "Fast Edge CDN Delivery",
      ],
    },
  ];

  return (
    <section className="py-20 relative">
      <Container size="wide">
        <div className="max-w-2xl mb-16">
          <Badge variant="glow" className="mb-4">
            04 / Technical Depth
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
            Comprehensive technical capabilities.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A cohesive stack designed to eliminate silos between interface design, native applications, and backend infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilityGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {group.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-2.5 text-sm text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
                  <span>Production Ready</span>
                  <span>Clean Architecture</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
