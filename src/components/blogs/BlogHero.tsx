import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { blogContent } from "@/content/blogs";

export function BlogHero() {
  return (
    <section className="pt-14 pb-10 bg-[#EFE6D6] border-b border-[#A67C37]/30">
      <Container size="wide">
        <div className="space-y-4 max-w-[840px]">
          <SectionLabel
            title={blogContent.eyebrow}
            subtitle="Practitioner reflections on capability building and leadership stewardship."
          />
          <h1 className="font-serif font-extrabold text-[clamp(36px,5.5vw,56px)] leading-[1.06] tracking-tight text-[#0B2A6B]">
            {blogContent.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#A67C37] font-medium leading-relaxed">
            {blogContent.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-[#A67C37]" />
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            {blogContent.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
