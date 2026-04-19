"use client";
import { otherLabel, skillGroups, tools } from "@/lib";
import { useEffect, useRef, useState } from "react";

function SkillBar({
  name,
  level,
  years,
  color,
}: {
  name: string;
  level: number;
  years: string;
  color: string;
}) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWidth(level);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} style={{ marginBottom: "1.2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "0.9rem",
              color: "var(--text-primary)",
              fontWeight: 500,
            }}
          >
            {name}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              background: "var(--bg)",
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            {years}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--text-secondary)",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "rgba(255,255,255,0.07)",
          borderRadius: "2px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            borderRadius: "2px",
            transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: `0 0 8px ${color}44`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem clamp(1rem, 5vw, 3rem)",
        background:
          "linear-gradient(to bottom, transparent, rgba(79,255,176,0.02), transparent)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>
          {otherLabel.techStack}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
          }}
        >
          {otherLabel.skillsNexp}
        </h2>

        {/* Skill groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "2rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = `${group.color}33`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: group.color,
                    boxShadow: `0 0 8px ${group.color}`,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} color={group.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            {otherLabel.toolsNother}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {tools.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
