export interface AboutPillar {
  title: string;
  description: string;
  icon: string;
  metricLabel: string;
  metricIcon: string;
  accentColor: "primary" | "secondary" | "tertiary" | "primary-fixed";
}

export const aboutPillars: AboutPillar[] = [
  {
    title: "AI & Machine Learning",
    description:
      "Statistical modeling, classification & regression algorithms, LightGBM, XGBoost, and mathematical optimization using Mixed-Integer Linear Programming (MILP).",
    icon: "model_training",
    metricLabel: "PREDICTIVE ACCURACY",
    metricIcon: "insights",
    accentColor: "primary",
  },
  {
    title: "Generative AI & LLMs",
    description:
      "Production Retrieval-Augmented Generation (RAG), dynamic chunking, dense/hybrid vector embeddings, context window management, and small language model (SLM) workflows.",
    icon: "neurology",
    metricLabel: "HIGH-FIDELITY RAG",
    metricIcon: "psychology",
    accentColor: "secondary",
  },
  {
    title: "Agentic AI & Autonomy",
    description:
      "Autonomous multi-agent execution graphs, tool-calling APIs, dynamic constraint validation, human-in-the-loop approvals, and Model Context Protocol (MCP) integrations.",
    icon: "hub",
    metricLabel: "AUTONOMOUS LOOPS",
    metricIcon: "sync",
    accentColor: "tertiary",
  },
  {
    title: "Full-Stack Architecture",
    description:
      "High-throughput FastAPI microservices, Node.js, Next.js dynamic interfaces, PostgreSQL with vector extensions, Dockerized deployments, and robust API design.",
    icon: "data_object",
    metricLabel: "PRODUCTION SCALE",
    metricIcon: "dns",
    accentColor: "primary-fixed",
  },
];
