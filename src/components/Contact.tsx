"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link as fallback with pre-filled subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nContext / Message:\n${formData.message}`
    );
    
    // Set feedback state
    setSubmitted(true);

    // Open user's default email client
    setTimeout(() => {
      window.open(`mailto:${profileData.email}?subject=${subject}&body=${body}`, "_blank");
    }, 400);
  };

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10 scroll-mt-20"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Narrative & Direct Credentials (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
              10 // CONNECT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
              Have an Interesting Problem?
              <br />
              Let&apos;s Engineer the Solution.
            </h2>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              I&apos;m always interested in building meaningful products, solving engineering challenges, and exploring opportunities in AI and scalable software development.
            </p>
          </div>

          {/* Direct Reachability Channels */}
          <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-3 text-on-surface">
              <span className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0 border border-white/5">
                <Mail className="w-4 h-4" />
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                {profileData.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-on-surface">
              <span className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shrink-0 border border-white/5">
                <MapPin className="w-4 h-4" />
              </span>
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <a
              href={`mailto:${profileData.email}`}
              className="px-6 py-3 rounded-lg bg-primary text-on-primary font-display text-sm font-semibold shadow-[0_0_20px_rgba(208,188,255,0.4)] hover:shadow-[0_0_30px_rgba(208,188,255,0.6)] transition-all flex items-center gap-2"
            >
              <span>Send an Email</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-display text-sm font-medium border border-white/10 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-secondary" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-display text-sm font-medium border border-white/10 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Quick Message Terminal Card (Right 5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-surface-container/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex flex-col gap-5"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.8)]" />
              <span className="font-display text-base font-semibold text-on-surface">
                Quick Inquiry Dispatch
              </span>
            </div>
            <span className="font-mono text-xs text-outline">DIRECT_DISPATCH</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-mono text-xs">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-on-surface-variant uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Elena Rostova"
                className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-white/10 focus:border-primary focus:outline-none font-sans text-sm placeholder:text-outline-variant transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-on-surface-variant uppercase tracking-wider">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@company.com"
                className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-white/10 focus:border-primary focus:outline-none font-sans text-sm placeholder:text-outline-variant transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-on-surface-variant uppercase tracking-wider">
                Project or Role Context
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Discussing Applied AI role / collaborative system design..."
                className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-white/10 focus:border-primary focus:outline-none font-sans text-sm placeholder:text-outline-variant resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-lg bg-primary-container text-on-primary-container font-mono text-xs font-semibold hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(160,120,255,0.3)]"
            >
              <span>Transmit Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 p-3 rounded-lg bg-tertiary/10 border border-tertiary/30 text-tertiary font-mono text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Transmission dispatched. Opening email client to transmit directly to Ayushman.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

