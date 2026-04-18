import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio — IT & Frontend Developer",
  description: "Full-Stack Developer specializing in React Native, Next.js & Node.js. 5 years of experience building mobile and web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
