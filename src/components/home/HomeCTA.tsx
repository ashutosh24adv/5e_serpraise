import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { HeritageDivider } from "../ui/HeritageDivider";

export function HomeCTA() {
  return (
    <section className="py-[76px] sm:py-[88px] bg-[#EFE6D6] border-t border-[#A67C37]/40 text-center" id="consultation">
      <Container size="narrow">
        <div className="space-y-6">
          <SectionLabel
            title="DIRECT CONSULTATION"
            subtitle="Preliminary discovery and advisory session for progressive organizations."
            align="center"
          />

          <h2 className="font-serif font-extrabold text-[clamp(30px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            Connect With 5e Specialist
          </h2>

          <p className="font-sans text-[16px] sm:text-[17px] text-[#15151A]/85 max-w-[54ch] mx-auto leading-relaxed">
            Schedule a preliminary discovery session with our team in India and Australia to discuss your organization’s training, executive coaching, or OD interventions.
          </p>

          <div className="pt-2">
            <HeritageDivider variant="double" className="max-w-[420px] mx-auto py-2" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2">
            <Button href="/contact" variant="primary">
              Book 5e Consultation
            </Button>
            <Button href="/training" variant="primary">
              Explore Training Programs
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
