export interface WorkflowStage {
  stageNumber: string;
  title: string;
  description: string;
  accentColor: "primary" | "secondary" | "tertiary" | "primary-fixed" | "secondary-fixed" | "tertiary-fixed";
}

export interface WorkflowPillar {
  title: string;
  description: string;
  icon: string;
  accentColor: "primary" | "secondary" | "tertiary";
}

export const workflowStages: WorkflowStage[] = [
  {
    stageNumber: "STAGE 01",
    title: "Objective Formulation",
    description:
      "Deconstructing high-level user intents into explicit algorithmic constraints and deterministic boundary rules.",
    accentColor: "primary",
  },
  {
    stageNumber: "STAGE 02",
    title: "RAG Injection",
    description:
      "Dense & hybrid semantic retrieval over Pinecone and Neon vector embeddings with cosine similarity scoring.",
    accentColor: "secondary",
  },
  {
    stageNumber: "STAGE 03",
    title: "Agent Reasoning",
    description:
      "LangGraph state graphs for multi-hop decomposition, reflection loops, and autonomous decision DAGs.",
    accentColor: "tertiary",
  },
  {
    stageNumber: "STAGE 04",
    title: "Tool Execution",
    description:
      "Structured API function calls, PuLP MILP optimization solvers, and parameterized SQL query execution.",
    accentColor: "primary-fixed",
  },
  {
    stageNumber: "STAGE 05",
    title: "Self-Correction",
    description:
      "Automated validation gates, schema checking, and deterministic re-prompting on constraint violations.",
    accentColor: "secondary-fixed",
  },
  {
    stageNumber: "STAGE 06",
    title: "Verified Delivery",
    description:
      "FastAPI microservice endpoints serving cached, audited outputs with sub-20ms target latency.",
    accentColor: "tertiary-fixed",
  },
];

export const workflowPillars: WorkflowPillar[] = [
  {
    title: "LLM Engineering Hygiene",
    description:
      "Zero reliance on naive prompting. Strict few-shot formatting, JSON schema enforcement, token budget optimization, dynamic context window sliding, and rigorous prompt regression test suites.",
    icon: "psychology",
    accentColor: "primary",
  },
  {
    title: "Agentic Architecture",
    description:
      "Deterministic graph workflows using LangGraph. Explicit state persistence, human-in-the-loop approvals for destructive operations, recursive reflection loops, and graceful fallback paths.",
    icon: "account_tree",
    accentColor: "secondary",
  },
  {
    title: "Modern AI Tooling",
    description:
      "Leveraging Cursor for high-velocity IDE workflows, Claude 3.7 for deep reasoning architecture reviews, Ollama for zero-cost local prototyping, and n8n for rapid integration glue.",
    icon: "smart_toy",
    accentColor: "tertiary",
  },
];
