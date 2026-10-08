"use client";

import React from "react";
import { EditorialHero } from "../ui/EditorialHero";
import { Button } from "../ui/Button";
import { aboutContent } from "@/content/about";

export function AboutHero() {
  const { hero } = aboutContent;

  return (
    <EditorialHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      subtitle={hero.subtitle}
      description={hero.description}
      actions={
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button href="#mission-vision" variant="primary">
            Mission &amp; Vision
          </Button>
          <Button href="#team" variant="primary">
            Leadership Team
          </Button>
        </div>
      }
      footer={
        <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
          <span className="font-bold text-[#0B2A6B]">Est. 2003 &bull; India</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">Australia Operations</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>100+ Corporate Clients</span>
        </div>
      }
      panelProps={{
        title: "Two Decades of Excellence",
        subtitle: "Service + Praise — Enriching Everyone across four growth dimensions",
        estText: "Est. 2003",
        regionText: "INDIA • AUSTRALIA",
        footerLeft: "5E SERPRAISE",
        footerRight: "HR • OD • Training • Strategy",
      }}
    />
  );
}
