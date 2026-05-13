"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { FiAward, FiCode, FiCpu } from "react-icons/fi";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: FiAward, label: "JEE Advanced AIR", value: "883" },
    { icon: FiCpu, label: "CGPA", value: "8.74" },
    { icon: FiCode, label: "CF Rating", value: "1820" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div ref={ref} className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              I&apos;m a final-year B.Tech student at{" "}
              <span className="text-white font-medium">IIT Kharagpur</span>{" "}
              specializing in AI/ML and systems engineering. My work spans from
              optimizing LLMs for on-device deployment to building adversarial
              defense pipelines for video models.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              I&apos;ve interned at <span className="text-slate-200">Samsung R&D</span>,
              where I shipped production-ready quantized LLMs. My B.Tech project
              focuses on defending deep learning models against adversarial attacks,
              restoring accuracy from 0% to 85%+.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Outside research, I&apos;m an Expert on Codeforces (1820) and enjoy
              building full-stack AI applications with agentic workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            {stats.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-slate-500">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
