"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Quote, ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function TestimonialsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    {
      quote:
        "Opus Geeks eliminated our performance bottlenecks and delivered a fast, clean trading terminal. Their attention to detail was exceptional.",
      author: "Marcus Vance",
      role: "Head of Engineering, Nexus Capital",
      deliverable: "High-Performance Web Terminal",
    },
    {
      quote:
        "The mobile app they engineered delivered seamless offline sync while keeping battery drain to a minimum. They worked with us like true product partners.",
      author: "Dr. Elena Rostova",
      role: "Chief Product Officer, Aurora Health",
      deliverable: "Telemetry Mobile App",
    },
  ];

  const faqs = [
    {
      q: "How does a typical project begin?",
      a: "Every engagement starts with a technical and design discovery session. We evaluate your goals, user flows, and technical requirements, then prepare a fixed-scope milestone roadmap before writing code.",
    },
    {
      q: "How long does design & development take?",
      a: "Focused web and mobile MVPs typically take 4 to 8 weeks. Larger platforms or complex design systems range from 8 to 16 weeks, organized into weekly review sprints.",
    },
    {
      q: "Can you work with an existing codebase or design system?",
      a: "Yes. We frequently audit and modernize existing web platforms, refactor React/Next.js architectures, or scale Figma design systems into production component libraries.",
    },
    {
      q: "Do you provide post-launch support and maintenance?",
      a: "Yes. We offer continuous engineering retainers, performance monitoring, cloud infrastructure management, and iterative feature development post-launch.",
    },
  ];

  return (
    <section className="py-20 relative border-t border-slate-800/80">
      <Container size="wide">
        {/* Top: Client Outcomes */}
        <div className="max-w-2xl mb-12">
          <Badge variant="glow" className="mb-4">
            05 / Trust & Proof
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Client outcomes & common questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Real feedback from engineering leaders and answers to how we work together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col justify-between bg-slate-900 shadow-xl hover:border-slate-700 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-cyan-400 mb-6 opacity-60" />
                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed italic mb-8 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-100">
                    {item.author}
                  </h4>
                  <span className="text-xs text-slate-400 font-mono font-medium">
                    {item.role}
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-800/80 font-semibold">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="rounded-3xl p-8 sm:p-12 border border-slate-800 bg-[#090d16] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Everything you need to know about working with us
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>Have a specific question?</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-slate-900/90 border-cyan-500/50"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-100">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

