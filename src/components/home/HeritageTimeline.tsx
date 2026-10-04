import React from "react";
import { Container } from "../layout/Container";
import { IndiaAustraliaBridge } from "../ui/IndiaAustraliaBridge";
import { siteConfig } from "@/content/site";
import { Reveal } from "../animation/Reveal";

export function HeritageTimeline() {
  return (
    <section className="py-[80px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="about">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-[36px] space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              HERITAGE &amp; TRACK RECORD
            </span>
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(30px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            Over two decades of institutional trust.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 max-w-[52ch]">
            Founded in 2003 in India and active in Australia, 5e Serpraise has partnered with progressive corporations to build enduring human and organizational capability.
          </p>
        </div>

        {/* Verified 4-Stage Heritage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-10">
          {siteConfig.timeline.map((item) => (
            <Reveal key={item.stage} delay={parseInt(item.stage, 10) * 0.08}>
              <div className="p-7 bg-[#F7F1E6] border border-[#0B2A6B]/30 h-full flex flex-col justify-between group hover:border-[#0B2A6B] transition-colors duration-300">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/40 mb-4">
                    <span className="font-serif font-extrabold text-2xl text-[#0B2A6B]">
                      {item.yearOrEra}
                    </span>
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
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

                <div className="pt-4 mt-6 border-t border-[#A67C37]/30 text-[11px] font-sans text-[#A67C37] font-semibold uppercase tracking-wider">
                  5e Serpraise Heritage
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Geographic Reach Connector */}
        <div className="mt-14 pt-8 border-t border-[#A67C37]/30">
          <IndiaAustraliaBridge />
        </div>
      </Container>
    </section>
  );
}
