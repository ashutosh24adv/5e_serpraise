"use client";

import React, { useEffect, useState } from "react";
import { odGroups, getODSlug } from "@/content/od-projects";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

export function ODServiceGroup() {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        setActiveHash(hash);

        // Scroll to matching element if present
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Trigger on initial mount with a small delay for DOM readiness
    const timer = setTimeout(handleHash, 100);
    window.addEventListener("hashchange", handleHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  return (
    <section className="py-[80px] bg-[#EFE6D6]" id="interventions">
      <Container size="wide">
        <div className="space-y-16">
          {odGroups.map((group) => (
            <div
              key={group.number}
              className="border-t-2 border-[#0B2A6B] pt-8"
            >
              {/* Group Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 border-b border-[#A67C37]/40 items-baseline">
                <div className="lg:col-span-5 flex items-baseline gap-3">
                  <span className="font-serif font-extrabold text-[32px] text-[#D62839] leading-none">
                    {group.number}
                  </span>
                  <h3 className="font-serif font-extrabold text-[28px] text-[#0B2A6B] leading-tight">
                    {group.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="font-sans text-[15px] text-[#15151A]/80 leading-relaxed">
                    {group.tagline}
                  </p>
                </div>
              </div>

              {/* Services Grid (2 Columns, Flat blocks with Brass borders) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mt-6">
                {group.services.map((service, sIndex) => {
                  const slug = getODSlug(service.title);
                  const isHighlighted = activeHash === slug;

                  return (
                    <div
                      key={sIndex}
                      id={slug}
                      className={`p-7 bg-[#F7F1E6] border flex flex-col justify-between group transition-all duration-300 scroll-mt-28 md:scroll-mt-32 ${
                        isHighlighted
                          ? "border-[#0B2A6B] ring-2 ring-[#0B2A6B]/50 shadow-sm"
                          : "border-[#0B2A6B]/25 hover:border-[#0B2A6B]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/40">
                          <span className="font-sans text-[11px] font-bold text-[#A67C37]">
                            {group.number}.{sIndex + 1}
                          </span>
                          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#0B2A6B]">
                            OD INTERVENTION
                          </span>
                        </div>

                        <h4 className="font-serif font-bold text-[22px] text-[#0B2A6B] mt-3 group-hover:text-[#D62839] transition-colors">
                          {service.title}
                        </h4>

                        <p className="font-serif italic text-xs text-[#A67C37] mt-0.5">
                          {service.tagline}
                        </p>

                        <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/85 mt-2.5 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Deliverables */}
                        <div className="mt-4 pt-3 border-t border-[#A67C37]/30">
                          <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B2A6B] mb-2">
                            Key Deliverables:
                          </div>
                          <ul className="space-y-1">
                            {service.deliverables.map((item, dIndex) => (
                              <li
                                key={dIndex}
                                className="flex items-start gap-1.5 text-xs font-sans text-[#15151A]/90"
                              >
                                <Check className="w-3.5 h-3.5 text-[#D62839] mt-0.5 flex-shrink-0" />
                                <span className="leading-tight">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 mt-6 border-t border-[#A67C37]/30">
                        <Button
                          href="/contact"
                          variant="secondary-link"
                        >
                          Inquire about this Intervention
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

