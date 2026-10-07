"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { HeritageDivider } from "../ui/HeritageDivider";
import { aboutContent } from "@/content/about";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles, Heart, DollarSign, Brain, Check } from "lucide-react";

export function MissionVisionSection() {
  const { missionVision } = aboutContent;
  const [activeDimension, setActiveDimension] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const dimensionIcons = [Brain, DollarSign, Heart, Sparkles];

  const currentDimension =
    missionVision.mission.dimensions[activeDimension] ||
    missionVision.mission.dimensions[0];
  const CurrentIcon = dimensionIcons[activeDimension] || Brain;

  return (
    <section
      className="py-[84px] bg-[#EFE6D6] border-b border-[#A67C37]/40 scroll-mt-24"
      id="mission-vision"
    >
      <Container size="wide">
        <HeritageDivider />

        {/* Section Header */}
        <div className="my-8 text-center max-w-[800px] mx-auto space-y-3">
          <SectionLabel
            title={missionVision.eyebrow}
            subtitle="The foundational ethos guiding every intervention and consultation."
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(32px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            {missionVision.sectionTitle}
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            Rooted in authentic service and celebrating human contribution, our mission and vision shape how we develop leaders, strengthen teams, and foster corporate excellence.
          </p>
        </div>

        {/* Two-Part Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-10">
          {/* LEFT PART: Vision Box (Royal Navy Grounding) */}
          <div className="lg:col-span-5 bg-[#0B2A6B] text-[#EFE6D6] p-8 sm:p-10 border border-[#0B2A6B] flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="inline-block font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#A67C37]">
                  OUR VISION
                </span>
                <h3 className="font-serif font-extrabold text-[32px] sm:text-[38px] leading-tight text-[#EFE6D6] mt-1">
                  {missionVision.vision.title}
                </h3>
                <p className="font-serif italic text-base text-[#A67C37] mt-1">
                  {missionVision.vision.tagline}
                </p>
              </div>

              <div className="w-12 h-[2px] bg-[#A67C37]" />

              <p className="font-sans text-[15px] text-[#EFE6D6]/90 leading-relaxed">
                {missionVision.vision.description}
              </p>

              {/* Two Vision Pillars */}
              <div className="space-y-4 pt-2">
                {missionVision.vision.principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#071D4D] border border-[#A67C37]/40 space-y-2"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#A67C37]/20 border border-[#A67C37] flex items-center justify-center text-[#A67C37] text-xs font-serif font-bold">
                        0{idx + 1}
                      </div>
                      <h4 className="font-serif font-bold text-lg text-[#EFE6D6] leading-snug">
                        {principle.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs sm:text-[13px] text-[#EFE6D6]/80 pl-9 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-[#EFE6D6]/20 flex items-center justify-between text-xs font-sans text-[#EFE6D6]/70">
              <span>Serpraise = Service + Praise</span>
              <span className="font-serif italic text-[#A67C37]">Est. 2003</span>
            </div>
          </div>

          {/* RIGHT PART: Mission Box (Interactive 4 Dimensions) */}
          <div className="lg:col-span-7 bg-[#F7F1E6] border border-[#A67C37]/50 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#A67C37]/40 gap-2">
                <div>
                  <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#D62839]">
                    OUR MISSION
                  </span>
                  <h3 className="font-serif font-extrabold text-[28px] sm:text-[34px] text-[#0B2A6B]">
                    {missionVision.mission.title}
                  </h3>
                </div>
                <span className="font-serif italic text-xs text-[#A67C37] self-start sm:self-center">
                  4 Dimensions of Growth
                </span>
              </div>

              <p className="font-sans text-[15px] text-[#15151A]/85 leading-relaxed">
                {missionVision.mission.description}
              </p>

              {/* 4 Dimension Selection Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {missionVision.mission.dimensions.map((dim, idx) => {
                  const isSelected = activeDimension === idx;
                  const Icon = dimensionIcons[idx] || Brain;

                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveDimension(idx)}
                      className={`p-3 text-left border flex flex-col justify-between transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
                        isSelected
                          ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                          : "bg-[#EFE6D6] text-[#0B2A6B] border-[#0B2A6B]/25 hover:border-[#0B2A6B]"
                      }`}
                      role="tab"
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon
                          className={`w-4 h-4 ${
                            isSelected ? "text-[#D62839]" : "text-[#A67C37]"
                          }`}
                        />
                        <span className="font-mono text-[10px] opacity-70">
                          0{idx + 1}
                        </span>
                      </div>
                      <span className="font-sans text-xs font-bold uppercase tracking-wider">
                        {dim.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Dimension Spotlight Card */}
              <div className="p-6 sm:p-8 bg-[#EFE6D6] border-2 border-[#0B2A6B]/30 min-h-[160px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDimension}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0B2A6B] text-[#EFE6D6] flex items-center justify-center font-bold text-xs">
                        <CurrentIcon className="w-4 h-4 text-[#A67C37]" />
                      </div>
                      <div>
                        <div className="font-sans font-extrabold text-xs uppercase tracking-widest text-[#D62839]">
                          {currentDimension.headline}
                        </div>
                        <div className="font-serif italic text-base sm:text-lg text-[#0B2A6B] font-semibold">
                          {currentDimension.statement}
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-sm sm:text-[15px] text-[#15151A]/90 leading-relaxed pl-0 sm:pl-11">
                      {currentDimension.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Four Dimension Checklist Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {missionVision.mission.dimensions.map((dim, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveDimension(idx)}
                    className={`p-3 border flex items-center gap-3 cursor-pointer transition-colors ${
                      activeDimension === idx
                        ? "bg-[#0B2A6B]/5 border-[#0B2A6B]"
                        : "bg-transparent border-[#A67C37]/30 hover:border-[#A67C37]"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        activeDimension === idx
                          ? "text-[#D62839]"
                          : "text-[#A67C37]"
                      }`}
                    />
                    <div>
                      <span className="font-sans font-bold text-xs text-[#0B2A6B] block">
                        {dim.title}
                      </span>
                      <span className="font-sans text-[11px] text-[#15151A]/70 line-clamp-1">
                        {dim.statement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#A67C37]/30 flex items-center justify-between text-xs font-sans text-[#15151A]/70">
              <span>Intellectually &bull; Financially &bull; Emotionally &bull; Spiritually</span>
              <span className="font-serif italic text-[#A67C37]">5e Mission</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
