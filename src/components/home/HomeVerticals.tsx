import React from "react";
import { Container } from "../layout/Container";
import { VerticalTile } from "../ui/VerticalTile";

export function HomeVerticals() {
  return (
    <section className="py-[80px] bg-[#EFE6D6] border-t border-[#A67C37]/40">
      <Container size="wide">
        {/* Section Heading: sentence case, ends with a period */}
        <div className="mb-[32px] space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              THE 5e ARCHITECTURE
            </span>
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            Five ways we enrich.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 max-w-[50ch]">
            Our interventions span the full spectrum of human potential, institutional systems, and organizational vitality.
          </p>
        </div>

        {/* 6-Column Responsive Grid with 14px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] mt-8">
          {/* Tile 1: EDUCATE */}
          <VerticalTile
            type="EDUCATE"
            title="Corporate Training"
            subtitle="Flagship Programs & Skill Workshops"
            description="LILLY, GOTEL, SALAM, and COPPTER frameworks addressing individual purpose, team synchrony, leadership, and business results."
            href="/training"
          />

          {/* Tile 2: ENRICH */}
          <VerticalTile
            type="ENRICH"
            title="Organizational Development"
            subtitle="Systems, Assessments & Culture"
            description="Culture building, 360-degree feedback, performance appraisal systems, competency mapping, and SME retainerships."
            href="/od-projects"
          />

          {/* Tile 3: ENJOY */}
          <VerticalTile
            type="ENJOY"
            title="Offsites & Outbound"
            subtitle="Experiential Team Programs"
            description="Annual business meets, semi-outbound simulations, and high-energy experiential learning designed for profound team cohesiveness."
            href="/od-projects#interventions"
          />

          {/* Tile 4: EMPATHISE */}
          <VerticalTile
            type="EMPATHISE"
            title="Coaching & Mentoring"
            subtitle="Counseling & Conflict Resolution"
            description="Structured executive coaching, workplace empathy, conflict de-escalation, and supportive guidance for sustainable wellbeing."
            href="/custom-programs"
          />

          {/* Tile 5: ENERGISE */}
          <VerticalTile
            type="ENERGISE"
            title="Custom Programs"
            subtitle="Context-Specific Interventions"
            description="Tailored training in Communication, B2B Sales, Performance Enhancement, and the strategic CASE of a HR Manager."
            href="/custom-programs"
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </Container>
    </section>
  );
}
