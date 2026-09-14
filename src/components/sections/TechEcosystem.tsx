import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_ECOSYSTEM } from '../../data/mockData';

export const TechEcosystem: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'AI/Data', 'Cloud', 'WebGL/3D'];

  const filteredTech = filter === 'All'
    ? TECH_ECOSYSTEM
    : TECH_ECOSYSTEM.filter((t) => t.category === filter);

  return (
    <section id="tech" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-2 inline-block">
            ✦ Modern Tech Stack
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Core Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">& Frameworks</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400">
            We write clean, strictly-typed, scalable code using industry-standard modern frameworks designed for speed, security, and developer velocity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold shadow-[0_0_15px_rgba(0,158,225,0.4)]'
                  : 'bg-surface-2 text-zinc-400 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default"
            >
              <span className="text-3xl mb-2.5 group-hover:scale-125 transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="font-heading font-bold text-xs md:text-sm text-white group-hover:text-brand-cyan transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 mt-0.5">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
