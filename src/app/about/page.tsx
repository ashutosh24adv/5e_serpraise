import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutNav } from "@/components/about/AboutNav";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { TeamSection } from "@/components/about/TeamSection";
import { FAQSection } from "@/components/about/FAQSection";
import { HeritageSection } from "@/components/about/HeritageSection";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "About Us | 5e Serpraise",
  description:
    "Learn about 5e Serpraise: our Mission & Vision (Enriching Everyone & Service + Praise), Leadership Team, Frequently Asked Questions, and two decades of heritage across India and Australia.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Anchor Subsection Navigation */}
      <AboutNav />

      {/* 3. Section 1: Mission & Vision */}
      <MissionVisionSection />

      {/* 4. Section 2: Team */}
      <TeamSection />

      {/* 5. Section 3: FAQ */}
      <FAQSection />

      {/* 6. Section 4: Heritage */}
      <HeritageSection />

      {/* 7. Quote Band */}
      <QuoteBand
        quote="Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness."
        attribution="L. SELVAM GEORGE"
        subAttribution="CHAIRMAN & PRIME SERVANT, 5E SERPRAISE"
      />

      {/* 8. Call to Action */}
      <HomeCTA />
    </div>
  );
}
