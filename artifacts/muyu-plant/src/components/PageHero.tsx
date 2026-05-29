export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section style={{
      background: "#0F2942",
      color: "white",
      padding: "4rem 2rem 3.5rem",
      textAlign: "center",
    }}>
      <h2 style={{ fontSize: "2.2rem", fontWeight: 700, margin: "0 0 0.6rem", letterSpacing: "-0.5px" }}>{title}</h2>
      <p style={{ opacity: 0.65, margin: 0, fontSize: "0.95rem" }}>{subtitle}</p>
    </section>
  );
}
