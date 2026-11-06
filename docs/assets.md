# Asset Directory & Media Register

> Centralized inventory of media files, high-resolution portrait photographs, resume PDFs, and project illustrations used across the portfolio.

---

## 📂 Direct File Locations

| Asset Name | Format | Size | Primary Path | Docs Mirror Path | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Official Resume** | PDF | ~120 KB | `public/resume/Ayushman_Patro_Resume.pdf` | [`docs/assets/Resume.pdf`](./assets/Resume.pdf) | Official curriculum vitae for recruiters and job applications. |
| **High-Res Portrait** | JPEG | ~143 KB | `public/images/ayushman-patro.jpg` | [`docs/assets/ayushman-patro.jpg`](./assets/ayushman-patro.jpg) | High-fidelity profile portrait framed with cybernetic HUD in Hero section. |
| **Portfolio Preview Banner** | PNG | ~4.7 MB | `public/images/screen-portfolio.png` | `public/images/screen-portfolio.png` | Full-page production preview of the Obsidian Cybernetics portfolio. |
| **Interactive Terminal Preview** | PNG | ~4.8 MB | `public/images/screen-interactive.png` | `public/images/screen-interactive.png` | Preview capture of the interactive agent console. |
| **Streaming Terminal Preview** | PNG | ~4.6 MB | `public/images/screen-streaming.png` | `public/images/screen-streaming.png` | Preview capture of the streaming RAG telemetry pipeline. |

---

## 📸 Profile Photograph Specifications

- **File Name:** `ayushman-patro.jpg`
- **File Format:** JPEG (sRGB Color Profile)
- **File Size:** `143,623 bytes` (~143 KB)
- **Aspect Ratio:** Portrait (approx. 4:5 vertical framing)
- **Framing Guidelines:**
  - Subject's face and eyeglasses are aligned in the upper 40% of the viewport.
  - In Next.js, rendered via `<Image unoptimized priority className="object-cover object-top" />` to prevent any lossy downsampling, compression artifacts, or facial cropping.

---

## 📄 Official Resume Specifications

- **File Name:** `Resume.pdf` / `Ayushman_Patro_Resume.pdf`
- **File Format:** Adobe Portable Document Format (PDF v1.5+)
- **File Size:** `120,831 bytes` (~120 KB)
- **Page Count:** 1–2 pages standard clean single/dual column technical format.
- **Access Endpoints:**
  - In-app interactive preview modal: Triggered via the **Download Resume** button in the navbar.
  - Direct download endpoint: `/resume/Ayushman_Patro_Resume.pdf`
  - Raw static file: `Resume.pdf`

