"use client";

import React from "react";
import { Container } from "../layout/Container";
import { ArchPanel, ArchPanelProps } from "./ArchPanel";
import { HeroSequence } from "../animation/HeroSequence";

export interface EditorialHeroProps {
  eyebrow: string | React.ReactNode;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description: string | React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  visual?: React.ReactNode;
  panelProps?: ArchPanelProps;
}

export function EditorialHero({
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  footer,
  visual,
  panelProps,
}: EditorialHeroProps) {
  const renderedEyebrow =
    typeof eyebrow === "string" ? (
      <div className="flex items-center gap-2.5">
        <span className="w-5 h-[1.5px] bg-[#A67C37]" />
        <span className="font-sans text-[11px] sm:text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
          {eyebrow}
        </span>
      </div>
    ) : (
      eyebrow
    );

  const renderedHeading =
    typeof title === "string" ? (
      <h1 className="font-serif font-extrabold text-[clamp(38px,4.8vw,64px)] leading-[1.06] tracking-[-0.02em] text-[#0B2A6B]">
        {title}
      </h1>
    ) : (
      title
    );

  const renderedSubline =
    typeof subtitle === "string" ? (
      <div className="font-serif italic font-medium text-[clamp(24px,3vw,40px)] text-[#D62839] leading-[1.18] mt-3">
        {subtitle}
      </div>
    ) : subtitle ? (
      subtitle
    ) : null;

  const renderedParagraph =
    typeof description === "string" ? (
      <p className="font-sans text-[17px] text-[#15151A] leading-[1.65] max-w-[560px]">
        {description}
      </p>
    ) : (
      description
    );

  const renderedVisual = visual || <ArchPanel {...panelProps} />;

  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-[80px] bg-[#EFE6D6] overflow-hidden">
      <Container size="wide">
        <HeroSequence
          eyebrow={renderedEyebrow}
          heading={renderedHeading}
          subline={renderedSubline}
          paragraph={renderedParagraph}
          actions={actions || <div />}
          footer={footer}
          visual={renderedVisual}
        />
      </Container>
    </section>
  );
}
