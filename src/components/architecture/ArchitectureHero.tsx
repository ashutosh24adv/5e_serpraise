import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import Image from "next/image";

export function ArchitectureHero() {
  return (
    <section className="pt-14 pb-12 bg-[#EFE6D6] border-b border-[#A67C37]/30">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <SectionLabel
              title="THE INTELLECTUAL FRAMEWORK"
              subtitle="Proprietary capability architecture developed and refined since 2003."
            />

            <h1 className="font-serif font-extrabold text-[clamp(36px,5.5vw,56px)] leading-[1.06] tracking-tight text-[#0B2A6B]">
              The 5E Architecture.
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#A67C37] font-medium leading-relaxed">
              Educate &bull; Enrich &bull; Enjoy &bull; Empathise &bull; Energise
            </p>

            <div className="w-16 h-[2px] bg-[#A67C37]" />

            <p className="font-sans text-[16px] sm:text-[17px] text-[#15151A]/85 leading-relaxed max-w-[65ch]">
              The 5E Architecture is 5e Serpraise&apos;s holistic capability framework. It bridges personal human purpose with institutional execution, providing an integrated roadmap from individual behavioral development to sustained organizational vitality.
            </p>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-sans font-bold uppercase tracking-wider text-[#0B2A6B]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D62839]" />
                <span>5 Core Pillars</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#A67C37]" />
                <span>4 Growth Dimensions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0B2A6B]" />
                <span>20+ Years Enterprise Practice</span>
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
                  5E Continuum
                </span>
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#EFE6D6]/80 uppercase mt-1">
                  CORE METHODOLOGY
                </span>
              </div>

              <div className="my-6 text-center border-t border-b border-[#A67C37]/40 py-4">
                <div className="font-serif italic text-sm text-[#EFE6D6]">
                  &ldquo;Enriching people. Strengthening organizations.&rdquo;
                </div>
              </div>

              <div className="text-center font-sans text-[11px] uppercase tracking-widest text-[#A67C37] font-semibold">
                E1 &bull; E2 &bull; E3 &bull; E4 &bull; E5
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
