import React from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { Brain, DollarSign, Heart, Sparkles } from "lucide-react";

export function PurposeSection() {
  const missionIcons = [Brain, DollarSign, Heart, Sparkles];

  return (
    <section className="py-20 sm:py-24 bg-bg border-b border-border" id="purpose">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR PURPOSE"
          title="Guided by Service. Committed to Praise."
          subtitle="The name Serpraise represents the foundational philosophy that sustainable organizational excellence is born from heartfelt service and genuine appreciation of human potential."
          align="split"
        />

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          {/* Vision Callout Box */}
          <div className="lg:col-span-4 p-8 sm:p-10 bg-primary text-white rounded-xs flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-white/10 text-accent text-xs uppercase font-sans font-bold tracking-widest border border-white/10">
                OUR VISION
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
                {siteConfig.purpose.vision.title}
              </h3>
              <p className="font-sans text-xs tracking-wider uppercase text-slate-300 font-semibold">
                {siteConfig.purpose.vision.meaning}
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed pt-2">
                {siteConfig.purpose.vision.description}
              </p>
            </div>
            <div className="pt-8 mt-6 border-t border-white/10 text-xs font-sans text-slate-400">
              Institutionalized across all training and consulting engagements.
            </div>
          </div>

          {/* Mission Dimensions (Enriching Everyone) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-sans font-bold tracking-widest text-accent mb-2">
                OUR MISSION
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                {siteConfig.purpose.mission.title}
              </h3>
              <p className="font-sans text-sm text-muted mt-1">
                {siteConfig.purpose.mission.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {siteConfig.purpose.mission.pillars.map((pillar, index) => {
                const IconComponent = missionIcons[index] || Sparkles;
                return (
                  <div
                    key={index}
                    className="p-6 bg-surface border border-border rounded-xs hover:border-primary/40 hover:bg-white transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-lg text-primary font-semibold group-hover:text-accent transition-colors">
                        {pillar.title}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
