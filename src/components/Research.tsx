"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { FiBookOpen } from "react-icons/fi";

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeading title="Academic Research" subtitle="B.Tech Project" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-10 hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />

            <div className="relative">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <FiBookOpen className="text-accent-light" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Defending Deep Learning Models against Adversarial Attacks
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-mono mb-6 ml-[44px]">
                Aug 2025 – Apr 2026
              </p>

              <ul className="space-y-4 text-slate-300">
                {[
                  "Restored VideoMAE robust accuracy from 0% to 85%+ under PGD attacks by building a dynamic defense pipeline with attack-type routing.",
                  "Maintained 94%+ clean accuracy across PGD, OFA, and C&W attacks by designing a dual-detector with ResNet-18 optical flow and Integrated Gradients ensemble.",
                  "Neutralized adversarial patch perturbations by implementing intelligent spatial transformation routing with adaptive resizing and cropping.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "VideoMAE",
                  "ResNet-18",
                  "PGD",
                  "Adversarial ML",
                  "Optical Flow",
                  "PyTorch",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
