"use client";
import { GraduationCap, MapPin, Briefcase, Code2 } from "lucide-react";

const stats = [
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "20+", label: "Proyek Selesai" },
  { value: "10+", label: "Klien Puas" },
  { value: "3", label: "Stack Utama" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Label */}
        <p className="section-label" style={{ marginBottom: "1rem" }}>{"about me"}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
          {/* Left: text */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}>
              Building digital
              <br />
              <span style={{ color: "var(--accent)" }}>experiences</span> that
              <br />
              matter.
            </h2>

            <p style={{
              color: "var(--text-secondary)", lineHeight: 1.9,
              marginBottom: "1.25rem", fontSize: "0.95rem",
            }}>
              Saya adalah seorang developer lulusan S1 Sistem Informasi yang passionate
              di dunia frontend dan mobile development. Selama 5 tahun berkecimpung di
              industri ini, saya telah membangun berbagai aplikasi dari skala startup
              hingga enterprise.
            </p>
            <p style={{
              color: "var(--text-secondary)", lineHeight: 1.9,
              marginBottom: "2rem", fontSize: "0.95rem",
            }}>
              Keahlian utama saya ada di React Native untuk mobile, dan Next.js untuk
              web — dilengkapi dengan kemampuan backend menggunakan Node.js/Express
              dan database MySQL. Saya percaya bahwa kode yang baik adalah yang
              bisa dibaca dan di-maintain oleh tim.
            </p>

            {/* Info chips */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: <GraduationCap size={15} />, text: "S1 Sistem Informasi" },
                { icon: <MapPin size={15} />, text: "Jakarta, Indonesia" },
                { icon: <Briefcase size={15} />, text: "5 Tahun Pengalaman" },
                { icon: <Code2 size={15} />, text: "Full-Stack → Frontend Focused" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "1rem", marginBottom: "2rem",
            }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(79,255,176,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.2rem", fontWeight: 800,
                    color: "var(--accent)", lineHeight: 1,
                    marginBottom: "8px",
                  }}>{s.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Code snippet decoration */}
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              lineHeight: 1.8,
            }}>
              <div style={{ color: "var(--text-muted)", marginBottom: "8px", fontSize: "0.7rem" }}>developer.ts</div>
              <div><span style={{ color: "#7c89f0" }}>const</span> <span style={{ color: "var(--accent)" }}>dev</span> <span style={{ color: "var(--text-muted)" }}>=</span> {"{"}</div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <div><span style={{ color: "#e8b86d" }}>name</span><span style={{ color: "var(--text-muted)" }}>:</span> <span style={{ color: "#a8d8a8" }}>&apos;Beladiri Buulolo&apos;</span><span style={{ color: "var(--text-muted)" }}>,</span></div>
                <div><span style={{ color: "#e8b86d" }}>role</span><span style={{ color: "var(--text-muted)" }}>:</span> <span style={{ color: "#a8d8a8" }}>&apos;Frontend Developer&apos;</span><span style={{ color: "var(--text-muted)" }}>,</span></div>
                <div><span style={{ color: "#e8b86d" }}>years</span><span style={{ color: "var(--text-muted)" }}>:</span> <span style={{ color: "#79bce0" }}>5</span><span style={{ color: "var(--text-muted)" }}>,</span></div>
                <div><span style={{ color: "#e8b86d" }}>available</span><span style={{ color: "var(--text-muted)" }}>:</span> <span style={{ color: "#79bce0" }}>true</span><span style={{ color: "var(--text-muted)" }}>,</span></div>
              </div>
              <div>{"}"}<span style={{ color: "var(--text-muted)" }}>;</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
