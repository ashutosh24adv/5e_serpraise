import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TrainingHero } from "@/components/training/TrainingHero";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { TrainingIntro } from "@/components/training/TrainingIntro";
import { ProgrammeRecommendation } from "@/components/training/ProgrammeRecommendation";
import { TrainingProgramList } from "@/components/training/TrainingProgramList";
import { TrainingJourneyStory } from "@/components/training/TrainingJourneyStory";
import { TrainingMethodologySection } from "@/components/training/TrainingMethodologySection";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { TrainingCTA } from "@/components/training/TrainingCTA";

export const metadata: Metadata = {
  title: "Corporate Training (E1) | 5e Serpraise",
  description:
    "Explore 5e Serpraise E1 Corporate Training flagships: LILLY, GOTEL, SALAM, and COPPTER. Purpose-driven experiential learning for individuals, teams, and leaders across India and Australia.",
};

export default function TrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero */}
      <TrainingHero />

      {/* 2. Heritage Double-Rule Divider with Brass Pentagon */}
      <Container size="wide">
        <HeritageDivider />
      </Container>

      {/* 3. Training Introduction */}
      <TrainingIntro />

      {/* 4. Interactive Programme Recommendation ("Which programme is right for your organization?") */}
      <ProgrammeRecommendation />

      {/* 5. Flagship Training Programs (LILLY, GOTEL, SALAM, COPPTER) */}
      <TrainingProgramList />

      {/* 6. Transformation Journey Storytelling (Before -> Experience -> Reflect -> Apply) */}
      <TrainingJourneyStory />

      {/* 7. Program Methodology (Adult Learning, Pre/Post Analysis, Experiential Learning) */}
      <TrainingMethodologySection />

      {/* 8. Quote Band */}
      <QuoteBand
        quote="Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness."
        attribution="5e SERPRAISE"
        subAttribution="PURPOSE & PHILOSOPHY"
      />

      {/* 9. Training CTA */}
      <TrainingCTA />
    </div>
  );
}
