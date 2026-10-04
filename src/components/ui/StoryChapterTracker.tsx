"use client";

import React, { useEffect, useState } from "react";

interface ChapterItem {
  id: string;
  number: string;
  name: string;
}

const chapters: ChapterItem[] = [
  { id: "hero", number: "01", name: "The Idea" },
  { id: "framework", number: "02", name: "5E Architecture" },
  { id: "clients", number: "03", name: "Credibility" },
  { id: "programme-selector", number: "04", name: "Consultation" },
  { id: "programmes-explorer", number: "04B", name: "Flagships" },
  { id: "od-explorer", number: "05", name: "OD Systems" },
  { id: "philosophy", number: "06", name: "Our Thinking" },
  { id: "about", number: "07", name: "Heritage" },
  { id: "contact", number: "08", name: "Conversation" },
];

export function StoryChapterTracker() {
  const [activeChapter, setActiveChapter] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show tracker after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 250;

      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveChapter(chapters[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Story chapter navigation"
      className="fixed right-4 xl:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end space-y-2 select-none"
    >
      <div className="bg-[#EFE6D6]/90 backdrop-blur-xs border border-[#0B2A6B]/25 p-3 shadow-xs flex flex-col space-y-2.5">
        <div className="text-[9px] font-sans font-extrabold tracking-[0.2em] uppercase text-[#A67C37] pb-1 border-b border-[#A67C37]/30 text-center">
          STORY
        </div>

        {chapters.map((ch) => {
          const isActive = activeChapter === ch.id;

          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className="flex items-center gap-2 group focus:outline-none"
              title={`Chapter ${ch.number}: ${ch.name}`}
            >
              <span
                className={`text-[10px] font-sans font-bold transition-all duration-200 opacity-0 group-hover:opacity-100 whitespace-nowrap ${
                  isActive ? "text-[#D62839] opacity-100" : "text-[#0B2A6B]"
                }`}
              >
                {ch.number} &bull; {ch.name}
              </span>

              <div className="flex items-center justify-center w-3 h-3">
                <span
                  className={`transition-all duration-300 ${
                    isActive
                      ? "w-2.5 h-2.5 bg-[#D62839] rotate-45"
                      : "w-1.5 h-1.5 bg-[#0B2A6B]/40 group-hover:bg-[#0B2A6B]"
                  }`}
                />
              </div>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
