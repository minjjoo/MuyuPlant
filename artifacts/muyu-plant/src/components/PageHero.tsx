import { useIsMobile } from "../hooks/use-mobile";

export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  const isMobile = useIsMobile();
  return (
    <section style={{
      position: "relative",
      background: "#000629",
      color: "white",
      padding: isMobile ? "9rem 1.5rem 5rem" : "13rem 3rem 8rem",
      textAlign: "center",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        opacity: 0.35,
        zIndex: 0,
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: isMobile ? "1.8rem" : "2.4rem", fontWeight: 700, margin: "0 0 0.7rem", letterSpacing: "-0.5px" }}>{title}</h2>
        <p style={{ color: "rgba(255,255,255,0.4)", margin: 0, fontSize: "0.9rem" }}>{subtitle}</p>
      </div>
    </section>
  );
}
