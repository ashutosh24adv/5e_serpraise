"use client";

import React, { useEffect, useState } from "react";
import { Container } from "../layout/Container";
import { aboutContent } from "@/content/about";

export function AboutNav() {
  const [activeSection, setActiveSection] = useState<string>("mission-vision");

  useEffect(() => {
    const handleScroll = () => {
      const sections = aboutContent.subnav.map((item) => item.id);
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      className="sticky top-[76px] z-40 w-full bg-[#EFE6D6]/95 backdrop-blur-xs border-b border-[#A67C37]/40 py-2.5"
      aria-label="About Us Subsections"
    >
      <Container size="wide">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          <div className="hidden md:flex items-center gap-2 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#A67C37] whitespace-nowrap">
            <span>ABOUT US</span>
            <span>&bull;</span>
            <span className="text-[#0B2A6B]">OVERVIEW</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
            {aboutContent.subnav.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`inline-flex items-center px-3.5 sm:px-4 py-2 font-sans text-xs sm:text-[13px] font-bold tracking-wide uppercase transition-all duration-200 border whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
                    isActive
                      ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                      : "bg-[#F7F1E6] text-[#0B2A6B] border-[#0B2A6B]/20 hover:border-[#0B2A6B]"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
}
