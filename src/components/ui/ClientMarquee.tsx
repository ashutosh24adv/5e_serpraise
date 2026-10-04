"use client";

import React from "react";

export function ClientMarquee() {
  const items = [
    "Over 100 Corporate Clients",
    "Est. 2003 in India",
    "Executive Leadership & Strategy",
    "Organizational Capability",
    "Presence in Australia",
    "Repeat Orders & Partnerships",
    "Culture Transformation",
    "Experiential Adult Learning",
  ];

  return (
    <div className="w-full bg-[#0B2A6B] py-5 overflow-hidden select-none double-brass-border-y">
      <div className="flex w-max animate-marquee space-x-8 items-center marquee-track">
        {/* Render twice for seamless infinite loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-8 flex-shrink-0">
            <span className="font-serif italic text-[20px] sm:text-[22px] text-[#EFE6D6] tracking-wide whitespace-nowrap">
              {text}
            </span>
            <svg
              width="10"
              height="11"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              aria-hidden="true"
            >
              <polygon points="10,1 19,7 16,19 4,19 1,7" fill="#A67C37" />
            </svg>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
