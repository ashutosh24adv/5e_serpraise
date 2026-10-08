"use client";

import React from "react";
import Image from "next/image";
import { clientRoster } from "@/content/clients";

export function ClientMarquee() {
  const featuredClients = clientRoster.filter((c) => c.featured);
  const track = [...featuredClients, ...featuredClients];

  return (
    <section
      className="w-full bg-[#0B2A6B] py-6 sm:py-7 lg:py-8 overflow-hidden select-none double-brass-border-y relative"
      aria-label="Our Corporate Clients"
    >
      {/* Editorial Section Label */}
      <div className="flex items-center justify-center gap-3 mb-3.5 sm:mb-4 px-4">
        <span className="w-8 sm:w-12 h-[1px] bg-[#A67C37]/60" />
        <span className="font-sans text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#A67C37]">
          OUR CLIENTS &amp; PARTNERS
        </span>
        <span className="w-8 sm:w-12 h-[1px] bg-[#A67C37]/60" />
      </div>

      {/* Marquee Infinite Loop Track */}
      <div className="flex w-max animate-client-marquee items-center marquee-track">
        {track.map((client, idx) => (
          <div key={`${client.id}-${idx}`} className="flex items-center flex-shrink-0 gap-3 px-3 sm:px-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white p-1 flex items-center justify-center border border-[#A67C37]/40">
              <Image
                src={client.logo}
                alt={client.name}
                width={36}
                height={36}
                className="max-h-6 max-w-[28px] object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <span className="font-serif italic font-medium text-[17px] sm:text-[20px] lg:text-[22px] text-[#EFE6D6] tracking-wide whitespace-nowrap">
              {client.name}
            </span>
            <div className="pl-4 sm:pl-6 flex-shrink-0 flex items-center justify-center">
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
          animation: clientMarquee 48s linear infinite;
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
