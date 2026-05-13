"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { FiBook } from "react-icons/fi";

const education = [
  {
    school: "IIT Kharagpur",
    degree: "B.Tech",
    period: "2022 – 2026",
    score: "CGPA: 8.74 / 10",
  },
  {
    school: "Sri Chaitanya Junior College",
    degree: "Board of Intermediate Education",
    period: "2020 – 2022",
    score: "Marks: 97.9%",
  },
  {
    school: "Shine High School",
    degree: "Board of Secondary Education",
    period: "2020",
    score: "Marks: 10 / 10",
  },
];

const achievements = [
  "JEE Main 2022 — All India Rank 1329",
  "JEE Advanced 2022 — All India Rank 883",
  "NTSE Scholarship — NCERT",
  "Codeforces Expert — Rating 1820",
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Education & Achievements" subtitle="My Journey" />

        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <FiBook className="text-accent-light" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="glass rounded-xl p-5 hover:border-accent/30 transition-all duration-300"
                >
                  <h4 className="text-white font-semibold">{edu.school}</h4>
                  <p className="text-sm text-slate-400">{edu.degree}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-accent-light font-medium">
                      {edu.score}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-xl">🏆</span>
              Achievements
            </h3>
            <div className="glass rounded-xl p-6 space-y-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light font-bold text-sm group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Coursework */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-xl">📚</span>
                Key Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "NLP",
                  "Information Retrieval",
                  "HPPP",
                  "OS",
                  "Computer Networks",
                  "DBMS",
                ].map((course) => (
                  <span
                    key={course}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 border border-white/5"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
