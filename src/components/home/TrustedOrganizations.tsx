"use client";

import React from "react";
import { Container } from "../layout/Container";
import { ChapterLabel } from "../ui/ChapterLabel";
import { HeritageDivider } from "../ui/HeritageDivider";
import { siteConfig } from "@/content/site";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Cpu, Landmark, Stethoscope, Car, Compass, ShoppingBag, Briefcase } from "lucide-react";

export function TrustedOrganizations() {
  const shouldReduceMotion = useReducedMotion();

  const iconMap: Record<string, React.ElementType> = {
    Manufacturing: Building2,
    Technology: Cpu,
    "Financial Services": Landmark,
    "Healthcare & Life Sciences": Stethoscope,
    Automotive: Car,
    Infrastructure: Compass,
    "Retail & Consumer": ShoppingBag,
    "Corporate Services": Briefcase,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      className="py-[88px] bg-[#EFE6D6] border-t border-[#A67C37]/40 relative"
      id="clients"
      aria-labelledby="clients-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto space-y-3">
          <ChapterLabel
            number="03"
            title="ORGANIZATIONS WE'VE SERVED"
            subtitle="Two decades of proven corporate consulting across India and Australia."
            align="center"
          />

          <h2
            id="clients-heading"
            className="font-serif font-extrabold text-[clamp(30px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]"
          >
            Organizations we&apos;ve served.
          </h2>

          <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[62ch] mx-auto leading-relaxed">
            Over two decades of working with people, teams and organizations across India and Australia.
          </p>
        </div>

        {/* Top Heritage Double Rule with Subtle 5E Subtitle */}
        <div className="my-6">
          <HeritageDivider />
          <div className="text-center">
            <span className="font-serif italic text-xs tracking-widest text-[#A67C37] uppercase">
              EDUCATE &bull; ENRICH &bull; ENJOY &bull; EMPATHISE &bull; ENERGISE
            </span>
          </div>
        </div>

        {/* Editorial Organization / Client Field */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        >
          {siteConfig.organizationsServed.map((client, idx) => {
            const IconComp = iconMap[client.category] || Building2;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -2, transition: { duration: 0.25 } }
                }
                className="p-6 bg-[#F7F1E6] border border-[#0B2A6B]/25 hover:border-[#0B2A6B] transition-colors duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/35 mb-3">
                    <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D62839]">
                      {client.category}
                    </span>
                    <IconComp className="w-4 h-4 text-[#A67C37] group-hover:text-[#0B2A6B] transition-colors" />
                  </div>

                  <h3 className="font-serif font-extrabold text-[18px] sm:text-[19px] text-[#0B2A6B] leading-snug group-hover:text-[#0B2A6B] transition-colors">
                    {client.name}
                  </h3>

                  <p className="font-sans text-xs text-[#15151A]/80 mt-2.5 leading-relaxed">
                    {client.engagement}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-[#A67C37]/25 flex items-center justify-between text-[11px] font-sans text-[#15151A]/60">
                  <span>{client.establishedCohort}</span>
                  <span className="font-serif italic text-[#A67C37]">5e Client Cohort</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Heritage Double Rule */}
        <div className="mt-10 mb-6">
          <HeritageDivider />
        </div>

        {/* Editorial Credibility Statement & Verified Metric Row */}
        <div className="mt-4 p-8 sm:p-10 bg-[#0B2A6B] text-[#EFE6D6] border border-[#0B2A6B]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Editorial Philosophy */}
            <div className="lg:col-span-6 space-y-2">
              <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#A67C37]">
                TWO DECADES &bull; MANY ORGANIZATIONS &bull; ONE PURPOSE
              </span>
              <h3 className="font-serif font-extrabold text-[28px] sm:text-[34px] leading-tight text-[#EFE6D6]">
                Enriching people. Strengthening organizations.
              </h3>
              <p className="font-sans text-sm text-[#EFE6D6]/85 max-w-[48ch] leading-relaxed pt-1">
                Founded in 2003, 5e Serpraise has delivered experiential training and deep organizational development interventions for over 100 corporate clients with enduring repeat partnerships.
              </p>
            </div>

            {/* Right Verified Statistics Row */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 lg:pt-0 lg:border-l lg:border-[#EFE6D6]/20 lg:pl-8">
              <div>
                <div className="font-serif font-extrabold text-3xl sm:text-4xl text-[#D62839]">
                  2003
                </div>
                <div className="font-sans text-[11px] uppercase font-bold tracking-wider text-[#EFE6D6]/90 mt-1">
                  ESTABLISHED
                </div>
                <div className="font-serif italic text-xs text-[#A67C37] mt-0.5">
                  Over 20 years
                </div>
              </div>

              <div>
                <div className="font-serif font-extrabold text-3xl sm:text-4xl text-[#D62839]">
                  100+
                </div>
                <div className="font-sans text-[11px] uppercase font-bold tracking-wider text-[#EFE6D6]/90 mt-1">
                  CORPORATE CLIENTS
                </div>
                <div className="font-serif italic text-xs text-[#A67C37] mt-0.5">
                  Repeat partnerships
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="font-serif font-extrabold text-2xl sm:text-3xl text-[#EFE6D6]">
                  INDIA &amp; AU
                </div>
                <div className="font-sans text-[11px] uppercase font-bold tracking-wider text-[#EFE6D6]/90 mt-1">
                  DUAL GEOGRAPHY
                </div>
                <div className="font-serif italic text-xs text-[#A67C37] mt-0.5">
                  Active footprint
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
