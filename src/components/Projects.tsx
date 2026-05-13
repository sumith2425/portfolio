"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Mini Jarvis — AI-Powered RAG Agent",
    description:
      "Autonomous AI agent with agentic workflow that routes queries between private knowledge and live web search using a cyclic LangGraph state machine.",
    bullets: [
      "Built an autonomous query-routing AI agent using LangGraph StateGraph with conditional edges for intent classification.",
      "Achieved context-aware QA over private documents via a RAG pipeline with ChromaDB and HuggingFace embeddings.",
      "Delivered full-stack AI chat app with ChatGPT-style UI using FastAPI backend and Next.js/React frontend.",
      "Ensured 100% local, open-source execution running Llama-3 via Ollama with zero cloud API dependency.",
    ],
    tags: ["LangChain", "LangGraph", "ChromaDB", "FastAPI", "Next.js", "Ollama", "RAG"],
    color: "indigo",
    github: "#",
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
      "A custom SQL query parser and optimization engine for analyzing and improving query execution plans.",
    bullets: [],
    tags: ["SQL", "Parsing", "Optimization", "Python"],
    color: "amber",
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
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Projects" subtitle="What I've Built" />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
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
