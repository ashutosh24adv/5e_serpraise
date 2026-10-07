import type { Metadata } from "next";
import { BlogHero } from "@/components/blogs/BlogHero";
import { BlogList } from "@/components/blogs/BlogList";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Blogs & Perspectives | 5e Serpraise",
  description:
    "Read thought leadership, practitioner essays, and perspectives on experiential andragogy, situational leadership (LAMB), SME culture building, and HR systems from 5e Serpraise.",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Hero */}
      <BlogHero />

      {/* 2. Blog Posts & Filterable List */}
      <BlogList />

      {/* 3. Quote Band */}
      <QuoteBand
        quote="True corporate capability is not achieved through coercion or sterile metrics. It blossoms when leaders adopt a servant mindset."
        attribution="5E THOUGHT LEADERSHIP"
        subAttribution="STEWARDSHIP &bull; CULTURE &bull; EXCELLENCE"
      />

      {/* 4. CTA */}
      <HomeCTA />
    </div>
  );
}
