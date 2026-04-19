"use client";
import { useEffect, useState } from "react";
import { ArrowDown, GitFork, Link, Mail } from "lucide-react";
import { IconKey, otherLabel, profile, roles, sosmed } from "@/lib";

const iconMap: Record<IconKey, any> = {
  github: GitFork,
  linkedin: Link,
  email: Mail,
  mapPin: undefined
};

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 clamp(1rem, 5vw, 3rem)",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(79,255,176,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(79,255,176,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(79,255,176,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          position: "relative",
          zIndex: 1,
          paddingTop: "80px",
        }}
      >
        {/* Status badge */}
        <div
          className="animate-fade-in-up opacity-0"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            background: "rgba(79,255,176,0.08)",
            border: "1px solid rgba(79,255,176,0.2)",
            borderRadius: "100px",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
              animation: "blink 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--accent)",
              letterSpacing: "0.05em",
            }}
          >
            {profile.status}
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-up opacity-0 delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          {profile.name}
        </h1>

        {/* Role typewriter */}
        <div
          className="animate-fade-in-up opacity-0 delay-200"
          style={{
            marginBottom: "1.5rem",
            minHeight: "3rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
              fontWeight: 500,
              color: "var(--accent)",
            }}
          >
            {displayed}
            <span className="cursor-blink" />
          </span>
        </div>

        {/* Bio */}
        <p
          className="animate-fade-in-up opacity-0 delay-300"
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "540px",
            marginBottom: "2.5rem",
          }}
        >
          {profile.bio1}{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            {profile.bio2}{" "}
          </span>
          {profile.bio3}
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up opacity-0 delay-400"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <a href="#projects" className="btn-primary">
            {otherLabel.seeProject}
            <ArrowDown size={14} />
          </a>
          <a href="#contact" className="btn-outline">
            {otherLabel.contactMe}
          </a>
        </div>

        {/* Social links */}
        <div
          className="animate-fade-in-up opacity-0 delay-500"
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          {sosmed.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--accent)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--accent)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <Icon size={18} />
              </a>
            );
          })}
          <div
            style={{
              width: "1px",
              height: "24px",
              background: "var(--border)",
              margin: "0 0.5rem",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
            }}
          >
            {otherLabel.area}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "var(--text-muted)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
          }}
        >
          {otherLabel.scroll}
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--text-muted), transparent)",
          }}
        />
      </div>
    </section>
  );
}
