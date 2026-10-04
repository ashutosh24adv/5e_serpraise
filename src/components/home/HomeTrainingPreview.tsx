import React from "react";
import { Container } from "../layout/Container";
import { ProgramRow } from "../ui/ProgramRow";
import { Button } from "../ui/Button";
import { corePrograms } from "@/content/programmes";

export function HomeTrainingPreview() {
  return (
    <section className="py-[80px] bg-[#EFE6D6]">
      <Container size="wide">
        {/* Section Heading: sentence case, ends with a period */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-[32px]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                E1 &bull; EDUCATE
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
              Core training flagships.
            </h2>
            <p className="font-sans text-[16px] text-[#15151A]/80 max-w-[48ch]">
              Four established ready-made programs designed for individual purpose, team synergy, leadership maturity, and business momentum.
            </p>
          </div>

          <div>
            <Button href="/training" variant="primary">
              View All Training
            </Button>
          </div>
        </div>

        {/* Program Rows starting with a 2px Navy line */}
        <div className="border-t-2 border-[#0B2A6B] mt-6">
          {corePrograms.map((program) => (
            <ProgramRow key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
