import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Landmark, HeartPulse, ShoppingBag, Building2 } from "lucide-react";

export function IndustriesSection() {
  const industries = [
    {
      icon: Landmark,
      name: "Fintech & Trading",
      description:
        "Fast transaction workflows, real-time data streaming, and secure payment processing.",
      highlight: "High-Volume Transaction Flow",
      iconBg: "bg-cyan-950/60 text-cyan-400 border border-cyan-800/80",
      highlightColor: "text-cyan-400",
    },
    {
      icon: HeartPulse,
      name: "HealthTech & Biometrics",
      description:
        "Secure patient data handling, medical device integrations, and clear clinical dashboards.",
      highlight: "HIPAA-Ready Architecture",
      iconBg: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/80",
      highlightColor: "text-emerald-400",
    },
    {
      icon: ShoppingBag,
      name: "Modern E-Commerce",
      description:
        "Custom checkout flows, product configurators, and real-time inventory management.",
      highlight: "High-Conversion Storefronts",
      iconBg: "bg-purple-950/60 text-purple-400 border border-purple-800/80",
      highlightColor: "text-purple-400",
    },
    {
      icon: Building2,
      name: "PropTech & Real Estate",
      description:
        "Interactive property search, architectural listings, and automated leasing tools.",
      highlight: "Modern Portal Solutions",
      iconBg: "bg-amber-950/60 text-amber-400 border border-amber-800/80",
      highlightColor: "text-amber-400",
    },
  ];

  return (
    <section className="py-20 relative border-t border-slate-800 bg-[#080c14]">
      <Container size="wide">
        <div className="max-w-2xl mb-16">
          <Badge variant="glow" className="mb-4">
            05 / Domains
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Industries we serve.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Domain experience solving practical challenges across regulated and data-intensive markets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 rounded-3xl p-7 border border-slate-800 flex flex-col justify-between transition-colors shadow-sm hover:border-slate-700"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl ${ind.iconBg} flex items-center justify-center mb-6 shadow-xs`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <span
                    className={`text-xs font-mono font-bold ${ind.highlightColor} block`}
                  >
                    {ind.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
