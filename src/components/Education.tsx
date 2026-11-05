"use client";

import React from "react";
import { educationData, certificationsData } from "@/data/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10"
      id="education"
    >
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5"
        >
          <span className="font-mono text-xs text-tertiary tracking-widest uppercase font-semibold">
            07 // FOUNDATION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
            Academic Foundation.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Education Spotlight Card (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-container/60 backdrop-blur-md border border-white/10 flex flex-col gap-5"
          >
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
                  {educationData.type}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface">
                  {educationData.institution}
                </h3>
                <p className="text-secondary font-display text-base sm:text-lg font-medium">
                  {educationData.degree}
                </p>
              </div>

              <span className="font-mono text-xs text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full border border-white/10">
                {educationData.period}
              </span>
            </div>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-white/5">
              <span className="font-mono text-xs text-on-surface uppercase tracking-wider">
                Rigorous Core Coursework:
              </span>
              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg bg-surface-container-high text-on-surface font-sans text-xs sm:text-sm border border-white/5"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Grid (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
              Verified Professional Credentials
            </span>

            {certificationsData.map((cert) => {
              const isViolet = cert.accentColor === "primary";
              const isCyan = cert.accentColor === "secondary";
              const isEmerald = cert.accentColor === "tertiary";

              return (
                <div
                  key={cert.id}
                  className={`p-4 rounded-2xl bg-surface-container/40 border border-white/10 flex items-center gap-4 transition-all ${
                    isViolet
                      ? "hover:border-primary/40 hover:bg-surface-container/60"
                      : isCyan
                      ? "hover:border-secondary/40 hover:bg-surface-container/60"
                      : isEmerald
                      ? "hover:border-tertiary/40 hover:bg-surface-container/60"
                      : "hover:border-primary-fixed/40 hover:bg-surface-container/60"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isViolet
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : isCyan
                        ? "bg-secondary/10 text-secondary border border-secondary/20"
                        : isEmerald
                        ? "bg-tertiary/10 text-tertiary border border-tertiary/20"
                        : "bg-primary-fixed/10 text-primary-fixed border border-primary-fixed/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {cert.icon}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-display text-sm sm:text-base font-semibold text-on-surface">
                      {cert.title}
                    </span>
                    <span className="font-mono text-xs text-on-surface-variant">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
