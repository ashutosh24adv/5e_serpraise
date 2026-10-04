import React from "react";
import { Container } from "../layout/Container";
import { OrnamentDivider } from "../ui/OrnamentDivider";
import { siteConfig } from "@/content/site";

export function HomePurpose() {
  return (
    <section className="py-[80px] bg-[#EFE6D6]">
      <Container size="wide">
        <OrnamentDivider />

        {/* Section Heading */}
        <div className="mb-[32px] text-center space-y-2 max-w-[720px] mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              PHILOSOPHY &amp; MISSION
            </span>
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            Service and praise.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 leading-relaxed">
            The name <strong className="text-[#0B2A6B]">Serpraise</strong> unites <em>Service</em> and <em>Praise</em> &mdash; the principle that sustainable organizational capability begins with authentic service and celebrating human contribution.
          </p>
        </div>

        {/* Vision & Mission 2-Column Flat Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[14px] mt-10">
          {/* Left: Vision Box */}
          <div className="lg:col-span-4 p-8 sm:p-10 bg-[#0B2A6B] text-[#EFE6D6] border border-[#0B2A6B] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#A67C37]">
                OUR VISION
              </span>
              <h3 className="font-serif font-extrabold text-[32px] leading-tight text-[#EFE6D6]">
                Service + Praise
              </h3>
              <p className="font-serif italic text-sm text-[#EFE6D6]/80">
                Serpraise = Service + Praise
              </p>
              <div className="w-10 h-[1px] bg-[#A67C37]" />
              <p className="font-sans text-sm text-[#EFE6D6]/90 leading-relaxed">
                True organizational leadership stems from genuine service to people and celebrating human achievement with sincere praise.
              </p>
            </div>
            <div className="pt-6 border-t border-[#EFE6D6]/20 text-[11px] font-sans text-[#EFE6D6]/70">
              Active in corporate practice since 2003.
            </div>
          </div>

          {/* Right: Four Mission Dimensions */}
          <div className="lg:col-span-8 p-8 sm:p-10 bg-[#F7F1E6] border border-[#A67C37]/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#A67C37]/40 mb-6">
                <div>
                  <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
                    OUR MISSION
                  </span>
                  <h3 className="font-serif font-extrabold text-[28px] text-[#0B2A6B]">
                    Enriching Everyone
                  </h3>
                </div>
                <span className="font-serif italic text-xs text-[#A67C37]">
                  4 Dimensions
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {siteConfig.purpose.mission.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 sm:p-5 bg-[#EFE6D6] border border-[#0B2A6B]/20">
                    <h4 className="font-serif font-bold text-[18px] text-[#0B2A6B]">
                      {pillar.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/80 mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#A67C37]/30 text-xs font-sans text-[#15151A]/70">
              Integrating intellectual, financial, emotional, and spiritual growth across all client organizations.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
