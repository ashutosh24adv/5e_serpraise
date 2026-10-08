"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { HeritageDivider } from "../ui/HeritageDivider";
import { galleryContent, GalleryCategory } from "@/content/gallery";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MapPin, Calendar, Camera } from "lucide-react";
import Image from "next/image";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredItems =
    activeCategory === "All"
      ? galleryContent.items
      : galleryContent.items.filter((item) => item.category === activeCategory);

  return (
    <section className="py-[72px] bg-[#EFE6D6]" id="archive">
      <Container size="wide">
        <HeritageDivider />

        {/* Category Filter Navigation */}
        <div className="my-8 flex items-center justify-between flex-wrap gap-4 border-b border-[#A67C37]/40 pb-5">
          <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[#0B2A6B]">
            <Camera className="w-4 h-4 text-[#D62839]" />
            <span>Filter Archives</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {galleryContent.categories.map((cat) => {
              const isSelected = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 font-sans text-xs font-bold tracking-wide uppercase transition-all duration-200 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
                    isSelected
                      ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                      : "bg-[#F7F1E6] text-[#0B2A6B] border-[#0B2A6B]/20 hover:border-[#0B2A6B]"
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Photo / Intervention Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const isArch = item.useArchFrame;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#F7F1E6] border border-[#0B2A6B]/25 p-5 sm:p-6 flex flex-col justify-between hover:border-[#0B2A6B] transition-colors group"
                >
                  <div>
                    {/* Visual Media Frame (Arch or Square Frame) */}
                    <div
                      className={`relative w-full aspect-[16/11] bg-[#0B2A6B] border border-[#A67C37] p-5 flex flex-col justify-between overflow-hidden text-[#EFE6D6] mb-4 ${
                        isArch ? "rounded-t-[140px]" : ""
                      }`}
                    >
                      {/* Geometric grid backdrop */}
                      <div className="absolute inset-0 opacity-15 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id={`gal-grid-${item.id}`} width="28" height="28" patternUnits="userSpaceOnUse">
                              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#EFE6D6" strokeWidth="0.75" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#gal-grid-${item.id})`} />
                        </svg>
                      </div>

                      {/* Top Bar inside image frame */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-widest">
                        <span className="px-2 py-0.5 bg-[#071D4D] border border-[#A67C37]/40 text-[#A67C37]">
                          {item.category}
                        </span>
                        <span className="font-mono text-[#EFE6D6]/75">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Center Graphic */}
                      <div className="relative z-10 my-auto text-center py-2">
                        <div className="w-12 h-14 mx-auto mb-2 opacity-90 transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src="/logo/5e-logo.png"
                            alt="5e Serpraise Logo"
                            width={48}
                            height={44}
                            className="w-full h-auto drop-shadow-none object-contain"
                          />
                        </div>
                        <span className="font-serif italic text-xs text-[#A67C37] block">
                          {item.tagline}
                        </span>
                      </div>

                      {/* Bottom location bar inside frame */}
                      <div className="relative z-10 border-t border-[#A67C37]/40 pt-2 flex items-center justify-between text-[11px] font-sans text-[#EFE6D6]/80">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#D62839]" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3 h-3 text-[#A67C37]" />
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="space-y-2">
                      <div className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
                        {item.category}
                      </div>

                      <h3 className="font-serif font-extrabold text-xl text-[#0B2A6B] leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/80 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 mt-5 border-t border-[#A67C37]/30 flex items-center justify-between text-xs font-sans text-[#15151A]/60">
                    <span>5e Serpraise Archive</span>
                    <span className="font-serif italic text-[#A67C37] font-semibold">
                      India &bull; Australia
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Gallery Submission / Photo Note */}
        <div className="mt-14 p-8 bg-[#0B2A6B] text-[#EFE6D6] border-2 border-[#A67C37] text-center max-w-[800px] mx-auto space-y-3">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#A67C37] block">
            CORPORATE WORKSHOP &amp; EVENT PHOTOGRAPHY
          </span>
          <h3 className="font-serif font-extrabold text-2xl text-[#EFE6D6]">
            Documenting Transformation in Real Time
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#EFE6D6]/85 max-w-[56ch] mx-auto leading-relaxed">
            Our experiential workshops are documented with participants&apos; consent to preserve milestone learning moments, team commitments, and cultural breakthroughs.
          </p>
        </div>
      </Container>
    </section>
  );
}
