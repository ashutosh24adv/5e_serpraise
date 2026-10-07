"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { HeritageDivider } from "../ui/HeritageDivider";
import { IndiaAustraliaBridge } from "../ui/IndiaAustraliaBridge";
import { aboutContent } from "@/content/about";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Award, Globe, Building2, Repeat } from "lucide-react";
import Image from "next/image";

export function HeritageSection() {
  const { heritage } = aboutContent;
  const [activeStage, setActiveStage] = useState<string>("01");
  const shouldReduceMotion = useReducedMotion();

  const pillarIcons = [Award, Building2, Globe, Repeat];

  return (
    <section
      className="py-[84px] bg-[#EFE6D6] scroll-mt-24"
      id="heritage"
    >
      <Container size="wide">
        <HeritageDivider />

        {/* Section Heading with Arch Imagery & Large Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-8">
          <div className="lg:col-span-8 space-y-4">
            <SectionLabel
              title={heritage.eyebrow}
              subtitle="Two decades of verified practice in human and organizational capability."
            />
            <h2 className="font-serif font-extrabold text-[clamp(34px,5vw,52px)] leading-[1.06] tracking-tight text-[#0B2A6B]">
              {heritage.title}
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#A67C37]">
              {heritage.subtitle}
            </p>
            <div className="w-16 h-[2px] bg-[#A67C37]" />
            <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed max-w-[64ch]">
              {heritage.intro}
            </p>
          </div>

          {/* Arch Visual Motif */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[320px] aspect-[4/5] bg-[#0B2A6B] border-2 border-[#A67C37] p-6 text-[#EFE6D6] flex flex-col justify-between items-center text-center overflow-hidden"
              style={{ borderRadius: "999px 999px 0 0" }}
            >
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="heritage-arch-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#EFE6D6" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#heritage-arch-grid)" />
                </svg>
              </div>

              <div className="relative z-10 pt-4">
                <div className="w-16 h-20 mx-auto mb-2">
                  <Image
                    src="/logo/5e-logo.png"
                    alt="5e Serpraise Logo"
                    width={64}
                    height={58}
                    className="w-full h-auto drop-shadow-none object-contain"
                  />
                </div>
                <span className="font-serif italic text-lg text-[#A67C37]">
                  Est. 2003
                </span>
              </div>

              <div className="relative z-10 my-auto py-2">
                <div className="font-serif font-bold text-xl text-[#EFE6D6] leading-tight">
                  Two Decades of Excellence
                </div>
                <div className="text-xs font-sans text-[#EFE6D6]/80 mt-1">
                  India &bull; Australia
                </div>
              </div>

              <div className="relative z-10 border-t border-[#A67C37]/40 pt-2 text-[10px] font-sans font-bold tracking-widest text-[#A67C37] uppercase">
                Enduring Institutional Trust
              </div>
            </div>
          </div>
        </div>

        {/* 4 Legacy Credibility Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {heritage.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Award;

            return (
              <div
                key={idx}
                className="p-6 bg-[#F7F1E6] border border-[#A67C37]/40 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
                    0{idx + 1} &bull; {pillar.label}
                  </span>
                  <Icon className="w-4 h-4 text-[#A67C37]" />
                </div>
                <div className="font-serif font-extrabold text-2xl sm:text-3xl text-[#0B2A6B]">
                  {pillar.value}
                </div>
                <p className="font-sans text-xs text-[#15151A]/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chronological Heritage Timeline (01 to 04) */}
        <div className="mt-14 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#A67C37]/40">
            <div>
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#0B2A6B]">
                CHRONOLOGY OF PRACTICE
              </span>
              <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#0B2A6B]">
                The 5e Serpraise Journey
              </h3>
            </div>
            <span className="hidden sm:inline font-serif italic text-xs text-[#A67C37]">
              2003 &rarr; Today
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {heritage.milestones.map((item) => {
              const isSelected = activeStage === item.stage;

              return (
                <motion.div
                  key={item.stage}
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  onClick={() => setActiveStage(item.stage)}
                  className={`p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#F7F1E6] border-[#0B2A6B] shadow-xs"
                      : "bg-[#F7F1E6]/80 border-[#0B2A6B]/25 hover:border-[#0B2A6B]"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveStage(item.stage);
                    }
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/40">
                      <span className="font-serif font-extrabold text-2xl text-[#0B2A6B]">
                        {item.yearOrEra}
                      </span>
                      <span
                        className={`font-sans text-[10px] font-bold tracking-[0.2em] uppercase ${
                          isSelected ? "text-[#D62839]" : "text-[#A67C37]"
                        }`}
                      >
                        STAGE {item.stage}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif font-extrabold text-lg text-[#0B2A6B] leading-snug">
                        {item.title}
                      </h4>
                      <div className="font-serif italic text-xs text-[#A67C37]">
                        {item.subtitle}
                      </div>
                    </div>

                    <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/85 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-3 border-t border-[#A67C37]/25 space-y-1.5">
                      {item.keyPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-[11px] font-sans text-[#15151A]/75">
                          <span className="text-[#D62839] font-bold">&bull;</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#A67C37]/30 flex items-center justify-between text-[11px] font-sans">
                    <span className="text-[#A67C37] font-semibold uppercase tracking-wider">
                      5e Heritage
                    </span>
                    {isSelected && (
                      <span className="text-[#D62839] font-bold uppercase tracking-wider">
                        &bull; Active Era
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enduring Commitments Callout Banner */}
        <div className="mt-12 p-8 bg-[#0B2A6B] text-[#EFE6D6] border-2 border-[#A67C37] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EFE6D6]/20 gap-2">
            <div>
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#A67C37]">
                CORE COMMITMENTS
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#EFE6D6]">
                What Defines Our Practice
              </h3>
            </div>
            <span className="font-serif italic text-xs text-[#EFE6D6]/70">
              India &bull; Australia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {heritage.commitments.map((commitment, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#071D4D] border border-[#A67C37]/30">
                <CheckCircle2 className="w-4 h-4 text-[#D62839] flex-shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-[#EFE6D6]/90 leading-relaxed">
                  {commitment}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Reach Bridge */}
        <div className="mt-14 pt-8 border-t border-[#A67C37]/30">
          <IndiaAustraliaBridge />
        </div>
      </Container>
    </section>
  );
}
