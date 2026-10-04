import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "../ui/Logo";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="w-full bg-[#EFE6D6] text-[#15151A] pt-16 pb-12 double-brass-border-t">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#A67C37]/40">
          {/* Col 1: Brand & Heritage */}
          <div className="md:col-span-5 space-y-3">
            <Logo variant="navy" />
            <p className="font-sans text-[14px] text-[#15151A]/80 leading-relaxed max-w-sm pt-1">
              {siteConfig.shortDescription}
            </p>
            <p className="font-serif italic text-xs text-[#A67C37]">
              Service + Praise &mdash; Enriching Everyone.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#0B2A6B]">
              Core Interventions
            </div>
            <ul className="space-y-2 font-sans text-[14px] text-[#15151A]/80">
              <li>
                <Link href="/training" className="hover:text-[#D62839] transition-colors">
                  Corporate Training (E1 &bull; Educate)
                </Link>
              </li>
              <li>
                <Link href="/custom-programs" className="hover:text-[#D62839] transition-colors">
                  Custom-Made Programs
                </Link>
              </li>
              <li>
                <Link href="/od-projects" className="hover:text-[#D62839] transition-colors">
                  Organizational Development (E2 &bull; Enrich)
                </Link>
              </li>
              <li>
                <Link href="/od-projects#retainership" className="hover:text-[#D62839] transition-colors">
                  E2 Retainership for SMEs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Presence & Contact */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#0B2A6B]">
              Presence &amp; Contact
            </div>
            <div className="space-y-1.5 font-sans text-[14px] text-[#15151A]/80">
              <div>India &bull; Established 2003</div>
              <div>Australia &bull; Global Operations</div>
              <div className="pt-2">
                <a
                  href="mailto:contact@5eserpraise.com"
                  className="font-bold text-[#0B2A6B] hover:text-[#D62839] underline decoration-[#A67C37]"
                >
                  contact@5eserpraise.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] font-sans text-[#15151A]/70">
          <div>
            &copy; {new Date().getFullYear()} 5e Serpraise. All rights reserved. Est. 2003.
          </div>
          <div className="flex items-center gap-4 text-xs font-serif italic text-[#A67C37]">
            <span>Intellectually</span>
            <span>&bull;</span>
            <span>Financially</span>
            <span>&bull;</span>
            <span>Emotionally</span>
            <span>&bull;</span>
            <span>Spiritually</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
