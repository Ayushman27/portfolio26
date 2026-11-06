# Professional Experience Dossier

> In-depth breakdown of **Ayushman Patro's** 9+ months of industry engineering internships, project responsibilities, technical architectures, and measurable outcomes.

---

## 🏢 1. Hutech Solutions

| Attribute | Details |
| :--- | :--- |
| **Role:** | **Gen AI Intern** |
| **Organization:** | Hutech Solutions |
| **Employment Type:** | Full-Time Internship |
| **Duration:** | **April 2026 – September 2026 (6 Months)** |
| **Core Technologies:** | FastAPI, Next.js, Google Gemini LLM API, Neon PostgreSQL, Cloudinary, Speech-to-Text (STT), Text-to-Speech (TTS), Function Calling, Vector Search |

### 🔍 Project 1.1: AI-Powered E-Commerce CMS
- **Context & Problem:** Modern multi-tenant e-commerce platforms struggle with catalog generation bottlenecks, SEO tag inconsistencies, and static product descriptions that do not adapt to user search intent.
- **Architecture & System Design:**
  - Designed and implemented a modern full-stack content hub using **Next.js** (frontend) and **FastAPI** (asynchronous Python microservice backend).
  - Wired live Retrieval-Augmented Generation (RAG) using embedding models to ground the Gemini API with accurate tenant inventory metadata.
  - Backed by **Neon Serverless PostgreSQL** with connection pooling and relational schema normalization.
  - Configured automated media upload, optimization, and responsive delivery pipelines using **Cloudinary**.
- **Key Contributions:**
  - Built automated banner, ticker, and product description generation workflows.
  - Implemented rate-limiting, error retries, and token optimization to reduce API overhead by over 30%.
  - Designed clean RESTful API contracts with Pydantic data validation and OpenAPI auto-documentation.

### 🎙️ Project 1.2: Real-Time AI Voice Agent
- **Context & Problem:** Customer service voice interactions require real-time latency, deterministic task execution, and natural dialogue without hallucinatory or unsupported assertions.
- **Architecture & Pipeline:**
  - **Audio Input:** Integrated low-latency Speech-to-Text (STT) models to transcribe customer speech streams into structured prompt representations.
  - **Reasoning Engine:** Leveraged LLM reasoning engines with zero-shot and few-shot prompt templates to deduce user intent and extract named entities.
  - **Tool & Function Calling:** Engineered custom deterministic function calling toolchains that query database backends and return live inventory, order status, and availability data.
  - **Audio Output:** Fed structured natural-language completions into Text-to-Speech (TTS) pipelines.
- **Key Contributions:**
  - Achieved sub-400ms end-to-end stream latency through parallelized audio chunking and streaming completions.
  - Constructed guardrails preventing off-topic prompts and preventing token overflows.

---

## 🏢 2. Oasis Infobyte

| Attribute | Details |
| :--- | :--- |
| **Role:** | **Data Science Intern** |
| **Organization:** | Oasis Infobyte |
| **Employment Type:** | Internship |
| **Duration:** | **January 2024 – March 2024 (3 Months)** |
| **Core Technologies:** | Python, Scikit-Learn, Pandas, NumPy, Matplotlib, Seaborn, XGBoost, GridSearchCV |

### 📊 Summary of R&D Work
Engineered end-to-end predictive machine learning pipelines spanning multiple tabular, time-series, and classification domains:
1. **Spam Detection Classifier:** Built NLP preprocessing pipelines (TF-IDF vectorization, tokenization, stopword elimination) combined with Naive Bayes and Logistic Regression to achieve high-precision email and SMS spam filtering.
2. **Unemployment Rate Forecasting:** Analyzed macroeconomic historical data, applying seasonal decomposition, moving averages, and regression algorithms to forecast workforce trends during structural economic fluctuations.
3. **Automobile Valuation Estimation:** Engineered feature interaction terms (vehicle age, mileage depreciation, fuel efficiency, engine displacement) with Random Forest and Gradient Boosting regressors to predict used automobile market values.
4. **Multiclass Iris Classification:** Implemented baseline comparison models evaluating Decision Trees, KNN, and Support Vector Machines (SVM).

### 📈 Technical Achievements & Impact
- Applied systematic **exploratory data analysis (EDA)**, outlier clipping using interquartile ranges (IQR), and robust feature scaling.
- Implemented **k-fold cross-validation** and exhaustive **GridSearchCV hyperparameter tuning** across estimators.
- Consistently achieved a **15% performance improvement** in predictive metrics (F1-score, RMSE, and ROC-AUC) compared to naive baseline models.

