import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & System Architectures | Ayushman Patro — AI/ML Engineer",
  description:
    "Production-grade AI systems, mathematical optimization pipelines (MILP), clinician-grade ML ensembles, and autonomous LangGraph multi-agent architectures engineered by Ayushman Patro.",
  keywords: [
    "Ayushman Patro Projects",
    "Inventory Optimization MILP",
    "Patient Stratification AI",
    "LangGraph Multi-Agent",
    "FastAPI",
    "Generative AI Projects",
    "Machine Learning Portfolio",
  ],
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

