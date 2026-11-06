"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { Download, ExternalLink, X, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle Escape key and lock background scroll
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

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container: Perfectly Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-4xl h-[86vh] max-h-[880px] bg-[#0f121a] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden z-10"
          >
            {/* Terminal Chrome Header with Controls */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#0b0d14] select-none shrink-0">
              {/* Left: Window Dots & Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-error/80 inline-block shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-secondary/80 inline-block shadow-[0_0_6px_rgba(93,230,255,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-tertiary/80 inline-block shadow-[0_0_6px_rgba(78,222,163,0.5)]" />
                </div>
                <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs sm:text-sm text-white font-medium">
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
                  className="px-3.5 sm:px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary-container to-inverse-primary hover:from-primary hover:to-primary text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-[0_0_16px_rgba(160,120,255,0.4)] hover:shadow-[0_0_24px_rgba(160,120,255,0.65)] transition-all cursor-pointer"
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
                  className="p-1.5 rounded-lg text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors"
                  title="Open fullscreen in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close viewer (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Frame */}
            <div className="relative flex-1 w-full bg-[#1b1e28]">
              <iframe
                src={`${profileData.resumeUrl}#page=1&view=FitH`}
                className="w-full h-full border-0"
                title="Ayushman Patro Resume Viewer"
              />
            </div>

            {/* Mobile Fallback Footer Banner */}
            <div className="sm:hidden px-4 py-2.5 bg-[#0b0d14] border-t border-white/10 flex items-center justify-between font-mono text-xs text-on-surface-variant shrink-0">
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

  return createPortal(modalContent, document.body);
}
