import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function HomeCTA() {
  return (
    <section className="py-[72px] bg-[#EFE6D6] border-t border-[#A67C37]/40 text-center" id="contact">
      <Container size="narrow">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              GET IN TOUCH
            </span>
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
          </div>

          <h2 className="font-serif font-extrabold text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            Ready to strengthen your organization?
          </h2>

          <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[46ch] mx-auto leading-relaxed">
            Discuss your corporate training requirements, bespoke workshops, or organizational development projects with our consulting team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
            <Button
              href="mailto:contact@5eserpraise.com?subject=Inquiry%20from%205e%20Serpraise%20Website"
              variant="primary"
            >
              Discuss Your Requirements
            </Button>
            <Button href="/training" variant="secondary-link">
              Explore Training Programs
            </Button>
          </div>

          <div className="pt-8 border-t border-[#A67C37]/40 flex items-center justify-center gap-6 text-[13px] font-sans text-[#15151A]/80">
            <div>India &bull; Australia</div>
            <span className="text-[#A67C37]">&bull;</span>
            <div>contact@5eserpraise.com</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
