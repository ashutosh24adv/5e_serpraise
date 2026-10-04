import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";

export function CorePillarsSection() {
  const pillars = [
    {
      code: "E1",
      name: "EDUCATE",
      title: "Corporate Training",
      subtitle: "Purpose-driven flagships & skill workshops",
      description:
        "Standardized and structured ready-made training programs focusing on individual purpose, team cohesiveness, leadership maturity, and entrepreneurial results.",
      highlights: ["LILLY (Individual)", "GOTEL (Team)", "SALAM (Leadership)", "COPPTER (Business)"],
      href: "/training",
      icon: BookOpen,
      accent: "border-primary",
    },
    {
      code: "E2",
      name: "ENRICH",
      title: "Organizational Development",
      subtitle: "Institutional systems & culture interventions",
      description:
        "Comprehensive organizational advisory spanning culture transformation, assessment centers, appraisal architectures, competency mapping, and SME retainerships.",
      highlights: ["Culture Building", "Assessment Centers", "HR Systems Formulation", "E2 Retainership"],
      href: "/od-projects",
      icon: Layers,
      accent: "border-accent",
    },
    {
      code: "CUSTOM",
      name: "BESPOKE",
      title: "Custom Programs",
      subtitle: "Interventions tailored to organizational needs",
      description:
        "Flexible, context-specific learning solutions built around your exact workplace challenges across Communication, Performance, Sales, Leadership, and HR.",
      highlights: ["Assertive Communication", "CASE of a HR Manager", "B2B Sales & Key Accounts", "Conflict to Collaboration"],
      href: "/custom-programs",
      icon: Sparkles,
      accent: "border-primary-light",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-surface border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="CORE PRACTICE AREAS"
          title="Three Strategic Pathways to Capability"
          subtitle="Whether you need proven training flagships, custom-designed interventions, or systemic OD consulting, 5e Serpraise provides specialized expertise."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.name}
                className="bg-white border border-border rounded-xs p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-2xl font-bold text-accent">
                        {pillar.code}
                      </span>
                      <span className="text-xs uppercase tracking-widest font-sans font-bold text-muted">
                        &bull; {pillar.name}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-primary font-medium mt-6 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-muted font-semibold mt-1">
                    {pillar.subtitle}
                  </p>

                  <p className="font-sans text-sm text-muted mt-4 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border-subtle">
                    <div className="text-[11px] font-sans uppercase font-bold tracking-wider text-primary mb-2">
                      Key Highlights
                    </div>
                    <ul className="space-y-1.5">
                      {pillar.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-xs font-sans text-text flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-border">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary group-hover:text-accent transition-colors"
                  >
                    <span>Explore {pillar.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
