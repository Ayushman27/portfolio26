export interface ExperienceSubProject {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  tagColor: "primary" | "secondary" | "tertiary";
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  period: string;
  accentColor: "primary" | "secondary" | "tertiary";
  summary?: string;
  subProjects?: ExperienceSubProject[];
  technologies?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "hutech-solutions",
    role: "Gen AI Intern",
    company: "Hutech Solutions",
    type: "Full-Time Internship",
    duration: "6 Months",
    period: "April 2026 – September 2026",
    accentColor: "primary",
    subProjects: [
      {
        title: "AI-Powered E-Commerce CMS",
        description:
          "Architected and engineered a multi-tenant product management content hub powered by Google Gemini LLM API, FastAPI, and Next.js. Integrated live RAG retrieval to generate dynamic contextual descriptions and SEO-optimized catalogs directly backed by Neon PostgreSQL and Cloudinary asset pipelines.",
        icon: "shopping_bag",
        tags: [
          "#FastAPI",
          "#Next.js",
          "#GeminiLLM",
          "#NeonPostgres",
          "#Cloudinary",
        ],
        tagColor: "primary",
      },
      {
        title: "Real-Time AI Voice Agent",
        description:
          "Constructed an interactive voice assistant bridging Speech-to-Text (STT) models, LLM intent reasoning, prompt engineering, and Text-to-Speech (TTS) pipelines. Designed custom function-calling tool chains and workflow orchestration to retrieve operational inventory metrics with sub-400ms end-to-end stream latency.",
        icon: "mic",
        tags: [
          "#VoiceAgent",
          "#ToolCalling",
          "#LowLatency",
          "#STT_TTS",
          "#PromptEngineering",
        ],
        tagColor: "secondary",
      },
    ],
  },
  {
    id: "oasis-infobyte",
    role: "Data Science Intern",
    company: "Oasis Infobyte",
    type: "Internship",
    duration: "3 Months",
    period: "January 2024 – March 2024",
    accentColor: "secondary",
    summary:
      "Engineered end-to-end predictive modeling pipelines encompassing spam detection, macroeconomic unemployment forecasting, automobile valuation estimation, and multiclass Iris species classification. Implemented systematic data cleaning, outlier clipping, feature scaling, and GridSearchCV hyperparameter tuning—consistently delivering a 15% improvement in predictive accuracy over baseline models.",
    technologies: [
      "Scikit-Learn",
      "Pandas & NumPy",
      "Feature Engineering",
      "Cross-Validation",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
];

