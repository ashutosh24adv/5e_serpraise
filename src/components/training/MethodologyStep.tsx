import React from "react";
import { TrainingMethodology } from "@/content/programmes";

interface MethodologyStepProps {
  methodology: TrainingMethodology;
  isHighlighted?: boolean;
  onClick?: () => void;
}

export function MethodologyStep({ methodology, isHighlighted, onClick }: MethodologyStepProps) {
  return (
    <div
      id={methodology.id}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={Boolean(isHighlighted)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`p-8 sm:p-9 bg-[#F7F1E6] border flex flex-col justify-between group transition-all duration-300 scroll-mt-28 md:scroll-mt-32 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
        isHighlighted
          ? "border-[#0B2A6B] ring-2 ring-[#0B2A6B]/50 shadow-md"
          : "border-[#0B2A6B]/30 hover:border-[#0B2A6B] hover:shadow-xs"
      }`}
    >
      <div>
        <div className="pb-3 border-b border-[#A67C37]/40 mb-5">
          <span className="font-serif font-extrabold text-[36px] sm:text-[40px] text-[#0B2A6B] leading-none">
            {methodology.number}
          </span>
        </div>

        <h3 className="font-serif font-extrabold text-[22px] sm:text-[24px] leading-tight text-[#0B2A6B] group-hover:text-[#D62839] transition-colors">
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


