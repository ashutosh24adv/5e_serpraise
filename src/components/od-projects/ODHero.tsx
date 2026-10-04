import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { ArchPanel } from "../ui/ArchPanel";

export function ODHero() {
  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-[80px] bg-[#EFE6D6]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: ~55% (max-w: 680px) */}
          <div className="lg:col-span-7 max-w-[680px] space-y-7">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] sm:text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                E2 &bull; ENRICH
              </span>
            </div>

            <div className="max-w-[700px]">
              <h1 className="font-serif font-extrabold text-[clamp(38px,4.8vw,64px)] leading-[1.06] tracking-[-0.02em] text-[#0B2A6B]">
                Build stronger organizations.
              </h1>
              <div className="font-serif italic font-medium text-[clamp(24px,3vw,40px)] text-[#D62839] leading-[1.18] mt-3">
                Systems, culture &amp; performance architecture.
              </div>
            </div>

            <p className="font-sans text-[17px] text-[#15151A] leading-[1.65] max-w-[560px]">
              Organizational development interventions designed to strengthen culture, institutionalize HR systems, optimize performance evaluation, and foster sustainable enterprise capability.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Button
                href="mailto:contact@5eserpraise.com?subject=OD%20Project%20Inquiry"
                variant="primary"
              >
                Discuss an OD Project
              </Button>
              <Button href="#interventions" variant="secondary-link">
                Explore Interventions
              </Button>
            </div>

            {/* OD Focus Points */}
            <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
              <span>Culture Building</span>
              <span className="text-[#A67C37]">&bull;</span>
              <span>Assessment Centers</span>
              <span className="text-[#A67C37]">&bull;</span>
              <span>HR Systems &amp; Policies</span>
              <span className="text-[#A67C37]">&bull;</span>
              <span>E2 Retainership</span>
            </div>
          </div>

          {/* Right Column: ~45% */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <ArchPanel
              title="E2 &bull; Enrich"
              subtitle="Culture Building &bull; HR Systems &bull; Assessments"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
