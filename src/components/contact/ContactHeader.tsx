"use client";

import React from "react";
import { Container } from "../layout/Container";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-[80px] bg-[#EFE6D6] border-b border-[#A67C37]/40 overflow-hidden">
      <Container size="wide">
        <div className="max-w-[880px]">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0, ease }}
            className="flex items-center gap-2.5 mb-5"
          >
            <span className="w-5 h-[1.5px] bg-[#A67C37]" />
            <span className="font-sans text-[11px] sm:text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
              DIRECT CONSULTATION
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            <h1 className="font-serif font-extrabold text-[clamp(38px,4.8vw,64px)] leading-[1.06] tracking-[-0.02em] text-[#0B2A6B]">
              Connect With 5e Specialist
            </h1>
          </motion.div>

          {/* Gold Italic Subtitle */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease }}
            className="font-serif italic font-medium text-[clamp(20px,2.5vw,30px)] text-[#A67C37] leading-[1.2] mt-3"
          >
            Preliminary discovery and advisory session for progressive organizations.
          </motion.div>

          {/* Description */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
          >
            <p className="font-sans text-[17px] text-[#15151A] leading-[1.65] max-w-[680px] mt-5">
              Schedule a preliminary discovery session with our team in India and Australia to discuss your organization’s training, executive coaching, or OD interventions.
            </p>
          </motion.div>

          {/* Quick Practice Badges */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="pt-8 mt-8 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-6 sm:gap-8 text-[13px] font-sans text-[#15151A]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D62839]" />
              <span className="font-bold text-[#0B2A6B]">India Corporate Office</span>
              <span className="text-[#15151A]/70">(Chennai &amp; Bengaluru)</span>
            </div>
            <span className="text-[#A67C37]" aria-hidden="true">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A67C37]" />
              <span className="font-bold text-[#0B2A6B]">Australia Regional Office</span>
              <span className="text-[#15151A]/70">(Melbourne)</span>
            </div>
            <span className="text-[#A67C37]" aria-hidden="true">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0B2A6B]" />
              <span className="font-bold text-[#0B2A6B]">Confidential Discovery</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
