import { HeroSection } from "@/components/sections/home/HeroSection";
import { SelectedWorkSection } from "@/components/sections/home/SelectedWorkSection";
import { WhatWeDoSection } from "@/components/sections/home/WhatWeDoSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 01: Hero with Interactive Preview & Identity */}
      <HeroSection />

      {/* 02: Proof First — Selected Case Studies & Real Metrics */}
      <SelectedWorkSection />

      {/* 03: What We Build — Interactive Disciplines & Capabilities */}
      <WhatWeDoSection />

      {/* 04: How We Work — 5-Phase Execution Protocol */}
      <ProcessSection />

      {/* 05: Trust & Proof — Client Testimonials + Embedded FAQ Accordion */}
      <TestimonialsSection />

      {/* 06: Final CTA — Project Consultation Launchpad */}
      <FinalCtaSection />
    </>
  );
}
