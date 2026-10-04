import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { ClientMarquee } from "@/components/ui/ClientMarquee";
import { FiveEFrameworkJourney } from "@/components/home/FiveEFrameworkJourney";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";
import { ProgrammeConsultationSelector } from "@/components/home/ProgrammeConsultationSelector";
import { InteractiveProgrammeExplorer } from "@/components/home/InteractiveProgrammeExplorer";
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
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* CHAPTER 01: Hero & Purpose */}
      <HomeHero />

      {/* Verified Baseline Credibility Band */}
      <ClientMarquee />

      {/* CHAPTER 02: The 5E Framework Journey (E1 to E5) */}
      <FiveEFrameworkJourney />

      {/* CHAPTER 03: Organizations We've Served */}
      <TrustedOrganizations />

      {/* CHAPTER 04: "What Are You Trying to Transform?" Consultation Selector */}
      <ProgrammeConsultationSelector />

      {/* The Four Flagships Interactive Explorer (LILLY, GOTEL, SALAM, COPPTER) */}
      <InteractiveProgrammeExplorer />

      {/* CHAPTER 04B: Training Methodology (01 Learn, 02 Measure, 03 Experience) */}
      <InteractiveMethodology />

      {/* CHAPTER 05: Organizational Development Interactive Explorer & 5-Stage Growth Journey */}
      <ODInteractiveExplorer />

      {/* CHAPTER 06: Our Thinking (4-Dimension Mission: Intellectually, Financially, Emotionally, Spiritually) */}
      <HomePurpose />

      {/* CHAPTER 07: Heritage Timeline (2003 -> India -> Australia -> Today) & India × Australia Bridge */}
      <HeritageTimeline />

      {/* Editorial Reflection: Interactive Brand Quote */}
      <InteractiveQuote
        quote="Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness."
        attribution="5e SERPRAISE"
        subAttribution="CORE GUIDING PURPOSE &amp; PHILOSOPHY"
        chapter="EDITORIAL REFLECTION"
      />

      {/* CHAPTER 08: Initiate the Conversation CTA */}
      <HomeCTA />
    </div>
  );
}
