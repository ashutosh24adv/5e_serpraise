import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline" | "subtle" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "outline",
  size = "sm",
  className = "",
}: BadgeProps) {
  const variantClasses = {
    primary: "bg-primary text-white border-primary",
    accent: "bg-accent text-white border-accent",
    outline: "bg-white text-primary border-border hover:border-primary/40",
    subtle: "bg-surface text-primary border-border-subtle",
    dark: "bg-slate-800 text-slate-200 border-slate-700",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider font-semibold uppercase",
    md: "text-xs px-3 py-1 tracking-wider font-semibold uppercase",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border font-sans transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
