import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "split";
  theme?: "light" | "dark";
  className?: string;
  size?: "default" | "lg" | "sm";
  children?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
  size = "default",
  children,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  const titleSizes = {
    sm: "text-2xl sm:text-3xl lg:text-4xl",
    default: "text-3xl sm:text-4xl lg:text-5xl",
    lg: "text-4xl sm:text-5xl lg:text-6xl",
  };

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto max-w-3xl",
    split: "text-left items-start lg:grid lg:grid-cols-12 lg:gap-12 lg:items-end",
  };

  if (align === "split") {
    return (
      <div className={`w-full mb-12 sm:mb-16 ${className}`}>
        <div className="lg:col-span-6">
          {eyebrow && (
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-accent" />
              <span
                className={`text-xs font-semibold tracking-widest uppercase font-sans ${
                  isDark ? "text-accent" : "text-accent"
                }`}
              >
                {eyebrow}
              </span>
            </div>
          )}
          <h2
            className={`font-serif font-medium tracking-tight leading-[1.15] ${
              titleSizes[size]
            } ${isDark ? "text-white" : "text-primary"}`}
          >
            {title}
          </h2>
        </div>
        <div className="lg:col-span-6 mt-4 lg:mt-0 flex flex-col justify-end">
          {subtitle && (
            <p
              className={`text-base sm:text-lg leading-relaxed font-sans ${
                isDark ? "text-slate-300" : "text-muted"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col mb-10 sm:mb-14 ${alignClasses[align]} ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-[1.5px] bg-accent" />
          <span className="text-xs font-semibold tracking-widest uppercase font-sans text-accent">
            {eyebrow}
          </span>
          {align === "center" && <span className="w-5 h-[1.5px] bg-accent" />}
        </div>
      )}
      <h2
        className={`font-serif font-medium tracking-tight leading-[1.15] ${
          titleSizes[size]
        } ${isDark ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-sans max-w-3xl ${
            isDark ? "text-slate-300" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
