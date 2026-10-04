"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Layers, Compass, Heart, Sparkles } from "lucide-react";

export function FiveEFrameworkJourney() {
  const [activeCode, setActiveCode] = useState("E1");

  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Layers,
    Compass,
    Heart,
    Sparkles,
  };

  const activePillar =
    siteConfig.fiveEPillars.find((p) => p.code === activeCode) ||
    siteConfig.fiveEPillars[0];

  const IconComponent = iconMap[activePillar.iconName] || BookOpen;

  return (
    <section className="py-[80px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="framework">
      <Container size="wide">
        {/* Section Heading */}
        <div className="mb-[36px] space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              THE 5E ARCHITECTURE
            </span>
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(30px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            The five pillars of capability.
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/80 max-w-[54ch]">
            The 5E framework is the core intellectual foundation of 5e Serpraise &mdash; an integrated continuum from individual purpose to organizational vitality.
          </p>
        </div>

        {/* 5E Interactive Horizontal Navigation Bar */}
        <div className="border-t-2 border-b-2 border-[#0B2A6B] bg-[#F7F1E6] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#A67C37]/40">
          {siteConfig.fiveEPillars.map((pillar) => {
            const isActive = pillar.code === activeCode;

            return (
              <button
                key={pillar.code}
                onClick={() => setActiveCode(pillar.code)}
                className={`p-5 sm:p-6 text-left transition-all duration-300 relative focus:outline-none cursor-pointer group ${
                  isActive ? "bg-[#0B2A6B] text-[#EFE6D6]" : "hover:bg-[#EAE0CE]/60 text-[#0B2A6B]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {/* Active Vermilion Top Marker */}
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-[#D62839]" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-serif font-extrabold text-2xl ${
                      isActive ? "text-[#D62839]" : "text-[#A67C37]"
                    }`}
                  >
                    {pillar.code}
                  </span>
                  <span
                    className={`font-sans text-[10px] font-bold tracking-[0.2em] uppercase ${
                      isActive ? "text-[#EFE6D6]/70" : "text-[#15151A]/60"
                    }`}
                  >
                    {pillar.number}
                  </span>
                </div>

                <div
                  className={`font-sans font-extrabold text-[15px] tracking-wide uppercase leading-tight ${
                    isActive ? "text-white" : "text-[#0B2A6B]"
                  }`}
                >
                  {pillar.name}
                </div>

                <p
                  className={`font-serif italic text-xs mt-1 leading-snug line-clamp-1 ${
                    isActive ? "text-[#EFE6D6]/85" : "text-[#15151A]/75"
                  }`}
                >
                  {pillar.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active 5E Pillar Editorial Spotlight */}
        <div className="mt-8 p-8 sm:p-12 bg-[#F7F1E6] border border-[#0B2A6B]/30 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif font-extrabold text-3xl sm:text-4xl text-[#D62839]">
                    {activePillar.code}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#A67C37]" />
                  <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0B2A6B]">
                    PILLAR {activePillar.number} &bull; {activePillar.name}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-[clamp(28px,3.8vw,42px)] text-[#0B2A6B] leading-tight">
                  {activePillar.tagline}
                </h3>

                <p className="font-sans text-base sm:text-[17px] text-[#15151A] leading-[1.65] max-w-[620px]">
                  {activePillar.description}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-5">
                  <Button href={activePillar.href} variant="primary">
                    Explore {activePillar.name}
                  </Button>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-[#0B2A6B] font-sans font-bold text-[15px] underline decoration-[#A67C37] decoration-2 underline-offset-[6px] hover:text-[#D62839] transition-colors"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Decorative Badge */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="p-8 bg-[#EFE6D6] border border-[#A67C37]/50 text-center flex flex-col items-center justify-center w-full max-w-[280px]">
                  <div className="w-16 h-16 bg-[#0B2A6B] flex items-center justify-center mb-4 text-[#EFE6D6]">
                    <IconComponent className="w-8 h-8 text-[#A67C37]" />
                  </div>
                  <div className="font-serif font-extrabold text-2xl text-[#0B2A6B]">
                    {activePillar.code}
                  </div>
                  <div className="font-sans font-extrabold text-xs uppercase tracking-[0.18em] text-[#D62839] mt-0.5">
                    {activePillar.name}
                  </div>
                  <div className="w-8 h-[1px] bg-[#A67C37] my-3" />
                  <p className="font-serif italic text-xs text-[#15151A]/80">
                    5e Serpraise Core Intellectual Architecture
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
