import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CustomProgramHero } from "@/components/custom-programs/CustomProgramHero";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { CustomCategorySection } from "@/components/custom-programs/CustomCategorySection";
import { CustomProcessSection } from "@/components/custom-programs/CustomProcessSection";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Custom-Made Training Programs | 5e Serpraise",
  description:
    "Explore bespoke training programs designed around your organization's unique challenges in Communication, Performance, Sales, Leadership, and Strategic HR.",
};

export default function CustomProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero with wide 1280px container & ArchPanel */}
      <CustomProgramHero />

      {/* 2. Ornament Divider */}
      <Container size="wide">
        <OrnamentDivider />
      </Container>

      {/* 3. Categories Catalog */}
      <CustomCategorySection />

      {/* 4. Process Architecture */}
      <CustomProcessSection />

      {/* 5. Quote Band */}
      <QuoteBand
        quote="Every organization possesses a distinct culture and challenge. Tailoring the learning intervention is how real change occurs."
        attribution="5e SERPRAISE"
        subAttribution="BESPOKE CONSULTING ETHOS"
      />

      {/* 6. CTA */}
      <HomeCTA />
    </div>
  );
}
