export interface SoftSkill {
  id: string;
  title: string;
  description: string;
  icon: string;
  accentColor: "primary" | "secondary" | "tertiary" | "primary-fixed" | "secondary-fixed" | "tertiary-fixed";
}

export const softSkillsData: SoftSkill[] = [
  {
    id: "analytical-thinking",
    title: "Analytical Thinking",
    description: "Root-cause diagnosis and rigorous quantitative decision framing.",
    icon: "analytics",
    accentColor: "primary",
  },
  {
    id: "systematic-solving",
    title: "Systematic Solving",
    description: "Breaking ambiguity into testable mathematical sub-problems.",
    icon: "tune",
    accentColor: "secondary",
  },
  {
    id: "clear-communication",
    title: "Clear Communication",
    description: "Translating deep ML trade-offs into executive business clarity.",
    icon: "forum",
    accentColor: "tertiary",
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration",
    description: "Active synchronization with designers, product leads, and DevOps.",
    icon: "groups",
    accentColor: "primary-fixed",
  },
  {
    id: "high-adaptability",
    title: "High Adaptability",
    description: "Rapid ingestion of bleeding-edge paradigms and emerging frameworks.",
    icon: "autorenew",
    accentColor: "secondary-fixed",
  },
  {
    id: "continuous-rd",
    title: "Continuous R&D",
    description: "Persistent curiosity driving weekend bench testing and benchmarking.",
    icon: "science",
    accentColor: "tertiary-fixed",
  },
  {
    id: "full-ownership",
    title: "Full Ownership",
    description: "Accountability from initial napkin sketch to post-deploy telemetry.",
    icon: "verified",
    accentColor: "primary",
  },
  {
    id: "rich-documentation",
    title: "Rich Documentation",
    description: "Self-documenting APIs, architectural specs, and clean READMEs.",
    icon: "menu_book",
    accentColor: "secondary",
  },
];

