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
          src="/logo/5e-logo.png"
          alt="5e Serpraise Logo"
          width={40}
          height={40}
          className="w-[38px] h-[38px] object-contain"
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
        <span className="font-serif italic text-[11px] text-[#D62839] mt-0.5">
          Enriching Everyone
        </span>
      </div>
    </Link>
  );
}
