import React from "react";

interface FiveESealProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

export function FiveESeal({
  size = 48,
  color = "#0B2A6B",
  accentColor = "#A67C37",
  className = "",
}: FiveESealProps) {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 1.12 }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Pentagon Line */}
        <polygon
          points="50,3 97,37 79,98 21,98 3,37"
          fill="none"
          stroke={accentColor}
          strokeWidth="2"
        />

        {/* Inner Pentagon */}
        <polygon
          points="50,9 91,39 75,92 25,92 9,39"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />

        {/* Five Radiating Diamond Nodes representing E1 to E5 */}
        <circle cx="50" cy="18" r="3" fill={accentColor} />
        <circle cx="81" cy="41" r="3" fill={accentColor} />
        <circle cx="69" cy="83" r="3" fill={accentColor} />
        <circle cx="31" cy="83" r="3" fill={accentColor} />
        <circle cx="19" cy="41" r="3" fill={accentColor} />

        {/* Central 5E Monogram in Serif */}
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fill={color}
          fontFamily="var(--font-playfair), Georgia, serif"
          fontSize="24"
          fontWeight="800"
          fontStyle="italic"
        >
          5E
        </text>
      </svg>
    </div>
  );
}
