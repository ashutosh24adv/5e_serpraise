import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { retainershipInfo } from "@/content/od-projects";
import { Check } from "lucide-react";

export function RetainershipSection() {
  return (
    <section
      className="py-[80px] bg-[#0B2A6B] text-[#EFE6D6] double-brass-border-y select-none"
      id="retainership"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#A67C37]">
                STRATEGIC PARTNERSHIP
              </span>
            </div>

            <h2 className="font-serif font-extrabold text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-tight text-[#EFE6D6]">
              {retainershipInfo.title}
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-[#EFE6D6]/90 leading-snug">
              {retainershipInfo.subtitle}
            </p>

            <div className="w-12 h-[1.5px] bg-[#A67C37]" />

            <p className="font-sans text-sm sm:text-base text-[#EFE6D6]/80 leading-relaxed">
              {retainershipInfo.targetAudience}
            </p>

            <div className="pt-2">
              <Button
                href="/contact"
                variant="primary"
              >
                Discuss Retainership
              </Button>
            </div>
          </div>

          {/* Right Column: Focus Areas & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            {/* The 2 Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {retainershipInfo.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#071D4D] border border-[#A67C37]/50"
                >
                  <div className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#A67C37] mb-2">
                    PILLAR 0{idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#EFE6D6]">
                    {area.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#EFE6D6]/80 mt-2 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Engagement Benefits */}
            <div className="p-6 bg-[#071D4D] border border-[#A67C37]/50 space-y-3">
              <div className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-[#A67C37]">
                Key Retainership Advantages:
              </div>
              <ul className="space-y-2">
                {retainershipInfo.benefits.map((benefit, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2 text-xs sm:text-sm font-sans text-[#EFE6D6]/90"
                  >
                    <Check className="w-4 h-4 text-[#D62839] mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
