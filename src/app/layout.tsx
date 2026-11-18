import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111319",
};

export const metadata: Metadata = {
  title: "Ayushman Patro — AI/ML Engineer | Generative AI | Agentic AI",
  description:
    "Portfolio of Ayushman Patro — AI/ML Engineer from IIIT Bhubaneswar specializing in Generative AI, Autonomous Agent Graphs (LangGraph), MILP Optimization, and Full-Stack Machine Learning Systems.",
  keywords: [
    "Ayushman Patro",
    "AI Engineer",
    "ML Engineer",
    "Generative AI",
    "Agentic AI",
    "LangGraph",
    "FastAPI",
    "IIIT Bhubaneswar",
  ],
  authors: [{ name: "Ayushman Patro" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-surface text-on-surface font-sans antialiased selection:bg-primary/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
