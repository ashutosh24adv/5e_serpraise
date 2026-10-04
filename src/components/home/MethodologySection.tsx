import React from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { EditorialNumber } from "../ui/EditorialNumber";
import { trainingMethodologies } from "@/content/programmes";

export function MethodologySection() {
  return (
    <section className="py-20 sm:py-24 bg-surface border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="OUR TRAINING METHODOLOGY"
          title="Learning That Goes Beyond the Classroom"
          subtitle="Our pedagogy is anchored in behavioral transformation rather than passive lectures, ensuring participants gain practical wisdom and organizations realize measurable ROI."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {trainingMethodologies.map((item) => (
            <div
              key={item.number}
              className="bg-white border border-border rounded-xs p-8 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
                  <EditorialNumber number={item.number} size="lg" variant="outline" />
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-accent bg-surface px-2.5 py-1 border border-border-subtle">
                    Pillar {item.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-primary mt-6 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm font-semibold text-text mt-2">
                  {item.summary}
                </p>

                <p className="font-sans text-xs sm:text-sm text-muted mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-subtle flex items-center gap-2 text-xs font-sans text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>5e Serpraise Pedagogical Standard</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
