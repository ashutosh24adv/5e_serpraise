"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { corePrograms } from "@/content/programmes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Check, Clock } from "lucide-react";

export function InteractiveProgrammeExplorer() {
  const [expandedId, setExpandedId] = useState<string>("lilly");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-[84px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="programmes-explorer">
      <Container size="wide">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-[640px]">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                THE FOUR FLAGSHIPS
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-[clamp(28px,4.2vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
              Experiential programmes.
            </h2>
            <p className="font-sans text-[16px] text-[#15151A]/85">
              Explore the four signature corporate workshops designed to elevate individuals, synergize teams, mature leadership, and optimize business execution.
            </p>
          </div>

          <Link
            href="/training"
            className="inline-flex items-center gap-2 font-sans font-bold text-[14px] text-[#0B2A6B] hover:text-[#D62839] underline decoration-[#A67C37] decoration-2 underline-offset-[6px] transition-colors whitespace-nowrap"
          >
            <span>View Detailed Training Syllabus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Expandable Programme Rows */}
        <div className="border-t-2 border-b-2 border-[#0B2A6B] divide-y divide-[#A67C37]/40 bg-[#F7F1E6]">
          {corePrograms.map((prog, index) => {
            const isExpanded = expandedId === prog.id;
            const numberFormatted = `0${index + 1}`;

            return (
              <div
                key={prog.id}
                className={`transition-colors duration-300 ${
                  isExpanded ? "bg-[#EFE6D6]" : "hover:bg-[#EAE0CE]/50"
                }`}
              >
                {/* Header Row Trigger */}
                <button
                  onClick={() => setExpandedId(isExpanded ? "" : prog.id)}
                  className="w-full p-6 sm:p-8 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-center flex-1">
                    {/* Number & Code */}
                    <div className="sm:col-span-4 flex items-center gap-4">
                      <span className="font-serif font-extrabold text-2xl sm:text-3xl text-[#0B2A6B]">
                        {numberFormatted}
                      </span>
                      <span className="w-1.5 h-1.5 bg-[#A67C37]" />
                      <span className="font-serif font-extrabold text-2xl sm:text-3xl text-[#0B2A6B]">
                        {prog.name}.
                      </span>
                    </div>

                    {/* Tagline / Subtitle */}
                    <div className="sm:col-span-5">
                      <div className="font-sans font-extrabold text-xs uppercase tracking-[0.16em] text-[#D62839]">
                        {prog.category}
                      </div>
                      <div className="font-serif italic text-sm sm:text-base text-[#15151A]/85 mt-0.5">
                        {prog.fullName}
                      </div>
                    </div>

                    {/* Duration / Metadata */}
                    <div className="sm:col-span-3 text-left sm:text-right font-sans text-xs font-semibold text-[#15151A]/70">
                      <span>{prog.duration}</span>
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <div className="flex-shrink-0 pt-1 sm:pt-0">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown
                        className={`w-5 h-5 ${
                          isExpanded ? "text-[#D62839]" : "text-[#0B2A6B]"
                        }`}
                      />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Details Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#A67C37]/30">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          <div className="lg:col-span-8 space-y-4">
                            <p className="font-sans text-[15px] sm:text-[16px] text-[#15151A] leading-[1.6]">
                              {prog.description}
                            </p>

                            {/* Focus Areas Grid */}
                            <div className="pt-2">
                              <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#0B2A6B] mb-2">
                                Core Focus Areas:
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {prog.keyTopics.map((topic, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2 text-xs sm:text-[13px] font-sans text-[#15151A]/85"
                                  >
                                    <Check className="w-4 h-4 text-[#D62839] flex-shrink-0 mt-0.5" />
                                    <span>{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="pt-4 flex items-center gap-4">
                              <Link
                                href={`/training#${prog.id}`}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B2A6B] text-[#EFE6D6] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#D62839] transition-colors"
                              >
                                <span>Explore Full {prog.name} Syllabus</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>

                          {/* Right Audience / Duration Box */}
                          <div className="lg:col-span-4 p-6 bg-[#F7F1E6] border border-[#0B2A6B]/20 space-y-3">
                            <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#0B2A6B]">
                              <Clock className="w-4 h-4 text-[#A67C37]" />
                              <span>{prog.duration}</span>
                            </div>
                            <div className="w-6 h-[1px] bg-[#A67C37]" />
                            <div className="text-xs font-sans text-[#15151A]/85 leading-relaxed">
                              <strong>Target Audience:</strong> {prog.targetAudience}
                            </div>
                            <div className="text-xs font-sans text-[#15151A]/75 pt-2 border-t border-[#A67C37]/25">
                              PGL (Project-Game-Lecture), experiential group challenges, and reflection debriefs.
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
