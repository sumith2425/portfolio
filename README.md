<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=4000&pause=1000&color=6366F1&center=true&vCenter=true&multiline=true&repeat=true&width=600&height=80&lines=Sumith+Chandra+Satkuri;AI+Engineer+%7C+Full-Stack+Developer" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://linkedin.com/in/sumith-chandra"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="https://github.com/sumith2425"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://codeforces.com/profile/Sumith_chandra"><img src="https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white" /></a>
  <a href="mailto:sumithsatkuri123@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" /></a>
</p>

---

# 🌐 Personal Portfolio Website

A modern, responsive developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — designed to showcase my projects, experience, research, and skills as an AI/ML Engineer and Full-Stack Developer from **IIT Kharagpur**.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0050?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" />
</p>

## ✨ Features

| Feature | Description |
|---|---|
| **Dark Glassmorphism UI** | Frosted-glass cards, gradient accents, and animated background orbs |
| **Scroll Animations** | Smooth reveal effects powered by Framer Motion + `useInView` |
| **Fully Responsive** | Mobile-first design with adaptive navigation and layouts |
| **8 Sections** | Hero · About · Experience · Research · Projects · Skills · Education · Contact |
| **Interactive Elements** | Hover glows, gradient text, pulsing status indicators, staggered reveals |
| **Performance Optimized** | Server-side rendering with Next.js App Router for fast load times |

## 🛠️ Tech Stack

```
Frontend       → Next.js 14 · React 18 · TypeScript
Styling        → Tailwind CSS · Custom glassmorphism utilities
Animations     → Framer Motion · CSS keyframes
Icons          → React Icons (Feather, Simple Icons)
Deployment     → Vercel (recommended)
```

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/sumith2425/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

Open [https://portfolio-ten-mauve-66.vercel.app/](https://portfolio-ten-mauve-66.vercel.app/) to view the portfolio.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & Tailwind directives
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page composing all sections
│   └── components/
│       ├── Navbar.tsx           # Fixed navigation with mobile menu
│       ├── Hero.tsx             # Landing section with CTA
│       ├── About.tsx            # Personal intro & key stats
│       ├── Experience.tsx       # Professional experience timeline
│       ├── Research.tsx         # B.Tech research project
│       ├── Projects.tsx         # Featured project showcase
│       ├── Skills.tsx           # Technical skills by category
│       ├── Education.tsx        # Academic background
│       ├── Contact.tsx          # Contact form / info
│       └── Footer.tsx           # Footer with links
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 📌 Featured Projects

### 1. 🤖 PaperMind (Mini Jarvis) — Agentic RAG Chat App

Drop in a research paper. Ask anything. Get page-cited explanations — or a live web search, or a direct answer — automatically. PaperMind is a full-stack agentic chat app that turns any PDF/TXT/MD file into a conversation using a **LangGraph state machine**.

```
                ┌──────────┐
   user msg ──▶ │  router  │── direct ──▶ ┌─────────┐
                └────┬─────┘              │ respond │──▶ streamed answer
                     │── papers ─▶ chroma │  (LLM)  │      + sources
                     │── web ──▶ tavily ─▶└─────────┘
```

- **Agentic routing** — LangGraph state machine auto-decides per query: retrieve from uploaded docs (PAPERS), search the live web (WEB), or answer directly (DIRECT)
- **Page-cited RAG** — uploads are chunked with page numbers, embedded via `all-mpnet-base-v2`, and stored in ChromaDB; answers include clickable `[N]` citations
- **Smart fallback** — vector probe forces PAPERS route on strong cosine hits; weak hits auto-fallback to web search to avoid hallucination
- **Streaming UI** — tokens stream via Server-Sent Events; route badges (PAPERS / WEB / DIRECT) shown on every message
- **Multi-turn memory** — last 8 turns of conversation history for natural follow-ups
- **Dual LLM setup** — Llama 3.1 8B (routing) + Llama 3.3 70B (answers) on Groq; also supports local Ollama

**Tech:** `LangGraph` `LangChain` `ChromaDB` `FastAPI` `React 19` `Vite` `Tailwind v4` `shadcn/ui` `Groq` `Tavily` `Framer Motion` `Python`

---

### 2. 🖼️ Image Captioning using Transformers

A custom **ViT-GPT2** model for image captioning that achieved a **26% BLEU score improvement** over the SmolVLM baseline (0.0421 vs 0.0334).

- Robustness evaluation under degraded inputs (blur, noise, occlusion)
- **97%** model attribution accuracy with a fine-tuned BERT classifier
- End-to-end training pipeline with HuggingFace Transformers

**Tech:** `PyTorch` `HuggingFace Transformers` `ViT` `GPT-2` `BERT` `Python`

---

### 3. ⚡ SQL Query Parser and Optimizer
> *Course Project: Database Management Systems — IIT Kharagpur [Spring '25]*

A system that processes SQL queries end-to-end: **lexical & syntactic analysis** → **relational algebra tree generation** → **query optimization** → **cost-based plan selection**.

- Built a full SQL parser using **Flex** (lexer) and **Bison** (parser) to tokenize and parse queries into structured relational algebra trees
- Implemented optimization passes — **Selection Pushdown**, **Projection Pushdown**, and **Join Reordering** — generating up to 25 equivalent candidate trees
- Designed a cost estimation engine based on tuple counts, operator types, and tree depth to select the **least-cost execution plan**
- Integrated schema metadata validation for table/column name checking and schema-aware transformations

**Tech:** `C` `Flex` `Bison` `SQL` `Relational Algebra` `Query Optimization`

---

### 4. 🏘️ Gram Panchayat Management System
> *Course Project: Database Management Systems — IIT Kharagpur [Jan '25 – Apr '25]*

A full-stack management system for Gram Panchayat operations with multi-role access control.

- Built with **Python Flask**, **PostgreSQL**, and **HTML/CSS** for multi-role access
- Designed normalized relational schemas for citizens, assets, land records, welfare schemes, and services
- Integrated secure, role-based user interfaces for citizens, employees, government monitors, and administrators
- Implemented **SQLAlchemy ORM** for model design, constraint enforcement, and efficient complex backend query integration

**Tech:** `Python` `Flask` `PostgreSQL` `SQLAlchemy` `HTML/CSS`

---

### 5. 🛣️ Road Repair and Tracking Software
> *Course Project: Software Engineering — IIT Kharagpur [Mar '24 – Apr '24]*

An automated road repair bookkeeping system for the Public Works Department, built in a 3-person team.

- Engineered role-based access for clerks (log complaints), supervisors (assign materials), and admins (create work lists)
- Full-stack architecture using **Node.js** + **Express.js** backend, **MongoDB**, and **React.js** frontend
- Real-time statistics visualization with **Chart.js** and system notifications via **React-Toastify**

**Tech:** `Node.js` `Express.js` `React.js` `MongoDB` `Chart.js` `React-Toastify`

---

### 6. 📡 Reliable UDP using Shared Memory
> *Course Project: Computer Networks — IIT Kharagpur*

A reliable UDP-like communication protocol implementation using **shared memory** and a **sliding window mechanism** — simulating TCP-like reliability over raw UDP sockets.

- Designed a custom `ksocket` API (`k_socket`, `k_bind`, `k_sendto`, `k_recvfrom`, `k_close`) over shared memory for IPC between user processes and the kernel-level daemon
- Implemented **sliding window** protocol with send/receive windows, sequence numbering, and cumulative ACKs for reliable in-order delivery
- Built automatic **retransmission** on timeout, receiver window advertisement, and zero-window probing for flow control
- Added configurable **packet loss simulation** (`dropmessage(p)`) — tested across drop rates from 5%–50%, with avg transmissions scaling from 1.2× to 4.4× per message
- Engineered a garbage collector thread for cleaning up dead socket entries and mutex-based thread safety

**Tech:** `C` `POSIX Shared Memory` `UDP Sockets` `pthreads` `select()` `IPC`

---

## 💼 Experience

**Advanced Developer Intern** — Samsung R&D Institute (SmartThings) · *May – Jul 2025*
- Reduced LLM model size by **50%** and accelerated inference by **2×** via PTQ/AWQ quantization
- Cut GPU memory by **60%** during fine-tuning with LoRA/QLoRA
- Enabled **4× longer sequences** with DeepSpeed ZeRO & Liger-kernel
- Delivered production-ready on-device LLM with **95%+ accuracy retention**

## 🔬 Research

**Defending Deep Learning Models against Adversarial Attacks** — B.Tech Project · *Aug 2025 – Apr 2026*
- Restored VideoMAE robust accuracy from **0% → 85%+** under PGD attacks
- Maintained **94%+ clean accuracy** across PGD, OFA, and C&W attack vectors
- Implemented intelligent spatial transformation routing for adversarial patches

## 🎓 Education

| Institution | Degree / Board | Score | Year |
|---|---|---|---|
| **IIT Kharagpur** | B.Tech | **8.74 / 10** CGPA | 2022 – 2026 |
| Sri Chaitanya Junior College | Intermediate | **97.9%** | 2020 – 2022 |
| Shine High School | SSC | **10 / 10** | 2020 |

## 🧰 Skills

| Category | Technologies |
|---|---|
| **Languages** | Python · C/C++ · Golang · SQL · TypeScript · JavaScript |
| **AI/ML** | PyTorch · Transformers · LangChain · LangGraph · DeepSpeed · HuggingFace · ChromaDB |
| **Backend** | FastAPI · Uvicorn · REST APIs · Node.js · Express.js · Flask |
| **Frontend** | React · Next.js · Tailwind CSS · HTML/CSS |
| **Databases** | PostgreSQL · MongoDB · ChromaDB · SQLite |
| **DevOps & Tools** | Git · GitHub · Docker · Ollama · Linux |

---

## 📬 Get in Touch

I'm always open to opportunities, collaborations, and interesting conversations.

- **Email:** [sumithsatkuri123@gmail.com](mailto:sumithsatkuri123@gmail.com)
- **LinkedIn:** [linkedin.com/in/sumith-chandra](https://linkedin.com/in/sumith-chandra)
- **GitHub:** [github.com/sumith2425](https://github.com/sumith2425)

---

<p align="center">
  Built with ❤️ by <strong>Sumith Chandra Satkuri</strong> · IIT Kharagpur '26
</p>
