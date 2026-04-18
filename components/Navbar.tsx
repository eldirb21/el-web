"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 clamp(1rem, 5vw, 3rem)",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled ? "#c8c8c82e" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          Eldiro
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav-link"
            style={{
              color:
                active === l.href.replace("#", "")
                  ? "var(--accent)"
                  : undefined,
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/cv.pdf"
          className="btn-primary"
          style={{ padding: "8px 20px", fontSize: "0.78rem" }}
        >
          Download CV
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          color: "var(--text-primary)",
          cursor: "pointer",
        }}
        className="md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(10,10,15,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem clamp(1rem, 5vw, 3rem)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
              style={{ fontSize: "1rem" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            className="btn-primary"
            style={{ alignSelf: "flex-start" }}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
