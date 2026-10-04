import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { ClientMarquee } from "@/components/ui/ClientMarquee";
import { FiveEFrameworkJourney } from "@/components/home/FiveEFrameworkJourney";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";
import { HomePurpose } from "@/components/home/HomePurpose";
import { HeritageTimeline } from "@/components/home/HeritageTimeline";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { HomeTrainingPreview } from "@/components/home/HomeTrainingPreview";
import { HomeMethodology } from "@/components/home/HomeMethodology";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "5e Serpraise | Corporate Training & Organizational Development",
  description:
    "5e Serpraise is an established HR, Corporate Training, and Organizational Development consulting organization founded in 2003. Enriching people, strengthening organizations across India and Australia.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero with ArchPanel & India/Australia positioning */}
      <HomeHero />

      {/* 2. Full-Width Navy Client Marquee with Double Brass Borders */}
      <ClientMarquee />

      {/* 3. The 5E Framework Journey (E1 Educate to E5 Energise) */}
      <FiveEFrameworkJourney />

      {/* 4. Organizations We've Served (Editorial Credibility Section) */}
      <TrustedOrganizations />

      {/* 5. Purpose & Philosophy: Vision (Service + Praise) & Mission (Enriching Everyone) */}
      <HomePurpose />

      {/* 6. Heritage Timeline & India × Australia Bridge */}
      <HeritageTimeline />

      {/* 7. Full-Width Navy Quote Band with Double Brass Borders */}
      <QuoteBand />

      {/* 8. Training Preview with Editorial Program Rows */}
      <HomeTrainingPreview />

      {/* 9. Training Methodology (3 Numbered Blocks) */}
      <HomeMethodology />

      {/* 10. Get in Touch CTA */}
      <HomeCTA />
    </div>
  );
}
