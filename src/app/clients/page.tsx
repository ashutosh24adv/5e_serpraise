import type { Metadata } from "next";
import { ClientsHero } from "@/components/clients/ClientsHero";
import { ClientMarquee } from "@/components/ui/ClientMarquee";
import { ClientsRosterGrid } from "@/components/clients/ClientsRosterGrid";
import { IndustrySectorsMatrix } from "@/components/clients/IndustrySectorsMatrix";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Clients & Partners | 5e Serpraise",
  description:
    "Explore 5e Serpraise enterprise clients: 100+ corporate leaders across manufacturing, IT, BFSI, healthcare, automotive, and infrastructure in India and Australia.",
};

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero */}
      <ClientsHero />

      {/* 2. Client Marquee */}
      <ClientMarquee />

      {/* 3. Corporate Clients Full Roster Grid */}
      <ClientsRosterGrid />

      {/* 4. Industry Sectors & Key Engagements */}
      <IndustrySectorsMatrix />

      {/* 5. Quote Band */}
      <QuoteBand
        quote="Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness."
        attribution="5E SERPRAISE"
        subAttribution="ENTERPRISE PARTNERSHIP ETHOS"
      />

      {/* 6. CTA */}
      <HomeCTA />
    </div>
  );
}
