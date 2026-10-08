"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { corePrograms } from "@/content/programmes";
import {
  ArrowRight,
  User,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const flagships = [
  {
    ...corePrograms[0], // LILLY
    focus: "Self Growth",
    icon: User,
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-7",
  },
  {
    ...corePrograms[1], // GOTEL
    focus: "Team Dynamics",
    icon: Users,
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-5",
  },
  {
    ...corePrograms[2], // SALAM
    focus: "Executive Leadership",
    icon: ShieldCheck,
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-5",
  },
  {
    ...corePrograms[3], // COPPTER
    focus: "Enterprise Growth",
    icon: TrendingUp,
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-7",
  },
];

interface ProgrammeShowcaseCardProps {
  item: (typeof flagships)[number];
}

function ProgrammeShowcaseCard({ item }: ProgrammeShowcaseCardProps) {
  const Icon = item.icon;

  return (
    <Link
      href={`/training#${item.id}`}
      className={`${item.gridSpan} p-6 sm:p-7 bg-[#F7F1E6] border border-[#0B2A6B]/25 hover:border-[#0B2A6B] hover:shadow-sm transition-all duration-200 flex flex-col justify-between group select-none relative`}
    >
      <div>
        {/* Top bar: Icon, Category & Focus */}
        <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#A67C37]/30 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#A67C37]/10 text-[#A67C37] border border-[#A67C37]/25 flex-shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <span className="font-sans font-bold text-[11px] uppercase tracking-[0.16em] text-[#D62839]">
              {item.category}
            </span>
          </div>
          <span className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-[#15151A]/60">
            {item.focus}
          </span>
        </div>

        {/* Title & Subtitle / Full Name */}
        <div>
          <h3 className="font-serif font-extrabold text-[24px] sm:text-[28px] text-[#0B2A6B] leading-none tracking-tight group-hover:text-[#D62839] transition-colors">
            {item.name}.
          </h3>
          <div className="font-serif italic text-xs sm:text-[13px] text-[#15151A]/80 mt-1.5 leading-snug">
            {item.fullName}
          </div>
        </div>

        {/* Description / Positioning */}
        <p className="font-sans text-[13px] sm:text-[14px] text-[#15151A]/80 leading-relaxed mt-3.5 line-clamp-3">
          {item.positioning}
        </p>
      </div>

      {/* Footer Meta & Explore Link */}
      <div className="pt-4 mt-5 border-t border-[#A67C37]/25 flex items-center justify-between">
        <span className="font-sans text-xs text-[#0B2A6B] font-semibold">
          {item.duration}
        </span>
        <div className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#0B2A6B] group-hover:text-[#D62839] transition-colors">
          <span>Explore Syllabus</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#A67C37] group-hover:text-[#D62839] group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
}

export function ProgrammeConsultationSelector() {
  return (
    <section
      className="py-[84px] bg-[#EFE6D6] border-t border-[#A67C37]/40"
      id="flagship-programmes"
    >
      <Container size="wide">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto space-y-3 mb-10">
          <SectionLabel
            title="DEVELOPING HUMAN CAPABILITY"
            subtitle="Interactive Consultation & Flagship Programmes"
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4.2vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            Proprietary Training Programmes
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            Explore our proprietary programmes designed for individuals, teams,
            leaders, and organizations.
          </p>
        </div>

        {/* 4 Flagship Programmes Staggered Grid (7/5 -> 5/7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-[1080px] mx-auto">
          {flagships.map((prog) => (
            <ProgrammeShowcaseCard key={prog.id} item={prog} />
          ))}
        </div>
      </Container>
    </section>
  );
}
