export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section style={{
      position: "relative",
      background: "#111827",
      color: "white",
      padding: "13rem 3rem 8rem",
      textAlign: "center",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/factory.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        opacity: 0.22,
        zIndex: 0,
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "2.4rem", fontWeight: 700, margin: "0 0 0.7rem", letterSpacing: "-0.5px" }}>{title}</h2>
        <p style={{ color: "rgba(255,255,255,0.4)", margin: 0, fontSize: "0.9rem" }}>{subtitle}</p>
      </div>
    </section>
  );
}
