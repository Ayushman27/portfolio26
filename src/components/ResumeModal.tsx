"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { Download, ExternalLink, X, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080a0f]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-5xl h-[88vh] sm:h-[90vh] bg-[#11141c]/95 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_24px_72px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden z-10"
          >
            {/* Terminal Chrome Header with Controls */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-surface-container-lowest/80 select-none">
              {/* Left: Window Dots & Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-error/80 inline-block shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-secondary/80 inline-block shadow-[0_0_6px_rgba(93,230,255,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-tertiary/80 inline-block shadow-[0_0_6px_rgba(78,222,163,0.5)]" />
                </div>
                <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs sm:text-sm text-on-surface font-medium">
                    Ayushman_Patro_Resume.pdf
                  </span>
                </div>
              </div>

              {/* Right: Actions (Download, Open New Tab, Close) */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Direct Download Action Button */}
                <a
                  href={profileData.resumeUrl}
                  download="Ayushman_Patro_Resume.pdf"
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-primary-container to-inverse-primary hover:from-primary hover:to-primary text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-[0_0_16px_rgba(160,120,255,0.4)] hover:shadow-[0_0_24px_rgba(160,120,255,0.65)] transition-all"
                  title="Download PDF to your computer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* Open in Dedicated Browser Tab */}
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors"
                  title="Open fullscreen in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors"
                  title="Close viewer (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Frame */}
            <div className="relative flex-1 w-full bg-[#1e2028]">
              <iframe
                src={`${profileData.resumeUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="Ayushman Patro Resume Viewer"
              />
            </div>

            {/* Mobile Fallback Footer Banner */}
            <div className="sm:hidden px-4 py-2.5 bg-surface-container-low border-t border-white/10 flex items-center justify-between font-mono text-xs text-on-surface-variant">
              <span>Viewing on mobile?</span>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold hover:underline flex items-center gap-1"
              >
                <span>Fullscreen Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

