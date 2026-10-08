"use client";

import React from "react";
import { EditorialHero } from "../ui/EditorialHero";
import { Button } from "../ui/Button";

export function ODHero() {
  return (
    <EditorialHero
      eyebrow="E2 • ENRICH"
      title="Build stronger organizations."
      subtitle="Systems, culture & performance architecture."
      description="Organizational development interventions designed to strengthen culture, institutionalize HR systems, optimize performance evaluation, and foster sustainable enterprise capability."
      actions={
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button
            href="/contact"
            variant="primary"
          >
            Discuss an OD Project
          </Button>
          <Button href="#interventions" variant="primary">
            Explore Interventions
          </Button>
        </div>
      }
      footer={
        <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
          <span>Culture Building</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>Assessment Centers</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>HR Systems &amp; Policies</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>E2 Retainership</span>
        </div>
      }
      panelProps={{
        title: "E2 • Enrich",
        subtitle: "Culture Building • HR Systems • Assessments",
        estText: "Est. 2003",
        regionText: "INDIA • AUSTRALIA",
        footerLeft: "5E SERPRAISE",
        footerRight: "HR • OD • Training",
      }}
    />
  );
}
