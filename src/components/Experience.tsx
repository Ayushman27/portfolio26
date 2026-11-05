"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10"
      id="experience"
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
            03 // TRACK RECORD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
            Where I&apos;ve Built &amp; Learned.
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Combined 9 months of engineering internship experience delivering production generative architectures and machine learning pipelines.
          </p>
        </motion.div>

        {/* Experience Timeline Stack */}
        <div className="flex flex-col gap-10 sm:gap-12 relative pl-6 sm:pl-8 border-l border-primary/30 ml-2 sm:ml-4">
          {experiences.map((exp, idx) => {
            const isViolet = exp.accentColor === "primary";

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col gap-4"
              >
                {/* Timeline Glowing Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-surface ${
                    isViolet
                      ? "bg-primary shadow-[0_0_12px_rgba(208,188,255,0.8)]"
                      : "bg-secondary shadow-[0_0_12px_rgba(93,230,255,0.8)]"
                  }`}
                />

                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm mt-0.5">
                      <span className={isViolet ? "text-primary font-medium" : "text-secondary font-medium"}>
                        {exp.company}
                      </span>
                      <span className="text-outline">•</span>
                      <span className="text-on-surface-variant">{exp.type}</span>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs px-3 py-1 rounded-full border w-fit font-medium ${
                      isViolet
                        ? "text-secondary bg-secondary/10 border-secondary/20"
                        : "text-tertiary bg-tertiary/10 border-tertiary/20"
                    }`}
                  >
                    {exp.period} ({exp.duration})
                  </span>
                </div>

                {/* Subprojects or Summary */}
                {exp.subProjects ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {exp.subProjects.map((sub) => (
                      <div
                        key={sub.title}
                        className="p-5 rounded-2xl bg-surface-container/60 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={`material-symbols-outlined text-[20px] ${
                                sub.tagColor === "primary" ? "text-primary" : "text-secondary"
                              }`}
                            >
                              {sub.icon}
                            </span>
                            <h4 className="font-display text-base font-semibold text-on-surface">
                              {sub.title}
                            </h4>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                            {sub.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-white/5 font-mono text-[11px]">
                          {sub.tags.map((tag) => (
                            <span
                              key={tag}
                              className={
                                sub.tagColor === "primary" ? "text-primary" : "text-secondary"
                              }
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-surface-container/60 border border-white/10 flex flex-col gap-3">
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {exp.summary}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 font-mono text-xs text-tertiary">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-surface-container-high border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
