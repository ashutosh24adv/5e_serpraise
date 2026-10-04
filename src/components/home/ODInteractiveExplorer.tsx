"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ChapterLabel } from "../ui/ChapterLabel";
import { Button } from "../ui/Button";
import { odGroups } from "@/content/od-projects";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Layers, ArrowUpRight } from "lucide-react";

export function ODInteractiveExplorer() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const shouldReduceMotion = useReducedMotion();

  const filterCategories = [
    { id: "ALL", label: "ALL INTERVENTIONS" },
    { id: "01", label: "CULTURE & ENGAGEMENT" },
    { id: "02", label: "PERFORMANCE & ASSESSMENT" },
    { id: "03", label: "HR SYSTEMS & POLICIES" },
    { id: "04", label: "BUSINESS MEETS & OUTBOUND" },
  ];

  // Flatten all services from odGroups with group reference
  const allServices = odGroups.flatMap((group) =>
    group.services.map((service) => ({
      ...service,
      groupNumber: group.number,
      groupTitle: group.title,
    }))
  );

  const filteredServices =
    activeFilter === "ALL"
      ? allServices
      : allServices.filter((s) => s.groupNumber === activeFilter);

  const journeyStages = [
    { stage: "01", name: "PEOPLE", focus: "Values, Purpose & Mindset", link: "/training#lilly", prog: "LILLY" },
    { stage: "02", name: "TEAMS", focus: "Goal Orientation & Synergy", link: "/training#gotel", prog: "GOTEL" },
    { stage: "03", name: "LEADERS", focus: "Stewardship & Matrix Aligning", link: "/training#salam", prog: "SALAM" },
    { stage: "04", name: "SYSTEMS", focus: "HR Architecture & OD Projects", link: "/od-projects", prog: "OD PROJECTS" },
    { stage: "05", name: "BUSINESS", focus: "Process Confluence & Enterprise Results", link: "/training#coppter", prog: "COPPTER" },
  ];

  return (
    <section className="py-[84px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="od-explorer">
      <Container size="wide">
        {/* Header */}
        <div className="space-y-3 mb-10 max-w-[760px]">
          <ChapterLabel
            number="05"
            title="STRENGTHENING ORGANIZATIONS (E2 • ENRICH)"
            subtitle="Organizational Development, Culture Building & Institutional Systems"
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4.2vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
            What does your organization need?
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            From comprehensive HR systems formulation to cultural transformation and SME retainerships, explore our verified OD interventions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2.5 font-sans text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive
                    ? "bg-[#0B2A6B] text-[#EFE6D6] border-2 border-[#0B2A6B]"
                    : "bg-[#F7F1E6] text-[#0B2A6B] border border-[#A67C37]/40 hover:border-[#0B2A6B]"
                }`}
                role="tab"
                aria-selected={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filtered Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredServices.map((service, idx) => (
              <motion.div
                key={`${service.title}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                className="p-6 bg-[#F7F1E6] border border-[#0B2A6B]/25 hover:border-[#0B2A6B] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/35 mb-3">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#D62839]">
                      {service.groupTitle}
                    </span>
                    <Layers className="w-4 h-4 text-[#A67C37] group-hover:text-[#0B2A6B] transition-colors" />
                  </div>

                  <h3 className="font-serif font-extrabold text-[20px] text-[#0B2A6B] leading-snug">
                    {service.title}
                  </h3>

                  <div className="font-serif italic text-xs text-[#A67C37] mt-1">
                    {service.tagline}
                  </div>

                  <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/85 mt-2.5 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#A67C37]/25 flex items-center justify-between">
                  <span className="font-serif italic text-xs text-[#A67C37]">
                    5e Serpraise OD Standard
                  </span>
                  <Link
                    href="/od-projects"
                    className="inline-flex items-center gap-1 text-xs font-sans font-bold text-[#0B2A6B] group-hover:text-[#D62839] transition-colors"
                  >
                    <span>View Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 5-Stage Organization Growth Journey */}
        <div className="mt-14 p-8 sm:p-10 bg-[#0B2A6B] text-[#EFE6D6] border border-[#0B2A6B]">
          <div className="mb-6 space-y-1">
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#A67C37]">
              ORGANIZATIONAL CONTINUUM
            </span>
            <h3 className="font-serif font-extrabold text-[24px] sm:text-[28px] text-[#EFE6D6]">
              Where does your organization need to go?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#EFE6D6]/85 max-w-[650px]">
              How 5e Serpraise connects people, teams, leaders, systems, and enterprise outcomes into a cohesive institutional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 border-t border-[#EFE6D6]/20">
            {journeyStages.map((stage) => (
              <Link
                key={stage.stage}
                href={stage.link}
                className="p-4 bg-[#0B2A6B]/80 border border-[#A67C37]/40 hover:border-[#D62839] hover:bg-[#0B2A6B] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#EFE6D6]/15 mb-2">
                    <span className="font-serif font-extrabold text-lg text-[#D62839]">
                      STAGE {stage.stage}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A67C37] group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-sans font-extrabold text-sm tracking-wider uppercase text-white">
                    {stage.name}
                  </div>
                  <p className="font-serif italic text-xs text-[#EFE6D6]/80 mt-1 leading-snug">
                    {stage.focus}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#EFE6D6]/15 text-[10px] font-sans font-bold uppercase tracking-wider text-[#A67C37]">
                  {stage.prog}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Link to OD Page */}
        <div className="mt-8 flex justify-center">
          <Button href="/od-projects" variant="primary">
            Explore All OD Projects &amp; Retainership
          </Button>
        </div>
      </Container>
    </section>
  );
}
