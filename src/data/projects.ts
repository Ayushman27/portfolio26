export interface ProjectMetric {
  label: string;
  value: string;
  subtext: string;
  colorVariant: "primary" | "secondary" | "tertiary";
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  date: string;
  accentColor: "primary" | "secondary" | "tertiary";
  description: string;
  technologies: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  demoUrl?: string;
  type: "inventory" | "patient" | "agentic";
}

export interface UpcomingProject {
  id: string;
  code: string;
  title: string;
  status: "In Development" | "Researching" | "Exploring";
  statusColor: "primary" | "secondary" | "tertiary";
  description: string;
  technologies: string;
}

export const featuredProjects: ProjectItem[] = [
  {
    id: "inventory-forecasting",
    projectNumber: "PROJECT 01",
    date: "October 2024",
    category: "Supply Chain AI",
    accentColor: "primary",
    title: "AI-Powered Inventory Forecasting & Optimization System",
    description:
      "Eliminated the high carrying costs and supply outages inherent in traditional Reorder Point (ROP) heuristics. Designed an integrated machine learning regression pipeline paired with a Mixed-Integer Linear Programming (MILP) formulation that computes optimal replenishment decisions under safety-stock, budget, and warehouse capacity constraints.",
    technologies: ["Python", "FastAPI", "LightGBM", "PuLP (MILP)", "Docker", "React"],
    metrics: [
      {
        label: "COST SAVINGS",
        value: "3.17%",
        subtext: "Lower mean carrying",
        colorVariant: "tertiary",
      },
      {
        label: "TEST HARNESS",
        value: "132",
        subtext: "Automated CI/CD tests",
        colorVariant: "secondary",
      },
      {
        label: "SOLVER SPEED",
        value: "<200ms",
        subtext: "PuLP / Branch-&-Bound",
        colorVariant: "primary",
      },
    ],
    githubUrl: "https://github.com/Ayushman27",
    demoUrl: "#contact",
    type: "inventory",
  },
  {
    id: "patient-stratification",
    projectNumber: "PROJECT 02",
    date: "August 2024",
    category: "Healthcare AI",
    accentColor: "secondary",
    title: "Intelligent Patient Stratification & Drug Recommendation System",
    description:
      "Formulated a dual-tier clinical analytics engine. The first tier stratifies electronic health record (EHR) cohorts into precision risk categories using tuned XGBoost and Random Forest ensembles. The second tier pairs reinforcement learning policies with small language models (SLMs) to generate medically bounded dosage titration explanations.",
    technologies: [
      "Python",
      "XGBoost",
      "Random Forest",
      "SLM Fine-Tuning",
      "Reinforcement Learning",
    ],
    metrics: [
      {
        label: "ROC-AUC SCORE",
        value: "96.2%",
        subtext: "Cohort risk detection",
        colorVariant: "secondary",
      },
      {
        label: "EXPLAINABILITY",
        value: "SHAP + SLM",
        subtext: "Clinician summaries",
        colorVariant: "tertiary",
      },
      {
        label: "SAFETY BOUNDS",
        value: "Zero Breach",
        subtext: "Constrained RL policy",
        colorVariant: "primary",
      },
    ],
    githubUrl: "https://github.com/Ayushman27",
    demoUrl: "#contact",
    type: "patient",
  },
  {
    id: "agentic-travel-platform",
    projectNumber: "PROJECT 03",
    date: "July 2024",
    category: "Autonomous Multi-Agent",
    accentColor: "tertiary",
    title: "Agentic Corporate Travel Automation Platform",
    description:
      "Constructed an autonomous multi-agent system orchestrating end-to-end flight, hotel, and transit booking. Equipped with explicit policy compliance verification, automated transaction rollback protocols, and human-in-the-loop executive approval gates built on LangGraph.",
    technologies: [
      "Node.js",
      "React",
      "LangGraph",
      "Travel APIs",
      "Multi-Agent Systems",
    ],
    metrics: [
      {
        label: "TURNAROUND SPEED",
        value: "84%",
        subtext: "Faster approval loop",
        colorVariant: "primary",
      },
      {
        label: "COORDINATION",
        value: "3 Agents",
        subtext: "Planner • Auditor • Buyer",
        colorVariant: "tertiary",
      },
      {
        label: "RECOVERY RATE",
        value: "100%",
        subtext: "Rollback on booking fault",
        colorVariant: "secondary",
      },
    ],
    githubUrl: "https://github.com/Ayushman27",
    demoUrl: "#contact",
    type: "agentic",
  },
];

export const upcomingProjects: UpcomingProject[] = [
  {
    id: "code-synthesis-engine",
    code: "R&D 01",
    title: "Self-Refining Multi-Agent Code Synthesis Engine",
    status: "In Development",
    statusColor: "primary",
    description:
      "Developing a multi-agent loop running automated test generators, AST syntax analyzers, and compiler sandboxes to autonomously iterate on algorithmic Python scripts.",
    technologies: "Python, LangGraph, Docker Sandboxes, AST",
  },
  {
    id: "edge-slm-quantization",
    code: "R&D 02",
    title: "Edge-Optimized Small Language Model Quantization",
    status: "Researching",
    statusColor: "secondary",
    description:
      "Investigating 4-bit and 2-bit weight quantization (GGUF/AWQ) on custom-tuned 3B parameter models to evaluate latency trade-offs on memory-constrained local microcontrollers.",
    technologies: "Ollama, ONNX Runtime, GGUF, PyTorch",
  },
  {
    id: "mcp-knowledge-orchestrator",
    code: "R&D 03",
    title: "Autonomous MCP Knowledge Orchestrator",
    status: "Exploring",
    statusColor: "tertiary",
    description:
      "Building a universal Model Context Protocol (MCP) server connecting local vector indices, SQL databases, and file systems for zero-friction dynamic LLM grounding.",
    technologies: "Model Context Protocol (MCP), Vector DBs, TypeScript",
  },
];

