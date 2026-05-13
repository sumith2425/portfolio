"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { SiCodeforces } from "react-icons/si";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: FiMail, label: "Email", href: "mailto:satkuri.chandra@gmail.com", value: "satkuri.chandra@gmail.com" },
    { icon: FiGithub, label: "GitHub", href: "https://github.com/SumithChandra", value: "SumithChandra" },
    { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/satkuri-chandra", value: "satkuri-chandra" },
    { icon: SiCodeforces, label: "Codeforces", href: "https://codeforces.com/profile/Sumith_chandra", value: "Sumith_chandra" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeading title="Get In Touch" subtitle="Let's Connect" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I&apos;m currently looking for full-time opportunities in AI/ML
            engineering and software development. Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {links.map(({ icon: Icon, label, href, value }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-accent/30 transition-all duration-300 group text-left"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">
                    {label}
                  </div>
                  <div className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:satkuri.chandra@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            <FiSend size={16} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
