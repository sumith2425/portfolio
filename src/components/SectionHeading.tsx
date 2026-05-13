"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h2>
      <p className="text-slate-500 text-sm tracking-widest uppercase">{subtitle}</p>
      <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-4 rounded-full" />
    </motion.div>
  );
}

export default SectionHeading;
