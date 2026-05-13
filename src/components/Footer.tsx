"use client";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Sumith Chandra Satkuri. All rights reserved.
        </p>
        <p className="text-sm text-slate-600 flex items-center gap-1">
          Built with <FiHeart className="text-red-400" size={12} /> using Next.js &amp; TailwindCSS
        </p>
      </div>
    </footer>
  );
}
