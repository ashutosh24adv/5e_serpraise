"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { HeritageDivider } from "../ui/HeritageDivider";
import { blogContent, BlogPost } from "@/content/blogs";
import { Clock, Calendar, User, ArrowRight, BookOpen, Tag } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    "All",
    "Learning & Andragogy",
    "Organizational Development",
    "Leadership & Stewardship",
    "Enterprise Growth",
    "Executive Strategy",
    "Philosophy & Culture",
  ];

  const { featuredArticle, posts } = blogContent;
  const allArticles = [featuredArticle, ...posts];

  const filteredPosts =
    selectedCategory === "All"
      ? allArticles
      : allArticles.filter((post) => post.category === selectedCategory);

  return (
    <section className="py-[72px] bg-[#EFE6D6]" id="articles">
      <Container size="wide">
        <HeritageDivider />

        {/* Featured Essay Spotlight (Only when "All" is active or matched) */}
        {selectedCategory === "All" && (
          <div className="my-8">
            <div className="flex items-center gap-2 mb-3 text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-[#D62839]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>FEATURED PRACTITIONER ESSAY</span>
            </div>

            <div className="bg-[#0B2A6B] text-[#EFE6D6] border-2 border-[#A67C37] p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-[#EFE6D6]/80">
                    <span className="px-2.5 py-1 bg-[#D62839] text-white font-bold uppercase tracking-wider text-[10px]">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#A67C37]" />
                      {featuredArticle.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#A67C37]" />
                      {featuredArticle.readingTime}
                    </span>
                  </div>

                  <h2 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#EFE6D6] leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="font-serif italic text-base text-[#A67C37]">
                    {featuredArticle.subtitle}
                  </p>

                  <p className="font-sans text-sm sm:text-[15px] text-[#EFE6D6]/90 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Author & Topics */}
                  <div className="pt-4 border-t border-[#EFE6D6]/20 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-[#A67C37] text-[#0B2A6B] flex items-center justify-center font-bold text-xs">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-serif font-bold text-xs sm:text-sm text-[#EFE6D6]">
                          {featuredArticle.author.name}
                        </div>
                        <div className="font-sans text-[11px] text-[#EFE6D6]/70">
                          {featuredArticle.author.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {featuredArticle.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[#071D4D] border border-[#A67C37]/40 text-[10px] font-sans text-[#A67C37]"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div
                    className="w-full max-w-[280px] aspect-[4/5] bg-[#071D4D] border-2 border-[#A67C37] p-6 flex flex-col justify-between items-center text-center"
                    style={{ borderRadius: "999px 999px 0 0" }}
                  >
                    <span className="font-serif italic text-xs text-[#A67C37] pt-3">
                      5e Thought Leadership
                    </span>
                    <div className="my-auto space-y-2">
                      <div className="font-serif font-bold text-xl text-[#EFE6D6]">
                        Experiential Andragogy
                      </div>
                      <div className="w-8 h-[1px] bg-[#A67C37] mx-auto" />
                      <div className="text-[11px] font-sans text-[#EFE6D6]/70">
                        PGL &bull; Case Studies &bull; Simulations
                      </div>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#A67C37] uppercase">
                      5E SERPRAISE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="my-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#A67C37]/40 pb-5">
          <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[#0B2A6B]">
            <Tag className="w-4 h-4 text-[#D62839]" />
            <span>Filter Articles by Category</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 font-sans text-xs font-bold tracking-wide uppercase transition-all duration-200 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B2A6B] ${
                    isSelected
                      ? "bg-[#0B2A6B] text-[#EFE6D6] border-[#0B2A6B]"
                      : "bg-[#F7F1E6] text-[#0B2A6B] border-[#0B2A6B]/20 hover:border-[#0B2A6B]"
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                layout
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F7F1E6] border border-[#0B2A6B]/25 p-6 sm:p-7 flex flex-col justify-between hover:border-[#0B2A6B] transition-colors group"
              >
                <div className="space-y-4">
                  {/* Top Category & Read Time */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#A67C37]/30 text-xs font-sans">
                    <span className="font-bold uppercase tracking-wider text-[#D62839] text-[10px]">
                      {post.category}
                    </span>
                    <span className="font-mono text-[#15151A]/60 text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#A67C37]" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif font-extrabold text-xl text-[#0B2A6B] leading-snug group-hover:text-[#D62839] transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-serif italic text-xs text-[#A67C37] mt-1">
                      {post.subtitle}
                    </p>
                  </div>

                  {/* Excerpt */}
                  <p className="font-sans text-xs sm:text-[13px] text-[#15151A]/80 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Topic Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.topics.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-[#EFE6D6] border border-[#A67C37]/30 text-[10px] font-sans text-[#0B2A6B]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Author & Date */}
                <div className="pt-4 mt-6 border-t border-[#A67C37]/30 flex items-center justify-between text-xs font-sans">
                  <div>
                    <div className="font-bold text-[#0B2A6B] text-xs">
                      {post.author.name}
                    </div>
                    <div className="text-[10px] text-[#15151A]/60">
                      {post.date}
                    </div>
                  </div>
                  <span className="font-serif italic text-xs text-[#A67C37] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Publication Note */}
        <div className="mt-14 p-6 bg-[#F7F1E6] border border-[#A67C37]/40 text-center max-w-[760px] mx-auto space-y-2">
          <div className="font-serif italic text-sm text-[#0B2A6B] font-semibold">
            &ldquo;Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness.&rdquo;
          </div>
          <div className="text-xs font-sans text-[#A67C37] uppercase tracking-wider">
            5e Serpraise Practitioner Insights &bull; India &bull; Australia
          </div>
        </div>
      </Container>
    </section>
  );
}
