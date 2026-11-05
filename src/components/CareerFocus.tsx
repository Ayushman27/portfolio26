"use client";

import React from "react";
import { careerRoles } from "@/data/roles";
import { motion } from "framer-motion";

export default function CareerFocus() {
  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10"
      id="roles"
    >
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5"
        >
          <span className="font-mono text-xs text-secondary tracking-widest uppercase font-semibold">
            09 // CAREER ALIGNMENT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
            Where I Can Make an Impact.
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            High-readiness engineering roles matching my applied skillset, theoretical foundation, and internship track record.
          </p>
        </motion.div>

        {/* 6 Role Alignment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerRoles.map((role, idx) => {
            const getColor = (color: string) => {
              switch (color) {
                case "primary":
                  return "text-primary hover:border-primary/50";
                case "secondary":
                  return "text-secondary hover:border-secondary/50";
                case "tertiary":
                  return "text-tertiary hover:border-tertiary/50";
                case "primary-fixed":
                  return "text-primary-fixed hover:border-primary-fixed/50";
                case "secondary-fixed":
                  return "text-secondary-fixed hover:border-secondary-fixed/50";
                case "tertiary-fixed":
                  return "text-tertiary-fixed hover:border-tertiary-fixed/50";
                default:
                  return "text-primary hover:border-primary/50";
              }
            };

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 sm:p-7 rounded-2xl bg-surface-container/60 border border-white/10 transition-all flex flex-col justify-between ${getColor(
                  role.accentColor
                )}`}
              >
                <div className="flex flex-col gap-2.5">
                  <span className="font-mono text-xs font-semibold">
                    {role.roleNumber}
                  </span>
                  <h3 className="font-display text-lg font-bold text-on-surface">
                    {role.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[11px] text-outline">
                  {role.tools}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
