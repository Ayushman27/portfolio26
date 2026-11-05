"use client";

import React from "react";
import { softSkillsData } from "@/data/softSkills";
import { motion } from "framer-motion";

export default function SoftSkills() {
  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10"
      id="beyond-code"
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
            08 // PROFESSIONALISM
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
            The Engineer Beyond Technology.
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Engineering impact requires more than syntax. It demands architectural empathy, communication, and ownership.
          </p>
        </motion.div>

        {/* 8 Compact Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {softSkillsData.map((skill, idx) => {
            const getIconColor = (color: string) => {
              switch (color) {
                case "primary":
                  return "text-primary";
                case "secondary":
                  return "text-secondary";
                case "tertiary":
                  return "text-tertiary";
                case "primary-fixed":
                  return "text-primary-fixed";
                case "secondary-fixed":
                  return "text-secondary-fixed";
                case "tertiary-fixed":
                  return "text-tertiary-fixed";
                default:
                  return "text-primary";
              }
            };

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-surface-container/50 border border-white/10 hover:border-white/25 hover:bg-surface-container transition-all flex flex-col gap-2.5"
              >
                <span
                  className={`material-symbols-outlined text-[26px] ${getIconColor(
                    skill.accentColor
                  )}`}
                >
                  {skill.icon}
                </span>

                <h4 className="font-display text-base font-semibold text-on-surface">
                  {skill.title}
                </h4>

                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

