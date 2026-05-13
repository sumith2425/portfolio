import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satkuri Chandra | AI/ML Engineer & Software Developer",
  description:
    "Portfolio of Satkuri Chandra — IIT Kharagpur, AI/ML Engineer, Competitive Programmer, and Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg font-sans antialiased">{children}</body>
    </html>
  );
}
