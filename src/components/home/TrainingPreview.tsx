import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { corePrograms } from "@/content/programmes";
import { ArrowRight, Clock } from "lucide-react";

export function TrainingPreview() {
  return (
    <section className="py-[72px] bg-[#EFE6D6]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-[28px]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                E1 &bull; EDUCATE
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight text-[#0B2A6B]">
              Four core training programs.
            </h2>
          </div>

          <div>
            <Button href="/training" variant="primary">
              View All Training
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-8">
          {corePrograms.map((program) => (
            <div
              key={program.id}
              className="p-6 bg-[#F7F1E6] border border-[#0B2A6B]/30 flex flex-col justify-between group hover:border-[#0B2A6B] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/40 mb-3 text-xs font-sans text-[#15151A]/70">
                  <span className="font-bold uppercase tracking-wider text-[#0B2A6B]">
                    {program.category}
                  </span>
                  <span className="font-serif font-bold text-[#D62839]">{program.number}</span>
                </div>

                <h3 className="font-serif text-[28px] font-bold text-[#0B2A6B] group-hover:text-[#D62839] transition-colors">
                  {program.name}
                </h3>
                <h4 className="font-serif italic text-xs text-[#15151A]/80 mt-1 line-clamp-2">
                  {program.fullName}
                </h4>

                <p className="font-sans text-xs text-[#15151A]/80 mt-3 leading-relaxed line-clamp-3">
                  {program.positioning}
                </p>

                <div className="mt-4 pt-3 border-t border-[#A67C37]/30 flex items-center gap-2 text-xs font-sans text-[#0B2A6B]">
                  <Clock className="w-3.5 h-3.5 text-[#D62839]" />
                  <span>{program.duration}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#A67C37]/30">
                <Link
                  href={`/training#${program.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#0B2A6B] group-hover:text-[#D62839] transition-colors"
                >
                  <span>Explore Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A67C37]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
