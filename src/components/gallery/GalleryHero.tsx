import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { galleryContent } from "@/content/gallery";

export function GalleryHero() {
  return (
    <section className="pt-14 pb-10 bg-[#EFE6D6] border-b border-[#A67C37]/30">
      <Container size="wide">
        <div className="space-y-4 max-w-[840px]">
          <SectionLabel
            title={galleryContent.eyebrow}
            subtitle="Visual documentation of experiential learning and corporate interventions."
          />
          <h1 className="font-serif font-extrabold text-[clamp(36px,5.5vw,56px)] leading-[1.06] tracking-tight text-[#0B2A6B]">
            {galleryContent.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#A67C37] font-medium leading-relaxed">
            {galleryContent.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-[#A67C37]" />
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            {galleryContent.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
