"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { appMenu, otherLabel } from "@/lib";

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
    const sections = appMenu.map((l) => l.href.replace("#", ""));
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
        background: scrolled ? "#9810fa19" : "transparent",
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
          {otherLabel.appName}
        </span>
      </a>

      {/* Desktop appMenu */}
      <div className="hidden md:flex gap-8 items-center">
        {appMenu.map((l) => (
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
          {otherLabel.download}
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
            zIndex: 200,
            overflow: "hidden",
            maxHeight: "70vh",
          }}
        >
          {/* 🔥 BACKGROUND LAYER */}
          <div className="absolute inset-0 bg-[#9810fa19]" />

          {/* overlay biar kontras */}
          <div className="absolute inset-0 bg-[#210d3a]" />

          {/* glow */}
          <div className="absolute top-[-30%] left-[-20%] w-62.5 h-62.5 bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-30%] right-[-20%] w-62.5 h-62.5 bg-blue-600/20 rounded-full blur-[100px]" />

          {/* 🔥 CONTENT LAYER */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              backdropFilter: "blur(20px)",
            }}
          >
            {appMenu.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ fontSize: "1.1rem", color: "#fff" }}
              >
                {l.label}
              </a>
            ))}

            <a href="/cv.pdf" className="btn-primary w-fit">
              {otherLabel.download}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
