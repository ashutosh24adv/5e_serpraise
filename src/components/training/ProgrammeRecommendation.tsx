"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { recommendationOptions, corePrograms } from "@/content/programmes";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles, Clock, Target, Users } from "lucide-react";

export function ProgrammeRecommendation() {
  const [selectedOptionId, setSelectedOptionId] = useState("individual");

  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.toLowerCase().replace(/^#/, "").trim();
      if (!hash) return;

      const matched = recommendationOptions.find(
        (opt) =>
          opt.targetProgramId.toLowerCase() === hash ||
          opt.id.toLowerCase() === hash
      );

      if (matched) {
        setSelectedOptionId(matched.id);
        const sectionEl = document.getElementById("recommendation");
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const timer = setTimeout(handleHashSync, 100);
    window.addEventListener("hashchange", handleHashSync);
    window.addEventListener("popstate", handleHashSync);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashSync);
      window.removeEventListener("popstate", handleHashSync);
    };
  }, []);

  const selectedOption =
    recommendationOptions.find((o) => o.id === selectedOptionId) ||
    recommendationOptions[0];

  const matchedProgram =
    corePrograms.find((p) => p.id === selectedOption.targetProgramId) ||
    corePrograms[0];

  return (
    <section className="py-[80px] bg-[#EFE6D6] border-t border-b border-[#A67C37]/40 scroll-mt-24" id="recommendation">
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
            const targetProg = corePrograms.find((p) => p.id === opt.targetProgramId);

            return (
              <button
                key={opt.id}
                id={opt.targetProgramId}
                onClick={() => {
                  setSelectedOptionId(opt.id);
                  if (typeof window !== "undefined") {
                    window.history.replaceState(null, "", `#${opt.targetProgramId}`);
                  }
                }}
                className={`p-6 text-left transition-all duration-200 relative focus:outline-none cursor-pointer flex flex-col justify-between select-none scroll-mt-28 ${
                  isSelected
                    ? "bg-[#D62839] border-2 border-[#D62839] shadow-md text-white"
                    : "bg-[#EFE6D6] border-2 border-[#0B2A6B]/20 hover:border-[#0B2A6B]/50 hover:bg-[#F7F1E6]/30 text-[#0B2A6B]"
                }`}
                aria-pressed={isSelected}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3
                      className={`font-serif font-bold text-[19px] leading-snug ${
                        isSelected ? "text-white" : "text-[#0B2A6B]"
                      }`}
                    >
                      {opt.label}
                    </h3>
                    <div
                      className={`w-5 h-5 rounded-none border flex-shrink-0 flex items-center justify-center transition-colors duration-200 mt-0.5 ${
                        isSelected
                          ? "border-white bg-white text-[#D62839]"
                          : "border-[#0B2A6B]/40 bg-transparent"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                    </div>
                  </div>

                  <p
                    className={`font-sans text-xs leading-relaxed ${
                      isSelected ? "text-[#F7F1E6]/90" : "text-[#15151A]/75"
                    }`}
                  >
                    {opt.sublabel}
                  </p>
                </div>

                <div
                  className={`pt-4 mt-4 border-t text-[11px] font-sans uppercase font-bold tracking-wider flex items-center justify-between ${
                    isSelected
                      ? "border-white/20 text-white"
                      : "border-[#A67C37]/30 text-[#0B2A6B]"
                  }`}
                >
                  <span>Flagship: {targetProg?.name || "Program"}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      isSelected ? "text-white" : "text-[#0B2A6B]"
                    }`}
                  />
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Matched Program Overview & Modules */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block bg-[#D62839] text-white font-sans font-bold text-xs uppercase px-3 py-1 tracking-wider">
                    Recommended: {matchedProgram.name}
                  </span>
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#0B2A6B]">
                    {matchedProgram.category}
                  </span>
                  <span className="font-sans text-xs font-semibold text-[#15151A]/70 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D62839]" />
                    {matchedProgram.duration}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-extrabold text-[clamp(28px,3.8vw,42px)] text-[#0B2A6B] leading-[1.1]">
                    {matchedProgram.fullName}
                  </h3>
                  <p className="font-serif italic text-base text-[#15151A]/85 mt-1 leading-snug">
                    {matchedProgram.positioning}
                  </p>
                </div>

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

                {/* Key Focus Modules (Moved up from Four ways we educate) */}
                <div className="space-y-2.5 pt-1">
                  <div className="font-sans text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0B2A6B]">
                    Key Focus Modules:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {matchedProgram.keyTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] font-sans text-[#15151A]">
                        <Check className="w-4 h-4 text-[#D62839] mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-5">
                  <Button
                    href={`/contact?program=${matchedProgram.id}`}
                    variant="primary"
                  >
                    Inquire for {matchedProgram.name}
                  </Button>
                  <Button
                    href="/contact"
                    variant="primary"
                  >
                    Discuss Organization Fit
                  </Button>
                </div>
              </div>

              {/* Right Key Outcomes & Details Summary Box */}
              <div className="lg:col-span-4 p-6 sm:p-7 bg-[#F7F1E6] border border-[#A67C37]/50 space-y-4">
                <div className="space-y-2">
                  <div className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-[#0B2A6B] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D62839]" />
                    <span>Target Outcome</span>
                  </div>
                  <p className="font-serif italic text-sm text-[#15151A] leading-relaxed">
                    &ldquo;{matchedProgram.keyOutcome}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#A67C37]/30 space-y-1">
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#0B2A6B] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D62839]" />
                    <span>Target Audience</span>
                  </div>
                  <p className="text-xs font-sans text-[#15151A]/85 leading-relaxed">
                    {matchedProgram.targetAudience}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#A67C37]/30 space-y-1">
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#0B2A6B] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D62839]" />
                    <span>Format & Duration</span>
                  </div>
                  <p className="text-xs font-sans text-[#15151A]/85 leading-relaxed">
                    {matchedProgram.duration}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
