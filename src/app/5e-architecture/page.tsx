import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ArchitectureHero } from "@/components/architecture/ArchitectureHero";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { PillarsDetailGrid } from "@/components/architecture/PillarsDetailGrid";
import { FourDimensionsMatrix } from "@/components/architecture/FourDimensionsMatrix";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "5E Architecture | 5e Serpraise",
  description:
    "Explore the proprietary 5E Architecture of 5e Serpraise: Educate (E1), Enrich (E2), Enjoy (E3), Empathise (E4), and Energise (E5). Holistic capability building since 2003.",
};

export default function FiveEArchitecturePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero */}
      <ArchitectureHero />

      {/* 2. Heritage Double-Rule Divider with Brass Pentagon */}
      <Container size="wide">
        <HeritageDivider />
      </Container>

      {/* 3. Detailed 5E Pillars Breakdown */}
      <PillarsDetailGrid />

      {/* 4. Four Growth Dimensions Matrix */}
      <FourDimensionsMatrix />

      {/* 5. Editorial Reflection: Quote Band */}
      <QuoteBand
        quote="True corporate capability is not achieved through coercion or sterile metrics. It blossoms when leaders adopt a servant mindset."
        attribution="5E SERPRAISE"
        subAttribution="CORE INTELLECTUAL FRAMEWORK"
      />

      {/* 6. Call to Action */}
      <HomeCTA />
    </div>
  );
}
