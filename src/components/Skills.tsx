"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C/C++", "Golang", "SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "AI/ML Frameworks",
    skills: [
      "PyTorch",
      "Transformers",
      "LangChain",
      "LangGraph",
      "DeepSpeed",
      "HuggingFace",
      "ChromaDB",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Uvicorn", "REST APIs", "CORS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "HTML/CSS"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Ollama", "Linux"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "ChromaDB", "SQLite"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeading title="Skills" subtitle="My Toolkit" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/5 hover:border-accent/30 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
