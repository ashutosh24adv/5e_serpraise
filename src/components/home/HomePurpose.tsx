"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { HeritageDivider } from "../ui/HeritageDivider";
import { siteConfig } from "@/content/site";
import { motion, AnimatePresence } from "framer-motion";

export function HomePurpose() {
  const [activeDimension, setActiveDimension] = useState<number>(0);
  const currentPillar = siteConfig.purpose.mission.pillars[activeDimension] || siteConfig.purpose.mission.pillars[0];

  return (
    <section className="py-[84px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="philosophy">
      <Container size="wide">
        <HeritageDivider />

        {/* Section Heading */}
        <div className="my-[32px] text-center space-y-3 max-w-[760px] mx-auto">
          <SectionLabel
            title="OUR THINKING &amp; PHILOSOPHY"
            subtitle="The foundational ethos behind every 5e Serpraise intervention."
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4.2vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            Service and praise.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            The name <strong className="text-[#0B2A6B]">Serpraise</strong> unites <em>Service</em> and <em>Praise</em> &mdash; the principle that sustainable organizational capability begins with authentic service and celebrating human contribution.
          </p>
        </div>

        {/* Vision & Mission Interactive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[14px] mt-8">
          {/* Left: Vision Box */}
          <div className="lg:col-span-4 p-8 sm:p-10 bg-[#0B2A6B] text-[#EFE6D6] border border-[#0B2A6B] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#A67C37]">
                OUR VISION
              </span>
              <h3 className="font-serif font-extrabold text-[32px] sm:text-[36px] leading-tight text-[#EFE6D6]">
                Service + Praise
              </h3>
              <p className="font-serif italic text-sm text-[#EFE6D6]/85">
                Serpraise = Service + Praise
              </p>
              <div className="w-10 h-[1.5px] bg-[#A67C37]" />
              <p className="font-sans text-sm text-[#EFE6D6]/90 leading-relaxed">
                True organizational leadership stems from genuine service to people and celebrating human achievement with sincere praise.
              </p>
            </div>
            <div className="pt-6 border-t border-[#EFE6D6]/20 text-[11px] font-sans text-[#EFE6D6]/70">
              Active in corporate practice since 2003 &bull; India &bull; Australia
            </div>
          </div>

          {/* Right: Interactive 4-Dimension Mission Explorer */}
          <div className="lg:col-span-8 p-8 sm:p-10 bg-[#F7F1E6] border border-[#A67C37]/50 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#A67C37]/40 mb-6 gap-2">
                <div>
                  <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
                    OUR MISSION
                  </span>
                  <h3 className="font-serif font-extrabold text-[28px] text-[#0B2A6B]">
                    Enriching Everyone
                  </h3>
                </div>
                <span className="font-serif italic text-xs text-[#A67C37]">
                  4 Interactive Dimensions
                </span>
              </div>

              {/* Dimension Switcher Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {siteConfig.purpose.mission.pillars.map((pillar, idx) => {
                  const isSelected = activeDimension === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveDimension(idx)}
                      className={`p-3 text-center border font-sans text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer focus:outline-none ${
                        isSelected
                          ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                          : "bg-[#EFE6D6] text-[#0B2A6B] border-[#0B2A6B]/20 hover:border-[#0B2A6B]"
                      }`}
                      role="tab"
                      aria-selected={isSelected}
                    >
                      {pillar.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Dimension Spotlight */}
              <div className="p-6 bg-[#EFE6D6] border border-[#0B2A6B]/25 min-h-[140px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDimension}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-[#D62839]">
                        {currentPillar.headline}
                      </span>
                      <span className="w-1 h-1 bg-[#A67C37]" />
                      <span className="font-serif italic text-sm text-[#0B2A6B] font-semibold">
                        {currentPillar.statement}
                      </span>
                    </div>

                    <p className="font-sans text-sm sm:text-[15px] text-[#15151A]/85 leading-relaxed">
                      {currentPillar.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#A67C37]/30 text-xs font-sans text-[#15151A]/70 flex items-center justify-between">
              <span>Integrating capability, productivity, trust, and higher purpose.</span>
              <span className="font-serif italic text-[#A67C37]">5e Core Philosophy</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
