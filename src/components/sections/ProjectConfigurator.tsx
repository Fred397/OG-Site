import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ArrowRight, RotateCcw, Send, Layers, Clock, DollarSign, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticButton } from '../ui/MagneticButton';

interface ProjectConfiguratorProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const ProjectConfigurator: React.FC<ProjectConfiguratorProps> = () => {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>('Web Application');
  const [selectedServices, setSelectedServices] = useState<string[]>(['UI/UX Design', 'Full-Stack Development']);
  const [timeline, setTimeline] = useState<number>(2); // months
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const projectTypes = [
    { name: 'Web Application / SaaS', icon: '💻', baseWeeks: 6, baseBudget: 18000 },
    { name: 'Mobile App (iOS / Android)', icon: '📱', baseWeeks: 8, baseBudget: 22000 },
    { name: 'AI System & Automation', icon: '🤖', baseWeeks: 5, baseBudget: 16000 },
    { name: 'Full Digital Ecosystem', icon: '🌐', baseWeeks: 12, baseBudget: 35000 },
  ];

  const serviceOptions = [
    { name: 'Product Strategy & Discovery', cost: 3000, weeks: 1 },
    { name: 'UI/UX Design & Prototyping', cost: 5000, weeks: 2 },
    { name: 'Full-Stack Development', cost: 10000, weeks: 4 },
    { name: 'AI & Custom LLM Integrations', cost: 6000, weeks: 2 },
    { name: 'Cloud DevOps & CI/CD Setup', cost: 4000, weeks: 1 },
    { name: '24/7 SLA Maintenance', cost: 2500, weeks: 0 },
  ];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  // Dynamic calculations
  const baseType = projectTypes.find((p) => p.name === projectType) || projectTypes[0];
  const servicesCost = selectedServices.reduce((acc, curr) => {
    const s = serviceOptions.find((opt) => opt.name === curr);
    return acc + (s ? s.cost : 0);
  }, 0);

  const totalEstimate = baseType.baseBudget + servicesCost;
  const estimatedSprints = Math.max(2, Math.round((baseType.baseWeeks + selectedServices.length) / 2));

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6C2EB9', '#1E50C8', '#009EE1'],
    });
  };

  return (
    <section id="configurator" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] ambient-glow-purple opacity-20" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>✦ Interactive Scope & Timeline Estimator</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Plan & Estimate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 font-bold">Project Scope</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400">
            Select your technical requirements to generate an instant sprint timeline and budget blueprint.
          </p>
        </div>

        {/* Configurator Card */}
        <div className="glass-panel rounded-3xl p-6 md:p-12 border-purple-500/30 shadow-[0_0_50px_-15px_rgba(108,46,185,0.25)] relative">
          {/* Progress Bar */}
          <div className="flex items-center justify-between gap-2 mb-10 pb-6 border-b border-white/10">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className="flex-1 flex items-center gap-3"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step >= s
                      ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-[0_0_15px_rgba(0,158,225,0.6)]'
                      : 'bg-surface-2 text-zinc-500 border border-white/10'
                  }`}
                >
                  {s}
                </div>
                <span className="hidden md:inline text-xs font-mono text-zinc-400">
                  {s === 1 && 'Architecture'}
                  {s === 2 && 'Capabilities'}
                  {s === 3 && 'Velocity'}
                  {s === 4 && 'Blueprint'}
                </span>
                {s < 4 && <div className="flex-1 h-[1px] bg-white/10 hidden sm:block" />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: Product Architecture */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-brand-cyan" />
                  <span>Step 1: What type of digital product are you building?</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {projectTypes.map((type) => (
                    <div
                      key={type.name}
                      onClick={() => setProjectType(type.name)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                        projectType === type.name
                          ? 'bg-surface-2 border-brand-cyan shadow-[0_0_25px_rgba(0,158,225,0.25)]'
                          : 'bg-surface-1/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="text-2xl mb-2">{type.icon}</div>
                      <div className="font-heading font-bold text-base md:text-lg text-white mb-1">{type.name}</div>
                      <div className="text-xs font-mono text-zinc-400">Est. Baseline: {type.baseWeeks} Weeks</div>
                    </div>
                  ))}
                </div>
                <div className="pt-6 flex justify-end">
                  <MagneticButton
                    variant="primary"
                    onClick={() => setStep(2)}
                    className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white"
                  >
                    <span>Next: Select Capabilities</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Required Services */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-brand-purple" />
                  <span>Step 2: Which capabilities do you require?</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = selectedServices.includes(opt.name);
                    return (
                      <div
                        key={opt.name}
                        onClick={() => toggleService(opt.name)}
                        className={`p-4 rounded-xl cursor-pointer transition-all flex items-center justify-between border ${
                          isSelected
                            ? 'bg-surface-2 border-brand-purple shadow-[0_0_20px_rgba(108,46,185,0.3)]'
                            : 'bg-surface-1/60 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span className="text-sm font-medium text-white">{opt.name}</span>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center ${
                            isSelected ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white' : 'border border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-6 flex items-center justify-between">
                  <MagneticButton variant="glass" onClick={() => setStep(1)}>
                    <span>Back</span>
                  </MagneticButton>
                  <MagneticButton
                    variant="primary"
                    onClick={() => setStep(3)}
                    className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white"
                  >
                    <span>Next: Timeline Target</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Timeline Target */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-cyan" />
                  <span>Step 3: What is your target deployment timeline?</span>
                </h3>
                <div className="py-8 px-4 rounded-2xl bg-surface-1/80 border border-white/10 space-y-6 text-center">
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {timeline} {timeline === 1 ? 'Month (Fast-Track MVP)' : 'Months (Full-Featured Rollout)'}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={timeline}
                    onChange={(e) => setTimeline(parseInt(e.target.value))}
                    className="w-full h-2 bg-surface-3 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                  <div className="flex justify-between text-xs font-mono text-zinc-400">
                    <span>1 Month (Rapid)</span>
                    <span>3 Months (Standard)</span>
                    <span>6+ Months (Enterprise)</span>
                  </div>
                </div>
                <div className="pt-6 flex items-center justify-between">
                  <MagneticButton variant="glass" onClick={() => setStep(2)}>
                    <span>Back</span>
                  </MagneticButton>
                  <MagneticButton
                    variant="primary"
                    onClick={() => setStep(4)}
                    className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white"
                  >
                    <span>Generate Project Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Live Projection & Proposal Trigger */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {!isSubmitted ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="p-5 rounded-2xl bg-surface-2 border border-blue-500/30 text-center">
                        <span className="text-xs font-mono text-zinc-400 block mb-1">PROJECT SCOPE</span>
                        <div className="font-heading font-bold text-base text-white">{projectType}</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-surface-2 border border-purple-500/30 text-center">
                        <span className="text-xs font-mono text-zinc-400 block mb-1">ESTIMATED SPRINTS</span>
                        <div className="font-heading font-bold text-xl text-brand-cyan">{estimatedSprints} Sprints</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-surface-2 border border-cyan-500/30 text-center">
                        <span className="text-xs font-mono text-zinc-400 block mb-1">BUDGET RANGE</span>
                        <div className="font-heading font-bold text-xl text-cyan-300">
                          ${(totalEstimate * 0.9).toLocaleString()} – ${(totalEstimate * 1.15).toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleFinish} className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          required
                          placeholder="Your Name / Organization"
                          className="w-full px-5 py-3.5 rounded-xl bg-surface-1 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-cyan text-sm"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Work Email Address"
                          className="w-full px-5 py-3.5 rounded-xl bg-surface-1 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-cyan text-sm"
                        />
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Tell us any specific features or custom APIs needed (optional)..."
                        className="w-full px-5 py-3.5 rounded-xl bg-surface-1 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-cyan text-sm"
                      />
                      <div className="pt-4 flex items-center justify-between">
                        <MagneticButton
                          type="button"
                          variant="glass"
                          onClick={() => setStep(1)}
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          <span>Reset</span>
                        </MagneticButton>
                        <MagneticButton
                          variant="primary"
                          className="px-8 py-3.5 text-sm md:text-base bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white shadow-[0_0_25px_rgba(108,46,185,0.4)]"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          <span>Lock In Consultation & Proposal</span>
                        </MagneticButton>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-brand-cyan/20 border border-brand-cyan text-brand-cyan flex items-center justify-center mx-auto text-2xl">
                      ✓
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
                      Configuration Submitted!
                    </h3>
                    <p className="max-w-md mx-auto text-sm text-zinc-300">
                      Our Lead Systems Architect has received your scope parameters and will review the blueprint within 24 hours.
                    </p>
                    <MagneticButton
                      variant="glass"
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                      }}
                    >
                      <span>Configure Another Build</span>
                    </MagneticButton>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
