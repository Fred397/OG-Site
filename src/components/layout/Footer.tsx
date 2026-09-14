import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { Logo } from '../ui/Logo';

interface FooterProps {
  onOpenConfigurator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConfigurator }) => {
  return (
    <footer className="relative bg-[#0A0D18] border-t border-purple-500/10 pt-20 pb-12 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 ambient-glow-purple rounded-full" />
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 ambient-glow-blue rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Pre-Footer Action Banner with Purple-Blue-Cyan Gradient */}
        <div className="glass-panel rounded-3xl p-8 md:p-14 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border-purple-500/30 bg-gradient-to-r from-surface-1 via-surface-2 to-[#121024] shadow-[0_0_50px_-15px_rgba(108,46,185,0.3)]">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-3 inline-block">
              ✦ Ready to Build Something Iconic?
            </span>
            <h3 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let's engineer your digital advantage.
            </h3>
            <p className="text-zinc-400 text-sm md:text-base">
              No generic proposals. Get an accurate sprint timeline, architecture blueprint, and cost projection in 60 seconds.
            </p>
          </div>
          <MagneticButton
            variant="primary"
            onClick={onOpenConfigurator}
            className="px-9 py-4 text-base bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white shadow-[0_0_30px_rgba(108,46,185,0.5)]"
            dataCursorText="ESTIMATE"
          >
            <Sparkles className="w-5 h-5 text-cyan-200" />
            <span>Launch Configurator</span>
          </MagneticButton>
        </div>

        {/* Multi-Column Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-sm text-zinc-400">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Logo size={36} />
            <p className="leading-relaxed">
              Full-service digital engineering, custom software systems, high-retention mobile apps, and category-defining UI/UX design.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-500">
              EST. 2020 • GLOBAL ENTERPRISE DELIVERY
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {['Services', 'Selected Work', 'Process', 'Tech Ecosystem', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="hover:text-brand-cyan transition-colors flex items-center gap-1 group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-cyan" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs">
              Direct Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-cyan" />
                <a href="mailto:contact@opusgeeks.com">contact@opusgeeks.com</a>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-cyan" />
                <a href="tel:+13466904693">+1 (346) 690-4693</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Offices */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs">
              Global Presence
            </h4>
            <div className="space-y-4 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">USA Headquarters:</strong>
                  8903 Pines Blvd 217 153, Pembroke Pines, FL 33024
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">Engineering Center:</strong>
                  Block 22, Street Gulshan, Karachi, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} Opus Geeks Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Security Overview</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
