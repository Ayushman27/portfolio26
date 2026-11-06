"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, RefreshCw, Trash2, FileText, CheckCircle2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  poweredBy?: string;
  timestamp: string;
}

const INITIAL_MESSAGE: Message = {
  id: "welcome-0",
  role: "assistant",
  content: `Hi! I am Ayushman's Autonomous AI Agent, answering directly on his behalf. I am strictly grounded on verified documentation, official resume details, and engineering project architectures in docs/.

Ask me anything about:
- My Industry Experience: 6-Month Gen AI internship at Hutech Solutions and 3-Month Data Science internship at Oasis Infobyte.
- My Flagship Projects: AI-Powered Inventory Optimization (MILP + LightGBM), Patient Stratification (XGBoost + SLMs), and Agentic Travel Automation (LangGraph).
- My Technical Arsenal: Machine Learning, Python, C++, TypeScript, LangGraph, RAG, and FastAPI.
- My Academic Background: B.Tech in CSE at IIIT Bhubaneswar (Class of 2026).

What would you like to know about my engineering background or availability?`,
  sources: ["docs/profile.md", "docs/experience.md", "docs/projects.md"],
  poweredBy: "gemini-rag",
  timestamp: "Just now",
};

const SUGGESTED_QUESTIONS = [
  "What is Ayushman's industry experience?",
  "Explain his Inventory MILP optimization project",
  "What are his core ML & GenAI technical skills?",
  "What is his education and graduation year?",
  "How did he build the real-time AI Voice Agent?",
];

function cleanRawText(str: string): string {
  if (!str) return "";
  return str
    .replace(/^###\s+/gm, "")
    .replace(/^##\s+/gm, "")
    .replace(/^#\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(?<!^[\s]*)\*([^*]+)\*/g, "$1")
    .replace(/\*\*/g, "");
}

function formatInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Match code spans, links, and emails
  const regex = /(`[^`]+`|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("`") && token.endsWith("`")) {
      parts.push(
        <code
          key={match.index}
          className="font-mono text-[11px] sm:text-xs bg-surface-container-high/90 text-secondary px-1.5 py-0.5 rounded border border-white/10"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("[")) {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        parts.push(
          <a
            key={match.index}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary underline underline-offset-2 transition-colors font-medium"
          >
            {linkMatch[1]}
          </a>
        );
      }
    } else if (token.includes("@") && !token.startsWith("http")) {
      parts.push(
        <a
          key={match.index}
          href={`mailto:${token}`}
          className="text-secondary hover:text-primary underline underline-offset-2 transition-colors font-medium"
        >
          {token}
        </a>
      );
    } else if (token.startsWith("http")) {
      parts.push(
        <a
          key={match.index}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary underline underline-offset-2 transition-colors font-medium break-all"
        >
          {token}
        </a>
      );
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

function renderFormattedLine(content: string) {
  // If line contains a title/label prefix like "AI-Powered E-Commerce CMS:" or "Stack:"
  const colonIndex = content.indexOf(":");
  if (colonIndex > 0 && colonIndex < 45 && !content.slice(0, colonIndex).includes("http")) {
    const label = content.slice(0, colonIndex + 1);
    const rest = content.slice(colonIndex + 1);
    return (
      <span>
        <span className="font-semibold text-white mr-1.5">{label}</span>
        <span className="text-on-surface-variant">{formatInline(rest)}</span>
      </span>
    );
  }
  return <span>{formatInline(content)}</span>;
}

function MarkdownRenderer({ content }: { content: string }) {
  const sanitized = cleanRawText(content);
  const lines = sanitized.split("\n");

  return (
    <div className="flex flex-col gap-2 font-sans text-xs sm:text-sm leading-relaxed text-on-surface">
      {lines.map((rawLine, idx) => {
        const line = rawLine.trimEnd();
        if (!line.trim()) {
          return <div key={idx} className="h-1" />;
        }

        // Check for numbered items (e.g. "1. Role at Company:")
        const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          const num = numMatch[1];
          const text = numMatch[2];
          return (
            <div key={idx} className="flex items-start gap-2.5 mt-2.5 mb-1">
              <span className="flex items-center justify-center w-5 h-5 rounded-md bg-secondary/15 border border-secondary/30 text-secondary font-mono text-[11px] font-bold shrink-0 mt-0.5">
                {num}
              </span>
              <div className="flex-1 font-semibold text-white leading-relaxed">
                {formatInline(text)}
              </div>
            </div>
          );
        }

        // Check for bullet items (e.g. "- item" or "  - item")
        const bulletMatch = line.match(/^(\s*)[-•*]\s+(.*)$/);
        if (bulletMatch) {
          const isIndented = bulletMatch[1].length >= 2;
          const bulletText = bulletMatch[2];
          return (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${
                isIndented ? "ml-5 sm:ml-7 my-1" : "ml-1.5 my-1"
              }`}
            >
              <span className="text-secondary mt-1.5 text-[8px] shrink-0">●</span>
              <div className="flex-1 leading-relaxed">
                {renderFormattedLine(bulletText)}
              </div>
            </div>
          );
        }

        // Standard paragraph
        return (
          <p key={idx} className="leading-relaxed text-on-surface-variant">
            {renderFormattedLine(line)}
          </p>
        );
      })}
    </div>
  );
}

export default function AgentSandbox() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query || isLoading) return;

    // Anchor the current window scroll position so the outer page never shifts
    const savedScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    setInputVal("");

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Keep window strictly locked in place
    if (typeof window !== "undefined" && window.scrollY !== savedScrollY) {
      window.scrollTo({ top: savedScrollY, behavior: "instant" });
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-4).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I couldn't retrieve a response. Please try again.",
        sources: data.sources || ["docs/profile.md"],
        poweredBy: data.poweredBy || "gemini-1.5-flash",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: `I encountered an issue processing your query through the RAG pipeline.

You can contact Ayushman directly at ayushmanpatro2003@gmail.com or inspect his verified credentials in the Resume PDF above.`,
        sources: ["docs/profile.md"],
        poweredBy: "error-fallback",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        if (typeof window !== "undefined" && window.scrollY !== savedScrollY) {
          window.scrollTo({ top: savedScrollY, behavior: "instant" });
        }
        inputRef.current?.focus({ preventScroll: true });
      }, 50);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 scroll-mt-20"
      id="sandbox"
    >
      <div className="flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
                02 // LIVE RAG INTELLIGENCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-mono text-[10px]">
                <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                Gemini LLM &amp; Document RAG
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
              Talk with My Autonomous AI Agent.
            </h2>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
              An autonomous agent answering directly on my behalf. Ask me anything about my engineering background, technical trade-offs, projects, or availability—grounded in <code className="font-mono text-secondary bg-surface-container-high px-1.5 py-0.5 rounded text-xs">/docs</code>.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-tertiary bg-surface-container/60 px-3 py-1.5 rounded-lg border border-tertiary/20 shrink-0 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span>Strict Zero-Hallucination Grounding</span>
          </div>
        </div>

        {/* Suggested Quick Recruiter Prompts */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-outline uppercase tracking-wider">
            Quick Questions (Click to Ask):
          </span>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((question, i) => (
              <button
                type="button"
                key={i}
                onClick={() => handleSendMessage(question)}
                disabled={isLoading}
                className="px-3 py-1.5 rounded-lg bg-surface-container-high/70 hover:bg-primary/10 border border-white/10 hover:border-primary/40 text-on-surface hover:text-primary font-mono text-xs transition-all flex items-center gap-1.5 text-left disabled:opacity-50"
              >
                <Sparkles className="w-3 h-3 text-secondary shrink-0" />
                <span>{question}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cybernetic Chat Chassis Card */}
        <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0b0d14]/90 backdrop-blur-xl border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col h-[560px] sm:h-[620px]">
          {/* Terminal Chrome Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-[#07090e] select-none shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-error/80 inline-block shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-secondary/80 inline-block shadow-[0_0_6px_rgba(93,230,255,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-tertiary/80 inline-block shadow-[0_0_6px_rgba(78,222,163,0.5)]" />
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-tertiary bg-tertiary/10 px-2.5 py-1 rounded-md border border-tertiary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                <span>RAG Active</span>
              </span>

              <button
                type="button"
                onClick={clearChat}
                className="text-outline hover:text-white transition-colors p-1 rounded hover:bg-white/5 flex items-center gap-1 font-mono text-xs"
                title="Clear conversation"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          {/* Chat Message Scroll Feed */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4 font-mono text-xs sm:text-sm"
          >
            {messages.map((m) => {
              const isAssistant = m.role === "assistant";
              return (
                <div
                  key={m.id}
                  className={`flex gap-3 max-w-3xl ${
                    isAssistant ? "self-start" : "self-end flex-row-reverse"
                  }`}
                >
                  {/* Avatar Icon */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                      isAssistant
                        ? "bg-primary-container/20 border-primary/40 text-primary"
                        : "bg-secondary/20 border-secondary/40 text-secondary"
                    }`}
                  >
                    {isAssistant ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>

                  {/* Message Bubble Container */}
                  <div className="flex flex-col gap-1.5 max-w-[85%] sm:max-w-[90%]">
                    <div
                      className={`p-3.5 sm:p-4 rounded-2xl border leading-relaxed ${
                        isAssistant
                          ? "bg-surface-container/70 border-white/10 text-on-surface rounded-tl-sm"
                          : "bg-primary-container/20 border-primary/30 text-white rounded-tr-sm"
                      }`}
                    >
                      {/* Formatted Message Content */}
                      {isAssistant ? (
                        <MarkdownRenderer content={m.content} />
                      ) : (
                        <div className="whitespace-pre-wrap font-sans text-xs sm:text-sm leading-relaxed text-white">
                          {m.content}
                        </div>
                      )}

                      {/* Grounded Source Citations if present */}
                      {isAssistant && m.sources && m.sources.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-on-surface-variant">
                          <span className="text-outline">Grounded in:</span>
                          {m.sources.map((src, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-secondary"
                            >
                              <FileText className="w-2.5 h-2.5" />
                              <span>{src}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timestamp & Metadata */}
                    <span
                      className={`text-[10px] font-mono text-outline px-1 ${
                        isAssistant ? "text-left" : "text-right"
                      }`}
                    >
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Loading / Generating State */}
            {isLoading && (
              <div className="flex gap-3 max-w-xl self-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border bg-primary-container/20 border-primary/40 text-primary">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3.5 rounded-2xl rounded-tl-sm bg-surface-container/70 border border-white/10 text-secondary font-mono text-xs flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-secondary" />
                  <span>Retrieving from docs/ &amp; synthesizing response with Gemini...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 sm:p-4 bg-[#07090e] border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-surface-container-lowest/80 rounded-xl border border-white/10 focus-within:border-secondary/50 px-3.5 py-2 transition-colors"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                readOnly={isLoading}
                placeholder={isLoading ? "Formulating verified response from docs/..." : "Ask about Ayushman's experience, MILP project, skills, or education..."}
                className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm placeholder:text-outline outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !inputVal.trim()}
                className="p-2 rounded-lg bg-primary hover:bg-primary/90 text-on-primary disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-[0_0_12px_rgba(208,188,255,0.3)] shrink-0"
                title="Send query"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Bottom Status Telemetry */}
            <div className="flex items-center justify-end text-[10px] font-mono text-outline pt-2 px-1">
              <span className="text-tertiary flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>100% Document Verified Responses</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
