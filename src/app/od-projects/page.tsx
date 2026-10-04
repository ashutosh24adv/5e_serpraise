import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ODHero } from "@/components/od-projects/ODHero";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { ODServiceGroup } from "@/components/od-projects/ODServiceGroup";
import { RetainershipSection } from "@/components/od-projects/RetainershipSection";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Organizational Development | 5e Serpraise",
  description:
    "E2 Organizational Development interventions by 5e Serpraise: Culture Building, Assessment Centers, Performance Appraisal Systems, HR Systems Formulation, and E2 Retainership.",
};

export default function ODProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero with wide 1280px container & ArchPanel */}
      <ODHero />

      {/* 2. Ornament Divider */}
      <Container size="wide">
        <OrnamentDivider />
      </Container>

      {/* 3. OD Interventions Catalog */}
      <ODServiceGroup />

      {/* 4. E2 Retainership Highlight Section */}
      <RetainershipSection />

      {/* 5. Quote Band */}
      <QuoteBand
        quote="Organizations evolve when structures, leadership accountability, and culture operate in complete harmony."
        attribution="5e SERPRAISE"
        subAttribution="ORGANIZATIONAL EXCELLENCE"
      />

      {/* 6. CTA */}
      <HomeCTA />
    </div>
  );
}
