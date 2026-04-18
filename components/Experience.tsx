"use client";

const experiences = [
  {
    period: "2022 — Sekarang",
    role: "Senior Frontend Developer",
    company: "PT Digital Nusantara",
    type: "Full-time",
    description:
      "Memimpin pengembangan aplikasi mobile React Native untuk 100K+ pengguna aktif. Refactor arsitektur state management menggunakan Redux Toolkit, mengurangi bug production sebesar 40%.",
    stack: ["React Native", "Redux Toolkit", "TypeScript", "Node.js", "MySQL"],
    highlights: ["100K+ pengguna aktif", "40% pengurangan bug", "Tim 5 developer"],
  },
  {
    period: "2021 — 2022",
    role: "Frontend Developer",
    company: "Startup Fintech X",
    type: "Full-time",
    description:
      "Membangun dashboard web admin dan aplikasi mobile untuk platform pembayaran digital. Integrasi dengan payment gateway dan third-party API.",
    stack: ["React.js", "Next.js", "React Native", "Express.js", "MySQL"],
    highlights: ["Dashboard admin web", "Mobile iOS & Android", "Payment gateway integration"],
  },
  {
    period: "2020 — 2021",
    role: "Junior Frontend Developer",
    company: "Agency Digimedia",
    type: "Full-time",
    description:
      "Mengerjakan berbagai proyek web dan mobile untuk klien dari berbagai industri. Belajar dan mendalami React ecosystem secara mendalam.",
    stack: ["React.js", "React Native", "JavaScript", "CSS", "REST API"],
    highlights: ["10+ proyek klien", "Multi-industri", "Mentoring junior"],
  },
  {
    period: "2019 — 2020",
    role: "Frontend Intern",
    company: "PT Teknologi Maju",
    type: "Internship",
    description:
      "Magang sebagai frontend developer, belajar React.js dari dasar dan berkontribusi pada fitur-fitur kecil di aplikasi internal perusahaan.",
    stack: ["HTML/CSS", "JavaScript", "React.js", "Git"],
    highlights: ["Proyek pertama live", "React dari nol", "Agile workflow"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>journey</p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 700, letterSpacing: "-0.02em",
          marginBottom: "3.5rem",
        }}>
          Pengalaman Kerja
        </h2>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: "120px", top: 0, bottom: 0,
            width: "1px", background: "var(--border)",
          }} className="hidden lg:block" />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                {/* Period - desktop */}
                <div
                  className="hidden lg:block"
                  style={{
                    width: "100px", flexShrink: 0,
                    fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                    color: "var(--text-muted)", lineHeight: 1.4,
                    paddingTop: "1.5rem", textAlign: "right",
                  }}
                >
                  {exp.period}
                </div>

                {/* Timeline dot - desktop */}
                <div
                  className="hidden lg:flex"
                  style={{
                    width: "20px", flexShrink: 0,
                    display: "flex", justifyContent: "center",
                    paddingTop: "1.75rem",
                  }}
                >
                  <div style={{
                    width: "9px", height: "9px", borderRadius: "50%",
                    background: i === 0 ? "var(--accent)" : "var(--text-muted)",
                    boxShadow: i === 0 ? "0 0 10px var(--accent)" : "none",
                    flexShrink: 0,
                  }} />
                </div>

                {/* Content card */}
                <div style={{
                  flex: 1,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,255,176,0.25)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  {/* Mobile period */}
                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                    color: "var(--accent)", marginBottom: "8px",
                  }} className="lg:hidden">{exp.period}</p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-display)", fontSize: "1.1rem",
                        fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px",
                      }}>{exp.role}</h3>
                      <p style={{ fontSize: "0.88rem", color: "var(--accent)", fontWeight: 500 }}>{exp.company}</p>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.68rem",
                      padding: "4px 12px",
                      background: exp.type === "Full-time" ? "rgba(79,255,176,0.1)" : "rgba(167,139,250,0.1)",
                      color: exp.type === "Full-time" ? "var(--accent)" : "#a78bfa",
                      border: `1px solid ${exp.type === "Full-time" ? "rgba(79,255,176,0.2)" : "rgba(167,139,250,0.2)"}`,
                      borderRadius: "4px",
                    }}>{exp.type}</span>
                  </div>

                  <p style={{
                    fontSize: "0.88rem", color: "var(--text-secondary)",
                    lineHeight: 1.8, marginBottom: "1.25rem",
                  }}>{exp.description}</p>

                  {/* Highlights */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1rem" }}>
                    {exp.highlights.map((h) => (
                      <span key={h} style={{
                        fontSize: "0.75rem", color: "var(--text-secondary)",
                        padding: "3px 10px",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "4px",
                      }}>✦ {h}</span>
                    ))}
                  </div>

                  {/* Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
