import React from "react";
import { TrainingMethodology } from "@/content/programmes";

interface MethodologyStepProps {
  methodology: TrainingMethodology;
}

export function MethodologyStep({ methodology }: MethodologyStepProps) {
  return (
    <div className="p-8 sm:p-9 bg-[#EFE6D6] border border-[#0B2A6B]/30 flex flex-col justify-between group hover:border-[#0B2A6B] transition-colors duration-300">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-[#A67C37]/40 mb-5">
          <span className="font-serif font-extrabold text-[36px] sm:text-[40px] text-[#0B2A6B] leading-none">
            {methodology.number}
          </span>
          <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
            PILLAR {methodology.number}
          </span>
        </div>

        <h3 className="font-serif font-extrabold text-[22px] sm:text-[24px] leading-tight text-[#0B2A6B]">
          {methodology.title}
        </h3>

        <p className="font-serif italic text-sm sm:text-base text-[#15151A]/90 mt-2.5">
          {methodology.summary}
        </p>

        <p className="font-sans text-xs sm:text-[14px] text-[#15151A]/80 mt-3 leading-relaxed">
          {methodology.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#A67C37]/30 text-[11px] font-sans text-[#15151A]/70">
        5e Experiential Learning Framework
      </div>
    </div>
  );
}
