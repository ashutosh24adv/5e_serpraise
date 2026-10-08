"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { odGroups } from "@/content/od-projects";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Layers } from "lucide-react";

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

  return (
    <section className="py-[84px] bg-[#EFE6D6] border-t border-[#A67C37]/40" id="od-explorer">
      <Container size="wide">
        {/* Header */}
        <div className="space-y-3 mb-10 max-w-[760px]">
          <SectionLabel
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
                className="p-6 bg-[#F7F1E6] border border-[#0B2A6B]/25 hover:border-[#0B2A6B] hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
              >
                <Link href="/od-projects" className="block focus:outline-none">
                  {/* 1. Category */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/35 mb-3">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#D62839]">
                      {service.groupTitle}
                    </span>
                    <Layers className="w-4 h-4 text-[#A67C37] group-hover:text-[#0B2A6B] transition-colors" />
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
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
