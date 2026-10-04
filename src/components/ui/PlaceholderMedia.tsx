import React from "react";
import Image from "next/image";
import { Users, Award, BookOpen, Target, Sparkles, Building2, TrendingUp, Layers } from "lucide-react";

interface PlaceholderMediaProps {
  src?: string;
  alt: string;
  category?: "training" | "workshop" | "leadership" | "od" | "consulting" | "executive" | "team";
  title?: string;
  subtitle?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide" | "tall";
  className?: string;
  priority?: boolean;
}

export function PlaceholderMedia({
  src,
  alt,
  category = "training",
  title,
  subtitle,
  aspectRatio = "video",
  className = "",
  priority = false,
}: PlaceholderMediaProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-[16/10]",
    portrait: "aspect-[4/5]",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
  };

  const categoryIcons = {
    training: BookOpen,
    workshop: Users,
    leadership: Award,
    od: Layers,
    consulting: Building2,
    executive: Target,
    team: TrendingUp,
  };

  const IconComponent = categoryIcons[category] || Sparkles;

  if (src && !src.startsWith("placeholder")) {
    return (
      <div
        className={`relative overflow-hidden bg-surface border border-border rounded-sm ${aspectClasses[aspectRatio]} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#1E2048] via-[#2E2F63] to-[#141630] border border-primary/20 rounded-sm text-white shadow-sm flex flex-col justify-between p-6 sm:p-8 ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Editorial geometric grid backdrop */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Subtle top accent bar */}
      <div className="absolute top-0 left-0 w-24 h-1 bg-accent" />

      {/* Top Header info */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xs text-[11px] font-sans tracking-widest uppercase font-semibold text-slate-200">
          <IconComponent className="w-3.5 h-3.5 text-accent" />
          <span>5e {category}</span>
        </div>
        <span className="text-[11px] font-mono text-white/50 tracking-wider">
          EST. 2003
        </span>
      </div>

      {/* Center Graphic */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-3 shadow-inner">
          <IconComponent className="w-7 h-7 text-white/90" />
        </div>
        {title && (
          <h4 className="font-serif text-lg sm:text-xl text-white font-medium max-w-xs leading-snug">
            {title}
          </h4>
        )}
        {subtitle && (
          <p className="font-sans text-xs text-slate-300 mt-1.5 max-w-xs font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] font-sans text-slate-300">
        <span className="font-medium tracking-wide">5e Serpraise Interventions</span>
        <span className="text-accent font-semibold tracking-wider uppercase text-[10px]">
          Corporate Excellence
        </span>
      </div>
    </div>
  );
}
