export type ProficiencyTier = "core" | "hands-on" | "working";

export interface SkillItem {
  name: string;
  tier: ProficiencyTier;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  accentColor: "primary" | "secondary" | "tertiary" | "primary-fixed";
  skills: SkillItem[];
  fullSpan?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "code",
    accentColor: "primary",
    skills: [
      { name: "Python", tier: "hands-on" },
      { name: "C++", tier: "core" },
      { name: "JavaScript", tier: "core" },
      { name: "TypeScript", tier: "core" },
      { name: "SQL", tier: "core" },
      { name: "C", tier: "working" },
      { name: "Java", tier: "working" },
    ],
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: "auto_graph",
    accentColor: "secondary",
    skills: [
      { name: "Supervised Learning", tier: "core" },
      { name: "Feature Engineering", tier: "core" },
      { name: "XGBoost", tier: "core" },
      { name: "Random Forest", tier: "core" },
      { name: "Classification & Regression", tier: "core" },
      { name: "Hyperparameter Tuning", tier: "hands-on" },
      { name: "Reinforcement Learning", tier: "hands-on" },
      { name: "Ensemble Learning", tier: "core" },
      { name: "Cross-Validation", tier: "hands-on" },
    ],
  },
  {
    id: "generative-ai",
    name: "Generative AI & LLMs",
    icon: "psychology",
    accentColor: "tertiary",
    skills: [
      { name: "RAG Architectures", tier: "core" },
      { name: "Vector Embeddings", tier: "core" },
      { name: "Semantic Search", tier: "core" },
      { name: "SLMs & LLMs", tier: "hands-on" },
      { name: "Prompt Engineering", tier: "hands-on" },
      { name: "Context Engineering", tier: "hands-on" },
    ],
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    icon: "account_tree",
    accentColor: "primary",
    skills: [
      { name: "Multi-Agent Systems", tier: "core" },
      { name: "Tool / Function Calling", tier: "core" },
      { name: "Agent Orchestration", tier: "core" },
      { name: "Agentic Workflows & Loops", tier: "hands-on" },
      { name: "Human-in-the-Loop", tier: "hands-on" },
      { name: "Model Context Protocol (MCP)", tier: "working" },
    ],
  },
  {
    id: "frameworks",
    name: "AI Frameworks",
    icon: "layers",
    accentColor: "secondary",
    skills: [
      { name: "LangChain", tier: "core" },
      { name: "LangGraph", tier: "core" },
      { name: "OpenAI APIs", tier: "hands-on" },
      { name: "Gemini APIs", tier: "hands-on" },
      { name: "Hugging Face", tier: "hands-on" },
      { name: "Spring AI", tier: "working" },
    ],
  },
  {
    id: "backend",
    name: "Backend & API Systems",
    icon: "dns",
    accentColor: "tertiary",
    skills: [
      { name: "FastAPI (Python)", tier: "core" },
      { name: "RESTful APIs", tier: "core" },
      { name: "Node.js / Express", tier: "hands-on" },
      { name: "Microservices", tier: "hands-on" },
      { name: "System Design", tier: "hands-on" },
      { name: "API Integration", tier: "core" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "web",
    accentColor: "primary",
    skills: [
      { name: "React.js", tier: "core" },
      { name: "Next.js", tier: "core" },
      { name: "Tailwind CSS", tier: "core" },
      { name: "MERN Architecture", tier: "hands-on" },
      { name: "Flutter", tier: "working" },
    ],
  },
  {
    id: "databases-cloud",
    name: "Databases & Cloud",
    icon: "database",
    accentColor: "secondary",
    skills: [
      { name: "PostgreSQL (Neon)", tier: "core" },
      { name: "Pinecone / Chroma (Vector DBs)", tier: "core" },
      { name: "MySQL", tier: "hands-on" },
      { name: "Google Cloud Platform", tier: "hands-on" },
      { name: "Render / Cloudinary", tier: "hands-on" },
    ],
  },
  {
    id: "ai-tools",
    name: "AI Developer Tooling",
    icon: "smart_toy",
    accentColor: "tertiary",
    skills: [
      { name: "Cursor", tier: "core" },
      { name: "Claude 3.7", tier: "core" },
      { name: "Ollama", tier: "hands-on" },
      { name: "n8n Workflow", tier: "hands-on" },
      { name: "Google Antigravity", tier: "hands-on" },
      { name: "KIRO.dev / Kimi Code", tier: "working" },
    ],
  },
  {
    id: "devops-tools",
    name: "Developer & DevOps Ecosystem",
    icon: "terminal",
    accentColor: "primary-fixed",
    fullSpan: true,
    skills: [
      { name: "Git & GitHub", tier: "core" },
      { name: "Docker Containerization", tier: "core" },
      { name: "Postman REST Suite", tier: "hands-on" },
      { name: "VS Code", tier: "hands-on" },
      { name: "Google Colab GPU", tier: "hands-on" },
      { name: "Figma System Spec", tier: "working" },
    ],
  },
];

