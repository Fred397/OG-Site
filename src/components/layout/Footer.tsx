"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import footerImg from "@/assets/footer.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050811] text-slate-900 overflow-hidden">
      {/* Full-Bleed Atmospheric Background Image Covering Entire Footer from Top to Bottom */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={footerImg}
          alt="Footer Background"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.72] contrast-[1.1] saturate-[1.15]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/75 via-black/40 to-[#050811]/90" />
      </div>

      {/* 1. TOP HERO CALL-TO-ACTION SECTION */}
      <div className="relative z-10 min-h-[360px] sm:min-h-[420px] flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 sm:pb-38">
        {/* Hero Callout Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-white drop-shadow-md">
            From prompt to pipeline
          </h2>
          <p className="text-base sm:text-lg text-slate-200/90 font-sans max-w-2xl leading-relaxed">
            Run full-cycle product engineering from a single partner. Opus Geeks helps ambitious founders and enterprises build platforms and scale faster.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base tracking-tight shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>

      {/* 2. FLOATING INSET CONTAINER (Dark Theme Glass Container) */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-26 pb-12 sm:pb-16 max-w-7xl mx-auto">
        <div className="bg-[#0b0f19]/90 backdrop-blur-2xl rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-[0_24px_64px_rgba(0,0,0,0.8)] border border-white/10">
          
          {/* Organized Content Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/10">
            
            {/* Column 1: Services */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-sm font-bold text-slate-400 font-sans tracking-wide uppercase">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5 text-[15px] font-medium text-slate-300">
                <li>
                  <Link href="/services/web-development" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/app-development" className="hover:text-white transition-colors">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design" className="hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[#00aeef] hover:text-[#38bdf8] font-semibold transition-colors">
                    All Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Selected Work */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-sm font-bold text-slate-400 font-sans tracking-wide uppercase">
                Selected Work
              </h4>
              <ul className="flex flex-col gap-2.5 text-[15px] font-medium text-slate-300">
                <li>
                  <Link href="/work/wedstimate" className="hover:text-white transition-colors">
                    Wedstimate
                  </Link>
                </li>
                <li>
                  <Link href="/work/vote-america" className="hover:text-white transition-colors">
                    Vote America
                  </Link>
                </li>
                <li>
                  <Link href="/work/calm-now" className="hover:text-white transition-colors">
                    Calm Now
                  </Link>
                </li>
                <li>
                  <Link href="/work/doslogistics" className="hover:text-white transition-colors">
                    Doslogistics
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-[#00aeef] hover:text-[#38bdf8] font-semibold transition-colors">
                    View All Case Studies →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-sm font-bold text-slate-400 font-sans tracking-wide uppercase">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5 text-[15px] font-medium text-slate-300">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Studio
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-white transition-colors">
                    Engineering Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us & Direct Inquiries */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-sm font-bold text-slate-400 font-sans tracking-wide uppercase">
                Follow Us
              </h4>
              
              {/* Uiverse Animated Social Icons */}
              <ul className="example-2">
                {/* LinkedIn */}
                <li className="icon-content">
                  <a
                    href="https://www.linkedin.com/company/opusgeeks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    data-social="linkedin"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </li>

                {/* Facebook */}
                <li className="icon-content">
                  <a
                    href="https://www.facebook.com/share/1CgUyYqR5a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    data-social="facebook"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <div className="tooltip">Facebook</div>
                </li>

                {/* Instagram */}
                <li className="icon-content">
                  <a
                    href="https://www.instagram.com/teamopusgeeks?stkn=MTBqZnR3MHQ0Nzk3cQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    data-social="instagram"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <div className="tooltip">Instagram</div>
                </li>

                {/* GitHub */}
                <li className="icon-content">
                  <a
                    href="https://github.com/opusgeeks"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    data-social="github"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <div className="tooltip">GitHub</div>
                </li>
              </ul>

              {/* Direct Sales Info */}
              <div className="mt-4 pt-1 flex flex-col gap-1.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Contact Sales
                </span>
                <a
                  href="mailto:info@opusgeeks.com"
                  className="text-[15px] font-semibold text-white hover:text-[#00aeef] transition-colors"
                >
                  info@opusgeeks.com
                </a>
                <span className="text-xs text-slate-400">
                  Global Availability · Direct 24h Response
                </span>
              </div>
            </div>

          </div>

          {/* 3. BOTTOM BAR INSIDE THE CARD */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Bold Brand Logo */}
            <Link href="/" className="inline-flex items-center gap-3 text-white group">
              <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                <Image
                  src={logoImg}
                  alt="Opus Geeks Logo"
                  width={42}
                  height={42}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Opus Geeks
              </span>
            </Link>

            {/* Clean Copyright */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm text-slate-400 font-medium">
              <span>© {currentYear} Opus Geeks, Inc. All rights reserved.</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

