import React from "react";

interface SectionLabelProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionLabel({
  title,
  subtitle,
  className = "",
  align = "left",
}: SectionLabelProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-1 mb-4 ${
        isCenter ? "text-center flex flex-col items-center" : ""
      } ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="w-5 h-[1.5px] bg-[#A67C37]" />
        <span className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#0B2A6B]">
          {title}
        </span>
        {isCenter && <span className="w-5 h-[1.5px] bg-[#A67C37]" />}
      </div>
      {subtitle && (
        <p className="font-serif italic text-xs text-[#A67C37] mt-0.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}
