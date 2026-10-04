"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ChapterLabel } from "../ui/ChapterLabel";
import { Button } from "../ui/Button";
import { corePrograms } from "@/content/programmes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, User, Users, ShieldCheck, TrendingUp, Clock, Check } from "lucide-react";

export function ProgrammeConsultationSelector() {
  const [selectedGoal, setSelectedGoal] = useState<"myself" | "team" | "leaders" | "business">("myself");
  const shouldReduceMotion = useReducedMotion();

  const options = [
    {
      id: "myself" as const,
      label: "MYSELF",
      sublabel: "Personal Purpose & Self-Mastery",
      icon: User,
      programId: "lilly",
    },
    {
      id: "team" as const,
      label: "MY TEAM",
      sublabel: "Goal Orientation & Synergy",
      icon: Users,
      programId: "gotel",
    },
    {
      id: "leaders" as const,
      label: "MY LEADERS",
      sublabel: "Stewardship & Leadership Aligning",
      icon: ShieldCheck,
      programId: "salam",
    },
    {
      id: "business" as const,
      label: "MY BUSINESS",
      sublabel: "People & Process Confluence",
      icon: TrendingUp,
      programId: "coppter",
    },
  ];

  const currentOption = options.find((o) => o.id === selectedGoal) || options[0];
  const matchedProgram = corePrograms.find((p) => p.id === currentOption.programId) || corePrograms[0];

  return (
    <section className="py-[84px] bg-[#F7F1E6] border-t border-[#A67C37]/40" id="programme-selector">
      <Container size="wide">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto space-y-3 mb-10">
          <ChapterLabel
            number="04"
            title="DEVELOPING HUMAN CAPABILITY"
            subtitle="Interactive Consultation & Flagship Programmes"
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4.2vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            What are you trying to transform?
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            Select your primary capability challenge below to receive an instant consultative recommendation backed by 5e Serpraise experiential frameworks.
          </p>
        </div>

        {/* 4 Interactive Selector Choices */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-[1020px] mx-auto">
          {options.map((option) => {
            const isSelected = selectedGoal === option.id;
            const Icon = option.icon;

            return (
              <button
                key={option.id}
                onClick={() => setSelectedGoal(option.id)}
                className={`p-5 sm:p-6 text-left border transition-all duration-300 relative focus:outline-none cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                    : "bg-[#EFE6D6] text-[#0B2A6B] border-[#0B2A6B]/30 hover:border-[#0B2A6B]"
                }`}
                role="tab"
                aria-selected={isSelected}
              >
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-[#D62839]" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <Icon
                    className={`w-5 h-5 ${
                      isSelected ? "text-[#D62839]" : "text-[#A67C37]"
                    }`}
                  />
                  <span
                    className={`font-sans text-[10px] font-bold tracking-widest uppercase ${
                      isSelected ? "text-[#EFE6D6]/70" : "text-[#15151A]/60"
                    }`}
                  >
                    FOCUS
                  </span>
                </div>

                <div>
                  <div
                    className={`font-sans font-extrabold text-[16px] tracking-wider uppercase ${
                      isSelected ? "text-white" : "text-[#0B2A6B]"
                    }`}
                  >
                    [ {option.label} ]
                  </div>
                  <div
                    className={`font-serif italic text-xs mt-1 ${
                      isSelected ? "text-[#EFE6D6]/85" : "text-[#15151A]/75"
                    }`}
                  >
                    {option.sublabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Consultative Recommendation Card */}
        <div className="mt-8 max-w-[1020px] mx-auto bg-[#EFE6D6] border border-[#0B2A6B]/35 p-7 sm:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={matchedProgram.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Consultation Overview */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif font-extrabold text-2xl sm:text-3xl text-[#D62839]">
                    {matchedProgram.name}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#A67C37]" />
                  <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0B2A6B]">
                    RECOMMENDED FLAGSHIP INTERVENTION
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-extrabold text-[28px] sm:text-[34px] text-[#0B2A6B] leading-tight">
                    {matchedProgram.name}.
                  </h3>
                  <div className="font-serif italic text-base sm:text-lg text-[#15151A]/85 mt-0.5">
                    {matchedProgram.fullName}
                  </div>
                  <div className="font-sans font-extrabold text-xs uppercase tracking-[0.16em] text-[#D62839] mt-1">
                    {matchedProgram.category}
                  </div>
                </div>

                <p className="font-sans text-[15px] sm:text-[16px] text-[#15151A] leading-[1.6]">
                  {matchedProgram.description}
                </p>

                {/* Key Focus Highlights */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {matchedProgram.keyTopics.slice(0, 4).map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] font-sans text-[#15151A]/85">
                      <Check className="w-4 h-4 text-[#0B2A6B] flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-5">
                  <Button href={`/training#${matchedProgram.id}`} variant="primary">
                    Discover {matchedProgram.name}
                  </Button>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-[#0B2A6B] font-sans font-bold text-[14px] underline decoration-[#A67C37] decoration-2 underline-offset-[5px] hover:text-[#D62839] transition-colors"
                  >
                    <span>Request Programme Outline</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Summary Badge */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="p-7 bg-[#F7F1E6] border border-[#A67C37]/50 w-full max-w-[280px] text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#0B2A6B]">
                    <Clock className="w-4 h-4 text-[#A67C37]" />
                    <span>{matchedProgram.duration}</span>
                  </div>
                  <div className="w-8 h-[1px] bg-[#A67C37] mx-auto" />
                  <div className="font-sans text-xs text-[#15151A]/80 leading-snug">
                    <strong>Ideal For:</strong> {matchedProgram.targetAudience}
                  </div>
                  <div className="pt-2 border-t border-[#A67C37]/30 text-[11px] font-serif italic text-[#A67C37]">
                    Experiential Workshop &bull; PGL Methods
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
