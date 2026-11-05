"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { Menu, X, Github, Linkedin, Download, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Sandbox", href: "#sandbox" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Workflow", href: "#workflow" },
  { name: "Education", href: "#education" },
  { name: "Roles", href: "#roles" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111319]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-surface/80 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="h-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(208,188,255,0.8)] animate-pulse" />
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="font-display text-lg sm:text-[19px] font-semibold text-on-surface tracking-tight hover:text-primary transition-colors uppercase"
              >
                {profileData.name}
              </a>
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-widest pl-4 hidden xs:inline-block">
              AI/ML ENGINEER | AGENTIC AI
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-all duration-200 text-[13px] px-2.5 py-1.5 rounded-lg ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-semibold shadow-[0_0_12px_rgba(160,120,255,0.3)]"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-white/5 font-normal"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center rounded-lg hover:bg-surface-container-high hover:text-on-surface"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center rounded-lg hover:bg-surface-container-high hover:text-on-surface"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
          </div>

          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Ayushman_Patro_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/40 bg-surface-container/60 hover:bg-primary hover:text-on-primary text-primary font-mono text-[11px] shadow-[0_0_12px_rgba(208,188,255,0.2)] hover:shadow-[0_0_20px_rgba(208,188,255,0.4)] transition-all font-medium"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>


          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container-high transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0d1017]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-primary-container text-on-primary-container font-semibold"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Ayushman_Patro_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-primary/40 bg-primary/10 text-primary font-mono text-xs font-semibold shadow-[0_0_12px_rgba(208,188,255,0.2)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Resume</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-xs font-mono text-on-surface-variant pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

