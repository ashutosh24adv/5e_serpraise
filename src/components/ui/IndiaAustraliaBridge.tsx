import React from "react";
import { FiveESeal } from "./FiveESeal";

interface IndiaAustraliaBridgeProps {
  className?: string;
}

export function IndiaAustraliaBridge({ className = "" }: IndiaAustraliaBridgeProps) {
  return (
    <div
      className={`w-full py-6 select-none flex items-center justify-between gap-4 max-w-[800px] mx-auto ${className}`}
      aria-label="Presence in India and Australia"
    >
      {/* Left Node: INDIA */}
      <div className="flex items-center gap-3">
        <span className="font-sans font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#0B2A6B]">
          INDIA
        </span>
        <span className="font-serif italic text-[11px] text-[#A67C37] hidden sm:inline">
          (Est. 2003)
        </span>
      </div>

      {/* Left Brass Connector */}
      <div className="flex-1 h-[1px] bg-[#A67C37]/60" />

      {/* Center 5E Seal */}
      <div className="flex items-center gap-2 px-2">
        <FiveESeal size={28} />
        <span className="font-sans font-extrabold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase text-[#0B2A6B]">
          5E SERPRAISE
        </span>
      </div>

      {/* Right Brass Connector */}
      <div className="flex-1 h-[1px] bg-[#A67C37]/60" />

      {/* Right Node: AUSTRALIA */}
      <div className="flex items-center gap-3">
        <span className="font-serif italic text-[11px] text-[#A67C37] hidden sm:inline">
          (Global)
        </span>
        <span className="font-sans font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#0B2A6B]">
          AUSTRALIA
        </span>
      </div>
    </div>
  );
}
