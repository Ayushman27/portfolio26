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
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10 scroll-mt-20"
      id="projects"
    >
      <div className="flex flex-col gap-8">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-tertiary tracking-widest uppercase font-semibold">
                04 // APPLIED ENGINEERING SYSTEMS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-mono text-[10px]">
                <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-white font-mono text-xs font-semibold shadow-[0_0_20px_rgba(160,120,255,0.35)] hover:shadow-[0_0_30px_rgba(160,120,255,0.6)] hover:-translate-y-0.5 transition-all self-start md:self-auto shrink-0"
          >
            <span>Explore All Projects &amp; Telemetry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Compact Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {previewItems.map((item, idx) => {
            const isViolet = item.accent === "primary";
            const isCyan = item.accent === "secondary";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-5 sm:p-6 rounded-2xl bg-surface-container/50 backdrop-blur-xl border border-white/10 flex flex-col justify-between transition-all group ${
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
                      {item.num} // {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-outline uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      Production
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span
                      className={`font-mono text-base font-bold ${
                        isViolet
                          ? "text-primary"
                          : isCyan
                          ? "text-secondary"
                          : "text-tertiary"
                      }`}
                    >
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
                  <Link
                    href="/projects"
                    className="text-secondary hover:text-white transition-colors flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Architecture &amp; Telemetry</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Gateway Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2.5 text-on-surface-variant text-center sm:text-left">
            <Cpu className="w-4 h-4 text-tertiary shrink-0" />
            <span>
              Includes 3 Production Architectures + 3 Active R&amp;D Research Labs with live SVG telemetry.
            </span>
          </div>

          <Link
            href="/projects"
            className="text-primary hover:text-white underline underline-offset-4 flex items-center gap-1 shrink-0 font-semibold"
          >
            <span>Open Dedicated Projects Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

