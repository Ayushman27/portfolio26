"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundShader from "@/components/BackgroundShader";
import { featuredProjects, upcomingProjects, ProjectItem } from "@/data/projects";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  Bot,
  Filter,
} from "lucide-react";

type FilterCategory = "all" | "inventory" | "patient" | "agentic" | "research";

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [activeDemoProject, setActiveDemoProject] = useState<string | null>(null);

  const filteredFeatured = featuredProjects.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "research") return false;
    return p.type === activeCategory;
  });

  const showResearch = activeCategory === "all" || activeCategory === "research";

  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.type) {
      case "inventory":
        return (
          <div className="w-full lg:w-96 rounded-2xl bg-surface-container-lowest/80 border border-white/10 p-5 flex flex-col justify-between shrink-0">
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
          <div className="w-full lg:w-96 rounded-2xl bg-surface-container-lowest/80 border border-white/10 p-5 flex flex-col justify-between shrink-0">
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
          <div className="w-full lg:w-96 rounded-2xl bg-surface-container-lowest/80 border border-white/10 p-5 flex flex-col justify-between shrink-0">
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

      case "twin":
        return (
          <div className="w-full lg:w-96 rounded-2xl bg-surface-container-lowest/80 border border-white/10 p-5 flex flex-col justify-between shrink-0">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="font-mono text-xs text-on-surface-variant">
                DIGITAL_TWIN_TELEMETRY
              </span>
              <span className="text-secondary font-mono text-xs font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                SYNC: REAL-TIME
              </span>
            </div>

            {/* Dual Twin Architecture Pipeline */}
            <div className="py-3 flex flex-col gap-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-surface-container-high border border-secondary/40 flex items-center justify-between">
                <div>
                  <span className="text-secondary font-semibold block">[01] Physical Telemetry Ingest</span>
                  <span className="text-outline-variant text-[10px]">Sensor Bus • Stream Ingestion</span>
                </div>
                <span className="text-secondary text-[11px] font-bold">&lt;120ms</span>
              </div>
              <div className="flex justify-center text-primary py-0.5">
                <span className="material-symbols-outlined text-[16px]">sync_alt</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-high border border-primary/40 flex items-center justify-between">
                <div>
                  <span className="text-primary font-semibold block">[02] Virtual Twin Shadow Agent</span>
                  <span className="text-outline-variant text-[10px]">LangGraph Anomaly Detection</span>
                </div>
                <span className="text-tertiary text-[11px] font-bold">99.4% F1</span>
              </div>
              <div className="flex justify-center text-tertiary py-0.5">
                <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-high border border-tertiary/40 flex items-center justify-between">
                <div>
                  <span className="text-tertiary font-semibold block">[03] Closed-Loop Actuator</span>
                  <span className="text-outline-variant text-[10px]">Deterministic Policy Dispatch</span>
                </div>
                <span className="text-tertiary text-[10px] font-semibold">Autonomous</span>
              </div>
            </div>

            <div className="font-mono text-xs text-outline-variant bg-surface-container-high/50 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
              <span>Shadow State: Reconciled</span>
              <span className="text-secondary text-[10px]">Fault: 0.00%</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#080A0F] text-on-surface flex flex-col relative selection:bg-primary/20 selection:text-white">
      {/* Background Shader */}
      <BackgroundShader />

      {/* Atmospheric Volumetric Nebula Lighting */}
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-[25%] right-[10%] w-[450px] h-[450px] bg-secondary/12 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] left-[15%] w-[480px] h-[480px] bg-tertiary/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="w-full pt-28 pb-20 relative z-10 flex-1">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
          {/* Breadcrumb Navigation & Back Link */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home Overview</span>
            </Link>

            <span className="font-mono text-xs text-outline hidden sm:inline-block">
              ENGINEERING DIRECTORY // AYUSHMAN PATRO
            </span>
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-tertiary tracking-widest uppercase font-semibold">
                SYSTEM ARCHITECTURES &amp; LABS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-mono text-[10px]">
                <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                6 Verified Formulations
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight font-bold">
              Applied Systems &amp; R&amp;D.
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Explore production architectures combining Mixed-Integer Linear Programming (MILP), clinician-grade predictive ML ensembles, autonomous LangGraph state graphs, and active research prototypes.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-surface-container/50 border border-white/5 font-mono text-xs flex flex-col gap-1">
                <span className="text-outline uppercase text-[10px]">Inventory MILP</span>
                <span className="text-lg font-bold text-tertiary">3.17% Cost ↓</span>
                <span className="text-[10px] text-on-surface-variant">&lt;200ms solver speed</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container/50 border border-white/5 font-mono text-xs flex flex-col gap-1">
                <span className="text-outline uppercase text-[10px]">Patient Stratification</span>
                <span className="text-lg font-bold text-secondary">96.2% ROC-AUC</span>
                <span className="text-[10px] text-on-surface-variant">Zero safety breach</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container/50 border border-white/5 font-mono text-xs flex flex-col gap-1">
                <span className="text-outline uppercase text-[10px]">Agentic Travel Graph</span>
                <span className="text-lg font-bold text-primary">84% Faster</span>
                <span className="text-[10px] text-on-surface-variant">LangGraph + HITL</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container/50 border border-white/5 font-mono text-xs flex flex-col gap-1">
                <span className="text-outline uppercase text-[10px]">Digital Twin Agent</span>
                <span className="text-lg font-bold text-secondary">&lt;120ms Sync</span>
                <span className="text-[10px] text-on-surface-variant">Dual-Agent Telemetry</span>
              </div>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-outline flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>

            {[
              { id: "all", label: "All Formulations (6)" },
              { id: "inventory", label: "Supply Chain AI & MILP" },
              { id: "patient", label: "Healthcare & Clinical AI" },
              { id: "agentic", label: "Autonomous Multi-Agent" },
              { id: "research", label: "Experimental R&D Labs" },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as FilterCategory)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-on-primary font-semibold shadow-[0_0_12px_rgba(208,188,255,0.3)]"
                      : "bg-surface-container-high/60 text-on-surface-variant hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Featured Production Systems */}
          {filteredFeatured.length > 0 && (
            <div className="flex flex-col gap-8">
              {filteredFeatured.map((project, idx) => {
                const isViolet = project.accentColor === "primary";
                const isCyan = project.accentColor === "secondary";

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`p-6 sm:p-8 rounded-3xl bg-surface-container/60 backdrop-blur-xl border border-white/10 transition-all flex flex-col lg:flex-row gap-6 sm:gap-8 ${
                      isViolet
                        ? "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
                        : isCyan
                        ? "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                        : "hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(78,222,163,0.12)]"
                    }`}
                  >
                    {/* Left Details & Specs */}
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

                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                          {project.title}
                        </h2>

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
                        {project.demoUrl && project.demoUrl.startsWith("http") && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-red-600 hover:bg-red-500 text-white shadow-[0_0_18px_rgba(239,68,68,0.45)] hover:shadow-[0_0_28px_rgba(239,68,68,0.7)] border border-red-400/40 transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Application</span>
                          </a>
                        )}

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
                          type="button"
                          onClick={() =>
                            setActiveDemoProject(
                              activeDemoProject === project.id ? null : project.id
                            )
                          }
                          className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-mono text-xs border border-white/10 transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <Code2 className="w-4 h-4 text-secondary" />
                          <span>
                            {activeDemoProject === project.id
                              ? "Hide Architecture Spec"
                              : "Architecture & Verification"}
                          </span>
                        </button>
                      </div>

                      {/* Architecture Drawer */}
                      {activeDemoProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="p-4 rounded-xl bg-surface-container-lowest border border-secondary/30 flex flex-col gap-2.5 font-mono text-xs text-on-surface-variant"
                        >
                          <div className="flex items-center justify-between text-secondary font-semibold">
                            <span>ARCHITECTURE SPECIFICATION // {project.category}</span>
                            <span className="text-[10px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20">
                              VERIFIED
                            </span>
                          </div>
                          <p className="text-xs font-sans text-on-surface-variant leading-relaxed">
                            Formulated with strict deterministic checks and hosted under continuous integration. Automated tests validate boundary conditions, zero stockouts, and latency targets.
                          </p>
                          <div className="p-2.5 rounded bg-black/60 border border-white/5 font-mono text-[11px] text-tertiary flex items-center justify-between">
                            <span>$ docker run -p 8000:8000 ayushman/{project.id}:latest</span>
                            <span className="text-outline text-[10px]">Docker Ready</span>
                          </div>
                          <div className="flex items-center gap-3 pt-1 border-t border-white/5 flex-wrap">
                            {project.demoUrl && project.demoUrl.startsWith("http") && (
                              <>
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-red-400 hover:text-red-300 hover:underline flex items-center gap-1 font-semibold"
                                >
                                  <span>Open Live Web App</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                                <span>•</span>
                              </>
                            )}
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center gap-1"
                            >
                              <span>Inspect Source on GitHub</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            <span>•</span>
                            <Link
                              href="/#sandbox"
                              className="text-secondary hover:underline flex items-center gap-1"
                            >
                              <span>Query Agent on Architecture Tradeoffs</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Visual / SVG Diagram */}
                    {renderProjectVisual(project)}
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Experimental R&D Labs Section */}
          {showResearch && (
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex flex-col gap-1.5 border-t border-white/10 pt-8">
                <span className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold">
                  ACTIVE RESEARCH &amp; EXPERIMENTAL LABS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-white font-bold">
                  Open-Source Prototyping &amp; Edge Inference.
                </h2>
                <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                  Active research exploring iterative code execution, weight quantization on small language models, and Model Context Protocol (MCP) servers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingProjects.map((project, idx) => {
                  const isViolet = project.statusColor === "primary";
                  const isCyan = project.statusColor === "secondary";

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className={`p-6 rounded-2xl bg-surface-container/40 border border-white/10 transition-all flex flex-col justify-between ${
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

                        <h3 className="font-display text-lg font-semibold text-white">
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
          )}

          {/* Recruiter Agent Bridge Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface-container/90 via-[#0d1017] to-surface-container/90 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-secondary font-mono text-xs">
                <Bot className="w-4 h-4 text-secondary" />
                <span>INTERACTIVE RECRUITER AI CHAT</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Have Technical Questions About Any System?
              </h3>
              <p className="font-sans text-sm text-on-surface-variant max-w-xl leading-relaxed">
                Ask my autonomous agent about solver formulations, why I selected LightGBM over ARIMA, or how LangGraph handles transactional state rollbacks.
              </p>
            </div>

            <Link
              href="/#sandbox"
              className="px-6 py-3 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold shadow-[0_0_20px_rgba(208,188,255,0.4)] hover:shadow-[0_0_30px_rgba(208,188,255,0.6)] transition-all flex items-center gap-2 shrink-0"
            >
              <span>Ask Recruiter Agent</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

