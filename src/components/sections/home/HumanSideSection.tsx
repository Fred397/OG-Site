import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function HumanSideSection() {
  return (
    <section className="py-20 relative border-t border-slate-800 bg-[#080c14]">
      <Container size="wide">
        <div className="rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden bg-slate-900 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Badge variant="accent" className="mb-4">
                09 / Studio Culture
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight mb-6">
                The people behind the work.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
                We are an independent team of software engineers and product designers. We remain small and focused, dedicating deep attention to every project we take on.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-400 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-semibold text-slate-200">Remote-First Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="font-semibold text-slate-200">Senior Engineers & Designers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="font-semibold text-slate-200">Open Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-semibold text-slate-200">Reliable Delivery</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0b0f19] border border-slate-800 text-xs font-mono text-slate-300 font-medium">
                &ldquo;When code is well-structured and interfaces are straightforward, users feel the difference immediately.&rdquo;
              </div>
            </div>

            {/* Right Column: Studio Workspace Photo */}
            <div className="lg:col-span-5 relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src="/images/studio/studio-culture.jpg"
                alt="Opus Geeks Studio Workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs font-mono text-white">
                <span className="font-bold">Opus Geeks Studio</span>
                <span className="text-cyan-400 font-semibold">Form + Function</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
