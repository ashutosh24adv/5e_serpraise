"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface OrnamentDividerProps {
  className?: string;
  lineColor?: string;
  pentagonColor?: string;
}

export function OrnamentDivider({
  className = "",
  lineColor = "bg-[#A67C37]",
  pentagonColor = "#A67C37",
}: OrnamentDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className={`w-full flex items-center justify-center gap-4 py-8 select-none ${className}`}
        aria-hidden="true"
      >
        <span className={`flex-1 h-[1px] ${lineColor} opacity-70`} />
        <svg
          width="14"
          height="15"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <polygon
            points="10,1 19,7 16,19 4,19 1,7"
            fill={pentagonColor}
            stroke={pentagonColor}
            strokeWidth="1"
          />
        </svg>
        <span className={`flex-1 h-[1px] ${lineColor} opacity-70`} />
      </div>
    );
  }

  return (
    <div
      className={`w-full flex items-center justify-center gap-4 py-8 select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Left expanding line */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-1 h-[1px] ${lineColor} opacity-70 origin-right`}
      />

      {/* Center Pentagon Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex-shrink-0"
      >
        <svg
          width="14"
          height="15"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="10,1 19,7 16,19 4,19 1,7"
            fill={pentagonColor}
            stroke={pentagonColor}
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Right expanding line */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-1 h-[1px] ${lineColor} opacity-70 origin-left`}
      />
    </div>
  );
}
