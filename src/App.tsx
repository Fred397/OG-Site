import React, { useState } from 'react';
import { CustomCursor } from './components/layout/CustomCursor';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { ServicesExplorer } from './components/sections/ServicesExplorer';
import { SelectedWork } from './components/sections/SelectedWork';
import { ProjectConfigurator } from './components/sections/ProjectConfigurator';
import { NarrativeProcess } from './components/sections/NarrativeProcess';
import { TechEcosystem } from './components/sections/TechEcosystem';
import { TestimonialsCarousel } from './components/sections/TestimonialsCarousel';
import { FAQSection } from './components/sections/FAQSection';

export const App: React.FC = () => {
  const scrollToConfigurator = () => {
    const el = document.getElementById('configurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-white font-sans selection:bg-brand-cyan selection:text-black">
      {/* Custom Precision Dynamic Cursor */}
      <CustomCursor />

      {/* Global Fixed Glassmorphic Navigation Header */}
      <Header onOpenConfigurator={scrollToConfigurator} />

      {/* Main Experience Layout */}
      <main className="relative z-10">
        {/* 1. Kinetic Hero with 3D WebGL Particles */}
        <Hero onOpenConfigurator={scrollToConfigurator} />

        {/* 2. Live Proof Metrics & Trusted Logos */}
        <TrustBar />

        {/* 3. Interactive Row-Hover Services Explorer */}
        <ServicesExplorer />

        {/* 4. Selected Work & Perspective Tilt Case Studies */}
        <SelectedWork />

        {/* 5. The "Secret Weapon": Interactive Project Scope & Budget Configurator */}
        <ProjectConfigurator />

        {/* 6. Narrative 4-Phase Delivery Framework */}
        <NarrativeProcess />

        {/* 7. Interactive Modern Tech Ecosystem Matrix */}
        <TechEcosystem />

        {/* 8. 5-Star Verified Client Reviews */}
        <TestimonialsCarousel />

        {/* 9. Animated FAQ Accordions */}
        <FAQSection />
      </main>

      {/* Global Footer with Office Locations & Direct Contacts */}
      <Footer onOpenConfigurator={scrollToConfigurator} />
    </div>
  );
};

export default App;
