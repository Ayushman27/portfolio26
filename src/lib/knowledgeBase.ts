/**
 * Knowledge Base & Semantic Document Retrieval Engine
 * Grounded directly on the markdown files in the /docs folder:
 * - docs/profile.md
 * - docs/resume.md
 * - docs/experience.md
 * - docs/projects.md
 * - docs/skills.md
 * - docs/certifications.md
 */

export interface KnowledgeChunk {
  id: string;
  sourceFile: string;
  title: string;
  category: "profile" | "experience" | "project" | "skill" | "certification" | "education";
  keywords: string[];
  content: string;
}

export const KNOWLEDGE_BASE: KnowledgeChunk[] = [
  {
    id: "profile-overview",
    sourceFile: "docs/profile.md",
    title: "Ayushman Patro — Identity & Professional Positioning",
    category: "profile",
    keywords: ["who", "about", "bio", "background", "summary", "ayushman", "patro", "positioning", "role", "hire", "location", "email"],
    content: `Ayushman Patro is an AI/ML Engineer specializing in Generative AI, Autonomous Agent Graphs (LangGraph), Mathematical Optimization (MILP), and Full-Stack Machine Learning Systems.
He is a senior undergraduate in Computer Science and Engineering at the Indian Institute of Information Technology (IIIT) Bhubaneswar (September 2022 – May 2026).
Contact Information:
- Email: ayushmanpatro2003@gmail.com
- GitHub: https://github.com/Ayushman27
- LinkedIn: https://www.linkedin.com/in/ayushman-patro-a92203258/
- Location: Bhubaneswar, Odisha, India (Open to worldwide relocation and remote engineering roles).
Engineering Philosophy:
1. Production Code Over Toy Prompts: Systems must be bounded by deterministic validation and automated testing.
2. Algorithmic Pragmatism: Combining machine learning with classical mathematical optimization (e.g., MILP).
3. Low-Latency Architecture: Measuring and optimizing every token, network hop, and database query.`,
  },
  {
    id: "education-iiit",
    sourceFile: "docs/profile.md",
    title: "Education — B.Tech Computer Science at IIIT Bhubaneswar",
    category: "education",
    keywords: ["education", "college", "university", "degree", "iiit", "bhubaneswar", "graduation", "coursework", "academics", "btech", "cse", "2026"],
    content: `Education Background:
- Degree: Bachelor of Technology (B.Tech) in Computer Science and Engineering
- Institution: Indian Institute of Information Technology (IIIT), Bhubaneswar
- Graduation Period: September 2022 – May 2026 (Graduating Class of 2026)
- Core Coursework:
  * Machine Learning & Statistical Foundations
  * Data Structures & Algorithms (Advanced Graph Algorithms, Dynamic Programming)
  * Operating Systems & Concurrency (POSIX, Memory Management, Process Scheduling)
  * Database Management Systems (SQL Indexing, Relational Algebra, ACID transactions)
  * Computer Networks (TCP/IP, Socket Programming, Network Security)
  * Discrete Mathematics & Linear Algebra for Machine Learning`,
  },
  {
    id: "exp-hutech",
    sourceFile: "docs/experience.md",
    title: "Experience — Gen AI Intern at Hutech Solutions (6 Months)",
    category: "experience",
    keywords: ["hutech", "internship", "experience", "gen ai", "cms", "voice agent", "fastapi", "gemini", "nextjs", "postgres", "neon", "cloudinary", "stt", "tts"],
    content: `Industry Experience at Hutech Solutions:
- Role: Gen AI Intern (Full-Time Internship, 6 Months: April 2026 – September 2026)
- Tech Stack: FastAPI, Next.js, Google Gemini LLM API, Neon PostgreSQL, Cloudinary, Speech-to-Text (STT), Text-to-Speech (TTS), Function Calling, Vector Search.
- Key Accomplishments:
  1. AI-Powered E-Commerce CMS:
     * Architected and engineered a multi-tenant product content management platform using FastAPI and Next.js.
     * Integrated live Retrieval-Augmented Generation (RAG) pipelines and vector embeddings to ground the Gemini API with accurate tenant inventory metadata.
     * Backed by Neon Serverless PostgreSQL with connection pooling and relational schema normalization.
     * Automated banner, ticker, and product description generation workflows, reducing API token overhead by over 30%.
  2. Real-Time AI Voice Agent:
     * Built an interactive conversational voice assistant bridging Speech-to-Text (STT), LLM reasoning, prompt engineering, and Text-to-Speech (TTS).
     * Engineered deterministic function/tool calling and stateful workflow orchestration to automate operational inventory queries with sub-400ms end-to-end stream latency.`,
  },
  {
    id: "exp-oasis",
    sourceFile: "docs/experience.md",
    title: "Experience — Data Science Intern at Oasis Infobyte (3 Months)",
    category: "experience",
    keywords: ["oasis", "infobyte", "internship", "data science", "machine learning", "spam", "unemployment", "automobile", "iris", "eda", "hyperparameter", "tuning"],
    content: `Industry Experience at Oasis Infobyte:
- Role: Data Science Intern (Internship, 3 Months: January 2024 – March 2024)
- Tech Stack: Python, Scikit-Learn, Pandas, NumPy, Matplotlib, Seaborn, XGBoost, GridSearchCV.
- Key Accomplishments:
  * Engineered end-to-end predictive machine learning pipelines spanning multiple tabular, time-series, and classification domains.
  * Developed NLP spam detection classifier (TF-IDF vectorization, tokenization, Naive Bayes, Logistic Regression).
  * Built unemployment rate forecasting using macroeconomic time-series, moving averages, and seasonal decomposition.
  * Created automobile valuation estimation models combining feature interaction terms with Random Forest and Gradient Boosting regressors.
  * Consistently delivered a 15% performance improvement in predictive metrics (F1-score, RMSE, ROC-AUC) compared to naive baseline models through systematic EDA, outlier clipping, and GridSearchCV hyperparameter tuning.`,
  },
  {
    id: "project-inventory",
    sourceFile: "docs/projects.md",
    title: "Project — AI-Powered Inventory Forecasting & Optimization System",
    category: "project",
    keywords: ["inventory", "forecasting", "optimization", "milp", "pulp", "lightgbm", "supply chain", "rop", "reorder", "carrying cost", "docker", "test", "tests"],
    content: `Project 01: AI-Powered Inventory Forecasting & Optimization System (October 2024)
- Domain: Supply Chain AI & Mathematical Optimization
- Technologies: Python, FastAPI, React, LightGBM, PuLP (MILP Solver), Docker
- Problem Solved: Traditional supply chain heuristics like Reorder Point (ROP) cause stockouts and excessive carrying costs.
- Architecture:
  * Demand Forecasting: LightGBM gradient boosted trees predict future demand across lead times and promotional calendars.
  * Operations Research (MILP): Formulates a Mixed-Integer Linear Programming model minimizing holding, ordering, and shortage costs subject to safety-stock, warehouse capacity, minimum order quantities (MOQ), and capital budget constraints.
- Verified Benchmarks:
  * 3.17% lower mean carrying cost compared to standard tuned ROP baselines.
  * Solver converges to global optimum in <200ms using branch-and-bound.
  * 132 automated CI/CD unit and integration tests verifying solver robustness.`,
  },
  {
    id: "project-patient",
    sourceFile: "docs/projects.md",
    title: "Project — Intelligent Patient Stratification & Drug Recommendation System",
    category: "project",
    keywords: ["patient", "stratification", "healthcare", "clinical", "drug", "recommendation", "xgboost", "random forest", "slm", "reinforcement learning", "shap", "ehr"],
    content: `Project 02: Intelligent Patient Stratification & Drug Recommendation System (August 2024)
- Domain: Healthcare Clinical AI & Explainable SLM
- Technologies: Python, XGBoost, Random Forest, Small Language Models (SLMs), Reinforcement Learning, SHAP
- Problem Solved: Clinical systems struggle with black-box predictions lacking medical explainability.
- Architecture:
  * Tier 1: Risk Stratification using tuned XGBoost and Random Forest ensembles on Electronic Health Records (EHR).
  * Tier 2: Safety-bounded Reinforcement Learning policy interacting with fine-tuned Small Language Models (SLMs) to draft medically bounded dosage recommendations with SHAP feature citations.
- Verified Benchmarks:
  * 96.2% ROC-AUC score for high-risk cohort detection.
  * 100% of risk scores accompanied by top biomarker SHAP explanations.
  * Zero policy breaches on constrained medication dosage ceilings.`,
  },
  {
    id: "project-travel",
    sourceFile: "docs/projects.md",
    title: "Project — Agentic Corporate Travel Automation Platform",
    category: "project",
    keywords: ["travel", "agentic", "agents", "langgraph", "multi-agent", "corporate", "booking", "flight", "hotel", "rollback", "human in the loop"],
    content: `Project 03: Agentic Corporate Travel Automation Platform (July 2024)
- Domain: Autonomous Multi-Agent Systems & Workflow Orchestration
- Technologies: Node.js, React, LangGraph, Multi-Agent Systems, Travel REST APIs
- Problem Solved: Corporate travel booking involves complex policy compliance, vendor coordination, and handling booking cancellations.
- Architecture:
  * Multi-agent state graph built on LangGraph with 3 specialized agents: Planner Agent (searches availability), Policy Auditor Agent (validates corporate expense policies), and Buyer Agent (executes reservations with two-phase commit rollback).
  * Human-in-the-Loop Gateway pauses execution for manager approval when budget thresholds are exceeded.
- Verified Benchmarks:
  * 84% reduction in approval-to-booking turnaround latency.
  * 100% rollback recovery rate during simulated payment and API disruptions.`,
  },
  {
    id: "skills-arsenal",
    sourceFile: "docs/skills.md",
    title: "Skills — Technical Capabilities & Engineering Arsenal",
    category: "skill",
    keywords: ["skills", "technologies", "tech stack", "languages", "python", "cpp", "javascript", "typescript", "sql", "java", "c", "frameworks", "tools"],
    content: `Ayushman Patro's Technical Arsenal by Proficiency Tier:
- Programming Languages:
  * Python (Hands-on / Core Strength) — Machine Learning, PyTorch, LightGBM, FastAPI, MILP.
  * C++ (Core Strength) — Data Structures & Algorithms, high-performance computing.
  * JavaScript & TypeScript (Core Strength) — React, Next.js, LangGraph state schemas, Node.js.
  * SQL (Core Strength) — Relational schema design, query optimization, PostgreSQL, MySQL.
  * C (Working Knowledge) — Operating systems, memory management, POSIX systems.
  * Java (Working Knowledge) — Object-oriented patterns, Spring AI exploratory microservices.
- Machine Learning & Data Science:
  * Supervised Learning, XGBoost, Random Forest, Feature Engineering, Classification & Regression, Hyperparameter Tuning (GridSearchCV), Cross-Validation, Ensemble Learning, Reinforcement Learning.
- Generative AI & Retrieval:
  * Large Language Models (LLMs - Gemini, OpenAI), Small Language Models (SLMs), RAG Pipelines, Vector Search, Text Embeddings, Prompt Engineering (ReAct, Chain-of-Thought), Context Window Engineering.
- Agentic AI:
  * Multi-Agent Orchestration, LangGraph StateGraphs, Deterministic Tool Calling, Agentic Feedback Loops, Human-in-the-Loop (HITL), Model Context Protocol (MCP).
- Backend & Full-Stack:
  * FastAPI, Node.js, Express.js, Next.js (App Router), React, REST APIs, Microservices, Tailwind CSS.
- Databases & Cloud:
  * PostgreSQL, Neon Serverless PostgreSQL, MySQL, Vector Databases, AWS, Google Cloud, Docker, Git, Linux.`,
  },
  {
    id: "certifications-list",
    sourceFile: "docs/certifications.md",
    title: "Certifications — Industry Credentials",
    category: "certification",
    keywords: ["certifications", "certificates", "credentials", "aws", "cloud practitioner", "google", "cybersecurity", "udemy", "full stack", "linkedin", "generative ai"],
    content: `Verified Professional Certifications:
1. AWS Certified Cloud Practitioner — Amazon Web Services (AWS)
   * Core cloud architecture (EC2, S3, RDS, Lambda, VPC), IAM security model, cost optimization, and Well-Architected Framework.
2. Full-Stack Web Development Bootcamp — Udemy
   * Modern JavaScript, React hooks, Node.js/Express backend APIs, database persistence, and full-stack software lifecycle.
3. Cybersecurity Fundamentals — Google Career Certificate
   * CIA triad, threat landscape (malware, phishing, DDoS), defensive security protocols, network defense, and system hardening.
4. Generative AI Course Completion — LinkedIn Learning
   * Transformer architectures, attention mechanisms, applied prompt engineering, and LLM implementation in enterprise workflows.`,
  },
];

/**
 * Perform keyword-based BM25-style relevance scoring to retrieve the top matching chunks
 */
export function searchKnowledgeBase(query: string, limit = 4): KnowledgeChunk[] {
  if (!query || query.trim().length === 0) {
    return KNOWLEDGE_BASE.slice(0, limit);
  }

  const queryTerms = query
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (queryTerms.length === 0) {
    return KNOWLEDGE_BASE.slice(0, limit);
  }

  const scored = KNOWLEDGE_BASE.map((chunk) => {
    let score = 0;
    const chunkText = (chunk.title + " " + chunk.content).toLowerCase();

    for (const term of queryTerms) {
      // Keyword match in explicit keywords array (high weight)
      if (chunk.keywords.some((k) => k.includes(term) || term.includes(k))) {
        score += 8;
      }
      // Match in title (medium-high weight)
      if (chunk.title.toLowerCase().includes(term)) {
        score += 5;
      }
      // Match in content body
      const occurrences = (chunkText.match(new RegExp(term, "g")) || []).length;
      score += Math.min(occurrences, 6);
    }

    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // Return top matches, or fallback to first few if no scores
  const results = scored.filter((s) => s.score > 0).map((s) => s.chunk);
  return results.length > 0 ? results.slice(0, limit) : KNOWLEDGE_BASE.slice(0, limit);
}

