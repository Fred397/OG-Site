import React from "react";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  const credentials = [
    { value: "100%", label: "Custom Codebases", sub: "No generic bloated templates", color: "text-cyan-400", dot: "bg-cyan-400" },
    { value: "60+ FPS", label: "Smooth Interactions", sub: "Optimized render cycles", color: "text-indigo-400", dot: "bg-indigo-400" },
    { value: "< 100ms", label: "Fast Loading", sub: "Edge CDN & clean architecture", color: "text-purple-400", dot: "bg-purple-400" },
    { value: "100%", label: "Direct Access", sub: "Senior engineers and designers", color: "text-emerald-400", dot: "bg-emerald-400" },
  ];

  return (
    <section className="border-y border-slate-800 bg-[#080c14] py-10">
      <Container size="wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border-l border-slate-800 pl-6 first:border-none first:pl-0"
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                <span className={`text-2xl sm:text-3xl font-mono font-extrabold ${item.color} tracking-tight`}>
                  {item.value}
                </span>
              </div>
              <span className="text-sm font-bold text-slate-100 mt-1">
                {item.label}
              </span>
              <span className="text-xs font-mono text-slate-400 mt-0.5 font-medium">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
