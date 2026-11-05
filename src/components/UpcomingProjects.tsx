"use client";

import React from "react";
import { upcomingProjects } from "@/data/projects";
import { motion } from "framer-motion";

export default function UpcomingProjects() {
  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10"
      id="research"
    >
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5"
        >
          <span className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold">
            05 // EXPERIMENTAL R&amp;D
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
            Currently Exploring What&apos;s Next.
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Active open-source research and prototyping exploring the outer bounds of agent autonomy and edge inference.
          </p>
        </motion.div>

        {/* 3 Futuristic Lab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingProjects.map((project, idx) => {
            const isViolet = project.statusColor === "primary";
            const isCyan = project.statusColor === "secondary";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-7 rounded-2xl bg-surface-container/40 border border-white/10 transition-all flex flex-col justify-between ${
                  isViolet
                    ? "hover:border-primary/50 hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]"
                    : isCyan
                    ? "hover:border-secondary/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                    : "hover:border-tertiary/50 hover:shadow-[0_0_24px_rgba(78,222,163,0.12)]"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isViolet
                          ? "text-primary"
                          : isCyan
                          ? "text-secondary"
                          : "text-tertiary"
                      }`}
                    >
                      {project.code}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] border flex items-center gap-1.5 ${
                        isViolet
                          ? "bg-primary/10 text-primary border-primary/20"
                          : isCyan
                          ? "bg-secondary/10 text-secondary border-secondary/20"
                          : "bg-tertiary/10 text-tertiary border-tertiary/20"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isViolet
                            ? "bg-primary animate-pulse"
                            : isCyan
                            ? "bg-secondary"
                            : "bg-tertiary"
                        }`}
                      />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-on-surface">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 font-mono text-[11px] text-outline">
                  {project.technologies}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

