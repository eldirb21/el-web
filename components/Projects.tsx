"use client";
import { IconProjectKey, otherLabel, projects } from "@/lib";
import { ExternalLink, GitFork, Smartphone, Globe } from "lucide-react";

const iconMap: Record<IconProjectKey, any> = {
  globe: Globe,
  smartphone: Smartphone,
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem clamp(1rem, 5vw, 3rem)",
        background:
          "linear-gradient(to bottom, transparent, rgba(79,255,176,0.02), transparent)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>
          {otherLabel.portfolio}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {otherLabel.feature}
          </h2>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            {otherLabel.seeAll}
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <div
                key={p.title}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.25s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${p.color}33`;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Accent line top */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${p.color}, transparent)`,
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: p.color,
                        width: "30px",
                        height: "30px",
                        background: `${p.color}15`,
                        border: `1px solid ${p.color}30`,
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} />
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {p.type}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      padding: "3px 10px",
                      borderRadius: "4px",
                      background:
                        p.status === "Live"
                          ? "rgba(79,255,176,0.1)"
                          : "rgba(234,179,8,0.1)",
                      color: p.status === "Live" ? "var(--accent)" : "#eab308",
                      border: `1px solid ${p.status === "Live" ? "rgba(79,255,176,0.2)" : "rgba(234,179,8,0.2)"}`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "1.25rem",
                    flex: 1,
                  }}
                >
                  {p.description}
                </p>

                {/* Stack */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href={p.github}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    <GitFork size={14} /> {otherLabel.github}
                  </a>
                  <a
                    href={p.demo}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: p.color,
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <ExternalLink size={14} /> {otherLabel.liveDemo}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
