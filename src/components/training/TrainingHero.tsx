"use client";

import React from "react";
import { EditorialHero } from "../ui/EditorialHero";
import { Button } from "../ui/Button";

export function TrainingHero() {
  return (
    <EditorialHero
      eyebrow="E1 • EDUCATE"
      title="Develop people. Strengthen teams."
      subtitle="Create leaders."
      description="Purpose-driven and experiential training programs designed for individuals, teams, leaders and business decision-makers."
      actions={
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button href="#programs" variant="primary">
            Explore Programs
          </Button>
          <Button
            href="/contact"
            variant="secondary-link"
          >
            Discuss Your Training Needs
          </Button>
        </div>
      }
      footer={
        <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
          <span className="font-bold text-[#0B2A6B]">LILLY</span> (Individual)
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">GOTEL</span> (Team)
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">SALAM</span> (Leadership)
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">COPPTER</span> (Business)
        </div>
      }
      panelProps={{
        title: "E1 • Educate",
        subtitle: "LILLY • GOTEL • SALAM • COPPTER",
        estText: "Est. 2003",
        regionText: "INDIA • AUSTRALIA",
        footerLeft: "5E SERPRAISE",
        footerRight: "HR • OD • Training",
      }}
    />
  );
}
