import React from "react";
import { customEngagementProcess } from "@/content/custom-programs";
import { Container } from "../layout/Container";

export function CustomProcessSection() {
  return (
    <section className="py-[80px] bg-[#F7F1E6] border-t border-b border-[#A67C37]/40">
      <Container size="wide">
        {/* Section Heading: sentence case, ends with a period */}
        <div className="mb-[32px] text-center max-w-[680px] mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              ENGAGEMENT ARCHITECTURE
            </span>
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            How a custom engagement is structured.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 leading-relaxed">
            A structured four-phase process ensuring every bespoke intervention is aligned with organizational strategy and measurable outcomes.
          </p>
        </div>

        {/* 4 Process Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-10">
          {customEngagementProcess.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 bg-[#EFE6D6] border border-[#0B2A6B]/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/40 mb-4">
                  <span className="font-serif font-extrabold text-[32px] text-[#0B2A6B] leading-none">
                    {step.number}
                  </span>
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
                    PHASE {step.number}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-[20px] text-[#0B2A6B]">
                  {step.title}
                </h3>

                <p className="font-serif italic text-xs text-[#A67C37] mt-1">
                  {step.tagline}
                </p>

                <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/80 mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#A67C37]/30 text-[10px] font-sans text-[#15151A]/60 uppercase tracking-wider">
                Step {step.number} of 4
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
