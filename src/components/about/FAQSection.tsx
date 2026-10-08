"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { HeritageDivider } from "../ui/HeritageDivider";
import { aboutContent } from "@/content/about";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQSection() {
  const { faq } = aboutContent;
  const [openIds, setOpenIds] = useState<string[]>([faq.items[0]?.id || "faq-1"]);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      className="py-[84px] bg-[#EFE6D6] border-b border-[#A67C37]/40 scroll-mt-24"
      id="faq"
    >
      <Container size="wide">
        <HeritageDivider />

        {/* Section Heading */}
        <div className="my-8 text-center max-w-[760px] mx-auto space-y-3">
          <SectionLabel
            title={faq.eyebrow}
            subtitle="Transparent details on our consulting practice, training flagships, and engagement models."
            align="center"
          />
          <h2 className="font-serif font-extrabold text-[clamp(32px,4.5vw,48px)] leading-[1.08] tracking-tight text-[#0B2A6B]">
            {faq.title}
          </h2>
          <p className="font-sans text-[16px] text-[#15151A]/85 leading-relaxed">
            {faq.subtitle}
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="max-w-[880px] mx-auto space-y-3.5 mt-10" role="region" aria-label="Frequently Asked Questions">
          {faq.items.map((item, idx) => {
            const isOpen = openIds.includes(item.id);
            const contentId = `faq-content-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;

            return (
              <div
                key={item.id}
                className={`border transition-all duration-200 ${
                  isOpen
                    ? "bg-[#F7F1E6] border-[#0B2A6B]"
                    : "bg-[#F7F1E6]/70 border-[#0B2A6B]/20 hover:border-[#0B2A6B]/60"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B2A6B]"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#A67C37] mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      {item.category && (
                        <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#D62839] block mb-1">
                          {item.category}
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-lg sm:text-[20px] text-[#0B2A6B] leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-colors duration-200 mt-1 ${
                      isOpen
                        ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                        : "bg-[#EFE6D6] text-[#0B2A6B] border-[#0B2A6B]/30"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {/* Animated Disclosure Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 0, height: 0 }
                      }
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 1, height: "auto" }
                      }
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, height: 0 }
                      }
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#A67C37]/30">
                        <p
                          className="font-sans text-sm sm:text-[15px] text-[#15151A]/85 leading-relaxed pl-7 sm:pl-8"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-12 p-6 max-w-[880px] mx-auto bg-[#EFE6D6] border border-[#A67C37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#D62839] flex-shrink-0" />
            <div className="text-xs sm:text-sm font-sans text-[#15151A]/85">
              Have a specific question about tailor-made interventions for your organization?
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-sans font-bold uppercase tracking-wider text-[#0B2A6B] hover:text-[#D62839] underline decoration-[#A67C37] whitespace-nowrap"
          >
            Ask Our Consultants &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
