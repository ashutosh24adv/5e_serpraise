"use client";

import React from "react";
import { corporateClients } from "@/content/clients";

export function ClientMarquee() {
  return (
    <section
      className="w-full bg-[#0B2A6B] py-6 sm:py-7 lg:py-8 overflow-hidden select-none double-brass-border-y relative"
      aria-label="Our Corporate Clients"
    >
      {/* Editorial Section Label */}
      <div className="flex items-center justify-center gap-3 mb-3.5 sm:mb-4 px-4">
        <span className="w-8 sm:w-12 h-[1px] bg-[#A67C37]/60" />
        <span className="font-sans text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#A67C37]">
          OUR CLIENTS
        </span>
        <span className="w-8 sm:w-12 h-[1px] bg-[#A67C37]/60" />
      </div>

      {/* Marquee Infinite Loop Track (Track A + Track B for seamless loop) */}
      <div className="flex w-max animate-client-marquee items-center marquee-track">
        {/* Track A + Track B */}
        {[...corporateClients, ...corporateClients].map((client, idx) => (
          <div key={idx} className="flex items-center flex-shrink-0">
            <span className="font-serif italic font-medium text-[19px] sm:text-[22px] lg:text-[24px] text-[#EFE6D6] tracking-wide whitespace-nowrap">
              {client}
            </span>
            <div className="px-5 sm:px-7 lg:px-8 flex-shrink-0 flex items-center justify-center">
              <svg
                width="9"
                height="10"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
                aria-hidden="true"
              >
                <polygon points="10,1 19,7 16,19 4,19 1,7" fill="#A67C37" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes clientMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-client-marquee {
          animation: clientMarquee 42s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-client-marquee {
            animation: none !important;
            transform: none !important;
            overflow-x: auto;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
