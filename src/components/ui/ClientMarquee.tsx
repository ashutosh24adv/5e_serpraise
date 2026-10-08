"use client";

import React from "react";
import Image from "next/image";
import { clientRoster } from "@/content/clients";

export function ClientMarquee() {
  const featuredClients = clientRoster.filter((c) => c.featured);
  const track = [...featuredClients, ...featuredClients];

  return (
    <section
      className="w-full bg-[#0B2A6B] py-4 sm:py-5 lg:py-6 overflow-hidden select-none double-brass-border-y relative"
      aria-label="Our Corporate Clients"
    >
      {/* Editorial Section Label */}
      <div className="flex items-center justify-center gap-3 mb-2.5 sm:mb-3 px-4">
        <span className="w-8 sm:w-14 h-[1px] bg-[#A67C37]/60" />
        <span className="font-sans text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#A67C37]">
          OUR CLIENTS &amp; PARTNERS
        </span>
        <span className="w-8 sm:w-14 h-[1px] bg-[#A67C37]/60" />
      </div>

      {/* Marquee Infinite Loop Track */}
      <div className="flex w-max animate-client-marquee items-center marquee-track">
        {track.map((client, idx) => (
          <div
            key={`${client.id}-${idx}`}
            className="flex items-center flex-shrink-0 gap-4 sm:gap-5 px-6 sm:px-8 lg:px-10"
          >
            {/* Prominent Company Logo Container */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white p-2 sm:p-2.5 lg:p-3 flex items-center justify-center border border-[#A67C37]/50 shadow-sm flex-shrink-0">
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={80}
                className="max-h-10 sm:max-h-12 lg:max-h-14 max-w-full object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            {/* Company Name */}
            <span className="font-serif italic font-medium text-[20px] sm:text-[23px] lg:text-[26px] text-[#EFE6D6] tracking-wide whitespace-nowrap">
              {client.name}
            </span>

            {/* Gold Pentagon Separator */}
            <div className="pl-6 sm:pl-8 lg:pl-10 flex-shrink-0 flex items-center justify-center">
              <svg
                width="11"
                height="12"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 opacity-80"
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
          animation: clientMarquee 90s linear infinite;
          will-change: transform;
        }
        .animate-client-marquee:hover {
          animation-play-state: paused;
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
