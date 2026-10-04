import React from "react";
import { Container } from "../layout/Container";
import { ProgramRow } from "../ui/ProgramRow";
import { StaggerReveal, StaggerItem } from "../animation/Reveal";
import { corePrograms } from "@/content/programmes";

export function TrainingProgramList() {
  return (
    <section className="py-[48px] pb-[80px] bg-[#EFE6D6]" id="programs">
      <Container size="wide">
        {/* Section Heading: sentence case, ends with a period */}
        <div className="mb-[32px] space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              FLAGSHIP WORKSHOPS
            </span>
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            Four ways we educate.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 max-w-[50ch]">
            Established ready-made programs designed for individual purpose, team cohesiveness, leadership maturity, and entrepreneurial results.
          </p>
        </div>

        {/* Program Rows starting with a 2px Navy line, sequentially staggered */}
        <div className="border-t-2 border-[#0B2A6B] mt-8">
          <StaggerReveal staggerDelay={0.1}>
            {corePrograms.map((program) => (
              <StaggerItem key={program.id}>
                <ProgramRow program={program} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
