"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import herorImg from "@/assets/hero3.jpg";
import { ArrowUpRight, Code2, Layers, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";

const workTypes = [
  {
    id: "web" as const,
    label: "Websites",
    title: "A website that makes things clear",
    detail: "Clear pages, simple paths, and a site your team can update without a fuss.",
    highlights: ["Structured navigation & clear hierarchy", "Fast loading & responsive layouts", "Accessible, maintainable code"],
    icon: Code2,
  },
  {
    id: "mobile" as const,
    label: "Apps",
    title: "An app that fits into people’s day",
    detail: "We start with the moments that matter, then build the details around them.",
    highlights: ["Intuitive touch interactions", "Reliable performance on real devices", "Clear offline & network states"],
    icon: Smartphone,
  },
  {
    id: "design" as const,
    label: "Design systems",
    title: "A design system your team can rely on",
    detail: "Reusable pieces that keep the product consistent as it changes.",
    highlights: ["Reusable component library", "Consistent tokens & typography", "Comprehensive usage documentation"],
    icon: Layers,
  },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"web" | "mobile" | "design">("web");
  const active = workTypes.find((type) => type.id === activeTab)!;
  const Icon = active.icon;

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen bg-[#0b0f19] overflow-hidden flex items-center -mt-20 pt-36 sm:pt-44 pb-20">
      {/* Hero Background Image Covering Full Top Viewport Under Floating Navbar */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={herorImg}
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90 sm:opacity-95 reveal-hero-bg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0b0f19]/90" />
      </div>

      <div className="relative z-10 w-full">
        <Container size="wide">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="mb-6 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-cyan-400 reveal-eyebrow">
                Opus Geeks · websites, apps, and product design
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-100 sm:text-6xl lg:text-6.5xl reveal-heading">
                Need a website or app that&apos;s easier to use? <span className="text-[#00aeef]">Let&apos;s make it better.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:text-xl reveal-desc">
                We help teams plan, design, and build websites and apps that work well for the people using them—and for the people who look after them.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 reveal-cta">
                <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-[#00aeef] px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-[#009bd6]">
                  See our work <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-400">
                  What we do
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-3 border-t border-slate-800 pt-8 reveal-highlights">
                {[
                  ["Websites", "From the first page to launch"],
                  ["Mobile apps", "For iPhone and Android"],
                  ["Product design", "For new products and existing tools"],
                ].map(([title, description]) => (
                  <div key={title} className="border-l-2 border-[#00aeef] pl-3">
                    <span className="block text-sm font-bold text-slate-200">{title}</span>
                    <span className="mt-1 block text-[11px] font-mono leading-relaxed text-slate-500">{description}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
