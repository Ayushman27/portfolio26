export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  type: string;
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  icon: string;
  accentColor: "primary" | "secondary" | "tertiary" | "primary-fixed";
}

export const educationData: EducationItem = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Indian Institute of Information Technology, Bhubaneswar",
  location: "Bhubaneswar, Odisha",
  period: "September 2022 – May 2026",
  type: "Undergraduate Degree",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Discrete Mathematics",
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    icon: "cloud_done",
    accentColor: "primary",
  },
  {
    id: "full-stack-web-dev",
    title: "Full-Stack Web Development",
    issuer: "Udemy • Comprehensive Bootcamp",
    icon: "code",
    accentColor: "secondary",
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    issuer: "Google Verified Career Credential",
    icon: "security",
    accentColor: "tertiary",
  },
  {
    id: "generative-ai-specialization",
    title: "Generative AI Course Completion",
    issuer: "LinkedIn Learning • Applied AI",
    icon: "psychology",
    accentColor: "primary-fixed",
  },
];
