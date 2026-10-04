import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function ODCTA() {
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
            Ready to initiate an OD intervention?
          </h2>

          <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[46ch] mx-auto leading-relaxed">
            From establishing robust HR policy manuals to conducting organization-wide culture diagnostics and assessment centers, 5e Serpraise brings over two decades of institutional rigor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
            <Button
              href="mailto:contact@5eserpraise.com?subject=OD%20Intervention%20Consultation"
              variant="primary"
            >
              Discuss an OD Project
            </Button>
            <Button href="/training" variant="secondary-link">
              Explore Training Flagships
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
