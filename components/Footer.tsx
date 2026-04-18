export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2rem clamp(1rem, 5vw, 3rem)",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "1rem",
      }}>
        
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
          © {year} Eldir Buulolo
        </p>
      </div>
    </footer>
  );
}
