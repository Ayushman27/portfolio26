"use client";

import React from "react";
import { aboutPillars } from "@/data/about";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10 scroll-mt-20"
      id="about"
    >
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
            01 // OVERVIEW
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
            Engineering Beyond Code.
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Armed with Computer Science rigorous foundations from IIIT Bhubaneswar and 9 months of hands-on internship experience, I focus on the synthesis of machine intelligence, distributed system backends, and deterministic mathematical optimization.
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPillars.map((pillar, idx) => {
            const isViolet = pillar.accentColor === "primary";
            const isCyan = pillar.accentColor === "secondary";
            const isEmerald = pillar.accentColor === "tertiary";

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group p-6 rounded-2xl bg-surface-container/60 backdrop-blur-md border border-white/10 transition-all flex flex-col justify-between ${
                  isViolet
                    ? "hover:border-primary/50 hover:shadow-[0_0_24px_rgba(139,92,246,0.15)]"
                    : isCyan
                    ? "hover:border-secondary/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]"
                    : isEmerald
                    ? "hover:border-tertiary/50 hover:shadow-[0_0_24px_rgba(78,222,163,0.15)]"
                    : "hover:border-primary-fixed/50 hover:shadow-[0_0_24px_rgba(233,221,255,0.15)]"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isViolet
                        ? "bg-primary/10 border border-primary/30 text-primary"
                        : isCyan
                        ? "bg-secondary/10 border border-secondary/30 text-secondary"
                        : isEmerald
                        ? "bg-tertiary/10 border border-tertiary/30 text-tertiary"
                        : "bg-primary-fixed/10 border border-primary-fixed/30 text-primary-fixed"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      {pillar.icon}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-on-surface">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-3 border-t border-white/5 font-mono text-xs flex items-center justify-between ${
                    isViolet
                      ? "text-primary"
                      : isCyan
                      ? "text-secondary"
                      : isEmerald
                      ? "text-tertiary"
                      : "text-primary-fixed"
                  }`}
                >
                  <span className="tracking-wider uppercase">{pillar.metricLabel}</span>
                  <span className="material-symbols-outlined text-[16px]">
                    {pillar.metricIcon}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

