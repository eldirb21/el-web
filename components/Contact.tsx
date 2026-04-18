"use client";
import { useState } from "react";
import { Mail, Send, GitFork, Link, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border)",
    borderRadius: "8px", outline: "none",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)", fontSize: "0.9rem",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "6rem clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>contact</p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 700, letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}>
          Mari Berkolaborasi
        </h2>
        <p style={{
          color: "var(--text-secondary)", fontSize: "0.95rem",
          lineHeight: 1.8, maxWidth: "500px", marginBottom: "3.5rem",
        }}>
          Terbuka untuk full-time, freelance, maupun kolaborasi project. Kirim pesan dan saya akan respond dalam 24 jam.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          {/* Contact info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {[
                { icon: <Mail size={18} />, label: "Email", value: "eldirb04@email.com", href: "mailto:eldirb04@email.com" },
                { icon: <MapPin size={18} />, label: "Lokasi", value: "Jakarta, Indonesia", href: "#" },
                { icon: <GitFork size={18} />, label: "GitHub", value: "github.com/eldirb21", href: "https://github.com" },
                { icon: <Link size={18} />, label: "LinkedIn", value: "linkedin.com/in/eldirb", href: "https://linkedin.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    textDecoration: "none", padding: "16px",
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    borderRadius: "12px", transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,255,176,0.3)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <span style={{
                    color: "var(--accent)", width: "38px", height: "38px",
                    background: "var(--accent-dim)", borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "2px" }}>{item.label}</p>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-primary)" }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div style={{
              padding: "16px 20px",
              background: "rgba(79,255,176,0.06)",
              border: "1px solid rgba(79,255,176,0.2)",
              borderRadius: "12px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "var(--accent)", boxShadow: "0 0 8px var(--accent)",
                }} />
                <span style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 600 }}>Tersedia untuk hire</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Saat ini terbuka untuk peluang full-time atau freelance project yang menarik.
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2rem",
          }}>
            {sent ? (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", height: "100%", gap: "1rem",
                padding: "2rem 0", textAlign: "center",
              }}>
                <CheckCircle size={48} color="var(--accent)" />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700 }}>
                  Pesan Terkirim!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Terima kasih telah menghubungi saya. Saya akan balas dalam 24 jam.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-outline"
                  style={{ marginTop: "1rem" }}
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                      Nama
                    </label>
                    <input
                      required style={inputStyle} value={form.name} placeholder="John Doe"
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(79,255,176,0.4)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                      Email
                    </label>
                    <input
                      required type="email" style={inputStyle} value={form.email} placeholder="john@email.com"
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(79,255,176,0.4)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                    Subject
                  </label>
                  <input
                    required style={inputStyle} value={form.subject} placeholder="Project Collaboration"
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(79,255,176,0.4)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                    Pesan
                  </label>
                  <textarea
                    required rows={5} style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message} placeholder="Halo Eldir, saya ingin..."
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(79,255,176,0.4)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Mengirim..." : <>Kirim Pesan <Send size={14} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
