import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { OrnamentDivider } from "../ui/OrnamentDivider";
import { Reveal } from "../animation/Reveal";

export function TrainingCTA() {
  return (
    <section className="py-[72px] bg-[#EFE6D6] text-center" id="contact">
      <Container size="narrow">
        <OrnamentDivider className="mb-6" />

        <Reveal>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="w-3 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                CONSULTATION &bull; E1
              </span>
              <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            </div>

            <h2 className="font-serif font-extrabold text-[clamp(30px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
              Ready to develop your people?
            </h2>

            <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[46ch] mx-auto leading-relaxed">
              Let&apos;s design the right training experience for your organization. Whether you need an off-the-shelf flagship or a tailored corporate workshop, our consulting team is here to partner with you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
              <Button
                href="/contact"
                variant="primary"
              >
                Discuss Your Training Needs
              </Button>
              <Button href="/custom-programs" variant="secondary-link">
                Explore Custom Programs
              </Button>
            </div>

            <div className="pt-8 border-t border-[#A67C37]/40 flex items-center justify-center gap-6 text-[13px] font-sans text-[#15151A]/80">
              <div>India &bull; Australia</div>
              <span className="text-[#A67C37]">&bull;</span>
              <div>contact@5eserpraise.com</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
