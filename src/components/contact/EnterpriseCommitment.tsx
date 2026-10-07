import React from "react";
import { Container } from "../layout/Container";
import { Clock, FileText, UserCheck } from "lucide-react";

export function EnterpriseCommitment() {
  const commitments = [
    {
      icon: Clock,
      title: "24-Hour Response",
      description: "Inquiry response within 24 business hours",
    },
    {
      icon: FileText,
      title: "3-Day Outline",
      description: "Customized curriculum outline in 3 business days",
    },
    {
      icon: UserCheck,
      title: "Direct Leadership",
      description: "Direct discovery call with Principal Facilitator",
    },
  ];

  return (
    <section className="py-16 bg-[#EFE6D6] border-b border-[#A67C37]/30">
      <Container size="standard">
        <div className="max-w-[840px] mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#D62839]">
              OUR PLEDGE TO CLIENTS
            </div>
            <h2 className="font-serif font-extrabold text-[clamp(26px,3.5vw,36px)] text-[#0B2A6B]">
              Enterprise Commitment
            </h2>
            <div className="w-12 h-[2px] bg-[#A67C37] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {commitments.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F1E6] border border-[#0B2A6B]/20 p-6 text-center space-y-3 flex flex-col items-center justify-center hover:border-[#0B2A6B] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#0B2A6B] text-[#EFE6D6] flex items-center justify-center border border-[#A67C37]">
                    <IconComp className="w-5 h-5 text-[#A67C37]" />
                  </div>
                  <div className="font-sans text-xs font-bold uppercase tracking-wider text-[#D62839]">
                    {item.title}
                  </div>
                  <p className="font-serif font-semibold text-sm sm:text-[15px] text-[#0B2A6B] leading-snug">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
