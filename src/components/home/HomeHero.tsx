"use client";

import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { ArchPanel } from "../ui/ArchPanel";
import { HeroSequence } from "../animation/HeroSequence";
import { siteConfig } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-[80px] bg-[#EFE6D6] overflow-hidden" id="hero">
      <Container size="wide">
        <HeroSequence
          eyebrow={
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] sm:text-xs font-extrabold tracking-[0.2em] uppercase text-[#D62839]">
                CHAPTER 01
              </span>
              <span className="text-[#A67C37] text-xs" aria-hidden="true">
                &bull;
              </span>
              <span className="font-sans text-[11px] sm:text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                5e SERPRAISE &bull; ESTABLISHED 2003
              </span>
            </div>
          }
          heading={
            <h1 className="font-serif font-extrabold text-[clamp(38px,4.8vw,64px)] leading-[1.06] tracking-[-0.02em] text-[#0B2A6B]">
              Corporate training &amp; organizational development.
            </h1>
          }
          subline={
            <div className="font-serif italic font-medium text-[clamp(24px,3vw,40px)] text-[#D62839] leading-[1.18] mt-3">
              Enriching people. Strengthening organizations.
            </div>
          }
          paragraph={
            <p className="font-sans text-[17px] text-[#15151A] leading-[1.65] max-w-[560px]">
              {siteConfig.shortDescription}
            </p>
          }
          actions={
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Button href="/training" variant="primary">
                Explore Training
              </Button>
              <Button href="/od-projects" variant="secondary-link">
                Explore OD Projects
              </Button>
            </div>
          }
          footer={
            <div className="pt-7 border-t border-[#A67C37]/40 flex flex-wrap items-center gap-8 text-[14px] font-sans text-[#15151A]">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-extrabold text-[20px] text-[#0B2A6B]">2003</span>
                <span className="text-[#15151A]/80">Established</span>
              </div>
              <span className="text-[#A67C37]" aria-hidden="true">&bull;</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-extrabold text-[20px] text-[#0B2A6B]">100+</span>
                <span className="text-[#15151A]/80">Corporate Clients</span>
              </div>
              <span className="text-[#A67C37]" aria-hidden="true">&bull;</span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#0B2A6B] tracking-wide uppercase text-xs">India &bull; Australia</span>
              </div>
            </div>
          }
          visual={
            <ArchPanel
              title="Corporate Capability"
              subtitle="Transforming talent and organizational architecture since 2003"
            />
          }
        />
      </Container>
    </section>
  );
}
