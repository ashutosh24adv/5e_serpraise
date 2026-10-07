"use client";

import React from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { HeritageDivider } from "../ui/HeritageDivider";
import { aboutContent } from "@/content/about";
import { Award, Briefcase, GraduationCap, Users, Sparkles, Building2 } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  const { team } = aboutContent;

  return (
    <section
      className="py-[84px] bg-[#EFE6D6] border-b border-[#A67C37]/40 scroll-mt-24"
      id="team"
    >
      <Container size="wide">
        <HeritageDivider />

        {/* Section Heading */}
        <div className="my-8 text-center max-w-[760px] mx-auto space-y-3">
          <SectionLabel
            title={team.eyebrow}
            subtitle="Seasoned corporate leadership grounding every 5e Serpraise engagement."
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(32px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            {team.title}
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            {team.subtitle}
          </p>
        </div>

        {/* Team Members List (Data-driven for future additions) */}
        <div className="space-y-12 mt-12">
          {team.members.map((member) => (
            <div
              key={member.id}
              className="bg-[#F7F1E6] border-2 border-[#0B2A6B]/25 p-8 sm:p-12 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Architectural Portrait Card */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-full max-w-[280px]">
                    {/* Arch-Framed Portrait Frame */}
                    <div
                      className="relative w-full aspect-[4/5] bg-[#0B2A6B] border-2 border-[#A67C37] p-6 flex flex-col justify-between items-center text-[#EFE6D6] overflow-hidden"
                      style={{ borderRadius: "999px 999px 0 0" }}
                    >
                      {/* Grid background */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="team-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#EFE6D6" strokeWidth="0.75" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#team-grid)" />
                        </svg>
                      </div>

                      {/* Top Seal */}
                      <div className="relative z-10 pt-4">
                        <div className="w-16 h-18 mx-auto mb-2">
                          <Image
                            src="/logo/5e-logo.png"
                            alt="5e Serpraise Logo"
                            width={64}
                            height={58}
                            className="w-full h-auto drop-shadow-none object-contain"
                          />
                        </div>
                      </div>

                      {/* Center Silhouette / Monogram */}
                      <div className="relative z-10 my-auto text-center">
                        <div className="w-20 h-20 mx-auto border-2 border-[#A67C37] bg-[#071D4D] flex items-center justify-center mb-2">
                          <span className="font-serif font-extrabold text-2xl text-[#EFE6D6]">
                            LSG
                          </span>
                        </div>
                        <span className="font-serif italic text-xs text-[#A67C37]">
                          Prime Servant &bull; Est. 2003
                        </span>
                      </div>

                      {/* Bottom Tag */}
                      <div className="relative z-10 border-t border-[#A67C37]/40 w-full pt-3 text-[10px] font-sans font-bold tracking-widest text-[#EFE6D6]/80 uppercase">
                        INDIA &bull; AUSTRALIA
                      </div>
                    </div>
                  </div>

                  {/* Name & Role below image for mobile/desktop harmony */}
                  <div className="mt-6 space-y-1">
                    <h3 className="font-serif font-extrabold text-2xl text-[#0B2A6B]">
                      {member.name}
                    </h3>
                    <p className="font-serif italic text-sm text-[#D62839] font-semibold">
                      {member.role}
                    </p>
                    <div className="text-xs font-sans text-[#15151A]/60 pt-1">
                      5e Serpraise Leadership Practice
                    </div>
                  </div>
                </div>

                {/* Right Column: Credentials, Background, Corporate Experience & Associations */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Bio & Guiding Ethos */}
                  <div>
                    <div className="flex items-center gap-2 pb-2 border-b border-[#A67C37]/40 mb-3">
                      <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#0B2A6B]">
                        EXECUTIVE PROFILE
                      </span>
                      <span className="w-1.5 h-1.5 bg-[#D62839]" />
                      <span className="font-serif italic text-xs text-[#A67C37]">
                        20+ Years in Organizational Practice
                      </span>
                    </div>
                    <p className="font-sans text-[15px] sm:text-[16px] text-[#15151A]/90 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Highlight Quote */}
                  {member.quote && (
                    <div className="p-5 bg-[#EFE6D6] border-l-4 border-[#A67C37] space-y-1.5">
                      <div className="font-serif italic text-sm sm:text-base text-[#0B2A6B] font-semibold leading-relaxed">
                        &ldquo;{member.quote}&rdquo;
                      </div>
                      <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#A67C37]">
                        &mdash; {member.name}, {member.role}
                      </div>
                    </div>
                  )}

                  {/* 3 Structured Credential Blocks (Academic, Corporate, Practice) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                    {/* Academic & Professional Qualifications */}
                    <div className="p-5 bg-[#EFE6D6] border border-[#0B2A6B]/20 space-y-3">
                      <div className="flex items-center gap-2 text-[#0B2A6B]">
                        <GraduationCap className="w-4 h-4 text-[#D62839]" />
                        <h4 className="font-serif font-bold text-sm uppercase tracking-wide">
                          Education &amp; Certification
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-[13px] font-sans text-[#15151A]/85">
                        {member.qualifications.map((qual, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#A67C37] font-bold">&bull;</span>
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Corporate Experience */}
                    <div className="p-5 bg-[#EFE6D6] border border-[#0B2A6B]/20 space-y-3">
                      <div className="flex items-center gap-2 text-[#0B2A6B]">
                        <Building2 className="w-4 h-4 text-[#D62839]" />
                        <h4 className="font-serif font-bold text-sm uppercase tracking-wide">
                          Corporate Experience
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-[13px] font-sans text-[#15151A]/85">
                        {member.corporateExperience.map((corp, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-[#A67C37] font-bold">&bull;</span>
                            <span className="font-semibold text-[#0B2A6B]">{corp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-[11px] font-sans text-[#15151A]/65 italic pt-1">
                        Executive roles across Human Resources &amp; Business Development.
                      </div>
                    </div>
                  </div>

                  {/* Core Practice Areas & Associations */}
                  <div className="space-y-4 pt-2">
                    <div>
                      <div className="font-sans text-xs font-bold tracking-wider uppercase text-[#0B2A6B] mb-2 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-[#A67C37]" />
                        <span>Domain Expertise &amp; Advisory Focus</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((exp, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#EFE6D6] border border-[#A67C37]/40 text-xs font-sans text-[#0B2A6B] font-medium"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="font-sans text-xs font-bold tracking-wider uppercase text-[#0B2A6B] mb-2 flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#A67C37]" />
                        <span>Associations &amp; Community Stewardship</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-[13px] font-sans text-[#15151A]/80">
                        {member.associations.map((assoc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#A67C37]">&bull;</span>
                            <span>{assoc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
