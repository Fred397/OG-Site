"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

import { siteConfig } from "@/lib/constants/site-config";

export function ContactForm() {
  const [selectedFocus, setSelectedFocus] = useState<string>("Website");

  const focusOptions = [
    "Website",
    "Mobile App",
    "Design System",
    "Full Product",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = `Project inquiry from ${name || "website visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject focus: ${selectedFocus}\n\nProject details:\n${message}`;

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="rounded-3xl p-8 sm:p-12 bg-slate-900 border border-slate-800 shadow-xl">
      <h3 className="text-2xl font-bold text-slate-100 mb-6">
        Tell us about your project
      </h3>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-slate-400 uppercase font-semibold">
              Your Name *
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="e.g. Alex Morgan"
              className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-xs"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-slate-400 uppercase font-semibold">
              Email Address *
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="alex@company.com"
              className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-xs"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-slate-400 uppercase font-semibold">
            Project Focus
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {focusOptions.map((focus) => (
              <button
                key={focus}
                type="button"
                onClick={() => setSelectedFocus(focus)}
                className={`px-3 py-2 text-xs font-mono rounded-lg border transition-colors text-center cursor-pointer ${
                  selectedFocus === focus
                    ? "bg-cyan-950/80 border-cyan-500 text-cyan-300 font-bold"
                    : "bg-[#0b0f19] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {focus}
              </button>
            ))}
          </div>
          <input type="hidden" name="focus" value={selectedFocus} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-slate-400 uppercase font-semibold">
            Project Scope & Objectives *
          </label>
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Briefly describe what you want to build and your timeline..."
            className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none shadow-xs"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto self-start"
        >
          <span>Send inquiry</span>
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
