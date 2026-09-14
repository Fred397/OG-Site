import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { CASE_STUDIES } from '../../data/mockData';
import { TiltCard } from '../ui/TiltCard';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 relative bg-surface-1/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-brand-purple uppercase mb-2 inline-block">
              ✦ Selected Case Studies
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">& Proven Impact</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-400">
            A showcase of digital products engineered to solve complex operational challenges and drive measurable growth.
          </p>
        </div>

        {/* Selected Work Grid with Perspective Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <TiltCard className="h-full glass-panel glass-panel-hover overflow-hidden flex flex-col justify-between group p-6 md:p-8">
                <div>
                  {/* Top Category and Action */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                      {project.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-gradient-to-r group-hover:from-brand-purple group-hover:to-brand-cyan group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* High Quality Mockup Visual */}
                  <div className="relative h-64 md:h-72 w-full rounded-xl overflow-hidden mb-6 bg-surface-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Stats & Tech Badges */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Real Impact Metric Pill */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 text-cyan-300">
                    <TrendingUp className="w-4 h-4 shrink-0 text-brand-cyan" />
                    <span className="font-heading font-extrabold text-sm text-white">{project.impactMetric}</span>
                    <span className="text-xs text-zinc-300">{project.impactLabel}</span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
