"use client";

import React from "react";
import { Container } from "../layout/Container";
import { motion, useReducedMotion } from "framer-motion";

interface InteractiveQuoteProps {
  quote?: string;
  attribution?: string;
  subAttribution?: string;
  eyebrow?: string;
}

export function InteractiveQuote({
  quote = "Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness.",
  attribution = "5e SERPRAISE",
  subAttribution = "CORE GUIDING PURPOSE",
  eyebrow = "EDITORIAL REFLECTION",
}: InteractiveQuoteProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#0B2A6B] py-16 sm:py-20 lg:py-24 text-[#EFE6D6] overflow-hidden double-brass-border-y relative">
      <Container size="narrow">
        <div className="text-center space-y-6">
          {/* Subtle Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-4 h-[1px] bg-[#A67C37]" />
            <span className="font-sans text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#A67C37]">
              {eyebrow}
            </span>
            <span className="w-4 h-[1px] bg-[#A67C37]" />
          </motion.div>

          {/* Large Editorial Serif Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic font-normal text-[clamp(24px,3.6vw,38px)] leading-[1.28] tracking-tight text-[#EFE6D6] max-w-[820px] mx-auto"
          >
            &ldquo;{quote}&rdquo;
          </motion.blockquote>

          {/* Brass Pentagon Divider */}
          <div className="flex items-center justify-center gap-3 py-2">
            <span className="w-12 h-[1px] bg-[#A67C37]/60" />
            <svg
              width="12"
              height="13"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <polygon points="10,1 19,7 16,19 4,19 1,7" fill="#A67C37" />
            </svg>
            <span className="w-12 h-[1px] bg-[#A67C37]/60" />
          </div>

          {/* Attribution & Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-1"
          >
            <div className="font-sans font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#EFE6D6]">
              {attribution}
            </div>
            <div className="font-serif italic text-xs text-[#A67C37]">
              {subAttribution}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
