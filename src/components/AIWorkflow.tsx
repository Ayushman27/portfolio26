"use client";

import React, { useState } from "react";
import { workflowStages, workflowPillars } from "@/data/workflow";
import { motion } from "framer-motion";

export default function AIWorkflow() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10 scroll-mt-20"
      id="workflow"
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
            06 // METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
            How I Build With AI.
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            A disciplined, production-grade engineering workflow moving from intent formulation to validated deployment.
          </p>
        </motion.div>

        {/* 6-Step Visual Interactive Pipeline Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {workflowStages.map((stage, idx) => {
            const isSelected = activeStage === idx;

            const getColorClasses = (variant: string) => {
              switch (variant) {
                case "primary":
                  return "text-primary border-primary/40";
                case "secondary":
                  return "text-secondary border-secondary/40";
                case "tertiary":
                  return "text-tertiary border-tertiary/40";
                case "primary-fixed":
                  return "text-primary-fixed border-primary-fixed/40";
                case "secondary-fixed":
                  return "text-secondary-fixed border-secondary-fixed/40";
                case "tertiary-fixed":
                  return "text-tertiary-fixed border-tertiary-fixed/40";
                default:
                  return "text-primary border-primary/40";
              }
            };

            return (
              <motion.div
                key={stage.stageNumber}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveStage(isSelected ? null : idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all flex flex-col gap-2 relative ${
                  isSelected
                    ? "bg-surface-container-high border-2 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                    : "bg-surface-container/60 hover:bg-surface-container border border-white/10"
                } ${getColorClasses(stage.accentColor)}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold tracking-wider">
                    {stage.stageNumber}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                </div>

                <h4 className="font-display text-sm font-semibold text-on-surface">
                  {stage.title}
                </h4>

                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Deep-Dive Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {workflowPillars.map((pillar, idx) => {
            const isViolet = pillar.accentColor === "primary";
            const isCyan = pillar.accentColor === "secondary";

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-surface-container-high/40 border border-white/10 hover:border-white/20 transition-all flex flex-col gap-3"
              >
                <div
                  className={`flex items-center gap-2 ${
                    isViolet
                      ? "text-primary"
                      : isCyan
                      ? "text-secondary"
                      : "text-tertiary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {pillar.icon}
                  </span>
                  <h3 className="font-display text-base font-semibold text-on-surface">
                    {pillar.title}
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

