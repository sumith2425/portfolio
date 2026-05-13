"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Experience" subtitle="Where I've Worked" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-purple-500 to-transparent" />

          <div className="relative pl-20">
            {/* Timeline dot */}
            <div className="absolute left-[22px] top-2 w-[13px] h-[13px] rounded-full bg-accent ring-4 ring-surface glow-sm" />

            <div className="glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 glow">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Advanced Developer Intern
                  </h3>
                  <p className="text-accent-light font-medium">
                    SmartThings · Samsung R&D Institute Bangalore
                  </p>
                </div>
                <span className="text-sm text-slate-500 font-mono bg-white/5 px-3 py-1 rounded-lg">
                  May – Jul 2025
                </span>
              </div>

              <ul className="space-y-3 text-slate-300">
                {[
                  "Reduced LLM model size by 50% and accelerated inference by 2x by engineering PTQ and AWQ quantization pipelines.",
                  "Cut GPU memory usage by 60% during fine-tuning by applying LoRA and QLoRA parameter-efficient adaptation techniques.",
                  "Enabled 4x longer sequence training within fixed memory budgets by integrating DeepSpeed ZeRO parallelism and Liger-kernel.",
                  "Delivered a production-ready on-device LLM retaining 95%+ task accuracy by combining quantization, PEFT, and distributed training.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {["PyTorch", "DeepSpeed", "LoRA", "QLoRA", "AWQ", "Transformers"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
