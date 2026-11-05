export interface CareerRole {
  id: string;
  roleNumber: string;
  title: string;
  description: string;
  tools: string;
  accentColor: "primary" | "secondary" | "tertiary" | "primary-fixed" | "secondary-fixed" | "tertiary-fixed";
}

export const careerRoles: CareerRole[] = [
  {
    id: "applied-aiml",
    roleNumber: "ROLE 01",
    title: "Applied AI/ML Engineer",
    description:
      "Translating business operations into robust predictive models, mathematical optimizers, and automated decision engines.",
    tools: "Tools: Python, LightGBM, Scikit-Learn, MILP, FastAPI",
    accentColor: "primary",
  },
  {
    id: "gen-ai",
    roleNumber: "ROLE 02",
    title: "Generative AI Engineer",
    description:
      "Building low-latency RAG architectures, contextual caching, token optimization, and enterprise knowledge indexing.",
    tools: "Tools: LangChain, Gemini API, OpenAI API, Pinecone",
    accentColor: "secondary",
  },
  {
    id: "agentic-ai",
    roleNumber: "ROLE 03",
    title: "Agentic AI Engineer",
    description:
      "Architecting multi-agent networks with autonomous tool calls, memory state graphs, and deterministic recovery rails.",
    tools: "Tools: LangGraph, MCP Protocol, Node.js, Python",
    accentColor: "tertiary",
  },
  {
    id: "ml-engineer",
    roleNumber: "ROLE 04",
    title: "Machine Learning Engineer",
    description:
      "End-to-end data pipeline construction, statistical cross-validation, feature engineering, and high-volume inference endpoints.",
    tools: "Tools: PyTorch, XGBoost, Docker, PostgreSQL",
    accentColor: "primary-fixed",
  },
  {
    id: "python-backend",
    roleNumber: "ROLE 05",
    title: "Python Backend Developer",
    description:
      "Microservices architecture, asynchronous event handling, RESTful API design, database connection pooling, and Docker.",
    tools: "Tools: Python, FastAPI, SQL, Docker, Redis",
    accentColor: "secondary-fixed",
  },
  {
    id: "fullstack-ai",
    roleNumber: "ROLE 06",
    title: "Full-Stack AI Developer",
    description:
      "Seamlessly tying reactive Next.js/React user frontends to streaming AI backend workers and distributed cloud databases.",
    tools: "Tools: Next.js, React, Tailwind, FastAPI, PostgreSQL",
    accentColor: "tertiary-fixed",
  },
];

