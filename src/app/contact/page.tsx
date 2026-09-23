import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/constants/site-config";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Initiate an engineering consultation or product design inquiry with the Opus Geeks team.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 flex flex-col gap-24">
      <Container size="wide">
        <SectionHeader
          eyebrow="Initiate Contact"
          title="Let's build something useful together."
          description="Have a website, app, or design project in mind? Reach out directly to our team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="rounded-3xl p-8 flex flex-col gap-6 bg-slate-900 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-100">Direct Channels</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-800/80 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase block font-semibold">
                    Inquiries
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-medium text-slate-100 hover:text-cyan-400 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-800/80 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase block font-semibold">
                    Location
                  </span>
                  <span className="text-base font-medium text-slate-100">
                    {siteConfig.contact.address}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col gap-4 shadow-xl">
              <Badge variant="glow" className="w-fit">
                Response Guarantee
              </Badge>
              <h4 className="text-lg font-bold text-slate-100">
                Direct review within 24 hours
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                All inquiries are directly evaluated by lead engineers and designers to give you clear guidance on scope, feasibility, and timelines.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiries Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
