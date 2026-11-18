"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isProjectsPage = pathname === "/projects";

  const handleNav = (id: string) => {
    if (id === "projects") {
      if (isProjectsPage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/projects");
      }
      return;
    }

    if (isProjectsPage) {
      router.push(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/10 mt-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.8)]" />
            <span className="font-display text-base font-semibold text-on-surface tracking-tight">
              {profileData.name} — AI/ML Engineer
            </span>
          </div>
          <p className="font-mono text-xs text-on-surface-variant">
            © {new Date().getFullYear()} Ayushman Patro. Designed &amp; Engineered with curiosity.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs">
          <button
            type="button"
            onClick={() => handleNav("projects")}
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => handleNav("sandbox")}
            className="text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
          >
            Sandbox
          </button>
          <button
            type="button"
            onClick={() => handleNav("tech-stack")}
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            Tech Stack
          </button>
          <button
            type="button"
            onClick={() => handleNav("workflow")}
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            Workflow
          </button>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-resume-modal"))}
            className="text-on-surface-variant hover:text-tertiary transition-colors"
          >
            Resume PDF
          </button>
          <button
            type="button"
            onClick={() => handleNav("contact")}
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </button>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-white transition-all ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

