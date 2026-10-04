import React from "react";
import { customCategories } from "@/content/custom-programs";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function CustomCategorySection() {
  return (
    <section className="py-[80px] bg-[#EFE6D6]" id="categories">
      <Container size="wide">
        <div className="space-y-16">
          {customCategories.map((category) => (
            <div
              key={category.number}
              className="border-t-2 border-[#0B2A6B] pt-8"
            >
              {/* Category Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 border-b border-[#A67C37]/40 items-baseline">
                <div className="lg:col-span-4 flex items-baseline gap-3">
                  <span className="font-serif font-extrabold text-[32px] text-[#D62839] leading-none">
                    {category.number}
                  </span>
                  <h3 className="font-serif font-extrabold text-[28px] text-[#0B2A6B] leading-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-sans text-[15px] text-[#15151A]/80 leading-relaxed">
                    {category.summary}
                  </p>
                </div>
              </div>

              {/* Program Items inside Category */}
              <div className="divide-y divide-[#A67C37]/40">
                {category.programs.map((prog, pIdx) => {
                  const isCASE = prog.title.includes("CASE of a HR Manager");

                  return (
                    <div
                      key={pIdx}
                      className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
                    >
                      {/* Program Title & Subtitle */}
                      <div className="lg:col-span-4 space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-[22px] text-[#0B2A6B] leading-snug group-hover:text-[#D62839] transition-colors">
                            {prog.title}
                          </h4>
                        </div>
                        {prog.subtitle && (
                          <p className="font-serif italic text-xs text-[#A67C37]">
                            {prog.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Description & Tags */}
                      <div className="lg:col-span-5 space-y-3">
                        <p className="font-sans text-[14px] text-[#15151A] leading-relaxed">
                          {prog.description}
                        </p>

                        {/* CASE special highlight */}
                        {isCASE && (
                          <div className="p-3 bg-[#F7F1E6] border border-[#D62839]/40 mt-2">
                            <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#D62839] mb-1">
                              CASE Framework Dimensions:
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 text-xs font-sans font-semibold text-[#0B2A6B]">
                              <div>&bull; Change Agent</div>
                              <div>&bull; Administrative Expert</div>
                              <div>&bull; Strategic Thinker</div>
                              <div>&bull; Employee Champion</div>
                            </div>
                          </div>
                        )}

                        {prog.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {prog.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-sans text-[11px] font-medium text-[#0B2A6B] bg-[#F7F1E6] border border-[#0B2A6B]/20 px-2 py-0.5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action */}
                      <div className="lg:col-span-3 flex lg:justify-end">
                        <Button
                          href={`mailto:contact@5eserpraise.com?subject=Custom%20Training%20Inquiry%20-%20${encodeURIComponent(
                            prog.title
                          )}`}
                          variant="secondary-link"
                        >
                          Inquire for Program
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
