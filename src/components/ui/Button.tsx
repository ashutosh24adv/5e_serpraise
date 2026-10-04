import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary-link" | "navy" | "outline-brass" | "sand-link";
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  icon = false,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  // Official animations: 0.3s transition, arrow shifts 3-4px, expanding brass underline for links
  const variantClasses = {
    primary:
      "group inline-flex items-center justify-center gap-2 bg-[#D62839] text-white font-sans font-bold text-[15px] px-[28px] py-[15px] hover:bg-[#BC1F2F] transition-colors duration-300 cursor-pointer text-center select-none",
    "secondary-link":
      "group relative inline-flex items-center gap-1.5 text-[#0B2A6B] font-sans font-bold text-[15px] hover:text-[#D62839] transition-colors duration-300 cursor-pointer select-none pb-1",
    navy:
      "group inline-flex items-center justify-center gap-2 bg-[#0B2A6B] text-[#EFE6D6] font-sans font-bold text-[15px] px-[28px] py-[15px] hover:bg-[#071D4D] transition-colors duration-300 cursor-pointer text-center select-none",
    "outline-brass":
      "group inline-flex items-center justify-center gap-2 bg-transparent text-[#0B2A6B] border border-[#A67C37] font-sans font-bold text-[15px] px-[26px] py-[13px] hover:bg-[#0B2A6B] hover:text-[#EFE6D6] hover:border-[#0B2A6B] transition-colors duration-300 cursor-pointer text-center select-none",
    "sand-link":
      "group relative inline-flex items-center gap-1.5 text-[#EFE6D6] font-sans font-bold text-[15px] hover:text-white transition-colors duration-300 cursor-pointer select-none pb-1",
  };

  const isLink = variant === "secondary-link" || variant === "sand-link";
  const underlineColor = variant === "sand-link" ? "bg-[#A67C37]" : "bg-[#A67C37]";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {/* Animated Brass Underline for secondary links */}
      {isLink && (
        <span
          className={`absolute bottom-0 left-0 w-full h-[2px] ${underlineColor} origin-left transition-transform duration-300 group-hover:scale-x-105`}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${variantClasses[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
