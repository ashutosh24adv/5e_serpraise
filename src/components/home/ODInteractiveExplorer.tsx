"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { odGroups, getODSlug } from "@/content/od-projects";
import { Layers, BrainCircuit, Activity, Gamepad2 } from "lucide-react";

export function ODInteractiveExplorer() {
  // Flatten all services from odGroups with group reference
  const odServices = odGroups.flatMap((group) =>
    group.services.map((service) => ({
      ...service,
      groupTitle: group.title,
      href: `/od-projects#${getODSlug(service.title)}`,
      icon: Layers,
    }))
  );

  // Experiential & Pedagogical methodology items merged in
  const experientialServices = [
    {
      title: "Respecting Adult Learning Principles",
      tagline: "Self-directed discovery, immediate workplace relevance & cognitive engagement.",
      groupTitle: "EXPERIENTIAL METHODOLOGY",
      href: "/training#respecting-adult-learning-principles",
      icon: BrainCircuit,
    },
    {
      title: "Pre & Post Capability Analysis",
      tagline: "Diagnostic baseline assessment, targeted skill gaps & measurable post-program ROI.",
      groupTitle: "EXPERIENTIAL METHODOLOGY",
      href: "/training#pre-post-capability-analysis",
      icon: Activity,
    },
    {
      title: "High-Interaction PGL & Role-Play",
      tagline: "Project-Game-Lecture simulations, leadership dilemmas & structured debriefs.",
      groupTitle: "EXPERIENTIAL METHODOLOGY",
      href: "/training#high-interaction-pgl-role-play",
      icon: Gamepad2,
    },
  ];

  const allServices = [...odServices, ...experientialServices];

  return (
    <section className="py-[84px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="od-explorer">
      <Container size="wide">
        {/* Centered Header */}
        <div className="text-center max-w-[760px] mx-auto space-y-3 mb-10">
          <SectionLabel
            title="STRENGTHENING ORGANIZATIONS (E2 • ENRICH)"
            subtitle="Organizational Development, Culture Building & Institutional Systems"
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4.2vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            What are you trying to transform?
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            From comprehensive HR systems formulation and cultural alignment to experiential learning methodologies and SME retainerships, explore our verified interventions.
          </p>
        </div>

        {/* OD & Transformation Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allServices.map((service, idx) => {
            const Icon = service.icon;

            return (
              <Link
                key={`${service.title}-${idx}`}
                href={service.href}
                className="p-6 bg-[#F7F1E6] border border-[#0B2A6B]/25 hover:border-[#0B2A6B] hover:shadow-sm transition-all duration-200 flex flex-col justify-between group cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#0B2A6B]"
              >
                <div>
                  {/* 1. Category */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/35 mb-3">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#D62839]">
                      {service.groupTitle}
                    </span>
                    <Icon className="w-4 h-4 text-[#A67C37] group-hover:text-[#0B2A6B] transition-colors" />
                  </div>

                  {/* 2. Project Name */}
                  <h3 className="font-serif font-extrabold text-[20px] text-[#0B2A6B] leading-snug group-hover:text-[#D62839] transition-colors">
                    {service.title}
                  </h3>

                  {/* 3. Italic Subtitle */}
                  {service.tagline && (
                    <div className="font-serif italic text-xs text-[#15151A]/80 mt-1.5 leading-relaxed">
                      {service.tagline}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
