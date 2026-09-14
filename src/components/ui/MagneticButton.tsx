import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass';
  dataCursorText?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  dataCursorText,
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 180, mass: 0.2 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseVariantStyles = {
    primary:
      'bg-brand-cyan text-black font-semibold shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)]',
    secondary:
      'bg-surface-2 text-white border border-white/10 hover:border-brand-cyan/50 hover:bg-surface-3',
    glass:
      'glass-panel text-white hover:border-brand-cyan/40 hover:bg-white/5',
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor="pointer"
      data-cursor-text={dataCursorText}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 overflow-hidden group ${baseVariantStyles[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 font-medium">
        {children}
      </span>
      {/* Subtle shine sweep effect on hover */}
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
    </motion.button>
  );
};
