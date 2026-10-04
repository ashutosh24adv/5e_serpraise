import React from "react";

interface HeritageDividerProps {
  className?: string;
  variant?: "double" | "single";
}

export function HeritageDivider({
  className = "",
  variant = "double",
}: HeritageDividerProps) {
  return (
    <div
      className={`w-full flex items-center justify-center gap-4 py-8 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Left Double Brass Line */}
      <div className="flex-1 flex flex-col gap-[3px]">
        <span className="w-full h-[1px] bg-[#A67C37]/80" />
        {variant === "double" && (
          <span className="w-full h-[1px] bg-[#A67C37]/80" />
        )}
      </div>

      {/* Center Brass Pentagon Diamond */}
      <div className="flex-shrink-0 flex items-center justify-center px-1">
        <svg
          width="16"
          height="17"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#A67C37]"
        >
          <polygon
            points="10,1 19,7 16,19 4,19 1,7"
            fill="#A67C37"
            stroke="#A67C37"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Right Double Brass Line */}
      <div className="flex-1 flex flex-col gap-[3px]">
        <span className="w-full h-[1px] bg-[#A67C37]/80" />
        {variant === "double" && (
          <span className="w-full h-[1px] bg-[#A67C37]/80" />
        )}
      </div>
    </div>
  );
}
