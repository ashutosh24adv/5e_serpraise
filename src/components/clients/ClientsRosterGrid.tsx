"use client";

import React, { useState, useMemo } from "react";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { clientRoster, clientCategories, ClientCategory } from "@/content/clients";
import { ClientLogoCard } from "./ClientLogoCard";
import { Search, Filter, RefreshCw } from "lucide-react";

export function ClientsRosterGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ClientCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = useMemo(() => {
    return clientRoster
      .filter((client) => {
        const matchesCategory =
          selectedCategory === "All" || client.category === selectedCategory;
        const matchesSearch =
          client.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
          client.category.toLowerCase().includes(searchQuery.toLowerCase().trim());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F1E6] border-b border-[#A67C37]/30" id="roster">
      <Container size="wide">
        {/* Section Header */}
        <div className="space-y-4 mb-10">
          <SectionLabel
            title="CORPORATE CLIENT ROSTER"
            subtitle="Distinguished enterprises that have experienced 5e Serpraise training and OD interventions."
          />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif font-extrabold text-[clamp(28px,4vw,44px)] text-[#0B2A6B] leading-tight">
                Trusted by 88+ Industry Leaders
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#15151A]/85 max-w-[65ch] mt-2">
                Our interventions have enriched human potential across market-leading multinationals,
                public enterprises, and growth leaders across India and Australia over two decades.
              </p>
            </div>

            {/* Total verified count badge */}
            <div className="flex items-center gap-3 bg-[#EFE6D6] border border-[#0B2A6B]/20 px-4 py-2 self-start lg:self-auto">
              <span className="font-serif font-extrabold text-2xl text-[#0B2A6B]">
                {clientRoster.length}
              </span>
              <div className="text-left font-sans text-[10px] uppercase font-bold tracking-wider text-[#15151A]/70 leading-tight">
                Documented
                <br />
                Partnerships
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#EFE6D6] border border-[#A67C37]/40 p-4 sm:p-5 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A67C37]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search clients by name (e.g. Bosch, Titan, Siemens)..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-[#0B2A6B]/20 text-xs sm:text-sm text-[#15151A] placeholder:text-[#15151A]/40 focus:outline-none focus:border-[#0B2A6B]"
              />
            </div>

            {/* Results count indicator */}
            <div className="text-xs font-sans text-[#15151A]/70 flex items-center justify-between md:justify-end gap-3">
              <span>
                Showing <strong className="text-[#0B2A6B]">{filteredClients.length}</strong> of{" "}
                {clientRoster.length} clients
              </span>
              {(selectedCategory !== "All" || searchQuery) && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[#D62839] hover:underline font-bold text-xs cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="pt-2 border-t border-[#A67C37]/25 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#0B2A6B] flex items-center gap-1 flex-shrink-0 mr-1">
              <Filter className="w-3 h-3 text-[#A67C37]" /> Sector:
            </span>
            {clientCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === "All"
                  ? clientRoster.length
                  : clientRoster.filter((c) => c.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 font-sans text-[11px] font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer border ${
                    isSelected
                      ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                      : "bg-[#FCFAF6] text-[#0B2A6B] border-[#0B2A6B]/20 hover:border-[#0B2A6B]"
                  }`}
                >
                  {cat} <span className="opacity-70 text-[9px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Client Roster Grid with clean logo viewports */}
        {filteredClients.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredClients.map((client) => (
              <ClientLogoCard key={client.id} client={client} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-[#EFE6D6] border border-[#A67C37]/30 my-8 space-y-3">
            <p className="font-serif italic text-lg text-[#0B2A6B]">
              No clients found matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-[#0B2A6B] text-[#EFE6D6] font-sans text-xs uppercase tracking-wider font-bold hover:bg-[#D62839] transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
