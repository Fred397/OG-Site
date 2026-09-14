import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../data/mockData';

export const NarrativeProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-12 relative bg-surface-1/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-2 inline-block">
              ✦ Engineering Methodology
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our 4-Stage <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">Delivery Framework</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-400">
            A structured agile delivery methodology ensuring continuous client visibility, rigorous QA, and predictable launches.
          </p>
        </div>

        {/* Narrative Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:scale-110 transition-transform inline-block">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-brand-cyan transition-colors" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                STAGE {idx + 1} OF 4 • SPRINT MILESTONE
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
