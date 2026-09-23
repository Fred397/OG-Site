import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-20 relative">
      <Container size="wide">
        <div className="rounded-3xl p-8 sm:p-16 border border-slate-800 text-center flex flex-col items-center bg-slate-900 shadow-xl">
          <Badge variant="glow" className="mb-6">
            <span>Next Steps</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 max-w-3xl leading-[1.1] mb-6">
            Have something{" "}
            <span className="text-[#00aeef]">
              worth building?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-400 max-w-xl leading-relaxed mb-10">
            Let&apos;s evaluate your requirements, design the interface, and engineer a digital product that works reliably.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary">
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button href="/work" size="lg" variant="secondary">
              <span>Review Case Studies</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
