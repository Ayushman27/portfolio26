import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgentSandbox from "@/components/AgentSandbox";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import UpcomingProjects from "@/components/UpcomingProjects";
import AIWorkflow from "@/components/AIWorkflow";
import Education from "@/components/Education";
import SoftSkills from "@/components/SoftSkills";
import CareerFocus from "@/components/CareerFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundShader from "@/components/BackgroundShader";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col relative selection:bg-primary/20 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)] relative">
        <div className="flex flex-col w-full relative">
          {/* Interactive WebGL Shader Simulation Layer */}
          <BackgroundShader />

          {/* Ambient Radiant Flares */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute top-60 right-1/4 w-80 h-80 bg-secondary-container/15 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute top-[1600px] left-1/3 w-96 h-96 bg-tertiary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
          <div className="absolute top-[2800px] right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />

          {/* SECTION 1: HERO */}
          <Hero />

          {/* INTERACTIVE AGENT SANDBOX (Runtime Environment) */}
          <AgentSandbox />

          {/* SECTION 2: OVERVIEW / ABOUT */}
          <About />

          {/* SECTION 3: TECH STACK / CAPABILITIES */}
          <TechStack />

          {/* SECTION 4: EXPERIENCE / TRACK RECORD */}
          <Experience />

          {/* SECTION 5: FEATURED PROJECTS / APPLIED ENGINEERING */}
          <Projects />

          {/* SECTION 6: UPCOMING PROJECTS / EXPERIMENTAL R&D */}
          <UpcomingProjects />

          {/* SECTION 7: AI WORKFLOW / METHODOLOGY */}
          <AIWorkflow />

          {/* SECTION 8: EDUCATION & CERTIFICATIONS / FOUNDATION */}
          <Education />

          {/* SECTION 9: NON-TECHNICAL SKILLS / THE ENGINEER BEYOND CODE */}
          <SoftSkills />

          {/* SECTION 10: CAREER FOCUS / SUITABLE ROLES */}
          <CareerFocus />

          {/* SECTION 11: CONTACT / LET'S CONNECT */}
          <Contact />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
