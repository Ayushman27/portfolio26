import { NextRequest, NextResponse } from "next/server";
import { searchKnowledgeBase, KnowledgeChunk } from "@/lib/knowledgeBase";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage: string = body?.message || "";
    const history: ChatMessage[] = body?.history || [];

    if (!userMessage.trim()) {
      return NextResponse.json(
        { error: "Message cannot be empty." },
        { status: 400 }
      );
    }

    // 1. RAG Retrieval Phase: Fetch top relevant document chunks
    const retrievedChunks: KnowledgeChunk[] = searchKnowledgeBase(userMessage, 4);
    const sources = Array.from(new Set(retrievedChunks.map((c) => c.sourceFile)));

    const contextText = retrievedChunks
      .map(
        (c) =>
          `[DOCUMENT: ${c.sourceFile} | SECTION: ${c.title}]\n${c.content}`
      )
      .join("\n\n---\n\n");

    const systemInstruction = `You are the Autonomous AI Agent of Ayushman Patro, speaking directly on his behalf with recruiters, hiring managers, engineering leaders, and interviewers.
You represent Ayushman directly ("I", "my", "me"), communicating with professional confidence, clarity, and deep engineering precision.

WHO YOU ARE:
- You are Ayushman Patro, an AI/ML Engineer and senior undergraduate in Computer Science and Engineering at IIIT Bhubaneswar (graduating May 2026).
- Your core focus is Generative AI, Autonomous Multi-Agent Graphs (LangGraph), Mathematical Optimization (MILP), and Full-Stack Machine Learning.
- You believe in production-quality code, low latency, and deterministic verification over fragile prompts.

STRICT FORMATTING REQUIREMENTS:
- DO NOT use double asterisks (**) or single asterisks (*) anywhere in your reply.
- DO NOT use markdown bold like **word** or markdown italics like *word*.
- Present all answers in structured, clean plain text with clear headings, clean numbered items (1., 2.), and clean bullet points (- ).
- Never clutter text with asterisks. Keep it executive, elegant, and directly readable.

HOW TO ANSWER RECRUITERS ON AYUSHMAN'S BEHALF:
1. Voice & Tone: Confident, articulate, warm, and technically rigorous. Speak as Ayushman in first-person ("In my internship at Hutech Solutions, I built...", "My flagship project combines LightGBM with Mixed-Integer Linear Programming...").
2. Work Experience:
   - Hutech Solutions (Gen AI Intern, 6 Months: April 2026 – September 2026): Explain how you built the AI-Powered E-Commerce CMS (FastAPI, Next.js, Gemini API, Neon PostgreSQL, RAG pipelines) and the Real-Time AI Voice Agent (STT/TTS, sub-400ms stream latency, tool calling).
   - Oasis Infobyte (Data Science Intern, 3 Months: Jan 2024 – March 2024): Explain your ML predictive modeling (spam classification, unemployment forecasting, automobile valuation), systematic EDA, and 15% model performance improvement using GridSearchCV.
3. Key Projects:
   - AI-Powered Inventory Forecasting & Optimization System: Explain why you paired LightGBM with PuLP (MILP) instead of standard ROP heuristics, achieving 3.17% lower mean cost with 132 automated tests and <200ms solver latency.
   - Intelligent Patient Stratification & Drug Recommendation System: Explain your dual-tier clinical design using XGBoost (96.2% ROC-AUC), constrained Reinforcement Learning, and explainable Small Language Models (SLMs) with SHAP explanations.
   - Agentic Corporate Travel Automation Platform: Explain your LangGraph multi-agent loop with Planner, Policy Auditor, and Buyer agents, with automated rollbacks and Human-in-the-Loop gates (84% faster turnaround).
4. Academic Background & Availability:
   - B.Tech in Computer Science and Engineering at IIIT Bhubaneswar (September 2022 – May 2026).
   - Actively open to full-time AI/ML Engineering, Generative AI, and Agentic Systems roles worldwide. Both relocation and remote work ready.
5. If a recruiter wants to interview or hire you:
   - Give them direct contact channels: Email at ayushmanpatro2003@gmail.com, LinkedIn at https://www.linkedin.com/in/ayushman-patro-a92203258/, and encourage downloading the Resume PDF on this site.
6. Strictly ground your answers in the retrieved document context below. If a specific personal detail is not documented, be honest and offer to discuss it directly via email.

RETRIEVED KNOWLEDGE BASE (GROUNDING TRUTH):
${contextText}`;

    // 2. Check for Gemini API Key in Environment
    const rawApiKey = process.env.GEMINI_API_KEY || "";
    const geminiApiKey = rawApiKey.trim().replace(/\.+$/, "");

    if (geminiApiKey) {
      // Model cascade for optimal speed and reliability
      const candidateModels = ["gemini-flash-lite-latest", "gemini-3.5-flash-lite"];

      // Format recent conversation history for Gemini
      const contents = [
        ...history.slice(-4).map((h) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }],
        })),
        {
          role: "user",
          parts: [{ text: `${systemInstruction}\n\nUSER QUESTION: ${userMessage}` }],
        },
      ];

      for (const model of candidateModels) {
        try {
          const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiApiKey}`;

          const geminiRes = await fetch(geminiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents,
              generationConfig: {
                temperature: 0.25,
                maxOutputTokens: 800,
              },
            }),
          });

          if (geminiRes.ok) {
            const data = await geminiRes.json();
            const rawCandidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (rawCandidateText) {
              const sanitizedReply = cleanResponseText(rawCandidateText);
              return NextResponse.json({
                reply: sanitizedReply,
                sources,
                poweredBy: `Gemini (${model}) + Document RAG`,
                apiKeyConfigured: true,
              });
            }
          } else {
            console.warn(`Model ${model} returned HTTP ${geminiRes.status}, trying fallback model...`);
          }
        } catch (callError) {
          console.warn(`Attempt with ${model} failed:`, callError);
        }
      }
    }

    // 3. Fallback Deterministic RAG Synthesizer (when GEMINI_API_KEY is not set or rate limited)
    const fallbackReply = cleanResponseText(synthesizeDocumentRAGResponse(userMessage, retrievedChunks));

    return NextResponse.json({
      reply: fallbackReply,
      sources,
      poweredBy: geminiApiKey ? "Document RAG (Offline Guard)" : "Document RAG Engine",
      apiKeyConfigured: Boolean(geminiApiKey),
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error processing RAG inquiry." },
      { status: 500 }
    );
  }
}

/**
 * Sanitizes response text to remove raw markdown asterisks (** and *)
 * and format responses in clean, structured, human-readable text.
 */
function cleanResponseText(text: string): string {
  if (!text) return "";
  return text
    // Remove markdown heading hashes
    .replace(/^###\s+/gm, "")
    .replace(/^##\s+/gm, "")
    .replace(/^#\s+/gm, "")
    // Remove bold asterisks: **text** -> text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    // Remove italic asterisks: *text* -> text (excluding bullet line starts)
    .replace(/(?<!^[\s]*)\*([^*]+)\*/g, "$1")
    // Remove any remaining double or stray asterisks
    .replace(/\*\*/g, "")
    // Normalize bullet points to clean dashes
    .replace(/^[\t ]*\*\s+/gm, "   - ")
    // Clean trailing single asterisks
    .replace(/(?<!^[\s]*)\*(?!\s)/gm, "")
    // Collapse multiple blank lines
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Deterministic synthesizer ensuring recruiters get accurate, formal responses
 * without asterisk clutter directly from retrieved document chunks.
 */
function synthesizeDocumentRAGResponse(
  query: string,
  chunks: KnowledgeChunk[]
): string {
  const q = query.toLowerCase();

  if (q.includes("experience") || q.includes("hutech") || q.includes("oasis") || q.includes("work") || q.includes("internship")) {
    return `My Professional Industry Experience (9+ Months):

I have completed 9+ months of hands-on industry engineering experience focused on Generative AI and Data Science:

1. Gen AI Intern at Hutech Solutions (6 Months: April 2026 – September 2026):
   - AI-Powered E-Commerce CMS: I architected a multi-tenant content hub using FastAPI, Next.js, Google Gemini LLM API, Neon PostgreSQL, and Cloudinary. I implemented live Retrieval-Augmented Generation (RAG) pipelines for dynamic product catalog generation and automated SEO metadata synthesis, cutting API token overhead by over 30%.
   - Real-Time AI Voice Agent: I engineered an interactive conversational voice assistant bridging Speech-to-Text (STT), LLM intent reasoning, and Text-to-Speech (TTS). I built deterministic tool-calling workflows to query live inventory with sub-400ms latency.

2. Data Science Intern at Oasis Infobyte (3 Months: January 2024 – March 2024):
   - I engineered end-to-end predictive machine learning pipelines spanning spam detection, unemployment rate forecasting, automobile valuation estimation, and multiclass classification.
   - Delivered a 15% performance improvement across predictive models through systematic EDA, outlier clipping, and GridSearchCV hyperparameter tuning.

Direct contact: ayushmanpatro2003@gmail.com | LinkedIn: https://www.linkedin.com/in/ayushman-patro-a92203258/`;
  }

  if (q.includes("project") || q.includes("inventory") || q.includes("milp") || q.includes("patient") || q.includes("travel")) {
    return `My Flagship Engineering Projects:

My portfolio focuses on mathematical optimization, healthcare clinical AI, and multi-agent systems:

1. AI-Powered Inventory Forecasting & Optimization System (October 2024):
   - Stack: Python, FastAPI, LightGBM, PuLP (MILP), Docker, React.
   - Why I Built It: Traditional Reorder Point (ROP) rules lead to high carrying costs and stockouts. I paired LightGBM demand forecasting with a Mixed-Integer Linear Programming (MILP) solver to compute optimal replenishment under capacity and budget constraints.
   - Results: Achieved 3.17% lower mean cost than ROP heuristics, with 132 automated CI/CD tests and <200ms solver latency.

2. Intelligent Patient Stratification & Drug Recommendation System (August 2024):
   - Stack: Python, XGBoost, Random Forest, Small Language Models (SLMs), Reinforcement Learning, SHAP.
   - Architecture: Formulated a dual-tier clinical system: tier-1 cohort risk stratification (96.2% ROC-AUC) and tier-2 constrained RL paired with SLMs for medically explainable dosage recommendations with zero safety violations.

3. Agentic Corporate Travel Automation Platform (July 2024):
   - Stack: Node.js, React, LangGraph, Multi-Agent Systems, Travel APIs.
   - Architecture: Designed a multi-agent state graph on LangGraph with Planner, Policy Auditor, and Buyer agents with automated transaction rollback and Human-in-the-Loop gates (84% faster turnaround).`;
  }

  if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("iiit") || q.includes("graduation")) {
    return `My Academic Background:

- Degree: Bachelor of Technology (B.Tech) in Computer Science and Engineering
- Institution: Indian Institute of Information Technology (IIIT), Bhubaneswar
- Graduation Period: September 2022 – May 2026 (Graduating Batch of 2026)
- Core Coursework: Machine Learning, Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Discrete Mathematics.
- Availability: Actively interviewing for full-time engineering roles starting 2026. Ready for worldwide relocation and remote teams!`;
  }

  if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("language") || q.includes("python") || q.includes("java")) {
    return `My Technical Skills & Engineering Arsenal:

- Languages: Python (Hands-on/Core), C++ (Core), JavaScript & TypeScript (Core), SQL (Core), C (Working), Java (Working).
- Machine Learning & AI: Supervised Learning, XGBoost, Random Forest, Feature Engineering, Hyperparameter Tuning (GridSearchCV), Cross-Validation, Reinforcement Learning.
- Generative AI & Retrieval: Large Language Models (Gemini, OpenAI), Small Language Models (SLMs), Retrieval-Augmented Generation (RAG), Vector Embeddings & Search, Prompt Engineering.
- Agentic AI: LangGraph, Multi-Agent Orchestration, Deterministic Tool Calling, Agentic Loops, Human-in-the-Loop, Model Context Protocol (MCP).
- Backend & Cloud: FastAPI, Node.js, Express.js, Next.js, React, PostgreSQL, Neon, Docker, AWS, Google Cloud, Git.`;
  }

  // General synthesized response using the top retrieved chunks
  const primaryChunk = chunks[0];
  const cleanedContent = cleanResponseText(primaryChunk.content);
  return `About Me & My Work:

${cleanedContent}

Contact: ayushmanpatro2003@gmail.com | LinkedIn: https://www.linkedin.com/in/ayushman-patro-a92203258/
Resume: You can preview or download my full Resume PDF directly using the button in the navigation bar above.`;
}

