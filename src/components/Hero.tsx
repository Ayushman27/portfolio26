"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { ArrowDown, Send, GraduationCap, Terminal } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-20 md:py-16 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Primary Narrative & Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-5 sm:gap-6"
        >
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md border border-tertiary/30 w-fit shadow-[0_0_15px_rgba(78,222,163,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary" />
            </span>
            <span className="font-mono text-xs text-tertiary tracking-wide uppercase font-medium">
              {profileData.status}
            </span>
          </div>

          {/* Oversized Headline with Dual-Tone Gradient */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] lg:leading-[1.12] font-bold tracking-tight text-on-surface">
            Building{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              {profileData.headlineGradient}
            </span>
            <br />
            Engineering What&apos;s Next.
          </h1>

          {/* High-Precision Monospace Subtitle */}
          <div className="flex items-center gap-2 font-mono text-sm sm:text-base text-secondary font-medium">
            <Terminal className="w-4 h-4 shrink-0 text-secondary" />
            <span>{profileData.roleTitle}</span>
          </div>

          {/* Editorial Description Paragraph */}
          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {profileData.summary}
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("projects");
              }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-container to-inverse-primary text-white font-display text-sm sm:text-base font-semibold shadow-[0_0_24px_rgba(160,120,255,0.4)] hover:shadow-[0_0_36px_rgba(160,120,255,0.65)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="px-6 py-3 rounded-lg bg-surface-container-high/70 backdrop-blur-md border border-white/10 hover:border-secondary/50 text-on-surface hover:text-secondary font-display text-sm sm:text-base font-medium transition-all flex items-center gap-2"
            >
              <span>Let&apos;s Connect</span>
              <Send className="w-4 h-4" />
            </a>

            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("education");
              }}
              className="px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary font-mono text-xs sm:text-sm transition-colors flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>IIIT Bhubaneswar &apos;26</span>
            </a>
          </div>

          {/* Telemetry Stats Ticker */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-2">
            {profileData.stats.map((stat, idx) => (
              <div key={idx}>
                <div
                  className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                    stat.colorVariant === "primary"
                      ? "text-on-surface"
                      : stat.colorVariant === "secondary"
                      ? "text-secondary"
                      : "text-tertiary"
                  }`}
                >
                  {stat.value}
                  <span
                    className={
                      stat.colorVariant === "primary"
                        ? "text-primary text-xl sm:text-2xl"
                        : stat.colorVariant === "secondary"
                        ? "text-secondary text-lg sm:text-xl"
                        : "text-tertiary text-lg sm:text-xl"
                    }
                  >
                    {stat.suffix}
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: High-Tech AI Engineering Ecosystem Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-6 lg:mt-0"
        >
          <div className="relative rounded-2xl bg-surface-container/70 backdrop-blur-xl border border-white/10 p-4 sm:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex flex-col gap-4">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/80 inline-block shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-secondary/80 inline-block shadow-[0_0_6px_rgba(93,230,255,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-tertiary/80 inline-block shadow-[0_0_6px_rgba(78,222,163,0.5)]" />
                <span className="ml-2 font-mono text-xs text-on-surface-variant">
                  agent_orchestrator.ts
                </span>
              </div>
              <span className="font-mono text-[11px] text-secondary bg-secondary-container/10 px-2 py-0.5 rounded border border-secondary/20 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                RUNNING
              </span>
            </div>

            {/* Micro-Terminal Code Canvas */}
            <div className="p-3.5 rounded-lg bg-surface-container-lowest/90 font-mono text-xs text-on-surface-variant overflow-x-auto leading-relaxed border border-white/5">
              <p className="text-outline">
                <span className="text-primary font-semibold">import</span>{" "}
                &#123; AgenticWorkflow, VectorRetriever &#125;{" "}
                <span className="text-primary font-semibold">from</span>{" "}
                <span className="text-tertiary">&apos;@langchain/core&apos;</span>;
              </p>
              <p className="mt-1">
                <span className="text-secondary font-semibold">const</span> agent ={" "}
                <span className="text-primary font-semibold">new</span>{" "}
                AgenticWorkflow(&#123;
              </p>
              <p className="pl-4">
                planner:{" "}
                <span className="text-tertiary">&apos;gemini-1.5-pro&apos;</span>,
              </p>
              <p className="pl-4">
                tools: [VectorRetriever, MILP_Solver, CodeSandbox],
              </p>
              <p className="pl-4">maxLoops: 5,</p>
              <p className="pl-4">
                reflection: <span className="text-secondary font-semibold">true</span>
              </p>
              <p>&#125;);</p>
              <p className="text-primary-container mt-1">
                <span className="text-secondary font-semibold">await</span> agent.execute(&#123; goal:{" "}
                <span className="text-tertiary">&apos;Optimize Supply Chain&apos;</span> &#125;);
              </p>
            </div>

            {/* Live Telemetry Matrix */}
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-surface-container-low border border-white/5 flex flex-col">
                <span className="text-on-surface-variant text-[10px] tracking-wider uppercase">
                  RAG RETRIEVAL
                </span>
                <span className="text-secondary font-semibold text-lg">
                  18.2 ms
                </span>
                <span className="text-outline-variant text-[10px]">
                  text-embedding-3-small
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-white/5 flex flex-col">
                <span className="text-on-surface-variant text-[10px] tracking-wider uppercase">
                  SOLVER PRECISION
                </span>
                <span className="text-tertiary font-semibold text-lg">
                  98.42%
                </span>
                <span className="text-outline-variant text-[10px]">
                  MILP / PuLP Engine
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-white/5 flex flex-col">
                <span className="text-on-surface-variant text-[10px] tracking-wider uppercase">
                  ORCHESTRATION
                </span>
                <span className="text-primary font-semibold text-lg">
                  LangGraph
                </span>
                <span className="text-outline-variant text-[10px]">
                  StateGraph Checkpoints
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-white/5 flex flex-col">
                <span className="text-on-surface-variant text-[10px] tracking-wider uppercase">
                  AGENT LOOPS
                </span>
                <span className="text-on-surface font-semibold text-lg">
                  05 Active
                </span>
                <span className="text-outline-variant text-[10px]">
                  Zero Token Overflow
                </span>
              </div>
            </div>

            {/* Floating Architectural Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 rounded bg-white/5 text-on-surface-variant font-mono text-[11px] border border-white/10">
                PyTorch
              </span>
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] border border-primary/20">
                FastAPI
              </span>
              <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-mono text-[11px] border border-secondary/20">
                MILP Optimization
              </span>
              <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-mono text-[11px] border border-tertiary/20">
                LangChain
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-on-surface-variant font-mono text-[11px] border border-white/10">
                PostgreSQL
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
