"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  color: string;
  github: string;
  live?: string;
}

const projects = [
  {
    title: "PaperMind (Mini Jarvis) — Agentic RAG Chat App",
    description:
      "Drop in a research paper, ask anything — get page-cited explanations, live web search, or direct answers automatically via a LangGraph agentic state machine.",
    bullets: [
      "Built an agentic routing system using LangGraph state machine that auto-decides per query: retrieve from docs (PAPERS), search the web (WEB), or answer directly (DIRECT).",
      "Implemented page-cited RAG pipeline with ChromaDB vector store and all-mpnet-base-v2 embeddings, with clickable [N] citation superscripts.",
      "Engineered smart fallback — vector probe forces PAPERS route on strong cosine hits; weak hits auto-fallback to web search to avoid hallucination.",
      "Delivered streaming UI with Server-Sent Events, route badges, and multi-turn memory (8-turn context window) using React 19, Vite, and shadcn/ui.",
    ],
    tags: ["LangGraph", "LangChain", "ChromaDB", "FastAPI", "React", "Groq", "Tavily"],
    color: "indigo",
    github: "#",
    live: "https://placeholder-minijarvis-link.com",
  },
  {
    title: "Image Captioning using Transformers",
    description:
      "Custom ViT-GPT2 captioning model with robustness evaluation and output attribution classification.",
    bullets: [
      "Improved captioning BLEU score by 26% over SmolVLM baseline (0.0421 vs 0.0334) by training a custom ViT-GPT2 model.",
      "Validated robustness under degraded inputs by evaluating semantic accuracy across progressive image occlusion levels.",
      "Achieved 97% model attribution accuracy by deploying a fine-tuned BERT classifier.",
    ],
    tags: ["ViT", "GPT-2", "BERT", "BLEU", "Transformers", "PyTorch"],
    color: "emerald",
    github: "#",
  },
  {
    title: "SQL Query Parser and Optimizer",
    description:
      "End-to-end SQL processing system: lexical & syntactic analysis → relational algebra tree generation → query optimization → cost-based plan selection.",
    bullets: [
      "Built a full SQL parser using Flex (lexer) and Bison (parser) to tokenize and parse queries into structured relational algebra trees.",
      "Implemented optimization passes — Selection Pushdown, Projection Pushdown, and Join Reordering — generating up to 25 equivalent candidate trees.",
      "Designed a cost estimation engine based on tuple counts, operator types, and tree depth to select the least-cost execution plan.",
    ],
    tags: ["C", "Flex", "Bison", "SQL", "Relational Algebra", "Optimization"],
    color: "amber",
    github: "#",
  },
  {
    title: "Gram Panchayat Management System",
    description:
      "Full-stack management system for Gram Panchayat operations with multi-role access control. Course Project: DBMS — IIT Kharagpur.",
    bullets: [
      "Built with Python Flask, PostgreSQL, and HTML/CSS for multi-role access across citizens, employees, government monitors, and administrators.",
      "Designed normalized relational schemas for citizens, assets, land records, welfare schemes, and services.",
      "Implemented SQLAlchemy ORM for model design, constraint enforcement, and efficient complex backend query integration.",
    ],
    tags: ["Flask", "PostgreSQL", "SQLAlchemy", "HTML/CSS", "Python"],
    color: "rose",
    github: "#",
  },
  {
    title: "Road Repair and Tracking Software",
    description:
      "Automated road repair bookkeeping system for the Public Works Department. Course Project: Software Engineering — IIT Kharagpur.",
    bullets: [
      "Spearheaded development in a 3-person team to automate road repair bookkeeping for the Public Works Department.",
      "Engineered role-based access for clerks (log complaints), supervisors (assign materials), and admins (create work lists).",
      "Implemented real-time statistics with Chart.js and system notifications via React-Toastify.",
    ],
    tags: ["Node.js", "Express.js", "React.js", "MongoDB", "Chart.js"],
    color: "cyan",
    github: "#",
  },
  {
    title: "Reliable UDP using Shared Memory",
    description:
      "A reliable UDP-like communication protocol using shared memory and sliding window mechanism — simulating TCP-like reliability over raw UDP sockets.",
    bullets: [
      "Designed a custom ksocket API (k_socket, k_bind, k_sendto, k_recvfrom, k_close) over POSIX shared memory for IPC.",
      "Implemented sliding window protocol with sequence numbering, cumulative ACKs, and automatic retransmission on timeout.",
      "Tested across drop rates from 5%–50%, with avg transmissions scaling from 1.2× to 4.4× per message.",
    ],
    tags: ["C", "POSIX", "UDP", "pthreads", "Shared Memory", "IPC"],
    color: "violet",
    github: "#",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-300",
    border: "border-indigo-500/20",
    dot: "bg-indigo-400",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-300",
    border: "border-rose-500/20",
    dot: "bg-rose-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    border: "border-cyan-500/20",
    dot: "bg-cyan-400",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-300",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
  },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Projects" subtitle="What I've Built" />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project, i) => {
            const c = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass rounded-2xl p-6 flex flex-col hover:border-accent/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-3 h-3 rounded-full ${c.dot} mt-1`} />
                  <div className="flex items-center gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-accent-light transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.bullets.length > 0 && (
                  <ul className="space-y-2 mb-4 flex-1">
                    {project.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-xs text-slate-400 leading-relaxed"
                      >
                        <span className={`mt-1 w-1 h-1 rounded-full ${c.dot} flex-shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${c.bg} ${c.text} ${c.border} border`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
