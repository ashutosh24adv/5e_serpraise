"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  // Prevent background scroll when mobile menu is open & listen for ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const mainNavItems = siteConfig.navItems;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#EFE6D6] py-4 sm:py-5 double-brass-border-b">
      {/* Wide 1440px container utilizing available horizontal space */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-2 xl:grid-cols-[auto_1fr_auto] items-center gap-6 xl:gap-8 2xl:gap-12">
          {/* 1. Left: Brand Logo */}
          <div className="flex-shrink-0 flex items-center justify-start">
            <Logo variant="navy" />
          </div>

          {/* 2. Center: Navigation Items with spacious breathing room */}
          <nav
            className="hidden xl:flex items-center justify-center gap-5 2xl:gap-7"
            aria-label="Main Navigation"
          >
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href) &&
                  !item.href.includes("#"));

              const hasChildren = Boolean(item.children && item.children.length > 0);

              if (hasChildren && item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                      onFocus={() => setDropdownOpen(true)}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-flex items-center gap-1 text-[14px] font-sans font-semibold transition-colors whitespace-nowrap py-1 focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
                        isActive
                          ? "text-[#D62839] underline decoration-[#A67C37] decoration-2 underline-offset-[6px]"
                          : "text-[#0B2A6B] hover:text-[#D62839]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#A67C37] transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-[#D62839]" : "group-hover:rotate-180"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>

                    {/* Hover-safe bridge & Dropdown Menu */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-56 transition-all duration-200 ${
                        dropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto"
                      }`}
                      role="menu"
                      aria-label={`${item.label} sub-sections`}
                    >
                      <div className="bg-[#F7F1E6] border border-[#A67C37] py-1 shadow-xs">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setDropdownOpen(false)}
                            onFocus={() => setDropdownOpen(true)}
                            onBlur={(e) => {
                              // If focus moved outside the menu, close it
                              if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                                setDropdownOpen(false);
                              }
                            }}
                            role="menuitem"
                            className="min-h-[44px] flex items-center justify-between px-4 py-2.5 text-xs font-sans font-bold uppercase tracking-wider text-[#0B2A6B] hover:bg-[#0B2A6B] hover:text-[#EFE6D6] transition-colors border-b border-[#A67C37]/20 last:border-b-0 group/item focus:outline-none focus:bg-[#0B2A6B] focus:text-[#EFE6D6]"
                          >
                            <span>{subItem.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-focus/item:opacity-100 text-[#A67C37] transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-[14px] font-sans font-semibold transition-colors whitespace-nowrap py-1 focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
                    isActive
                      ? "text-[#D62839] underline decoration-[#A67C37] decoration-2 underline-offset-[6px]"
                      : "text-[#0B2A6B] hover:text-[#D62839]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Primary "Get in touch" CTA button anchored right */}
          <div className="hidden xl:flex items-center justify-end flex-shrink-0 pl-2">
            <Button
              href="/contact"
              variant="primary"
              className="text-[14px] px-6 py-3 font-bold"
            >
              Get in touch
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button (visible on < xl screens) */}
          <div className="flex xl:hidden items-center justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-[#0B2A6B] hover:text-[#D62839] focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-x-0 top-[69px] sm:top-[77px] bottom-0 bg-[#EFE6D6] z-50 overflow-y-auto border-t border-[#A67C37]/40 flex flex-col justify-between p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-1">
            <div className="text-[11px] font-sans uppercase font-bold tracking-[0.2em] text-[#A67C37] mb-3 px-2">
              Navigation
            </div>
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href) &&
                  !item.href.includes("#"));

              const hasChildren = Boolean(item.children && item.children.length > 0);

              if (hasChildren && item.children) {
                return (
                  <div key={item.label} className="border-b border-[#A67C37]/20">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex-1 min-h-[48px] flex items-center px-3 py-3 font-serif text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
                          isActive
                            ? "text-[#D62839] font-bold"
                            : "text-[#0B2A6B] hover:text-[#D62839]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                        aria-label="Toggle About Us sections"
                        className="p-3 text-[#A67C37] hover:text-[#0B2A6B] focus:outline-none"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileAboutExpanded ? "rotate-180 text-[#D62839]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable sub-items on mobile */}
                    {mobileAboutExpanded && (
                      <div className="pl-4 pr-2 pb-2 space-y-1 bg-[#F7F1E6]/70 border-t border-[#A67C37]/20">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={closeMenu}
                            className="min-h-[44px] flex items-center justify-between px-3 py-2.5 text-sm font-sans font-bold text-[#0B2A6B] hover:text-[#D62839] transition-colors border-b border-[#A67C37]/15 last:border-b-0"
                          >
                            <span>{subItem.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#A67C37]" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`min-h-[48px] flex items-center justify-between px-3 py-3 font-serif text-lg border-b border-[#A67C37]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
                    isActive
                      ? "text-[#D62839] font-bold bg-[#F7F1E6]"
                      : "text-[#0B2A6B] hover:text-[#D62839]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#A67C37]" />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-[#A67C37]/40 space-y-4">
            <Button
              href="/contact"
              variant="primary"
              className="w-full min-h-[48px]"
              onClick={closeMenu}
            >
              Get in touch
            </Button>
            <div className="text-center">
              <p className="font-serif italic text-xs text-[#A67C37]">
                Est. 2003 &bull; India &bull; Australia
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
