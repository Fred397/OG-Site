import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Code2, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../../data/mockData';

export const ServicesExplorer: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);

  return (
    <section id="services" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 ambient-glow-purple opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-2 inline-block">
              ✦ Capabilities & Core Expertise
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Specialized Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">& Digital Solutions</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-400">
            Tailored engineering capabilities built around performance, clean maintainable code, and high business conversion.
          </p>
        </div>

        {/* Interactive Row-Based Service Explorer */}
        <div className="space-y-4">
          {SERVICES.map((service: ServiceItem) => {
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveService(service.id)}
                className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  isActive
                    ? 'bg-surface-2 border border-purple-500/40 shadow-[0_0_40px_-15px_rgba(108,46,185,0.3)]'
                    : 'glass-panel hover:bg-surface-2/60 hover:border-white/20'
                }`}
              >
                {/* Collapsed Header Summary Bar */}
                <div className="p-6 md:p-8 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className={`font-mono text-lg md:text-xl font-bold transition-colors ${
                        isActive ? 'text-brand-cyan' : 'text-zinc-600'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-zinc-400 mt-1 hidden sm:block">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white rotate-45 shadow-[0_0_15px_rgba(0,158,225,0.5)]'
                        : 'border border-white/10 text-white group-hover:border-brand-cyan'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanded Details Pane */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
                        {/* Detailed Description */}
                        <div className="lg:col-span-1 space-y-4">
                          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Enterprise Grade Deliverables</span>
                          </div>
                        </div>

                        {/* Specific Capabilities List */}
                        <div className="lg:col-span-1 space-y-2.5">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                            Key Deliverables:
                          </h4>
                          {service.capabilities.map((cap) => (
                            <div key={cap} className="flex items-center gap-2 text-xs md:text-sm text-zinc-200">
                              <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="lg:col-span-1 space-y-3">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                            <Code2 className="w-4 h-4 text-brand-purple" />
                            <span>Engineered With:</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg bg-surface-1 border border-white/10 text-xs font-mono text-zinc-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
