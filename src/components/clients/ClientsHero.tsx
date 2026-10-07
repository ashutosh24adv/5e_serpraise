import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import Image from "next/image";

export function ClientsHero() {
  return (
    <section className="pt-14 pb-12 bg-[#EFE6D6] border-b border-[#A67C37]/30">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <SectionLabel
              title="ENTERPRISE PARTNERSHIPS"
              subtitle="Over two decades of trusted organizational engagements across India & Australia."
            />

            <h1 className="font-serif font-extrabold text-[clamp(36px,5.5vw,56px)] leading-[1.06] tracking-tight text-[#0B2A6B]">
              Our Clients &amp; Partners.
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#A67C37] font-medium leading-relaxed">
              Serving 100+ Market Leaders Across Manufacturing, IT, BFSI, Healthcare &amp; Beyond.
            </p>

            <div className="w-16 h-[2px] bg-[#A67C37]" />

            <p className="font-sans text-[16px] sm:text-[17px] text-[#15151A]/85 leading-relaxed max-w-[65ch]">
              Since 2003, 5e Serpraise has partnered with Fortune 500 multinationals, leading Indian conglomerates, and high-growth mid-market enterprises. Our client relationships are distinguished by multi-year repeat orders and measurable capability outcomes.
            </p>

            {/* Quick Metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-sans font-bold uppercase tracking-wider text-[#0B2A6B]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D62839]" />
                <span>100+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#A67C37]" />
                <span>8 Key Industry Sectors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0B2A6B]" />
                <span>India &bull; Australia Footprint</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Seal */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[360px] bg-[#0B2A6B] text-[#EFE6D6] p-8 border border-[#A67C37] flex flex-col justify-between"
              style={{ borderRadius: "999px 999px 0 0" }}
            >
              <div className="flex flex-col items-center text-center pt-4">
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src="/logo/5e-logo.png"
                    alt="5e Serpraise Logo"
                    width={80}
                    height={80}
                    className="w-full h-full drop-shadow-none object-contain"
                    priority
                  />
                </div>
                <span className="font-serif italic text-lg text-[#A67C37]">
                  Est. 2003
                </span>
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#EFE6D6]/80 uppercase mt-1">
                  ENTERPRISE ROSTER
                </span>
              </div>

              <div className="my-6 text-center border-t border-b border-[#A67C37]/40 py-4">
                <div className="font-serif italic text-sm text-[#EFE6D6]">
                  &ldquo;Relationships built on trust, excellence, and measurable impact.&rdquo;
                </div>
              </div>

              <div className="text-center font-sans text-[11px] uppercase tracking-widest text-[#A67C37] font-semibold">
                Repeat Partnerships Since 2003
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
