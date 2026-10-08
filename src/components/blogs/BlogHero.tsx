"use client";

import React from "react";
import { EditorialHero } from "../ui/EditorialHero";
import { Button } from "../ui/Button";
import { blogContent } from "@/content/blogs";

export function BlogHero() {
  return (
    <EditorialHero
      eyebrow="BLOGS & INSIGHTS"
      title={blogContent.title}
      subtitle={blogContent.subtitle}
      description={blogContent.description}
      actions={
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button href="#articles" variant="primary">
            Read Latest Articles
          </Button>
          <Button href="#featured" variant="primary">
            Featured Essay
          </Button>
        </div>
      }
      footer={
        <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
          <span className="font-bold text-[#0B2A6B]">Andragogy &bull; PGL</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">LAMB Leadership</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">SME Retainership</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>4C Strategic Model</span>
        </div>
      }
      panelProps={{
        title: "Thought Leadership",
        subtitle: "Reflections on capability building, culture & stewardship in practice",
        estText: "Est. 2003",
        regionText: "INDIA • AUSTRALIA",
        footerLeft: "5E SERPRAISE",
        footerRight: "Practitioner Essays",
      }}
    />
  );
}
