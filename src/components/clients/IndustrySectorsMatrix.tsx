import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { siteConfig } from "@/content/site";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function IndustrySectorsMatrix() {
  const { organizationsServed } = siteConfig;

  return (
    <section className="py-16 bg-[#EFE6D6] border-b border-[#A67C37]/30">
      <Container size="wide">
        <div className="space-y-4 mb-12">
          <SectionLabel
            title="CROSS-INDUSTRY EXPERTISE"
            subtitle="Tailored capability interventions adapted to unique industry dynamics."
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] text-[#0B2A6B] leading-tight">
            Industry Sectors Served
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[65ch]">
            Every industry possesses unique operational rhythms and workforce demographics. We customize frameworks specifically for each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizationsServed.map((org, index) => (
            <div
              key={index}
              className="bg-[#F7F1E6] border border-[#A67C37]/40 p-6 sm:p-7 flex flex-col justify-between hover:border-[#0B2A6B] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#D62839] uppercase">
                    {org.category}
                  </span>
                  <span className="font-serif font-bold text-xs text-[#A67C37]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#0B2A6B] leading-snug">
                  {org.name}
                </h3>

                <div className="w-8 h-[1px] bg-[#A67C37]/40" />

                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0B2A6B]">
                    Key Engagements:
                  </div>
                  <div className="flex items-start gap-2 text-xs font-sans text-[#15151A]/85 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D62839] flex-shrink-0 mt-0.5" />
                    <span>{org.engagement}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#A67C37]/20 flex items-center justify-between text-xs font-sans">
                <span className="text-[#15151A]/60 italic font-serif">
                  {org.establishedCohort}
                </span>
                <Link
                  href="/contact"
                  className="font-bold text-[#0B2A6B] hover:text-[#D62839] flex items-center gap-1"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
