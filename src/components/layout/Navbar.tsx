"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, ArrowUpRight, Command } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none reveal-nav">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        {/* Floating Pill Header Bar */}
        <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-[#0c101a]/85 backdrop-blur-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {/* Left: Brand Logo with Fixed Reserved Space & Slide-Out Title */}
          <Link
            href="/"
            className="flex items-center text-white focus:outline-none group w-36 sm:w-40 h-9 sm:h-10 shrink-0 relative overflow-hidden"
            aria-label="Opus Geeks Home"
          >
            {/* Enlarged Logo without colored background */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logoImg}
                alt="Opus Geeks Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Pure White Text with Smooth Left Slide-Out in Reserved Container */}
            <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out text-sm sm:text-base font-bold tracking-tight text-white font-sans whitespace-nowrap pl-2 select-none">
              Opus Geeks
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                        isActive
                          ? "text-white font-semibold"
                          : "text-slate-300 hover:text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 text-slate-400 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180 text-cyan-400"
                        )}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 transition-all duration-150",
                        activeDropdown === item.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      )}
                    >
                      <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col gap-0.5 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-slate-200 group-hover/item:text-cyan-400 transition-colors">
                                {child.label}
                              </span>
                              <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover/item:text-cyan-400 transition-colors" />
                            </div>
                            {child.description && (
                              <span className="text-[11px] text-slate-400 leading-tight">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Quick Icons + Vibrant Pill CTA */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 w-auto sm:min-w-[140px]">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold tracking-tight bg-[#00aeef] hover:bg-[#009bd6] text-slate-950 transition-colors shadow-sm"
            >
              <span>Start a Project</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-[#0f1422] rounded-3xl border border-white/10 shadow-2xl flex flex-col gap-2">
            {navigationItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-semibold py-2 px-3 rounded-xl transition-colors",
                    pathname === item.href
                      ? "text-cyan-400 bg-white/5 font-bold"
                      : "text-slate-200 hover:text-cyan-400 hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        href={child.href}
                        className="text-xs text-slate-400 hover:text-cyan-400 py-1.5 font-medium"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
