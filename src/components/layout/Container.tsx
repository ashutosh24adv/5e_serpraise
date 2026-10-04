import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "wide" | "standard" | "narrow" | "full";
}

export function Container({
  children,
  className = "",
  size = "standard",
}: ContainerProps) {
  // Official 3-tier container system:
  // - wide: 1280px (Navbar, Hero, Major visual sections, large grids)
  // - standard: 1120px (Content sections, program rows, OD services)
  // - narrow: 900px (Quotes, long-form copy, focused editorial content)
  const sizeClasses = {
    wide: "max-w-[1280px]",
    standard: "max-w-[1120px]",
    narrow: "max-w-[900px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-10 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
