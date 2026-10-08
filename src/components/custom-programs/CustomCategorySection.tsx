"use client";

import React, { useState } from "react";
import { customCategories } from "@/content/custom-programs";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, TrendingUp, Target, Users, Briefcase } from "lucide-react";

export function CustomCategorySection() {
  const [activeNumber, setActiveNumber] = useState("01");

  const iconMap: Record<string, React.ElementType> = {
    "01": MessageSquare,
    "02": TrendingUp,
    "03": Target,
    "04": Users,
    "05": Briefcase,
  };

  const activeCategory =
    customCategories.find((category) => category.number === activeNumber) ||
    customCategories[0];

  const IconComponent = iconMap[activeCategory.number] || MessageSquare;

  return (
    <section className="py-[80px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="categories">
      <Container size="wide">
        {/* Section Header */}
        <div className="mb-[36px] space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              THE BESPOKE CURRICULUM ARCHITECTURE
            </span>
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(30px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            Custom Program Architecture.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[65ch]">
            Modular capability frameworks crafted around your organizational reality. Click each domain below to explore specialized corporate workshops.
          </p>
        </div>

        {/* Interactive Horizontal Navigation Bar (styled like The 5E Architecture) */}
        <div className="border-t-2 border-b-2 border-[#0B2A6B] bg-[#F7F1E6] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#A67C37]/40">
          {customCategories.map((category) => {
            const isActive = category.number === activeNumber;

            return (
              <button
                key={category.number}
                onClick={() => setActiveNumber(category.number)}
                className={`p-5 sm:p-6 text-left transition-all duration-300 relative focus:outline-none cursor-pointer group ${
                  isActive ? "bg-[#0B2A6B] text-[#EFE6D6]" : "hover:bg-[#EAE0CE]/60 text-[#0B2A6B]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {/* Active Vermilion Top Marker */}
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-1.5 bg-[#D62839]" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-serif font-extrabold text-2xl ${
                      isActive ? "text-[#D62839]" : "text-[#A67C37]"
                    }`}
                  >
                    {category.number}
                  </span>
                  <span
                    className={`font-sans text-[10px] font-bold tracking-[0.2em] uppercase ${
                      isActive ? "text-[#EFE6D6]/70" : "text-[#15151A]/60"
                    }`}
                  >
                    MODULE
                  </span>
                </div>

                <div
                  className={`font-sans font-extrabold text-[15px] tracking-wide uppercase leading-tight ${
                    isActive ? "text-white" : "text-[#0B2A6B]"
                  }`}
                >
                  {category.title}
                </div>

                <p
                  className={`font-serif italic text-xs mt-1 leading-snug line-clamp-1 ${
                    isActive ? "text-[#EFE6D6]/85" : "text-[#15151A]/75"
                  }`}
                >
                  {category.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Category Editorial Spotlight */}
        <div className="mt-8 p-6 sm:p-10 bg-[#F7F1E6] border border-[#0B2A6B]/30 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Category Header Banner with Details & Right Badge */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-[#A67C37]/40">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-extrabold text-3xl sm:text-4xl text-[#D62839]">
                      {activeCategory.number}
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#A67C37]" />
                    <span className="font-sans font-extrabold text-sm sm:text-base uppercase tracking-[0.2em] text-[#0B2A6B]">
                      {activeCategory.title}
                    </span>
                  </div>

                  <p className="font-sans text-base sm:text-[17px] text-[#15151A] leading-relaxed max-w-[640px]">
                    {activeCategory.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <Button
                      href={`/contact?category=${encodeURIComponent(activeCategory.title)}`}
                      variant="primary"
                    >
                      Inquire for {activeCategory.title}
                    </Button>
                    <span className="font-sans text-xs uppercase tracking-wider text-[#0B2A6B] font-bold">
                      {activeCategory.programs.length} Specialized Interventions
                    </span>
                  </div>
                </div>

                {/* Right Decorative Badge */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="p-6 sm:p-8 bg-[#EFE6D6] border border-[#A67C37]/50 text-center flex flex-col items-center justify-center w-full max-w-[260px]">
                    <div className="w-14 h-14 bg-[#0B2A6B] flex items-center justify-center mb-3 text-[#EFE6D6]">
                      <IconComponent className="w-7 h-7 text-[#A67C37]" />
                    </div>
                    <div className="font-serif font-extrabold text-xl text-[#0B2A6B]">
                      {activeCategory.number}
                    </div>
                    <div className="font-sans font-extrabold text-xs uppercase tracking-[0.18em] text-[#D62839] mt-0.5">
                      {activeCategory.title}
                    </div>
                    <div className="w-8 h-[1px] bg-[#A67C37] my-2.5" />
                    <p className="font-serif italic text-xs text-[#15151A]/80">
                      5e Serpraise Bespoke Curriculum
                    </p>
                  </div>
                </div>
              </div>

              {/* Program Items inside Category */}
              <div className="divide-y divide-[#A67C37]/40">
                {activeCategory.programs.map((prog, pIdx) => {
                  const isCASE = prog.title.includes("CASE of a HR Manager");

                  return (
                    <div
                      key={pIdx}
                      className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
                    >
                      {/* Program Title & Subtitle */}
                      <div className="lg:col-span-4 space-y-1.5">
                        <h4 className="font-serif font-bold text-[22px] sm:text-[24px] text-[#0B2A6B] leading-snug group-hover:text-[#D62839] transition-colors">
                          {prog.title}
                        </h4>
                        {prog.subtitle && (
                          <p className="font-serif italic text-xs sm:text-sm text-[#A67C37]">
                            {prog.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Description & Tags */}
                      <div className="lg:col-span-5 space-y-3">
                        <p className="font-sans text-[14px] text-[#15151A] leading-relaxed">
                          {prog.description}
                        </p>

                        {/* CASE special highlight */}
                        {isCASE && (
                          <div className="p-3.5 bg-[#EFE6D6] border border-[#D62839]/40 mt-2">
                            <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#D62839] mb-1.5">
                              CASE Framework Dimensions:
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs font-sans font-semibold text-[#0B2A6B]">
                              <div>&bull; Change Agent</div>
                              <div>&bull; Administrative Expert</div>
                              <div>&bull; Strategic Thinker</div>
                              <div>&bull; Employee Champion</div>
                            </div>
                          </div>
                        )}

                        {prog.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {prog.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-sans text-[11px] font-medium text-[#0B2A6B] bg-[#EFE6D6] border border-[#0B2A6B]/20 px-2.5 py-0.5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action */}
                      <div className="lg:col-span-3 flex lg:justify-end">
                        <Button
                          href={`/contact?program=${encodeURIComponent(prog.title)}`}
                          variant="secondary-link"
                        >
                          Inquire for Program
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
