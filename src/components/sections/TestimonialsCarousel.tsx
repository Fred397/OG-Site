import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

export const TestimonialsCarousel: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 relative bg-surface-1/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Verified Client Reviews</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Trusted by Founders <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">& Leaders</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-400">
            Read direct unedited feedback from founders, venture partners, and engineering leaders who scaled with Opus Geeks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-7 md:p-9 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-white/10 group-hover:text-brand-cyan/30 transition-colors" />
                </div>

                <p className="text-sm md:text-base text-zinc-200 leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-white text-base">
                    {review.author}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {review.role} • <span className="text-brand-cyan">{review.company}</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                  VERIFIED
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
