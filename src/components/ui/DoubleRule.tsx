import React from "react";

interface DoubleRuleProps {
  className?: string;
  color?: string;
}

export function DoubleRule({ className = "", color = "#A67C37" }: DoubleRuleProps) {
  return (
    <div
      className={`w-full ${className}`}
      style={{ borderBottom: `3px double ${color}` }}
      aria-hidden="true"
    />
  );
}
