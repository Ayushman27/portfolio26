# Ayushman Patro — AI/ML Engineer Portfolio

> A production-ready, high-performance personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, faithfully converted from Google Stitch designs following the **Obsidian Cybernetics** design specification.

![Obsidian Cybernetics Portfolio Banner](/images/screen-portfolio.png)

---

## 🚀 Live Positioning & Core Focus
- **Name:** Ayushman Patro
- **Education:** B.Tech in Computer Science and Engineering, IIIT Bhubaneswar (September 2022 – May 2026)
- **Role Positioning:** AI/ML Engineer | Generative AI | Agentic AI | Full-Stack Developer
- **Availability:** Open to Opportunities • Worldwide Relocation & Remote Ready
- **Direct Contact:** [ayushmanpatro2003@gmail.com](mailto:ayushmanpatro2003@gmail.com)
- **LinkedIn:** [linkedin.com/in/ayushman-patro-a92203258](https://www.linkedin.com/in/ayushman-patro-a92203258/)
- **GitHub:** [github.com/Ayushman27](https://github.com/Ayushman27)

---

## 🎨 Visual Identity & Design System: Obsidian Cybernetics

The visual architecture adheres strictly to `obsidian_cybernetics/DESIGN.md`:

| Token | Value | Semantic Role |
| :--- | :--- | :--- |
| **Canvas Base** | `#080A0F` | Deep obsidian canvas; limitless visual depth |
| **Recessed Canvas** | `#11151D` / `#111319` | Surface framing, code shell & terminal chassis |
| **Card Surface** | `rgba(22, 27, 38, 0.75)` | Frosted glassmorphic cards with `backdrop-filter: blur(16px)` |
| **Electric Violet** | `#8B5CF6` / `#D0BCFF` | Primary action vector, brand signature, model weights |
| **Luminescent Cyan** | `#22D3EE` / `#5DE6FF` | Data feeds, RAG streams, agent loops, focus rings |
| **Emerald Pulse** | `#10B981` / `#4EDEA3` | Operational stability, verified convergence, active loops |
| **Typography** | **Space Grotesk** | Display & section headlines with negative tracking |
| **Typography** | **Inter** | High-legibility editorial reading body |
| **Typography** | **JetBrains Mono** | Calibrated telemetry, benchmarks & interactive code |

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── images/                # High-fidelity project screenshots & previews
│   ├── projects/              # Project diagrams & graphics
│   └── resume/                # Resume asset (Ayushman_Patro_Resume.pdf)
├── src/
│   ├── app/
│   │   ├── globals.css        # Obsidian design tokens, scrollbars & glow utilities
│   │   ├── layout.tsx         # Typography links & SEO metadata
│   │   └── page.tsx           # Assembled page structure
│   ├── components/
│   │   ├── Navbar.tsx         # Fixed glass navbar with active spy indicator & mobile drawer
│   │   ├── Hero.tsx           # Display hero with live status pill, CTA, stats & code console
│   │   ├── AgentSandbox.tsx   # Cybernetic interactive terminal simulator with executable DAGs
│   │   ├── About.tsx          # 4 core engineering pillars (Overview)
│   │   ├── TechStack.tsx      # Bento grid engineering capabilities with tier filtering
│   │   ├── Experience.tsx     # 9-month industry internship timeline (Hutech Solutions & Oasis)
│   │   ├── Projects.tsx       # 3 in-depth case studies with interactive SVG telemetry
│   │   ├── UpcomingProjects.tsx # R&D experimental lab cards
│   │   ├── AIWorkflow.tsx     # 6-stage AI engineering pipeline & architecture hygiene
│   │   ├── Education.tsx      # Academic foundation & verified credentials
│   │   ├── SoftSkills.tsx     # 8 professional capability pillars
│   │   ├── CareerFocus.tsx    # 6 suitable career roles
│   │   ├── Contact.tsx        # Direct channels & quick dispatch terminal
│   │   ├── Footer.tsx         # Minimal obsidian footer with back-to-top trigger
│   │   └── BackgroundShader.tsx # Lightweight WebGL simplex noise canvas background
│   ├── data/
│   │   ├── profile.ts         # Centralized profile & personal data
│   │   ├── projects.ts        # Case studies & upcoming research projects
│   │   ├── experience.ts      # Professional internships & achievements
│   │   ├── skills.ts          # Categorized skills with proficiency tiers
│   │   ├── education.ts       # Degree, coursework & certifications
│   │   ├── roles.ts           # Career alignment roles
│   │   ├── softSkills.ts      # Non-technical competencies
│   │   ├── about.ts           # Overview pillars
│   │   └── workflow.ts        # Engineering workflow stages
│   └── lib/
│       └── utils.ts           # Class merging utilities (clsx + tailwind-merge)
├── package.json
├── tailwind.config.ts         # Full color, typography & spacing configuration
├── tsconfig.json
└── README.md
```

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Generation)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **UI & Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [Google Material Symbols Outlined](https://fonts.google.com/icons)
- **Shader:** WebGL 1.0 custom simplex noise canvas

---

## 💻 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ayushman27/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📦 Production Build & Testing

Run the optimized production build:
```bash
npm run build
```

Start the production server locally:
```bash
npm start
```

---

## 🌐 Deploy to Vercel

This repository is pre-configured for zero-configuration one-click deployment on **Vercel**:

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository.
4. Leave build settings as default (`next build`).
5. Click **Deploy**.

---

## 🔧 Easy Maintenance & Content Updates

To update your website content without modifying frontend components, simply edit the files in `src/data/`:

- **Update Profile / Links / Resume:** `src/data/profile.ts`
- **Add / Edit Projects:** `src/data/projects.ts`
- **Update Skills & Proficiency Tiers:** `src/data/skills.ts`
- **Update Internship Experience:** `src/data/experience.ts`
- **Update Education & Coursework:** `src/data/education.ts`
- **Replace Resume File:** Place your updated resume PDF at `public/resume/Ayushman_Patro_Resume.pdf`.

---

## 📄 License
© 2025–2026 Ayushman Patro. All rights reserved.

