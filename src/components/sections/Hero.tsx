import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { ParticleCanvas } from '../3d/ParticleCanvas';

interface HeroProps {
  onOpenConfigurator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConfigurator }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Interactive 3D WebGL Particle Constellation */}
      <ParticleCanvas />

      {/* Dynamic Ambient Purple and Deep Blue Glow Highlights */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] ambient-glow-purple rounded-full animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[500px] h-[500px] ambient-glow-blue rounded-full opacity-60" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Category Leadership Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border-purple-500/30 text-xs font-mono tracking-widest text-zinc-300 mb-6 shadow-[0_0_25px_rgba(108,46,185,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span className="font-semibold text-zinc-200">Next-Gen Software Agency</span>
          <span className="text-zinc-500">✦</span>
          <span className="text-brand-cyan">Premium Digital Experiences</span>
        </motion.div>

        {/* Beautiful, Refined, Classy Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12] mb-6 text-white"
        >
          Engineering the Technology Behind <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 font-extrabold italic drop-shadow-[0_0_30px_rgba(108,46,185,0.3)]">
            Ambitious Digital Products
          </span>
        </motion.h1>

        {/* Strategic Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-base md:text-lg text-zinc-300 font-normal leading-relaxed mb-10"
        >
          From high-converting <strong className="text-white font-medium">product strategy</strong> and bespoke <strong className="text-white font-medium">UI/UX design systems</strong> to scalable <strong className="text-white font-medium">web & mobile platforms</strong>. We turn complex ideas into seamless software people love using.
        </motion.p>

        {/* Dual High-Impact CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <MagneticButton
            variant="primary"
            onClick={onOpenConfigurator}
            className="px-8 py-3.5 text-sm md:text-base bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white shadow-[0_0_30px_rgba(108,46,185,0.4)] hover:shadow-[0_0_40px_rgba(0,158,225,0.6)]"
            dataCursorText="CALCULATE"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Launch Project Configurator</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <MagneticButton
            variant="glass"
            onClick={() => {
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-7 py-3.5 text-sm md:text-base border-purple-500/20 hover:border-brand-cyan/40"
            dataCursorText="EXPLORE"
          >
            <span>Explore Case Studies</span>
          </MagneticButton>
        </motion.div>

        {/* Live Architecture Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6 border-t border-white/5 text-xs text-zinc-400 font-mono"
        >
          <div className="flex items-center justify-center gap-2 py-1.5">
            <Zap className="w-4 h-4 text-brand-cyan" />
            <span>Fluid 120 FPS Motion Physics</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1.5">
            <Layers className="w-4 h-4 text-brand-purple" />
            <span>Full-Stack Modular Architecture</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-neon" />
            <span>100% IP & Code Ownership</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
