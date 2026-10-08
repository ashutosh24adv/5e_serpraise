import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { ArrowRight, BookOpen, Layers, Compass, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export function PillarsDetailGrid() {
  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Layers,
    Compass,
    Heart,
    Sparkles,
  };

  const detailedPillars = [
    {
      code: "E1",
      number: "01",
      name: "EDUCATE",
      tagline: "Develop people & discover personal purpose.",
      description:
        "Experiential adult learning (PGL) interventions designed to shift behavioral patterns, sharpen goal orientation, and build resilient leadership from within.",
      flagships: [
        "LILLY — Life Long Leadership for You (Self-discovery & purpose)",
        "GOTEL — Goal Oriented Team Excellence Lab (Synergy & alignment)",
        "SALAM — Systematic Approach to Leadership and Management",
        "COPPTER — Process Confluence & Frontline Business Leadership",
      ],
      targetAudience: "Leaders, cross-functional teams, emerging managers, and executives.",
      href: "/training",
      exploreLabel: "Explore E1 Training Programs",
      iconName: "BookOpen",
    },
    {
      code: "E2",
      number: "02",
      name: "ENRICH",
      tagline: "Strengthen institutional structures & systems.",
      description:
        "Comprehensive Organizational Development (OD) consulting and retainership advisory to align structure, governance, appraisal, and culture for long-term growth.",
      flagships: [
        "Culture Transformation & Core Value System Alignment",
        "Assessment Centers & Behavioral Competency Mapping",
        "Performance Appraisal Systems & KPI Cascade Formulation",
        "E2 Retainership for Scaling SMEs and Growing Enterprises",
      ],
      targetAudience: "Founders, CXOs, HR Heads, and enterprise leadership teams.",
      href: "/od-projects",
      exploreLabel: "Explore E2 OD Projects",
      iconName: "Layers",
    },
    {
      code: "E3",
      number: "03",
      name: "ENJOY",
      tagline: "Create memorable shared milestones & cohesion.",
      description:
        "Transformational experiential events, annual business meets, and semi-outbound interventions designed to cultivate camaraderie, high morale, and collective victory.",
      flagships: [
        "Annual Business Meets & Annual Strategy Conclaves",
        "High-Impact Experiential Semi-Outbounds",
        "Leadership Retreats & Celebration Frameworks",
        "Cross-functional Team Bonding & Trust Workshops",
      ],
      targetAudience: "Enterprise departments, sales cohorts, and pan-organization gatherings.",
      href: "/od-projects#interventions",
      exploreLabel: "Explore Team Interventions",
      iconName: "Compass",
    },
    {
      code: "E4",
      number: "04",
      name: "EMPATHISE",
      tagline: "Cultivate empathetic workplace culture & community.",
      description:
        "Developing compassionate workplace practices, mental wellbeing frameworks, conflict mediation, and corporate social development initiatives.",
      flagships: [
        "Workplace Counseling & Active Empathy Frameworks",
        "Constructive Conflict De-escalation & Mediation",
        "Mentorship & Peer Guidance Systems",
        "Community Outreach & Corporate Social Contribution",
      ],
      targetAudience: "People managers, HR professionals, and community initiatives.",
      href: "/custom-programs",
      exploreLabel: "Explore Bespoke Programs",
      iconName: "Heart",
    },
    {
      code: "E5",
      number: "05",
      name: "ENERGISE",
      tagline: "Ignite passion, communication, and business results.",
      description:
        "Tailor-made capacity interventions in high-impact business communication, assertive selling, interpersonal agility, and strategic HR management.",
      flagships: [
        "The Strategic CASE of a HR Manager (Strategic business partnering)",
        "Sales Transformation & High-Velocity Commercial Agility",
        "Assertive Business Communication & Influence Labs",
        "Energy Management & Sustainable Work Vitality",
      ],
      targetAudience: "Sales teams, business development executives, and HR leaders.",
      href: "/custom-programs",
      exploreLabel: "Explore Custom Programs",
      iconName: "Sparkles",
    },
  ];

  return (
    <section id="pillars" className="py-16 bg-[#EFE6D6] border-b border-[#A67C37]/30">
      <Container size="wide">
        <div className="space-y-4 mb-12">
          <SectionLabel
            title="COMPREHENSIVE PILLAR ARCHITECTURE"
            subtitle="Explore each pillar of the 5E framework and its dedicated enterprise deliverables."
          />
          <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] text-[#0B2A6B] leading-tight">
            The 5 Pillars in Detail
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 max-w-[65ch]">
            Each pillar operates both as an independent intervention and as part of a seamless organizational progression.
          </p>
        </div>

        <div className="space-y-8">
          {detailedPillars.map((pillar) => {
            const IconComp = iconMap[pillar.iconName] || BookOpen;

            return (
              <div
                key={pillar.code}
                className="bg-[#F7F1E6] border border-[#0B2A6B]/25 p-8 sm:p-10 transition-all hover:border-[#0B2A6B]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Pillar Identity */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#0B2A6B] text-[#EFE6D6] flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-[#A67C37]" />
                      </div>
                      <div>
                        <div className="font-serif font-extrabold text-3xl text-[#0B2A6B]">
                          {pillar.code}
                        </div>
                        <div className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#D62839]">
                          PILLAR {pillar.number} &bull; {pillar.name}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0B2A6B] leading-snug">
                      {pillar.tagline}
                    </h3>

                    <p className="font-sans text-sm sm:text-[15px] text-[#15151A]/85 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-2">
                      <Button href={pillar.href} variant="primary" className="text-xs">
                        {pillar.exploreLabel}
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Key Programs / Deliverables */}
                  <div className="lg:col-span-8 bg-[#EFE6D6] p-6 sm:p-8 border border-[#A67C37]/30 space-y-5">
                    <div className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0B2A6B] border-b border-[#A67C37]/30 pb-2">
                      Key Deliverables &amp; Interventions
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pillar.flagships.map((flag, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#D62839] flex-shrink-0 mt-1" />
                          <span className="font-sans text-xs sm:text-[13px] text-[#15151A] font-medium leading-relaxed">
                            {flag}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#A67C37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
                      <div>
                        <span className="font-bold text-[#0B2A6B]">Primary Audience: </span>
                        <span className="text-[#15151A]/80">{pillar.targetAudience}</span>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 font-bold text-[#D62839] hover:underline whitespace-nowrap"
                      >
                        <span>Book consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
