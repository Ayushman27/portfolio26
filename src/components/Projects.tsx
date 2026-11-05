"use client";

import React, { useState } from "react";
import { featuredProjects, ProjectItem } from "@/data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Check, ArrowRight } from "lucide-react";

export default function Projects() {
  const [activeDemoProject, setActiveDemoProject] = useState<string | null>(null);

  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.type) {
      case "inventory":
        return (
          <div className="w-full lg:w-96 rounded-2xl bg-surface-container-lowest/80 border border-white/10 p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="font-mono text-xs text-on-surface-variant">
                OPTIMIZATION_TELEMETRY
              </span>
              <span className="text-tertiary font-mono text-xs font-semibold">
                STATUS: CONVERGED
              </span>
            </div>

            {/* Embedded SVG Simulation Chart */}
            <div className="py-4">
              <svg className="w-full h-32" fill="none" viewBox="0 0 300 120">
                {/* Grid Lines */}
                <path
                  d="M0 30 H300 M0 60 H300 M0 90 H300"
                  stroke="rgba(255,255,255,0.05)"
                  strokeDasharray="4 4"
                />
                {/* Baseline ROP Curve (Error prone) */}
                <path
                  d="M10 90 Q 50 110, 90 40 T 170 85 T 250 30 T 290 95"
                  stroke="#958ea0"
                  strokeDasharray="2 2"
                  strokeWidth="2"
                />
                {/* MILP Optimized Smooth Trajectory */}
                <path
                  d="M10 80 Q 50 50, 90 55 T 170 52 T 250 48 T 290 50"
                  stroke="#4edea3"
                  strokeWidth="2.5"
                />
                {/* Replenishment Impulse Dots */}
                <circle cx="90" cy="55" fill="#4edea3" r="4" />
                <circle cx="170" cy="52" fill="#4edea3" r="4" />
                <circle cx="250" cy="48" fill="#4edea3" r="4" />
              </svg>
              <div className="flex items-center justify-between font-mono text-[11px] text-on-surface-variant pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 bg-outline inline-block" /> Baseline ROP
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 bg-tertiary inline-block" /> MILP Trajectory
                </span>
              </div>
            </div>

            <div className="font-mono text-xs text-outline-variant bg-surface-container-high/50 p-2.5 rounded-lg border border-white/5">
              Cost: $41,200.14 • Infeasible Penalty: 0.00
            </div>
          </div>
        );

      case "patient":
        return (
          <div className="w-full lg:w-96 rounded-2xl bg-surface-container-lowest/80 border border-white/10 p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="font-mono text-xs text-on-surface-variant">
                COHORT_STRATIFICATION
              </span>
              <span className="text-secondary font-mono text-xs font-semibold">
                AUC: 0.962
              </span>
            </div>

            {/* Stratification Bar Matrix */}
            <div className="py-4 flex flex-col gap-3 font-mono text-xs">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[11px] text-on-surface-variant">
                  <span>Critical Risk Stratum</span>
                  <span className="text-error font-semibold">96.8%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                  <div className="w-[96.8%] h-full bg-error rounded-full" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[11px] text-on-surface-variant">
                  <span>Moderate Phenotype</span>
                  <span className="text-secondary font-semibold">91.4%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                  <div className="w-[91.4%] h-full bg-secondary rounded-full" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[11px] text-on-surface-variant">
                  <span>Low Risk Outpatient</span>
                  <span className="text-tertiary font-semibold">99.1%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                  <div className="w-[99.1%] h-full bg-tertiary rounded-full" />
                </div>
              </div>
            </div>

            <div className="font-mono text-xs text-outline-variant bg-surface-container-high/50 p-2.5 rounded-lg border border-white/5">
              Dosage Bounds: FDA Regimen Safe Verified
            </div>
          </div>
        );

      case "agentic":
        return (
          <div className="w-full lg:w-96 rounded-2xl bg-surface-container-lowest/80 border border-white/10 p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="font-mono text-xs text-on-surface-variant">
                AGENT_GRAPH_TOPOLOGY
              </span>
              <span className="text-tertiary font-mono text-xs font-semibold">
                LOOP: ACTIVE
              </span>
            </div>

            {/* Node Flow Graphic */}
            <div className="py-3 flex flex-col gap-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-surface-container-high border border-primary/40 flex items-center justify-between">
                <span className="text-primary font-semibold">[01] Intent Planner</span>
                <span className="text-outline-variant text-[10px]">Gemini 1.5</span>
              </div>
              <div className="flex justify-center text-secondary py-0.5">
                <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-high border border-secondary/40 flex items-center justify-between">
                <span className="text-secondary font-semibold">[02] Policy Compliance Audit</span>
                <span className="text-outline-variant text-[10px]">Deterministic MILP</span>
              </div>
              <div className="flex justify-center text-tertiary py-0.5">
                <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-high border border-tertiary/40 flex items-center justify-between">
                <span className="text-tertiary font-semibold">[03] Purchase Execution</span>
                <span className="text-tertiary text-[10px] font-semibold">HITL Approved</span>
              </div>
            </div>

            <div className="font-mono text-xs text-outline-variant bg-surface-container-high/50 p-2.5 rounded-lg border border-white/5">
              State Checkpoint: Graph Transaction Safe
            </div>
          </div>
        );
    }
  };

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10 scroll-mt-20"
      id="projects"
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
            04 // APPLIED ENGINEERING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
            Things I&apos;ve Engineered.
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Deep architectural case studies combining machine learning, mathematical optimization, and autonomous multi-agent pipelines.
          </p>
        </motion.div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-8">
          {featuredProjects.map((project, idx) => {
            const isViolet = project.accentColor === "primary";
            const isCyan = project.accentColor === "secondary";
            const isEmerald = project.accentColor === "tertiary";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`p-6 sm:p-8 rounded-3xl bg-surface-container/60 backdrop-blur-xl border border-white/10 transition-all flex flex-col lg:flex-row gap-6 sm:gap-8 ${
                  isViolet
                    ? "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
                    : isCyan
                    ? "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                    : "hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(78,222,163,0.12)]"
                }`}
              >
                {/* Left Description & Specs */}
                <div className="flex-1 flex flex-col justify-between gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span
                        className={`font-mono text-xs uppercase tracking-wider font-semibold ${
                          isViolet
                            ? "text-primary"
                            : isCyan
                            ? "text-secondary"
                            : "text-tertiary"
                        }`}
                      >
                        {project.projectNumber} • {project.date}
                      </span>
                      <span
                        className={`px-3 py-0.5 rounded-full font-mono text-xs border ${
                          isViolet
                            ? "bg-primary/10 border-primary/20 text-primary"
                            : isCyan
                            ? "bg-secondary/10 border-secondary/20 text-secondary"
                            : "bg-tertiary/10 border-tertiary/20 text-tertiary"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-on-surface">
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics Callout Strip */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-surface-container-lowest border border-white/5 font-mono text-xs">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <span className="text-on-surface-variant text-[10px] block uppercase tracking-wider">
                            {m.label}
                          </span>
                          <span
                            className={`font-bold text-lg sm:text-xl block my-0.5 ${
                              m.colorVariant === "primary"
                                ? "text-primary"
                                : m.colorVariant === "secondary"
                                ? "text-secondary"
                                : "text-tertiary"
                            }`}
                          >
                            {m.value}
                          </span>
                          <span className="text-outline-variant text-[10px] block truncate">
                            {m.subtext}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-xs text-on-surface-variant">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-surface-container-high border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all flex items-center gap-2 ${
                        isViolet
                          ? "bg-primary text-on-primary hover:shadow-[0_0_16px_rgba(208,188,255,0.4)]"
                          : isCyan
                          ? "bg-secondary text-on-secondary hover:shadow-[0_0_16px_rgba(93,230,255,0.4)]"
                          : "bg-tertiary text-on-tertiary hover:shadow-[0_0_16px_rgba(78,222,163,0.4)]"
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>

                    <button
                      onClick={() =>
                        setActiveDemoProject(
                          activeDemoProject === project.id ? null : project.id
                        )
                      }
                      className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-mono text-xs border border-white/10 transition-colors flex items-center gap-2"
                    >
                      <Code2 className="w-4 h-4 text-secondary" />
                      <span>
                        {activeDemoProject === project.id
                          ? "Hide Architecture Inspector"
                          : "Live Interactive Demo"}
                      </span>
                    </button>
                  </div>

                  {/* Interactive Architecture Inspector Drawer */}
                  {activeDemoProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-surface-container-lowest border border-secondary/30 flex flex-col gap-2 font-mono text-xs text-on-surface-variant"
                    >
                      <div className="flex items-center justify-between text-secondary font-semibold">
                        <span>ARCHITECTURE SPECIFICATION // {project.category}</span>
                        <span className="text-[10px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20">
                          VERIFIED
                        </span>
                      </div>
                      <p className="text-xs font-sans text-on-surface-variant">
                        This system formulation is hosted on GitHub under continuous testing. You can run automated verification tests, inspect the PuLP/XGBoost solvers, or trigger REST endpoints locally via Docker.
                      </p>
                      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          <span>Clone Repo on GitHub</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <span>•</span>
                        <a
                          href="#contact"
                          className="text-secondary hover:underline flex items-center gap-1"
                        >
                          <span>Request Live Sandbox Access</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right Visual / SVG Simulation Card */}
                {renderProjectVisual(project)}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

