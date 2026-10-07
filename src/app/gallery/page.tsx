import type { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Gallery | 5e Serpraise",
  description:
    "Explore photographic archives and chronicles of 5e Serpraise corporate workshops, executive leadership colloquiums, and team synergy programs in India and Australia.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero */}
      <GalleryHero />

      {/* 2. Photo & Intervention Archive Grid */}
      <GalleryGrid />

      {/* 3. Quote Band */}
      <QuoteBand
        quote="Experiential learning moves beyond intellectual comprehension to embodied behavioral practice."
        attribution="5E METHODOLOGY"
        subAttribution="EXPERIENCE &bull; REFLECT &bull; APPLY"
      />

      {/* 4. CTA */}
      <HomeCTA />
    </div>
  );
}
