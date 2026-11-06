# Projects & Research Portfolio

> Comprehensive engineering documentation of **Ayushman Patro's** production systems, algorithm formulations, architecture diagrams, and experimental R&D initiatives.

---

## 🏆 Featured Case Studies

### 📦 01. AI-Powered Inventory Forecasting & Optimization System
- **Domain:** Supply Chain AI & Mathematical Optimization
- **Date:** October 2024
- **Repository:** [https://github.com/Ayushman27](https://github.com/Ayushman27)
- **Tech Stack:** Python, FastAPI, LightGBM, PuLP (MILP Solver), Docker, React

#### Problem Statement
Traditional retail and wholesale supply chains rely on static heuristics such as Reorder Point (ROP) rules ($ROP = \bar{d} \times L + z \times \sigma_L$). These fail in volatile markets, resulting in either excessive carrying costs (over-stocking) or lost revenue and stockout penalties (under-stocking).

#### Architectural Solution
Ayushman designed a dual-phase pipeline:
1. **Demand Forecasting Phase:** Trains LightGBM gradient boosted decision trees on multi-variate historical sales, promotional calendars, lead times, and seasonal indicators.
2. **Operations Research Phase:** Formulates a **Mixed-Integer Linear Programming (MILP)** optimization model in PuLP. The objective function minimizes:
   $$\min \sum_{t=1}^T \left( c_h \cdot I_t + c_o \cdot Y_t + c_s \cdot S_t \right)$$
   subject to:
   - Inventory balance equations: $I_t = I_{t-1} + Q_{t-L} - D_t$
   - Warehouse capacity limits: $I_t \le C_{\max}$
   - Supplier minimum order quantity (MOQ) binaries: $Q_t \ge \text{MOQ} \cdot Y_t$
   - Capital budget boundaries: $\sum p_i Q_{i,t} \le B_t$

#### Verified Metrics & Benchmarks
- **Cost Reduction:** **3.17% lower mean carrying cost** compared to standard tuned ROP baselines.
- **Solver Efficiency:** Computes global optimum in **<200ms** per SKU cluster using branch-and-bound.
- **Reliability:** Built with **132 automated CI/CD unit & integration tests** covering degenerate edge cases, negative stock, and solver time-outs.

---

### 🏥 02. Intelligent Patient Stratification & Drug Recommendation System
- **Domain:** Healthcare Clinical AI & Explainable SLM
- **Date:** August 2024
- **Repository:** [https://github.com/Ayushman27](https://github.com/Ayushman27)
- **Tech Stack:** Python, XGBoost, Random Forest, Small Language Models (SLMs), Reinforcement Learning, SHAP

#### Problem Statement
Clinical decision-support systems often suffer from the "black-box" dilemma: deep models provide predictions without medically intelligible rationales, whereas rule-based systems lack sensitivity across complex, co-morbid patient cohorts.

#### Architectural Solution
Formulated a two-tier clinical architecture:
1. **Cohort Risk Stratification:** Electronic Health Record (EHR) features (vitals, lab history, demographic indicators) are preprocessed and classified using tuned **XGBoost and Random Forest ensembles**. Feature importances are computed via **SHAP (SHapley Additive exPlanations)** values.
2. **Safe Dosage Titration & Clinical Summaries:** A safety-bounded **Reinforcement Learning policy** interacts with fine-tuned **Small Language Models (SLMs)** to draft concise, clinician-verifiable dosage recommendations with clear medical citations.

#### Verified Metrics & Benchmarks
- **Discrimination Metric:** **96.2% ROC-AUC** for high-risk cohort detection.
- **Explainability:** 100% of risk scores accompanied by top-3 SHAP contributing biomarkers.
- **Safety Boundary:** Zero policy breaches on constrained medication dosage ceilings.

---

### ✈️ 03. Agentic Corporate Travel Automation Platform
- **Domain:** Autonomous Multi-Agent Systems & Workflow Orchestration
- **Date:** July 2024
- **Repository:** [https://github.com/Ayushman27](https://github.com/Ayushman27)
- **Tech Stack:** Node.js, React, LangGraph, Multi-Agent Systems, Travel REST APIs

#### Problem Statement
Corporate travel booking requires coordinating flight schedules, hotel allowances, and executive itinerary policies while handling booking failures, cancellations, and supervisor approvals.

#### Architectural Solution
Engineered an autonomous multi-agent state graph using **LangGraph**:
1. **Planner Agent:** Ingests employee travel requests, searches availability via Travel APIs, and constructs cost-effective candidate itineraries.
2. **Policy Auditor Agent:** Evaluates candidate options against corporate travel expense policies, budget ceilings, and preferred partner agreements.
3. **Buyer Agent & Rollback Controller:** Executes booking transactions with two-phase commit logic. If a hotel reservation fails after flight confirmation, automated rollback compensations are invoked.
4. **Human-in-the-Loop Gateway:** Automatically escalates exceptions exceeding approval thresholds to managers via interactive dashboard notifications.

#### Verified Metrics & Benchmarks
- **Turnaround Velocity:** **84% reduction** in approval-to-booking turnaround latency.
- **Agent Coordination:** 3 specialized autonomous agents operating with synchronized state checkpoints.
- **Fault Tolerance:** **100% recovery and rollback rate** during simulated payment and API gateway disruptions.

---

## 🔬 Experimental R&D Initiatives

### 🧬 R&D 01: Self-Refining Multi-Agent Code Synthesis Engine
- **Status:** In Active Development
- **Focus:** Developing an iterative multi-agent loop that generates, executes, and unit-tests algorithmic code within sandboxed Docker containers.
- **Core Stack:** Python, LangGraph, Abstract Syntax Trees (AST), Docker Sandboxes.

### ⚡ R&D 02: Edge-Optimized Small Language Model Quantization
- **Status:** Researching
- **Focus:** Evaluating 4-bit and 2-bit weight quantization (GGUF, AWQ) on fine-tuned 1B–3B parameter SLMs to benchmark latency and memory footprint tradeoffs on edge microcontrollers and local hardware.
- **Core Stack:** Ollama, ONNX Runtime, GGUF, PyTorch, CUDA.

### 🌐 R&D 03: Autonomous Model Context Protocol (MCP) Knowledge Orchestrator
- **Status:** Exploring
- **Focus:** Designing an extensible MCP server that connects local vector stores, relational databases, and file systems, providing standardized zero-friction context grounding for Claude, Gemini, and local coding agents.
- **Core Stack:** Model Context Protocol (MCP), Vector DBs, TypeScript, SQLite.

