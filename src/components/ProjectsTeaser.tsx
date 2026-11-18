"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink, Cpu, ShieldCheck, GitFork } from "lucide-react";

export default function ProjectsTeaser() {
  const previewItems = [
    {
      num: "01",
      title: "AI Inventory Forecasting & MILP Optimization",
      category: "Supply Chain AI",
      metric: "3.17% Cost Savings",
      subtext: "132 CI/CD Tests • <200ms Solver",
      accent: "primary",
      tags: ["LightGBM", "PuLP (MILP)", "FastAPI"],
    },
    {
      num: "02",
      title: "Intelligent Patient Stratification & Drug Titration",
      category: "Healthcare Clinical AI",
      metric: "96.2% ROC-AUC",
      subtext: "FDA Regimen Bounded • SHAP + SLM",
      accent: "secondary",
      tags: ["XGBoost", "RL Policies", "SLMs"],
      demoUrl: "https://doctor-g-mauve.vercel.app/",
    },
    {
      num: "03",
      title: "Agentic Corporate Travel Automation Platform",
      category: "Autonomous Multi-Agent",
      metric: "84% Faster Turnaround",
      subtext: "LangGraph State Graph • HITL Gates",
      accent: "tertiary",
      tags: ["LangGraph", "Multi-Agent", "Node.js"],
    },
  ];

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-14 scroll-mt-20"
      id="projects"
    >
      {/* High-Visibility Highlighted Red Box Chassis */}
      <div className="relative rounded-3xl border-2 border-red-500/75 bg-gradient-to-b from-red-950/25 via-[#0b0d14]/95 to-red-950/20 p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(239,68,68,0.25)] backdrop-blur-xl flex flex-col gap-8 overflow-hidden">
        {/* Volumetric Red Atmosphere Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 relative z-10">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs text-red-400 tracking-widest uppercase font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                04 // APPLIED ENGINEERING SYSTEMS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 font-mono text-[11px] font-semibold shadow-[0_0_12px_rgba(239,68,68,0.3)]">
                <Sparkles className="w-3 h-3 text-red-400 animate-pulse" />
                Dedicated Hub Available
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
              Engineering Systems &amp; Applied Formulations.
            </h2>

            <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
              Algorithmic systems spanning mathematical optimization (MILP), clinician-grade predictive modeling, and LangGraph multi-agent workflows.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs sm:text-sm font-bold shadow-[0_0_24px_rgba(239,68,68,0.5)] hover:shadow-[0_0_36px_rgba(239,68,68,0.75)] hover:-translate-y-0.5 transition-all self-start md:self-auto shrink-0 border border-red-400/40"
          >
            <span>Explore All Projects &amp; Telemetry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Compact Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
          {previewItems.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-surface-container/60 backdrop-blur-xl border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_24px_rgba(239,68,68,0.18)] flex flex-col justify-between transition-all group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-red-400">
                      {item.num} // {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-outline uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      Production
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-red-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="font-mono text-base font-bold text-white">
                      {item.metric}
                    </span>
                    <span className="font-mono text-[11px] text-on-surface-variant truncate">
                      ({item.subtext})
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px] text-on-surface-variant">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-surface-container-high border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                  {item.demoUrl ? (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href="/projects"
                      className="text-red-400 hover:text-white transition-colors flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-medium"
                    >
                      <span>View Architecture</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}

                  <Link
                    href="/projects"
                    className="text-on-surface-variant hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>Full Spec</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Gateway Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-red-950/30 border border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs relative z-10">
          <div className="flex items-center gap-2.5 text-on-surface text-center sm:text-left">
            <Cpu className="w-4 h-4 text-red-400 shrink-0" />
            <span>
              Includes 3 Production Architectures + 3 Active R&amp;D Research Labs with live SVG telemetry.
            </span>
          </div>

          <Link
            href="/projects"
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-all flex items-center gap-1.5 shrink-0 shadow-[0_0_16px_rgba(239,68,68,0.4)]"
          >
            <span>Open Dedicated Projects Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

