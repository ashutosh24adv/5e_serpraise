"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { recommendationOptions, corePrograms } from "@/content/programmes";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles, Clock, Target } from "lucide-react";

export function ProgrammeRecommendation() {
  const [selectedOptionId, setSelectedOptionId] = useState("individual");

  const selectedOption =
    recommendationOptions.find((o) => o.id === selectedOptionId) ||
    recommendationOptions[0];

  const matchedProgram =
    corePrograms.find((p) => p.id === selectedOption.targetProgramId) ||
    corePrograms[0];

  return (
    <section className="py-[80px] bg-[#F7F1E6] border-t border-b border-[#A67C37]/40" id="recommendation">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-[36px] text-center max-w-[700px] mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              PROGRAMME FINDER
            </span>
            <span className="w-4 h-[1.5px] bg-[#A67C37]" />
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            Which programme is right for your organization?
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 leading-relaxed">
            Select what you are seeking to transform below to see the recommended 5e Serpraise flagship intervention.
          </p>
        </div>

        {/* 4 Interactive Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
          {recommendationOptions.map((opt) => {
            const isSelected = opt.id === selectedOptionId;

            return (
              <button
                key={opt.id}
                onClick={() => setSelectedOptionId(opt.id)}
                className={`p-6 text-left border transition-all duration-300 relative focus:outline-none cursor-pointer flex flex-col justify-between select-none ${
                  isSelected
                    ? "bg-[#0B2A6B] text-white border-[#0B2A6B]"
                    : "bg-[#EFE6D6] text-[#0B2A6B] border-[#0B2A6B]/30 hover:border-[#0B2A6B]"
                }`}
                aria-pressed={isSelected}
              >
                {/* Active Top Vermilion Marker */}
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-[#D62839]" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-sans text-[11px] font-bold tracking-[0.16em] uppercase ${
                        isSelected ? "text-[#E5B869]" : "text-[#D62839]"
                      }`}
                    >
                      Transformation Focus
                    </span>
                    <div
                      className={`w-5 h-5 rounded-none border flex items-center justify-center ${
                        isSelected
                          ? "border-[#D62839] bg-[#D62839] text-white"
                          : "border-[#0B2A6B]/40"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <h3
                    className={`font-serif font-bold text-[19px] leading-snug ${
                      isSelected ? "text-white" : "text-[#0B2A6B]"
                    }`}
                  >
                    {opt.label}
                  </h3>

                  <p
                    className={`font-sans text-xs mt-2 leading-relaxed ${
                      isSelected ? "text-[#EFE6D6]" : "text-[#15151A]/75"
                    }`}
                  >
                    {opt.sublabel}
                  </p>
                </div>

                <div
                  className={`pt-4 mt-4 border-t text-[11px] font-sans uppercase font-bold tracking-wider flex items-center justify-between ${
                    isSelected ? "border-white/20 text-[#E5B869]" : "border-[#A67C37]/30 text-[#0B2A6B]"
                  }`}
                >
                  <span>Flagship Fit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Recommendation Spotlight Box */}
        <div className="mt-8 p-8 sm:p-10 bg-[#EFE6D6] border-2 border-[#0B2A6B] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={matchedProgram.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Matched Program Overview */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block bg-[#D62839] text-white font-sans font-bold text-xs uppercase px-3 py-1 tracking-wider">
                    Recommended: {matchedProgram.name}
                  </span>
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#0B2A6B]">
                    {matchedProgram.category}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-[clamp(28px,3.8vw,44px)] text-[#0B2A6B] leading-[1.1]">
                  {matchedProgram.fullName}
                </h3>

                {/* Reason Explanation */}
                <div className="p-4 bg-[#F7F1E6] border-l-2 border-[#D62839] space-y-1">
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#0B2A6B] flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#D62839]" />
                    <span>Why this fits your objective:</span>
                  </div>
                  <p className="font-sans text-sm text-[#15151A] leading-relaxed">
                    {selectedOption.reason}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-sans text-[#0B2A6B] pt-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#D62839]" />
                    <span className="font-bold">Duration: {matchedProgram.duration}</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-5">
                  <Button
                    href={`#${matchedProgram.id}`}
                    variant="primary"
                  >
                    View {matchedProgram.name} Details
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary-link"
                  >
                    Discuss Organization Fit
                  </Button>
                </div>
              </div>

              {/* Right Key Outcomes Summary */}
              <div className="lg:col-span-4 p-6 bg-[#F7F1E6] border border-[#A67C37]/50 space-y-3">
                <div className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-[#0B2A6B] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D62839]" />
                  <span>Target Outcome</span>
                </div>
                <p className="font-serif italic text-sm text-[#15151A] leading-relaxed">
                  &ldquo;{matchedProgram.keyOutcome}&rdquo;
                </p>
                <div className="pt-3 border-t border-[#A67C37]/30 text-xs font-sans text-[#15151A]/75">
                  Audience: {matchedProgram.targetAudience}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
