import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { corporateClients } from "@/content/clients";
import { Building2 } from "lucide-react";

export function ClientsRosterGrid() {
  return (
    <section className="py-16 bg-[#F7F1E6] border-b border-[#A67C37]/30">
      <Container size="wide">
        <div className="space-y-4 mb-12">
          <SectionLabel
            title="CORPORATE CLIENT ROSTER"
            subtitle="Distinguished enterprises that have experienced 5e Serpraise training and OD interventions."
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] text-[#0B2A6B] leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[65ch]">
            Our interventions have enriched human potential across market-leading multinationals, public enterprises, and growth leaders.
          </p>
        </div>

        {/* Client Roster Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {corporateClients.map((client, index) => (
            <div
              key={index}
              className="bg-[#EFE6D6] border border-[#0B2A6B]/25 p-5 sm:p-6 text-center flex flex-col items-center justify-center min-h-[110px] hover:border-[#0B2A6B] hover:bg-[#EAE0CE] transition-all group"
            >
              <Building2 className="w-5 h-5 text-[#A67C37] mb-2 opacity-70 group-hover:text-[#D62839] group-hover:opacity-100 transition-colors" />
              <div className="font-serif font-bold text-sm sm:text-base text-[#0B2A6B] group-hover:text-[#D62839] transition-colors">
                {client}
              </div>
              <span className="font-sans text-[9px] uppercase tracking-widest text-[#15151A]/60 mt-1">
                Enterprise Client
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
