"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";
import type { ClientItem } from "@/content/clients";

interface ClientLogoCardProps {
  client: ClientItem;
}

export function ClientLogoCard({ client }: ClientLogoCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group bg-[#FCFAF6] border border-[#0B2A6B]/20 hover:border-[#0B2A6B] hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-3 sm:p-4 flex flex-col items-center justify-between min-h-[148px] text-center relative z-0 hover:z-20 cursor-pointer"
      title={`${client.name} - ${client.category}`}
    >
      {/* Top Logo Container with controlled viewport and prominent enlargement on cursor hover */}
      <div className="w-full h-18 sm:h-20 flex items-center justify-center p-2 relative bg-white border border-[#A67C37]/20 group-hover:border-[#0B2A6B]/40 transition-colors duration-300 overflow-hidden">
        {!imageError ? (
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            width={140}
            height={56}
            className="max-h-11 sm:max-h-12 max-w-[115px] object-contain transition-all duration-300 ease-out group-hover:scale-125 drop-shadow-none group-hover:drop-shadow-sm"
            style={{ width: "auto", height: "auto" }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-[#A67C37] transition-transform duration-300 group-hover:scale-110">
            <Building2 className="w-6 h-6 mb-1 opacity-70 group-hover:text-[#D62839] transition-colors" />
            <span className="text-[10px] font-mono uppercase">{client.id}</span>
          </div>
        )}
      </div>

      {/* Client Label & Category */}
      <div className="w-full mt-3 flex flex-col items-center justify-center">
        <h4 className="font-serif font-bold text-xs sm:text-[13px] text-[#0B2A6B] group-hover:text-[#D62839] transition-colors line-clamp-1 leading-snug">
          {client.name}
        </h4>
        <span className="font-sans text-[9px] uppercase tracking-wider text-[#15151A]/60 mt-0.5 line-clamp-1 group-hover:text-[#A67C37] transition-colors">
          {client.category}
        </span>
      </div>
    </div>
  );
}
