"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroSequenceProps {
  eyebrow: React.ReactNode;
  heading: React.ReactNode;
  subline: React.ReactNode;
  paragraph: React.ReactNode;
  actions: React.ReactNode;
  footer?: React.ReactNode;
  visual: React.ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSequence({
  eyebrow,
  heading,
  subline,
  paragraph,
  actions,
  footer,
  visual,
}: HeroSequenceProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 max-w-[680px] space-y-7">
          {eyebrow}
          <div>
            {heading}
            {subline}
          </div>
          {paragraph}
          {actions}
          {footer}
        </div>
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          {visual}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left Column Text Sequence */}
      <div className="lg:col-span-7 max-w-[680px] space-y-7">
        {/* 0.00s Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.0, ease }}
        >
          {eyebrow}
        </motion.div>

        {/* 0.08s Main Heading + 0.16s Sub-line */}
        <div className="max-w-[700px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            {heading}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease }}
          >
            {subline}
          </motion.div>
        </div>

        {/* 0.24s Lead Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease }}
        >
          {paragraph}
        </motion.div>

        {/* 0.32s Actions / CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease }}
        >
          {actions}
        </motion.div>

        {/* 0.40s Footer / Credibility */}
        {footer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            {footer}
          </motion.div>
        )}
      </div>

      {/* 0.12s Right Visual (Arch Panel) with 0.97 -> 1 scale & opacity */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease }}
        className="lg:col-span-5 flex justify-center lg:justify-end w-full"
      >
        {visual}
      </motion.div>
    </div>
  );
}
