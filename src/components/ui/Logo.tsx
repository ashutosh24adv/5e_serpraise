import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "navy" | "sand";
}

export function Logo({
  className = "",
  variant = "navy",
}: LogoProps) {
  const textColor = variant === "sand" ? "text-[#EFE6D6]" : "text-[#0B2A6B]";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="5e Serpraise Home"
    >
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <Image
          src="/logo/5e-logo.svg"
          alt="5e Serpraise Seal"
          width={34}
          height={38}
          className="w-auto h-[36px]"
          priority
        />
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-sans font-extrabold text-[17px] tracking-tight ${textColor}`}
          >
            5e
          </span>
          <span
            className={`font-sans font-extrabold text-[17px] tracking-wider uppercase ${textColor}`}
          >
            SERPRAISE
          </span>
        </div>
        <span className="font-serif italic text-[11px] text-[#A67C37] mt-0.5">
          Est. 2003
        </span>
      </div>
    </Link>
  );
}
