"use client";

import React from "react";
import { EditorialHero } from "../ui/EditorialHero";
import { Button } from "../ui/Button";

export function ClientsHero() {
  return (
    <EditorialHero
      eyebrow="CLIENTS & PARTNERS"
      title="Organizations we've served."
      subtitle="Serving 100+ Market Leaders Across Diverse Sectors."
      description="Since 2003, 5e Serpraise has partnered with Fortune 500 multinationals, leading Indian conglomerates, and high-growth mid-market enterprises. Our client relationships are distinguished by multi-year repeat orders and measurable capability outcomes."
      actions={
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button href="#roster" variant="primary">
            Explore Client Roster
          </Button>
          <Button
            href="mailto:contact@5eserpraise.com?subject=Enterprise%20Client%20Inquiry"
            variant="secondary-link"
          >
            Discuss an Enterprise Partnership
          </Button>
        </div>
      }
      footer={
        <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
          <span className="font-bold text-[#0B2A6B]">100+ Enterprise Clients</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">8 Industry Sectors</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>India &bull; Australia Footprint</span>
        </div>
      }
      panelProps={{
        title: "Enterprise Roster",
        subtitle: "Multi-year partnerships built on trust, excellence & measurable impact",
        estText: "Est. 2003",
        regionText: "INDIA • AUSTRALIA",
        footerLeft: "5E SERPRAISE",
        footerRight: "Clients & Partners",
      }}
    />
  );
}
