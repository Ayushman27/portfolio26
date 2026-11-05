"use client";

import React from "react";
import Image from "next/image";
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
                  className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${stat.colorVariant === "primary"
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

        {/* Right Column: High-Tech Cybernetic Portrait Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-6 lg:mt-0"
        >
          <div className="relative rounded-3xl bg-surface-container/70 backdrop-blur-xl border border-white/10 p-4 sm:p-5 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col gap-4 group hover:border-primary/40 transition-all">
            {/* Terminal Chrome Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/80 inline-block shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-secondary/80 inline-block shadow-[0_0_6px_rgba(93,230,255,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-tertiary/80 inline-block shadow-[0_0_6px_rgba(78,222,163,0.5)]" />
                <span className="ml-2 font-mono text-xs text-on-surface-variant font-medium">
                  ayushman_patro.ai
                </span>
              </div>
            </div>

            {/* High Quality Photo Frame with Cybernetic HUD Framing */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-surface-container-lowest">
              <div className="relative w-full h-[380px] sm:h-[430px]">
                <Image
                  src="/images/ayushman-patro.jpg"
                  alt="Ayushman Patro - AI/ML Engineer"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Corner HUD Markers */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/60 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-secondary/60 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/60 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-secondary/60 pointer-events-none" />
            </div>

            {/* Identity & Status Tag Below the Image */}
            <div className="p-3.5 rounded-xl bg-surface-container-high/85 backdrop-blur-md border border-white/10 flex items-center justify-between gap-2 shadow-sm">
              <div className="flex flex-col">
                <span className="font-display text-sm sm:text-base font-bold text-white tracking-tight">
                  Ayushman Patro
                </span>
                <span className="font-mono text-[11px] text-secondary">
                  AI/ML Engineer • Agentic Systems
                </span>
              </div>

              <span className="font-mono text-[10px] text-tertiary bg-tertiary/10 px-2.5 py-1 rounded-full border border-tertiary/30 flex items-center gap-1.5 shrink-0 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                AVAILABLE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
