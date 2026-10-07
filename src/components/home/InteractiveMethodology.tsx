"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { trainingMethodologies } from "@/content/programmes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Gamepad2, BrainCircuit, Activity, CheckCircle2 } from "lucide-react";

export function InteractiveMethodology() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const stepMeta = [
    {
      action: "01 LEARN",
      subtitle: "Respecting Adult Learning Principles",
      icon: BrainCircuit,
      highlights: [
        "Self-directed experiential learning",
        "Relevance to immediate workplace context",
        "Engaging cognitive and emotional faculties",
      ],
    },
    {
      action: "02 MEASURE",
      subtitle: "Pre & Post Capability Analysis",
      icon: Activity,
      highlights: [
        "Pre-training diagnostic baseline",
        "Targeted skill gap identification",
        "Post-workshop retention & behavioral evaluation",
      ],
    },
    {
      action: "03 EXPERIENCE",
      subtitle: "High-Interaction PGL & Role-Play",
      icon: Gamepad2,
      highlights: [
        "PGL (Project-Game-Lecture) methodology",
        "Simulated leadership dilemmas & role-plays",
        "Debrief reflections translating games into enterprise results",
      ],
    },
  ];

  const currentMethodology = trainingMethodologies[activeStep] || trainingMethodologies[0];
  const currentMeta = stepMeta[activeStep] || stepMeta[0];

  return (
    <section className="py-[84px] bg-[#F7F1E6] border-t border-b border-[#A67C37]/40" id="methodology">
      <Container size="wide">
        {/* Section Heading */}
        <div className="text-center max-w-[720px] mx-auto space-y-3 mb-10">
          <SectionLabel
            title="THE PEDAGOGICAL STANDARD"
            subtitle="How 5e Serpraise turns experiential immersion into lasting organizational behavior."
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4.2vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            How we develop people.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            Learning that goes beyond passive lecture &mdash; structured through our three-phase experiential framework to move participants from awareness to sustained mastery.
          </p>
        </div>

        {/* 3 Step Interactive Navigation Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-[1020px] mx-auto">
          {trainingMethodologies.map((item, idx) => {
            const isCurrent = activeStep === idx;
            const meta = stepMeta[idx];
            const Icon = meta.icon;

            return (
              <button
                key={item.number}
                onClick={() => setActiveStep(idx)}
                className={`p-6 text-left border transition-all duration-300 relative focus:outline-none cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                    : "bg-[#EFE6D6] text-[#0B2A6B] border-[#0B2A6B]/30 hover:border-[#0B2A6B]"
                }`}
                role="tab"
                aria-selected={isCurrent}
              >
                {isCurrent && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-[#D62839]" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-serif font-extrabold text-2xl ${
                      isCurrent ? "text-[#D62839]" : "text-[#A67C37]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isCurrent ? "text-[#EFE6D6]" : "text-[#A67C37]"
                    }`}
                  />
                </div>

                <div>
                  <div
                    className={`font-sans font-extrabold text-[15px] tracking-wide uppercase ${
                      isCurrent ? "text-white" : "text-[#0B2A6B]"
                    }`}
                  >
                    {meta.action}
                  </div>
                  <div
                    className={`font-serif italic text-xs mt-1 ${
                      isCurrent ? "text-[#EFE6D6]/85" : "text-[#15151A]/75"
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Methodology Deep-Dive */}
        <div className="mt-8 max-w-[1020px] mx-auto bg-[#EFE6D6] border border-[#0B2A6B]/35 p-7 sm:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Stage Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif font-extrabold text-2xl sm:text-3xl text-[#D62839]">
                    PHASE {currentMethodology.number}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#A67C37]" />
                  <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0B2A6B]">
                    {currentMeta.action}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-[26px] sm:text-[32px] text-[#0B2A6B] leading-tight">
                  {currentMethodology.title}
                </h3>

                <p className="font-serif italic text-sm sm:text-base text-[#15151A]/90">
                  {currentMethodology.summary}
                </p>

                <p className="font-sans text-[15px] sm:text-[16px] text-[#15151A] leading-[1.65]">
                  {currentMethodology.description}
                </p>

                {/* Highlights */}
                <div className="pt-2 space-y-2">
                  {currentMeta.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] font-sans text-[#15151A]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#D62839] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Decorative Box */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="p-7 bg-[#F7F1E6] border border-[#A67C37]/50 w-full max-w-[280px] text-center space-y-3">
                  <div className="w-12 h-12 bg-[#0B2A6B] flex items-center justify-center mx-auto text-[#EFE6D6]">
                    <currentMeta.icon className="w-6 h-6 text-[#A67C37]" />
                  </div>
                  <div className="font-serif font-extrabold text-xl text-[#0B2A6B]">
                    5e Standard
                  </div>
                  <div className="text-xs font-sans text-[#15151A]/80 leading-snug">
                    Designed for measurable business execution &amp; personal empowerment.
                  </div>
                  <div className="w-6 h-[1px] bg-[#A67C37] mx-auto" />
                  <div className="text-[11px] font-serif italic text-[#A67C37]">
                    Active Practice Since 2003
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
