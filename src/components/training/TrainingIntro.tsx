import React from "react";
import { Container } from "../layout/Container";
import { Reveal } from "../animation/Reveal";

export function TrainingIntro() {
  return (
    <section className="py-[48px] bg-[#EFE6D6]">
      <Container size="wide">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left: Eyebrow + Large Playfair Heading */}
            <div className="lg:col-span-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#A67C37]" />
                <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                  OUR TRAINING
                </span>
              </div>
              <h2 className="font-serif font-extrabold text-[clamp(32px,4.5vw,52px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
                Learning that creates movement.
              </h2>
            </div>

            {/* Right: Supporting Editorial Copy */}
            <div className="lg:col-span-7 space-y-4 pt-2">
              <p className="font-sans text-[17px] text-[#15151A] leading-[1.65]">
                Our corporate training interventions are engineered around four foundational dimensions of capability &mdash; individual purpose, team synchrony, leadership stewardship, and strategic business growth.
              </p>
              <p className="font-sans text-[15px] text-[#15151A]/80 leading-relaxed">
                By combining adult learning principles with experiential simulations and rigorous pre-and-post evaluation, 5e Serpraise moves corporate learning from theoretical concepts into sustained, observable workplace performance.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
