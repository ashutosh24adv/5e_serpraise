"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { IndiaAustraliaBridge } from "../ui/IndiaAustraliaBridge";
import { siteConfig } from "@/content/site";
import { motion, useReducedMotion } from "framer-motion";

export function HeritageTimeline() {
  const [activeStage, setActiveStage] = useState<string>("01");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-[84px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="about">
      <Container size="wide">
        {/* Section Heading */}
        <div className="text-center max-w-[760px] mx-auto space-y-3 mb-10">
          <SectionLabel
            title="HERITAGE &amp; INSTITUTIONAL TRUST"
            subtitle="Two decades of verified practice in human and organizational capability."
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(30px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            Over two decades of institutional trust.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            Founded in 2003 in India and active in Australia, 5e Serpraise has partnered with progressive corporations to build enduring human and organizational capability.
          </p>
        </div>

        {/* Verified 4-Stage Heritage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-10">
          {siteConfig.timeline.map((item) => {
            const isSelected = activeStage === item.stage;

            return (
              <motion.div
                key={item.stage}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                onClick={() => setActiveStage(item.stage)}
                className={`p-7 border h-full flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#F7F1E6] border-[#0B2A6B] shadow-xs"
                    : "bg-[#F7F1E6]/80 border-[#0B2A6B]/25 hover:border-[#0B2A6B]"
                }`}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/40 mb-4">
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

                  <h3 className="font-serif font-extrabold text-[20px] text-[#0B2A6B] leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/85 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#A67C37]/30 flex items-center justify-between text-[11px] font-sans">
                  <span className="text-[#A67C37] font-semibold uppercase tracking-wider">
                    5e Heritage
                  </span>
                  {isSelected && (
                    <span className="text-[#D62839] font-bold uppercase tracking-wider">
                      &bull; ACTIVE ERA
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Geographic Reach Connector */}
        <div className="mt-14 pt-8 border-t border-[#A67C37]/30">
          <IndiaAustraliaBridge />
        </div>
      </Container>
    </section>
  );
}
