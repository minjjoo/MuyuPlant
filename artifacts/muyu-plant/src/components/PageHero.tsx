export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section style={{
      background: "#111827",
      color: "white",
      padding: "4rem 3rem 3.5rem",
      textAlign: "center",
    }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 0.5rem", letterSpacing: "-0.5px" }}>{title}</h2>
      <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "0.9rem" }}>{subtitle}</p>
    </section>
  );
}
