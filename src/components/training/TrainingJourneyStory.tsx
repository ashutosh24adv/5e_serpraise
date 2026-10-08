import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { transformationJourneyStages } from "@/content/programmes";
import { Reveal } from "../animation/Reveal";

export function TrainingJourneyStory() {
  return (
    <section className="py-[80px] bg-[#EFE6D6] border-b border-[#A67C37]/40">
      <Container size="wide">
        {/* Centered Section Heading */}
        <div className="text-center max-w-[760px] mx-auto space-y-3 mb-10">
          <SectionLabel
            title="THE TRANSFORMATION JOURNEY"
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(30px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            From awareness to embodied practice.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 leading-relaxed">
            How participants and teams experience 5e Serpraise experiential learning &mdash; moving from diagnostic understanding to measurable workplace behavior change.
          </p>
        </div>

        {/* 4-Stage Horizontal Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-10">
          {transformationJourneyStages.map((stage, idx) => (
            <Reveal key={stage.stage} delay={idx * 0.08}>
              <div className="p-7 bg-[#F7F1E6] border border-[#0B2A6B]/30 h-full flex flex-col justify-between group hover:border-[#0B2A6B] transition-colors duration-300">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/40 mb-4">
                    <span className="font-serif font-extrabold text-2xl text-[#0B2A6B]">
                      {stage.stage}
                    </span>
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
                      STAGE {stage.stage}
                    </span>
                  </div>

                  <h3 className="font-serif font-extrabold text-[22px] text-[#0B2A6B]">
                    {stage.title}
                  </h3>

                  <p className="font-serif italic text-xs text-[#A67C37] mt-1">
                    {stage.tagline}
                  </p>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/85 mt-3 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#A67C37]/30 text-[10px] font-sans text-[#15151A]/60 uppercase tracking-wider">
                  Experiential Pedagogy
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
