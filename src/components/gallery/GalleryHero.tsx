"use client";

import React from "react";
import { EditorialHero } from "../ui/EditorialHero";
import { Button } from "../ui/Button";
import { galleryContent } from "@/content/gallery";

export function GalleryHero() {
  return (
    <EditorialHero
      eyebrow={galleryContent.eyebrow}
      title={galleryContent.title}
      subtitle={galleryContent.subtitle}
      description={galleryContent.description}
      actions={
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button href="#archive" variant="primary">
            Explore Photo Archive
          </Button>
          <Button
            href="/contact"
            variant="primary"
          >
            Discuss a Workshop
          </Button>
        </div>
      }
      footer={
        <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 text-[13px] font-sans text-[#15151A]">
          <span className="font-bold text-[#0B2A6B]">Leadership Colloquiums</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">Team Synergy Labs</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span className="font-bold text-[#0B2A6B]">Strategy Confluences</span>
          <span className="text-[#A67C37]">&bull;</span>
          <span>PGL Sessions</span>
        </div>
      }
      panelProps={{
        title: "In The Field",
        subtitle: "Experiential learning, leadership retreats & team synergy since 2003",
        estText: "Est. 2003",
        regionText: "INDIA • AUSTRALIA",
        footerLeft: "5E SERPRAISE",
        footerRight: "Photographic Archive",
      }}
    />
  );
}
