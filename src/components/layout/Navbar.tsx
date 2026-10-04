"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);
  const mainNavItems = siteConfig.navItems;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#EFE6D6] py-5 double-brass-border-b">
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Logo on LEFT */}
          <div className="flex-shrink-0">
            <Logo variant="navy" />
          </div>

          {/* Main Links & CTA on RIGHT */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            <nav
              className="flex items-center gap-6 xl:gap-7"
              aria-label="Main Navigation"
            >
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-[14px] font-sans font-semibold transition-colors whitespace-nowrap ${
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

            {/* Right CTA */}
            <div className="flex-shrink-0 pl-2">
              <Button
                href="/#contact"
                variant="primary"
              >
                Get in touch
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#0B2A6B] hover:text-[#D62839] focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-[#EFE6D6] z-50 overflow-y-auto border-t border-[#A67C37]/40 flex flex-col justify-between p-6">
          <div className="space-y-2">
            <div className="text-[11px] font-sans uppercase font-bold tracking-[0.2em] text-[#A67C37] mb-3 px-2">
              Navigation
            </div>
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-3 py-3 font-serif text-lg border-b border-[#A67C37]/20 ${
                    isActive
                      ? "text-[#D62839] font-bold"
                      : "text-[#0B2A6B]"
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
              href="/#contact"
              variant="primary"
              className="w-full"
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
