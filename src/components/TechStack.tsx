"use client";

import React, { useState } from "react";
import { skillCategories, ProficiencyTier } from "@/data/skills";
import { motion } from "framer-motion";

export default function TechStack() {
  const [filterTier, setFilterTier] = useState<ProficiencyTier | "all">("all");

  const getTierBadgeStyle = (tier: ProficiencyTier) => {
    switch (tier) {
      case "core":
        return "bg-primary/10 border-primary/30 text-primary shadow-[0_0_8px_rgba(208,188,255,0.15)]";
      case "hands-on":
        return "bg-secondary/10 border-secondary/30 text-secondary shadow-[0_0_8px_rgba(93,230,255,0.15)]";
      case "working":
        return "bg-white/5 border-white/10 text-on-surface-variant";
    }
  };

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10 scroll-mt-20"
      id="tech-stack"
    >
      <div className="flex flex-col gap-8">
        {/* Header and Legend */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1.5"
          >
            <span className="font-mono text-xs text-secondary tracking-widest uppercase font-semibold">
              02 // CAPABILITIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
              My Engineering Arsenal.
            </h2>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
              Structured technical capability dashboard categorized by operational role, calibrated with explicit proficiency tiers.
            </p>
          </motion.div>

          {/* Interactive Legend / Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilterTier("all")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
                filterTier === "all"
                  ? "bg-white/15 text-white border border-white/30"
                  : "bg-surface-container hover:bg-white/5 text-on-surface-variant border border-white/5"
              }`}
            >
              <span>All Tiers</span>
            </button>

            <button
              onClick={() => setFilterTier("core")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
                filterTier === "core"
                  ? "bg-primary/20 text-primary border border-primary/50 shadow-[0_0_12px_rgba(208,188,255,0.3)]"
                  : "bg-primary/10 border border-primary/30 text-primary hover:bg-primary/15"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Core Strength</span>
            </button>

            <button
              onClick={() => setFilterTier("hands-on")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
                filterTier === "hands-on"
                  ? "bg-secondary/20 text-secondary border border-secondary/50 shadow-[0_0_12px_rgba(93,230,255,0.3)]"
                  : "bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/15"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Hands-on</span>
            </button>

            <button
              onClick={() => setFilterTier("working")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
                filterTier === "working"
                  ? "bg-white/15 text-white border border-white/30"
                  : "bg-white/5 border border-white/10 text-on-surface-variant hover:bg-white/10"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-outline" />
              <span>Working Knowledge</span>
            </button>
          </div>
        </div>

        {/* 10 Structured Category Panels (Bento Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => {
            const visibleSkills = category.skills.filter((s) => {
              if (filterTier === "all") return true;
              if (s.name === "Python" && (filterTier === "core" || filterTier === "hands-on")) {
                return true;
              }
              return s.tier === filterTier;
            });

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-5 rounded-2xl bg-surface-container/50 border border-white/10 hover:border-white/20 transition-all flex flex-col gap-3 ${
                  category.fullSpan ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <span className="font-display text-base font-semibold text-on-surface">
                    {category.name}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      category.accentColor === "primary"
                        ? "text-primary"
                        : category.accentColor === "secondary"
                        ? "text-secondary"
                        : category.accentColor === "tertiary"
                        ? "text-tertiary"
                        : "text-primary-fixed"
                    }`}
                  >
                    {category.icon}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {visibleSkills.length > 0 ? (
                    visibleSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 rounded border font-mono text-xs transition-all ${getTierBadgeStyle(
                          skill.tier
                        )}`}
                      >
                        {skill.name}{" "}
                        <span className="text-[10px] opacity-75">
                          (
                          {skill.tier === "core"
                            ? "Core"
                            : skill.tier === "hands-on"
                            ? "Hands-on"
                            : "Working"}
                          )
                        </span>
                      </span>
                    ))
                  ) : (
                    <span className="text-outline text-xs font-mono py-1">
                      No skills match the selected tier filter.
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

