import React from "react";
import { Container } from "../layout/Container";
import { MapPin, Phone, Mail } from "lucide-react";

export function OfficeLocations() {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F1E6] border-b border-[#A67C37]/30" id="locations">
      <Container size="standard">
        <div className="max-w-[880px] mx-auto">
          {/* Section Header */}
          <div className="mb-10 text-center sm:text-left space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <span className="w-4 h-[1.5px] bg-[#A67C37]" />
              <span className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#0B2A6B]">
                GLOBAL LOCATIONS
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,40px)] text-[#0B2A6B] leading-tight">
              Corporate &amp; Regional Offices
            </h2>
            <p className="font-sans text-[16px] text-[#15151A]/85">
              Direct presence supporting client interventions across India and Australia.
            </p>
            <div className="w-16 h-[2px] bg-[#A67C37] mt-3 mx-auto sm:mx-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* India Corporate Office */}
            <div className="bg-[#EFE6D6] border border-[#0B2A6B]/30 hover:border-[#0B2A6B] p-6 sm:p-8 space-y-5 transition-colors">
              <div className="flex items-center gap-3 border-b border-[#A67C37]/30 pb-4">
                <div className="w-11 h-11 bg-[#0B2A6B] text-[#EFE6D6] flex items-center justify-center border border-[#A67C37]/50">
                  <MapPin className="w-5 h-5 text-[#A67C37]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#0B2A6B]">
                    India Corporate Office
                  </h3>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#D62839]">
                    Headquarters
                  </div>
                </div>
              </div>

              <div className="space-y-3 font-sans text-sm text-[#15151A]/85">
                <p className="leading-relaxed">
                  Chennai &amp; Bengaluru, Tamil Nadu / Karnataka, India
                </p>

                <div className="pt-3 space-y-2.5 border-t border-[#A67C37]/20">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#A67C37] flex-shrink-0" />
                    <a
                      href="tel:+919840156325"
                      className="font-bold text-[#0B2A6B] hover:text-[#D62839] transition-colors"
                    >
                      +91 98401 56325
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#A67C37] flex-shrink-0" />
                    <a
                      href="mailto:info@5eserpraise.com"
                      className="font-bold text-[#0B2A6B] hover:text-[#D62839] transition-colors underline decoration-[#A67C37]"
                    >
                      info@5eserpraise.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Australia Regional Office */}
            <div className="bg-[#EFE6D6] border border-[#0B2A6B]/30 hover:border-[#0B2A6B] p-6 sm:p-8 space-y-5 transition-colors">
              <div className="flex items-center gap-3 border-b border-[#A67C37]/30 pb-4">
                <div className="w-11 h-11 bg-[#0B2A6B] text-[#EFE6D6] flex items-center justify-center border border-[#A67C37]/50">
                  <MapPin className="w-5 h-5 text-[#A67C37]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#0B2A6B]">
                    Australia Regional Office
                  </h3>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#D62839]">
                    International Practice
                  </div>
                </div>
              </div>

              <div className="space-y-3 font-sans text-sm text-[#15151A]/85">
                <p className="leading-relaxed">
                  Melbourne, Victoria, Australia
                </p>

                <div className="pt-3 space-y-2.5 border-t border-[#A67C37]/20">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#A67C37] flex-shrink-0" />
                    <a
                      href="tel:+61400000000"
                      className="font-bold text-[#0B2A6B] hover:text-[#D62839] transition-colors"
                    >
                      +61 400 000 000
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#A67C37] flex-shrink-0" />
                    <a
                      href="mailto:australia@5eserpraise.com"
                      className="font-bold text-[#0B2A6B] hover:text-[#D62839] transition-colors underline decoration-[#A67C37]"
                    >
                      australia@5eserpraise.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
