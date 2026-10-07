import React from "react";
import Image from "next/image";

interface ArchPanelProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ArchPanel({
  title = "Corporate Capability",
  subtitle = "Transforming talent and organizational architecture since 2003",
  className = "",
}: ArchPanelProps) {
  return (
    <div className={`relative w-full flex items-center justify-center p-3 sm:p-4 group ${className}`}>
      {/* Outer 1.5px Brass Outline Frame with ~12px external offset */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-500 group-hover:scale-[1.01]"
        style={{
          border: "1.5px solid #A67C37",
          borderRadius: "999px 999px 0 0",
          margin: "-10px",
        }}
        aria-hidden="true"
      />

      {/* Inner Architectural Arch Panel - 100% column width, max-w: 480px, height: ~580-600px */}
      <div
        className="relative w-full max-w-[480px] h-[520px] sm:h-[580px] lg:h-[600px] bg-[#0B2A6B] text-[#EFE6D6] overflow-hidden flex flex-col justify-between p-8 sm:p-10 transition-transform duration-500 group-hover:scale-[1.015]"
        style={{
          borderRadius: "999px 999px 0 0",
        }}
      >
        {/* Architectural subtle fine grid overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arch-large-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#EFE6D6" strokeWidth="0.85" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-large-grid)" />
          </svg>
        </div>

        {/* Top Arc Seal & Est. 2003 */}
        <div className="relative z-10 flex flex-col items-center text-center pt-8 sm:pt-10">
          <div className="relative w-20 h-22 sm:w-24 sm:h-26 mb-3 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logo/5e-logo.png"
              alt="5e Serpraise Logo"
              width={96}
              height={87}
              className="w-full h-auto drop-shadow-none object-contain"
              priority
            />
          </div>
          <span className="font-serif italic text-lg sm:text-xl text-[#A67C37]">
            Est. 2003
          </span>
          <span className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#EFE6D6]/80 uppercase mt-1">
            INDIA &bull; AUSTRALIA
          </span>
        </div>

        {/* Center Editorial Statement */}
        <div className="relative z-10 text-center my-auto py-6">
          <div className="w-12 h-[1.5px] bg-[#A67C37] mx-auto mb-4" />
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#EFE6D6] leading-[1.18] max-w-[320px] mx-auto">
            {title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#EFE6D6]/80 mt-2 max-w-[280px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 border-t border-[#A67C37]/50 pt-4 flex items-center justify-between text-xs font-sans text-[#EFE6D6]/85 uppercase tracking-widest">
          <span className="font-bold">5e SERPRAISE</span>
          <span className="text-[#A67C37] font-serif italic capitalize text-sm">HR &bull; OD &bull; Training</span>
        </div>
      </div>
    </div>
  );
}
