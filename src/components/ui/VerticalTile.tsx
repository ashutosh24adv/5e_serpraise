import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type VerticalType = "EDUCATE" | "ENRICH" | "ENJOY" | "EMPATHISE" | "ENERGISE";

interface VerticalTileProps {
  type: VerticalType;
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  className?: string;
}

export function VerticalTile({
  type,
  title,
  subtitle,
  description,
  href,
  className = "",
}: VerticalTileProps) {
  // Official vertical color specifications
  const themeStyles: Record<
    VerticalType,
    { bg: string; text: string; subText: string; ghostColor: string; linkIcon: string }
  > = {
    EDUCATE: {
      bg: "bg-[#0B2A6B]",
      text: "text-[#EFE6D6]",
      subText: "text-[#EFE6D6]/80",
      ghostColor: "text-[#EFE6D6]",
      linkIcon: "text-[#A67C37]",
    },
    ENRICH: {
      bg: "bg-[#D62839]",
      text: "text-white",
      subText: "text-white/90",
      ghostColor: "text-white",
      linkIcon: "text-white",
    },
    ENJOY: {
      bg: "bg-[#A67C37]",
      text: "text-[#15151A]",
      subText: "text-[#15151A]/80",
      ghostColor: "text-[#15151A]",
      linkIcon: "text-[#15151A]",
    },
    EMPATHISE: {
      bg: "bg-transparent",
      text: "text-[#0B2A6B]",
      subText: "text-[#15151A]/80",
      ghostColor: "text-[#0B2A6B]",
      linkIcon: "text-[#D62839]",
    },
    ENERGISE: {
      bg: "bg-transparent",
      text: "text-[#0B2A6B]",
      subText: "text-[#15151A]/80",
      ghostColor: "text-[#0B2A6B]",
      linkIcon: "text-[#D62839]",
    },
  };

  const style = themeStyles[type];

  const content = (
    <div
      className={`relative p-[26px] min-h-[190px] border-[1.5px] border-[#0B2A6B] ${style.bg} flex flex-col justify-between overflow-hidden group transition-all duration-300 ${className}`}
    >
      {/* Ghost Letter E: 84px Playfair Italic 800 at 18% opacity, top right */}
      <span
        className={`absolute top-1 right-3 font-serif italic font-extrabold text-[84px] leading-none select-none pointer-events-none opacity-[0.18] ${style.ghostColor}`}
        aria-hidden="true"
      >
        E
      </span>

      {/* Top Header Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span
          className={`font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase ${style.text}`}
        >
          {type}
        </span>
        {href && (
          <ArrowUpRight
            className={`w-4 h-4 ${style.linkIcon} transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
          />
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 mt-6 pt-4">
        <h4 className={`font-serif text-[26px] font-extrabold leading-tight ${style.text}`}>
          {title}
        </h4>
        <p className={`font-serif italic text-sm mt-0.5 ${style.subText}`}>
          {subtitle}
        </p>
        <p className={`font-sans text-xs mt-2 leading-relaxed ${style.subText}`}>
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
