import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { ClientMarquee } from "@/components/ui/ClientMarquee";
import { FiveEFrameworkJourney } from "@/components/home/FiveEFrameworkJourney";
import { ProgrammeConsultationSelector } from "@/components/home/ProgrammeConsultationSelector";
import { InteractiveMethodology } from "@/components/home/InteractiveMethodology";
import { ODInteractiveExplorer } from "@/components/home/ODInteractiveExplorer";
import { HomePurpose } from "@/components/home/HomePurpose";
import { HeritageTimeline } from "@/components/home/HeritageTimeline";
import { InteractiveQuote } from "@/components/ui/InteractiveQuote";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "5e Serpraise | Corporate Training & Organizational Development",
  description:
    "5e Serpraise is an established HR, Corporate Training, and Organizational Development consulting organization founded in 2003. Enriching people, strengthening organizations across India and Australia.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6] relative">
      {/* Hero & Purpose */}
      <HomeHero />

      {/* Verified Baseline Credibility Band */}
      <ClientMarquee />

      {/* The 5E Framework Journey (E1 to E5) */}
      <FiveEFrameworkJourney />

      {/* Proprietary Training Programmes Consultation Selector */}
      <ProgrammeConsultationSelector />

      {/* Training Methodology */}
      <InteractiveMethodology />

      {/* Organizational Development Interactive Explorer & 5-Stage Growth Journey */}
      <ODInteractiveExplorer />

      {/* Our Thinking (4-Dimension Mission: Intellectually, Financially, Emotionally, Spiritually) */}
      <HomePurpose />

      {/* Heritage Timeline (2003 -> India -> Australia -> Today) & India × Australia Bridge */}
      <HeritageTimeline />

      {/* Editorial Reflection: Interactive Brand Quote */}
      <InteractiveQuote
        quote="Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness."
        attribution="5e SERPRAISE"
        subAttribution="CORE GUIDING PURPOSE &amp; PHILOSOPHY"
        eyebrow="EDITORIAL REFLECTION"
      />

      {/* Initiate the Conversation CTA */}
      <HomeCTA />
    </div>
  );
}
