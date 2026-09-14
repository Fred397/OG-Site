import React from 'react';
import { motion } from 'framer-motion';
import { METRICS } from '../../data/mockData';

export const TrustBar: React.FC = () => {
  return (
    <section className="relative py-16 border-y border-white/5 bg-surface-1/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Metric Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center md:text-left border-l-2 border-brand-cyan/30 pl-4 py-1"
            >
              <div className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-zinc-200">
                {metric.label}
              </div>
              <div className="text-xs text-zinc-500 font-mono mt-0.5">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Trusted Enterprise Logos Ticker */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span className="shrink-0 text-zinc-400">ENGINEERING FOR AMBITIOUS BRANDS:</span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 opacity-70">
            {['V-Stream Jet Aviation', 'Lecavalier Cellars', 'Restaurant Techs', 'Savanne Holdings', 'Kelstech Global'].map((brand) => (
              <span
                key={brand}
                className="font-heading font-bold text-sm tracking-normal text-zinc-300 hover:text-brand-cyan hover:opacity-100 transition-all cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
