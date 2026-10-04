import React from "react";
import { Container } from "../layout/Container";
import { siteConfig } from "@/content/site";

export function CredibilityBar() {
  return (
    <section className="bg-surface py-12 sm:py-16 border-b border-border">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {siteConfig.credibility.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-4 sm:p-6 bg-white border border-border rounded-xs shadow-2xs hover:border-primary/40 transition-colors"
            >
              <div className="text-xs uppercase font-sans font-bold tracking-widest text-accent mb-2">
                Credibility Metric
              </div>
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary font-medium tracking-tight">
                {item.metric}
              </div>
              <div className="font-sans text-sm font-semibold text-text mt-2">
                {item.label}
              </div>
              {item.description && (
                <p className="font-sans text-xs text-muted mt-1 leading-normal">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
