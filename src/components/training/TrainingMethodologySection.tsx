import React from "react";
import { Container } from "../layout/Container";
import { MethodologyStep } from "./MethodologyStep";
import { StaggerReveal, StaggerItem } from "../animation/Reveal";
import { trainingMethodologies } from "@/content/programmes";

export function TrainingMethodologySection() {
  return (
    <section className="py-[80px] bg-[#F7F1E6] border-t border-b border-[#A67C37]/40">
      <Container size="wide">
        {/* Section Heading: sentence case, ends with a period */}
        <div className="mb-[36px] text-center max-w-[680px] mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              PEDAGOGICAL FRAMEWORK
            </span>
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            How we train.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 leading-relaxed">
            Learning that goes beyond the classroom &mdash; grounded in andragogy, diagnostic pre-and-post evaluation, and immersive experiential simulations.
          </p>
        </div>

        {/* 3 Numbered Editorial Blocks with sequential reveal */}
        <div className="mt-10">
          <StaggerReveal staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
            {trainingMethodologies.map((item) => (
              <StaggerItem key={item.number}>
                <MethodologyStep methodology={item} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
