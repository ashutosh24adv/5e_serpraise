import React from "react";
import { Container } from "../layout/Container";

interface QuoteBandProps {
  quote?: string;
  attribution?: string;
  subAttribution?: string;
  className?: string;
}

export function QuoteBand({
  quote = "Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness.",
  attribution = "5e SERPRAISE",
  subAttribution = "PURPOSE & PHILOSOPHY",
  className = "",
}: QuoteBandProps) {
  return (
    <section
      className={`w-full bg-[#0B2A6B] py-[72px] text-center relative overflow-hidden select-none double-brass-border-y ${className}`}
    >
      <Container size="narrow">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Central Small Brass Pentagon */}
          <svg
            width="18"
            height="19"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#A67C37]"
            aria-hidden="true"
          >
            <polygon
              points="10,1 19,7 16,19 4,19 1,7"
              fill="#A67C37"
              stroke="#A67C37"
              strokeWidth="1"
            />
          </svg>

          {/* Centered Serif Quote */}
          <blockquote className="font-serif italic font-medium text-[clamp(24px,4vw,38px)] leading-[1.28] text-[#EFE6D6] max-w-[28ch] mx-auto">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="pt-2 flex flex-col items-center gap-1">
            <span className="font-sans font-bold text-[14px] tracking-[0.2em] text-[#A67C37] uppercase">
              {attribution}
            </span>
            {subAttribution && (
              <span className="font-sans text-[11px] tracking-widest text-[#EFE6D6]/70 uppercase">
                {subAttribution}
              </span>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
