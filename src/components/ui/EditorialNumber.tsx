import React from "react";

interface EditorialNumberProps {
  number: string | number;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "outline" | "solid" | "accent";
  className?: string;
}

export function EditorialNumber({
  number,
  size = "md",
  variant = "outline",
  className = "",
}: EditorialNumberProps) {
  const formattedNumber =
    typeof number === "number" && number < 10
      ? `0${number}`
      : number.toString();

  const sizeClasses = {
    sm: "text-2xl sm:text-3xl",
    md: "text-4xl sm:text-5xl",
    lg: "text-6xl sm:text-7xl",
    xl: "text-7xl sm:text-8xl",
  };

  const variantClasses = {
    outline: "font-serif font-light text-primary/25 group-hover:text-accent transition-colors duration-300",
    solid: "font-serif font-medium text-primary",
    accent: "font-serif font-medium text-accent",
  };

  return (
    <span
      className={`select-none leading-none tracking-tight ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    >
      {formattedNumber}
    </span>
  );
}
