export interface ProfileData {
  name: string;
  tagline: string;
  headlineGradient: string;
  roles: string[];
  roleTitle: string;
  summary: string;
  status: string;
  location: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  institution: string;
  degree: string;
  graduation: string;
  stats: {
    value: string;
    suffix?: string;
    label: string;
    colorVariant: "primary" | "secondary" | "tertiary";
  }[];
}

export const profileData: ProfileData = {
  name: "Ayushman Patro",
  tagline: "Building Intelligent Systems. Engineering What's Next.",
  headlineGradient: "Intelligent Systems.",
  roles: [
    "AI/ML Engineer",
    "Generative AI",
    "Agentic AI",
    "Full-Stack Developer",
  ],
  roleTitle: "AI/ML Engineer | Generative AI | Agentic AI | Full-Stack",
  summary:
    "I'm Ayushman Patro, a Computer Science student from IIIT Bhubaneswar passionate about building intelligent applications, autonomous AI agents, and scalable software systems. I transform complex ideas into practical, real-world solutions through mathematical modeling, system design, and production AI.",
  status: "Open to Opportunities • Relocation & Remote Ready",
  location: "Bhubaneswar, India • Open to Worldwide Relocation & Remote",
  availability: "Available for full-time roles & engineering collaborations",
  email: "ayushmanpatro2003@gmail.com",
  github: "https://github.com/Ayushman27",
  linkedin: "https://www.linkedin.com/in/ayushman-patro-a92203258/",
  resumeUrl: "/resume/Ayushman_Patro_Resume.pdf",
  institution: "Indian Institute of Information Technology, Bhubaneswar",
  degree: "B.Tech in Computer Science and Engineering",
  graduation: "September 2022 – May 2026",
  stats: [
    {
      value: "09",
      suffix: "+",
      label: "Months Industry R&D",
      colorVariant: "primary",
    },
    {
      value: "18",
      suffix: "ms",
      label: "Target RAG Latency",
      colorVariant: "secondary",
    },
    {
      value: "100",
      suffix: "%",
      label: "Production-Ready Code",
      colorVariant: "tertiary",
    },
  ],
};

