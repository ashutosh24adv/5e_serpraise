import React from "react";
import { Container } from "../layout/Container";
import { trainingMethodologies } from "@/content/programmes";

export function HomeMethodology() {
  return (
    <section className="py-[80px] bg-[#F7F1E6] border-t border-b border-[#A67C37]/40">
      <Container size="wide">
        {/* Section Heading: sentence case, ends with a period */}
        <div className="mb-[32px] text-center max-w-[680px] mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              PEDAGOGICAL STANDARD
            </span>
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            Our training methodology.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 leading-relaxed">
            Learning that goes beyond the classroom &mdash; structured to move participants from intellectual awareness to sustained behavioral application.
          </p>
        </div>

        {/* 3 Numbered Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-10">
          {trainingMethodologies.map((item) => (
            <div
              key={item.number}
              className="p-8 sm:p-9 bg-[#EFE6D6] border border-[#0B2A6B]/30 flex flex-col justify-between group hover:border-[#0B2A6B] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#A67C37]/40 mb-5">
                  <span className="font-serif font-extrabold text-[36px] text-[#0B2A6B] leading-none">
                    {item.number}
                  </span>
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
                    PILLAR {item.number}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-[22px] sm:text-[24px] leading-tight text-[#0B2A6B]">
                  {item.title}
                </h3>

                <p className="font-serif italic text-sm text-[#15151A]/90 mt-2">
                  {item.summary}
                </p>

                <p className="font-sans text-xs sm:text-[14px] text-[#15151A]/80 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#A67C37]/30 text-[11px] font-sans text-[#15151A]/70">
                5e Experiential Learning Framework
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
