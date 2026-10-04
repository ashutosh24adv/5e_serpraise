"use client";

import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { ArchPanel } from "../ui/ArchPanel";
import { HeroSequence } from "../animation/HeroSequence";

export function TrainingHero() {
  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-[80px] bg-[#EFE6D6] overflow-hidden">
      <Container size="wide">
        <HeroSequence
          eyebrow={
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] sm:text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                E1 &bull; EDUCATE
              </span>
            </div>
          }
          heading={
            <h1 className="font-serif font-extrabold text-[clamp(38px,4.8vw,64px)] leading-[1.06] tracking-[-0.02em] text-[#0B2A6B]">
              Develop people. Strengthen teams.
            </h1>
          }
          subline={
            <div className="font-serif italic font-medium text-[clamp(24px,3vw,40px)] text-[#D62839] leading-[1.18] mt-3">
              Create leaders.
            </div>
          }
          paragraph={
            <p className="font-sans text-[17px] text-[#15151A] leading-[1.65] max-w-[560px]">
              Purpose-driven and experiential training programs designed for individuals, teams, leaders and business decision-makers.
            </p>
          }
          actions={
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Button href="#programs" variant="primary">
                Explore Programs
              </Button>
              <Button
                href="mailto:contact@5eserpraise.com?subject=Corporate%20Training%20Inquiry"
                variant="secondary-link"
              >
                Discuss Your Training Needs
              </Button>
            </div>
          }
          footer={
            <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
              <span className="font-bold text-[#0B2A6B]">LILLY</span> (Individual)
              <span className="text-[#A67C37]">&bull;</span>
              <span className="font-bold text-[#0B2A6B]">GOTEL</span> (Team)
              <span className="text-[#A67C37]">&bull;</span>
              <span className="font-bold text-[#0B2A6B]">SALAM</span> (Leadership)
              <span className="text-[#A67C37]">&bull;</span>
              <span className="font-bold text-[#0B2A6B]">COPPTER</span> (Business)
            </div>
          }
          visual={
            <ArchPanel
              title="E1 &bull; Educate"
              subtitle="LILLY &bull; GOTEL &bull; SALAM &bull; COPPTER"
            />
          }
        />
      </Container>
    </section>
  );
}
