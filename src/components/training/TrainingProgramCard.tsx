import React from "react";
import { CoreProgram } from "@/content/programmes";
import { Button } from "../ui/Button";
import { Clock, Check } from "lucide-react";

interface TrainingProgramCardProps {
  program: CoreProgram;
  isReversed?: boolean;
}

export function TrainingProgramCard({
  program,
}: TrainingProgramCardProps) {
  return (
    <article
      id={program.id}
      className="scroll-mt-28 p-8 bg-[#F7F1E6] border border-[#0B2A6B]/30 group hover:border-[#0B2A6B] transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/40">
            <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0B2A6B]">
              {program.category}
            </span>
            <span className="font-serif font-bold text-lg text-[#D62839]">{program.number}</span>
          </div>

          <h3 className="font-serif text-[34px] font-extrabold text-[#0B2A6B] leading-tight group-hover:text-[#D62839] transition-colors">
            {program.name}
          </h3>
          <p className="font-serif italic text-base text-[#15151A]/80">
            {program.fullName}
          </p>

          <p className="font-sans text-[14px] text-[#15151A] leading-relaxed pt-1">
            {program.positioning}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#0B2A6B]">
            <Clock className="w-4 h-4 text-[#D62839]" />
            <span>Duration: {program.duration}</span>
          </div>

          <div className="pt-4">
            <Button
              href={`mailto:contact@5eserpraise.com?subject=Inquiry%20about%20${encodeURIComponent(
                program.name + " - " + program.fullName
              )}`}
              variant="primary"
            >
              Inquire About {program.name}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 bg-[#EFE6D6] border border-[#A67C37]/40 space-y-4">
          <h4 className="font-serif font-bold text-lg text-[#0B2A6B]">
            Core Workshop Coverage
          </h4>
          <ul className="space-y-2">
            {program.keyTopics.map((topic, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm font-sans text-[#15151A]">
                <Check className="w-4 h-4 text-[#D62839] mt-0.5 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-[#A67C37]/30 text-xs font-sans text-[#15151A]/75 italic">
            <strong>Target Outcome:</strong> {program.keyOutcome}
          </div>
        </div>
      </div>
    </article>
  );
}
