import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "../ui/Logo";

interface HeaderProps {
  onOpenConfigurator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConfigurator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Ecosystem", href: "#tech" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-500 ease-out flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 ${
          isScrolled
            ? "bg-[#0A0D18]/85 backdrop-blur-2xl border border-purple-500/20 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(108,46,185,0.25)]"
            : "bg-[#0E111B]/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        }`}
      >
        <a
          href="#"
          data-cursor="pointer"
          className="flex items-center gap-2 group"
        >
          <Logo size={32} />
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05] md:ml-auto">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                data-cursor="pointer"
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-3 md:ml-4">
          <button
            onClick={onOpenConfigurator}
            data-cursor="pointer"
            data-cursor-text="CALCULATE"
            className="relative group overflow-hidden rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan p-px text-xs font-semibold tracking-wide text-white transition-all duration-300 shadow-[0_0_20px_rgba(108,46,185,0.25)] hover:shadow-[0_0_30px_rgba(0,158,225,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2 rounded-full bg-[#0E111B] px-4 py-2 transition-colors duration-300 group-hover:bg-[#151B2A]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 group-hover:rotate-12 transition-transform duration-300" />
              <span>Project Configurator</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </motion.header>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#0A0D18]/95 backdrop-blur-2xl border border-purple-500/20 rounded-3xl p-6 shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-medium text-zinc-300 hover:text-brand-cyan hover:bg-white/[0.05] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.08] mt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConfigurator();
                  }}
                  className="w-full rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan p-px text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(108,46,185,0.25)]"
                >
                  <span className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0E111B] py-3.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Launch Project Configurator</span>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
