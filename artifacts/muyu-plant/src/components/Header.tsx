import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NAV = [
  { to: "/about", label: "회사소개" },
  { to: "/history", label: "연혁 및 인증" },
  { to: "/capacity", label: "생산능력" },
  { to: "/tech", label: "기술" },
  { to: "/location", label: "오시는 길" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      background: scrolled ? "rgba(17, 24, 39, 0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      color: "white",
      padding: "0 3rem",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: "88px",
      display: "grid",
      gridTemplateColumns: "220px 1fr 220px",
      alignItems: "center",
      transition: "background 0.3s ease, backdrop-filter 0.3s ease",
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <span style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.3px" }}>(주)무유플랜트</span>
      </Link>

      <nav style={{ display: "flex", justifyContent: "center", gap: 0 }}>
        {NAV.map(({ to, label }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                color: active ? "#ffffff" : "rgba(255,255,255,0.65)",
                textDecoration: "none",
                padding: "0 1.2rem",
                height: "88px",
                display: "flex",
                alignItems: "center",
                fontSize: "0.88rem",
                fontWeight: active ? 600 : 400,
                borderBottom: active ? "2px solid #ffffff" : "2px solid transparent",
                outline: "none",
                transition: "color 0.2s, border-color 0.2s",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div />
    </header>
  );
}
