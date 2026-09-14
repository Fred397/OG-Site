import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'case-study' | 'drag' | 'configurator'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop screens
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') as any;
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorType(type || 'pointer');
        setCursorText(text);
      } else if (target.closest('a, button, [role="button"], input, select')) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_12px_#00F0FF]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Smooth Trailing Responsive Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center font-mono text-[10px] font-bold tracking-widest uppercase transition-colors duration-200 ${
          cursorType === 'case-study'
            ? 'w-24 h-24 bg-brand-cyan text-black border-none'
            : cursorType === 'drag'
            ? 'w-20 h-20 bg-brand-purple text-white border-none'
            : cursorType === 'configurator'
            ? 'w-24 h-24 bg-brand-neon text-black border-none'
            : cursorType === 'pointer'
            ? 'w-12 h-12 border border-brand-cyan/80 bg-brand-cyan/10'
            : 'w-9 h-9 border border-white/30'
        }`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none text-center px-2"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
