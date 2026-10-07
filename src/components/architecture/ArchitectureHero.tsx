"use client";

import React from "react";
import { EditorialHero } from "../ui/EditorialHero";
import { Button } from "../ui/Button";

export function ArchitectureHero() {
  return (
    <EditorialHero
      eyebrow="THE INTELLECTUAL FRAMEWORK"
      title="The 5E Architecture."
      subtitle="Educate • Enrich • Enjoy • Empathise • Energise"
      description="The 5E Architecture is 5e Serpraise's holistic capability framework. It bridges personal human purpose with institutional execution, providing an integrated roadmap from individual behavioral development to sustained organizational vitality."
      actions={
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button href="#pillars" variant="primary">
            Explore 5 Pillars
          </Button>
          <Button href="#dimensions" variant="secondary-link">
            Four Growth Dimensions
          </Button>
        </div>
      }
      footer={
        <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
          <span className="font-bold text-[#0B2A6B]">5 Core Pillars</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">4 Growth Dimensions</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>20+ Years Enterprise Practice</span>
        </div>
      }
      panelProps={{
        title: "5E Continuum",
        subtitle: "CORE METHODOLOGY\nE1 • E2 • E3 • E4 • E5",
        estText: "Est. 2003",
        regionText: "INDIA • AUSTRALIA",
        footerLeft: "5E SERPRAISE",
        footerRight: "Core Methodology",
      }}
    />
  );
}
