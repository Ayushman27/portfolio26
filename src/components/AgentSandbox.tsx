"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Play, Trash2, HelpCircle, CheckCircle2, Cpu } from "lucide-react";

interface TerminalHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function AgentSandbox() {
  const [inputVal, setInputVal] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      id: "initial-0",
      command: 'run agent.plan --goal "optimize supply chain"',
      output: (
        <div className="p-3 rounded-lg bg-surface-container/60 border border-white/5 flex flex-col gap-1 text-xs font-mono">
          <div className="text-secondary flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            <span>[PLANNER: Gemini 1.5 Pro] Formulating DAG execution graph (3 nodes, 2 deterministic constraints)...</span>
          </div>
          <div className="text-on-surface pl-3 border-l border-primary/30 my-1 flex flex-col gap-1">
            <div>
              <span className="text-outline">Step 1:</span>{" "}
              <span className="text-primary font-semibold">[Tool: VectorRetriever]</span> Fetch historical safety-stock thresholds (similarity: 0.941)
            </div>
            <div>
              <span className="text-outline">Step 2:</span>{" "}
              <span className="text-primary font-semibold">[Tool: MILP_Optimizer]</span> PuLP solver initialized: 42 integer decision variables, bounds checked
            </div>
            <div>
              <span className="text-outline">Step 3:</span>{" "}
              <span className="text-primary font-semibold">[Tool: RiskAuditor]</span> Validation score:{" "}
              <span className="text-tertiary font-semibold">98.42%</span> (budget constraint satisfied)
            </div>
          </div>
          <div className="text-tertiary flex items-center gap-1 pt-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>[EXECUTION COMPLETE] Optimal reorder volume: 1,420 units | Estimated carrying savings: 3.17% (200ms latency)</span>
          </div>
        </div>
      ),
    },
  ]);

  const terminalScreenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalScreenRef.current) {
      terminalScreenRef.current.scrollTop = terminalScreenRef.current.scrollHeight;
    }
  }, [history, isExecuting]);

  const executeCommand = async (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();
    setIsExecuting(true);

    const newId = `cmd-${Date.now()}`;

    let resultNode: React.ReactNode = null;

    if (lower.startsWith("run agent.plan")) {
      const match = cmd.match(/--goal\s+["']?([^"']+)["']?/i);
      const goal = match ? match[1] : "optimize supply chain";

      await new Promise((res) => setTimeout(res, 350));
      resultNode = (
        <div className="p-3 rounded-lg bg-surface-container/60 border border-white/5 flex flex-col gap-1 text-xs font-mono">
          <div className="text-secondary flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            <span>[PLANNER: Gemini 1.5 Pro] Formulating DAG for: &quot;{goal}&quot;...</span>
          </div>
          <div className="pl-3 border-l border-primary/30 my-1 flex flex-col gap-1 text-on-surface">
            <div>
              <span className="text-outline">Step 1:</span>{" "}
              <span className="text-primary font-semibold">[Tool: VectorRetriever]</span> Fetch historical parameters & constraints (similarity: 0.941, latency: 18.2ms)
            </div>
            <div>
              <span className="text-outline">Step 2:</span>{" "}
              <span className="text-primary font-semibold">[Tool: MILP_Optimizer]</span> PuLP branch-and-bound formulation initialized (42 constraints verified)
            </div>
            <div>
              <span className="text-outline">Step 3:</span>{" "}
              <span className="text-primary font-semibold">[Tool: RiskAuditor]</span> PolicyGuardrail reflection pass:{" "}
              <span className="text-tertiary font-semibold">98.42% VALIDATED</span> (budget constraint satisfied)
            </div>
          </div>
          <div className="text-tertiary flex items-center gap-1 font-semibold pt-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>[EXECUTION COMPLETE] Optimal reorder volume: 1,420 units | Estimated carrying savings: 3.17% (converged in 194ms)</span>
          </div>
        </div>
      );
    } else if (lower.startsWith("inspect rag.pipeline")) {
      await new Promise((res) => setTimeout(res, 280));
      resultNode = (
        <div className="p-3 rounded-lg bg-surface-container/60 border border-white/5 flex flex-col gap-2 text-xs font-mono">
          <div className="text-secondary font-bold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">insights</span>
            <span>[RAG PIPELINE TELEMETRY INSPECTION] Polling vector nodes...</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-1 text-[11px]">
            <div className="p-2 rounded bg-surface-container-high border border-white/5">
              <span className="text-outline block">CHUNKING</span>Recursive Splitter (512 tokens)
            </div>
            <div className="p-2 rounded bg-surface-container-high border border-white/5">
              <span className="text-outline block">EMBEDDING</span>text-embedding-3-small
            </div>
            <div className="p-2 rounded bg-surface-container-high border border-white/5">
              <span className="text-outline block">SIMILARITY</span>Cosine (0.942 threshold)
            </div>
            <div className="p-2 rounded bg-surface-container-high border border-white/5">
              <span className="text-outline block">RERANK LATENCY</span>
              <span className="text-secondary font-bold">18.2ms</span>
            </div>
          </div>
          <div className="p-2 rounded bg-surface-container-lowest border border-white/5 text-on-surface-variant text-[11px] leading-relaxed">
            <span className="text-primary font-semibold block">[Top Retrieved Chunk #1 • Doc ID: MILP_Doc_42]</span>
            &quot;Replenishment decision parameters under deterministic lead-time variance with safety-stock penalization coefficients...&quot;
          </div>
          <div className="text-tertiary text-[11px] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Vector cache warmed. Quantized index latency within SLA (&lt; 20ms).</span>
          </div>
        </div>
      );
    } else if (lower.startsWith("benchmark models")) {
      await new Promise((res) => setTimeout(res, 300));
      resultNode = (
        <div className="p-3 rounded-lg bg-surface-container/60 border border-white/5 flex flex-col gap-2 text-xs font-mono">
          <div className="text-tertiary font-bold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>[MODEL QUANTIZATION BENCHMARK — EDGE SLM 3B ARCHITECTURE]</span>
          </div>
          <div className="overflow-x-auto py-1">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="text-outline border-b border-white/10">
                  <th className="py-1">PRECISION</th>
                  <th>RAM USAGE</th>
                  <th>TOKENS/SEC</th>
                  <th>PERPLEXITY DELTA</th>
                </tr>
              </thead>
              <tbody className="text-on-surface divide-y divide-white/5">
                <tr>
                  <td className="py-1 text-outline">FP16 (Baseline)</td>
                  <td>5.8 GB</td>
                  <td>18.4 tok/s</td>
                  <td>0.00%</td>
                </tr>
                <tr>
                  <td className="py-1 text-primary">8-Bit (GGUF)</td>
                  <td>3.1 GB</td>
                  <td>27.8 tok/s</td>
                  <td>+0.04%</td>
                </tr>
                <tr>
                  <td className="py-1 text-secondary font-bold">4-Bit (AWQ)</td>
                  <td className="text-tertiary font-bold">1.8 GB</td>
                  <td className="text-secondary font-bold">42.1 tok/s</td>
                  <td>+0.12%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-tertiary text-[11px] flex items-center gap-1 pt-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Benchmark verdict: 4-Bit AWQ delivers 2.3x throughput gain within 2GB target microcontroller envelope.</span>
          </div>
        </div>
      );
    } else if (lower === "cat system.info") {
      await new Promise((res) => setTimeout(res, 200));
      resultNode = (
        <div className="p-3 rounded-lg bg-surface-container/60 border border-white/5 text-xs flex flex-col gap-1.5 font-mono text-on-surface-variant">
          <div className="text-tertiary font-bold">[ENGINEER PROFILE] Ayushman Patro — AI/ML Engineer</div>
          <div>• Institution: <span className="text-on-surface">IIIT Bhubaneswar</span> (B.Tech Computer Science &apos;26)</div>
          <div>• Focus: <span className="text-primary font-semibold">Generative AI</span>, Autonomous Agent Graphs (LangGraph), MILP Optimization, FastAPI</div>
          <div>• Experience: 9 months total (Hutech Solutions Gen AI Intern, Oasis Infobyte Data Science Intern)</div>
          <div>• Status: <span className="text-secondary font-semibold">AVAILABLE FOR HIRE</span> (Open to Relocation & Remote worldwide)</div>
          <div>• Dispatch: <a href="mailto:ayushmanpatro2003@gmail.com" className="text-primary underline">ayushmanpatro2003@gmail.com</a> | <a href="https://github.com/Ayushman27" target="_blank" rel="noopener noreferrer" className="text-secondary underline">github.com/Ayushman27</a></div>
        </div>
      );
    } else if (lower === "help") {
      await new Promise((res) => setTimeout(res, 150));
      resultNode = (
        <div className="p-3 rounded-lg bg-surface-container/60 border border-white/5 text-xs flex flex-col gap-1.5 font-mono">
          <div className="text-primary font-bold">AVAILABLE COMMANDS IN AUTONOMOUS RUNTIME:</div>
          <div><span className="text-secondary font-semibold">run agent.plan --goal &quot;&lt;text&gt;&quot;</span> : Execute autonomous multi-agent planning DAG</div>
          <div><span className="text-secondary font-semibold">inspect rag.pipeline</span> : Inspect vector retrieval, cosine similarity, latency telemetry</div>
          <div><span className="text-secondary font-semibold">benchmark models</span> : Compare quantized SLM (4-bit/AWQ) vs 16-bit baseline</div>
          <div><span className="text-secondary font-semibold">cat system.info</span> : Display engineer profile, stack, and availability</div>
          <div><span className="text-secondary font-semibold">clear</span> : Clear terminal output log</div>
        </div>
      );
    } else {
      await new Promise((res) => setTimeout(res, 180));
      resultNode = (
        <div className="p-2 rounded bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono">
          Command not recognized: &quot;{cmd}&quot;. Type <span className="text-white font-bold underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> for command reference.
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: newId,
        command: cmd,
        output: resultNode,
      },
    ]);

    setIsExecuting(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isExecuting) {
      e.preventDefault();
      const cmd = inputVal;
      setInputVal("");
      executeCommand(cmd);
    }
  };

  const clearSandbox = () => {
    setHistory([]);
    inputRef.current?.focus();
  };

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10 scroll-mt-20"
      id="sandbox"
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold">
                LIVE INTERACTIVE SHOWCASE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Autonomous Agent Sandbox.
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base max-w-2xl leading-relaxed">
              Test autonomous LangGraph loops, inspect real-time vector RAG pipelines, and benchmark model optimizations right in your browser.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-white/10 text-on-surface-variant font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary inline-block" />
              <span>Model Context Protocol (MCP) Ready</span>
            </span>
          </div>
        </div>

        {/* Quick Command Chips Bar */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-outline uppercase tracking-wider">
              Quick Executable Commands (Click to run):
            </span>
            {isExecuting && (
              <span className="font-mono text-[11px] text-secondary flex items-center gap-1.5 bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span>AGENT EXECUTING...</span>
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              disabled={isExecuting}
              onClick={() => executeCommand('run agent.plan --goal "optimize supply chain"')}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-primary/40 text-primary font-mono text-xs transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(139,92,246,0.15)] hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Play className="w-3 h-3 text-secondary fill-secondary" />
              <span>run agent.plan --goal &quot;optimize supply chain&quot;</span>
            </button>

            <button
              disabled={isExecuting}
              onClick={() => executeCommand('inspect rag.pipeline --query "MILP constraints"')}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-secondary/40 text-secondary font-mono text-xs transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(34,211,238,0.15)] hover:border-secondary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="text-secondary font-bold">&gt;</span>
              <span>inspect rag.pipeline</span>
            </button>

            <button
              disabled={isExecuting}
              onClick={() => executeCommand("benchmark models --target slm-quant-4bit")}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-tertiary/40 text-tertiary font-mono text-xs transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(78,222,163,0.15)] hover:border-tertiary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="text-tertiary font-bold">&gt;</span>
              <span>benchmark models</span>
            </button>

            <button
              disabled={isExecuting}
              onClick={() => executeCommand("cat system.info")}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-white/10 hover:border-primary text-on-surface font-mono text-xs transition-all flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="text-primary font-bold">&gt;</span>
              <span>cat system.info</span>
            </button>

            <button
              disabled={isExecuting}
              onClick={() => executeCommand("help")}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-white/10 hover:border-white/30 text-on-surface-variant font-mono text-xs transition-all flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <HelpCircle className="w-3 h-3 text-outline" />
              <span>help</span>
            </button>

            <button
              onClick={clearSandbox}
              className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container border border-white/10 text-outline hover:text-white font-mono text-xs transition-all flex items-center gap-1.5 sm:ml-auto"
            >
              <Trash2 className="w-3 h-3" />
              <span>clear</span>
            </button>
          </div>
        </div>

        {/* Cybernetic Terminal Window */}
        <div className="relative rounded-2xl bg-[#05070A]/95 backdrop-blur-2xl border border-primary/30 shadow-[0_16px_48px_rgba(0,0,0,0.85),0_0_30px_rgba(139,92,246,0.15)] overflow-hidden font-mono flex flex-col">
          {/* Header Bar */}
          <div className="px-4 py-3 bg-[#0d1017] border-b border-white/10 flex items-center justify-between gap-4 select-none">
            <div className="flex items-center gap-2">
              <span
                onClick={clearSandbox}
                title="Reset session"
                className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block cursor-pointer shadow-[0_0_6px_rgba(255,95,86,0.6)]"
              />
              <span
                onClick={() => executeCommand("help")}
                title="Help"
                className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block cursor-pointer shadow-[0_0_6px_rgba(255,189,46,0.6)]"
              />
              <span
                onClick={() => executeCommand("cat system.info")}
                title="System Info"
                className="w-3 h-3 rounded-full bg-[#27c93f] inline-block cursor-pointer shadow-[0_0_6px_rgba(39,201,63,0.6)]"
              />
              <span className="ml-2 font-mono text-xs text-on-surface-variant/80 hidden sm:inline-block">
                ayushman@agent-sandbox: ~/autonomous-runtime (v2.4-mcp)
              </span>
              <span className="ml-2 font-mono text-xs text-on-surface-variant/80 sm:hidden">
                agent-sandbox: ~/runtime
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/30 text-tertiary text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                <span className="hidden md:inline">MCP Server Connected • LangGraph Active</span>
                <span className="md:hidden">MCP Connected</span>
              </div>
              <span className="text-outline text-[11px] hidden lg:inline">
                WebSocket / TLS 1.3
              </span>
            </div>
          </div>

          {/* Terminal Screen Viewport */}
          <div
            ref={terminalScreenRef}
            className="p-4 sm:p-6 max-h-[460px] min-h-[300px] overflow-y-auto terminal-scroll flex flex-col gap-3 font-mono text-[13px] leading-relaxed select-text"
          >
            {/* Greeting banner */}
            <div className="text-outline pb-2 border-b border-white/5 flex flex-col gap-1">
              <div className="text-primary font-semibold flex items-center gap-2">
                <span>● AYUSHMAN AGENTIC SHELL [Obsidian Runtime v2.4.1]</span>
                <span className="text-outline text-[11px]">Linux x86_64 6.8.0-ai-kernel</span>
              </div>
              <p className="text-on-surface-variant text-xs">
                Type <span className="text-secondary font-bold">help</span> to view executable commands, or click any command chip above to launch autonomous routines.
              </p>
            </div>

            {/* Dynamic Output Log */}
            <div className="flex flex-col gap-3">
              {history.map((item) => (
                <div key={item.id} className="flex flex-col gap-1 text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary">ayushman@ai-core:~$</span>
                    <span className="text-on-surface font-semibold">{item.command}</span>
                  </div>
                  {item.output}
                </div>
              ))}
            </div>

            {/* Active Command Line Input */}
            <div className="flex items-center gap-2 pt-2 text-[13px] border-t border-white/5 mt-auto">
              <span className="text-tertiary font-semibold shrink-0">ayushman@ai-core:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isExecuting}
                placeholder="type command (e.g. 'help', 'inspect rag.pipeline', 'cat system.info')..."
                className="flex-1 bg-transparent text-secondary outline-none border-none p-0 font-mono text-[13px] placeholder:text-outline caret-primary disabled:opacity-50"
                autoComplete="off"
                spellCheck={false}
              />
              {isExecuting && (
                <span className="text-secondary text-xs flex items-center gap-1 shrink-0">
                  <span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                  <span className="text-[11px] text-outline font-mono">running</span>
                </span>
              )}
              <span className="text-outline text-[11px] shrink-0 hidden sm:inline">
                Press Enter ↵
              </span>
            </div>
          </div>

          {/* Terminal Footer Info Bar */}
          <div className="px-4 py-2 bg-[#090b10] border-t border-white/5 flex items-center justify-between text-outline text-[11px]">
            <div className="flex items-center gap-3">
              <span>
                Session: <span className="text-on-surface">SANDBOX-09X</span>
              </span>
              <span className="hidden sm:inline">
                Context: <span className="text-primary">LangGraph / PuLP / PyTorch</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Latency: 18.2ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

