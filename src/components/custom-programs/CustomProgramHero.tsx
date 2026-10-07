"use client";

import React from "react";
import { EditorialHero } from "../ui/EditorialHero";
import { Button } from "../ui/Button";

export function CustomProgramHero() {
  return (
    <EditorialHero
      eyebrow="CUSTOM-MADE TRAINING"
      title="Training built around your organization."
      subtitle="Contextualized corporate learning."
      description="Every organization has different challenges. Our custom-made programs are designed around specific organizational needs, combining diagnostic precision with interactive corporate facilitation."
      actions={
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button
            href="mailto:contact@5eserpraise.com?subject=Custom%20Training%20Requirements"
            variant="primary"
          >
            Discuss Your Requirements
          </Button>
          <Button href="#categories" variant="secondary-link">
            Explore Categories
          </Button>
        </div>
      }
      footer={
        <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
          <span>Communication</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>Performance</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>Customer &amp; Sales</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>Leadership</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>Strategic HR</span>
        </div>
      }
      panelProps={{
        title: "Bespoke Learning",
        subtitle: "Co-created with internal leadership and L&D teams",
        estText: "Est. 2003",
        regionText: "INDIA • AUSTRALIA",
        footerLeft: "5E SERPRAISE",
        footerRight: "HR • OD • Training",
      }}
    />
  );
}
