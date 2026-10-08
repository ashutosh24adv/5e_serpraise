import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { siteConfig } from "@/content/site";

export function FourDimensionsMatrix() {
  const { purpose } = siteConfig;

  return (
    <section id="dimensions" className="py-[80px] bg-[#F7F1E6] border-t border-b border-[#A67C37]/40 scroll-mt-24">
      <Container size="wide">
        <div className="space-y-4 mb-12">
          <SectionLabel
            title="THE FOUR GROWTH DIMENSIONS"
            subtitle="How 5e Serpraise creates holistic value across every level of the enterprise."
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] text-[#0B2A6B] leading-tight">
            Enriching Everyone Across Four Dimensions
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[65ch]">
            Every 5E intervention is calibrated to produce holistic growth across four balanced dimensions of human and enterprise capability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purpose.mission.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#EFE6D6] border border-[#0B2A6B]/30 hover:border-[#0B2A6B] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group"
            >
              {/* Top Vermilion Accent on Hover */}
              <span className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#D62839] transition-colors duration-300" />

              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-extrabold text-3xl text-[#D62839]">
                    0{idx + 1}
                  </span>
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#0B2A6B] uppercase">
                    DIMENSION {idx + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-[22px] text-[#0B2A6B] leading-snug group-hover:text-[#D62839] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-serif italic text-xs sm:text-sm text-[#A67C37] font-semibold leading-snug">
                  {pillar.statement}
                </p>

                <div className="w-10 h-[1.5px] bg-[#A67C37]" />

                <p className="font-sans text-xs sm:text-[13.5px] text-[#15151A]/85 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#A67C37]/30 flex items-center justify-between font-sans text-xs">
                <span className="font-bold uppercase tracking-wider text-[#0B2A6B]">
                  Aligned with E{idx + 1}
                </span>
                <span className="font-bold text-[#D62839] uppercase tracking-wider text-[11px]">
                  Core Focus
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
