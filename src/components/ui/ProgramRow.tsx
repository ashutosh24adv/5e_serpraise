"use client";

import React from "react";
import { CoreProgram } from "@/content/programmes";
import { Button } from "./Button";
import { Check, ArrowRight } from "lucide-react";

interface ProgramRowProps {
  program: CoreProgram;
}

export function ProgramRow({ program }: ProgramRowProps) {
  return (
    <div
      id={program.id}
      className="scroll-mt-28 py-8 sm:py-10 px-4 -mx-4 border-b border-[#A67C37]/60 group transition-colors duration-300 hover:bg-[#EAE0CE]/40 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Column 1: Program Name, Full Name & Category (~0.8fr / 4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <div className="flex items-center gap-2">
            {/* Small Vermilion Indicator that reveals on hover */}
            <span className="w-0 opacity-0 group-hover:w-2 group-hover:opacity-100 h-2 bg-[#D62839] transition-all duration-300 flex-shrink-0" />
            <span className="font-sans text-[13px] font-bold tracking-[0.16em] uppercase text-[#0B2A6B]">
              {program.category}
            </span>
          </div>

          <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1.5">
            <h3 className="font-serif text-[34px] font-extrabold text-[#0B2A6B] leading-[1.1] tracking-tight group-hover:text-[#D62839] transition-colors duration-300">
              {program.name}
            </h3>
            <ArrowRight className="w-5 h-5 text-[#D62839] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:inline-block" />
          </div>

          <p className="font-serif italic text-sm sm:text-base text-[#15151A]/85 leading-snug">
            {program.fullName}
          </p>
        </div>

        {/* Column 2: Description, Key Modules & Outcome (~1.8fr / 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-sans text-[15px] text-[#15151A] leading-relaxed">
            {program.positioning}
          </p>

          <div className="space-y-1.5 pt-1">
            <div className="text-[12px] font-sans font-bold uppercase tracking-wider text-[#0B2A6B]">
              Key Focus Modules:
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {program.keyTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs font-sans text-[#15151A]/90">
                  <Check className="w-3.5 h-3.5 text-[#D62839] mt-0.5 flex-shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs font-sans text-[#15151A]/75 italic">
            <strong className="text-[#0B2A6B] not-italic font-bold">Target Outcome:</strong> {program.keyOutcome}
          </p>
        </div>

        {/* Column 3: Duration Tag & Action (~0.5fr / 3 cols) */}
        <div className="lg:col-span-3 flex flex-col sm:items-start lg:items-end justify-between space-y-4">
          <span className="inline-block bg-[#D62839] text-white font-sans font-bold text-[13px] px-[12px] py-[6px] tracking-wide text-center uppercase transition-transform duration-300 group-hover:scale-[1.02]">
            {program.duration}
          </span>

          <Button
            href="/contact"
            variant="secondary-link"
          >
            Inquire for {program.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
