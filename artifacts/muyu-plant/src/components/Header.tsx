import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const NAV = [
  { to: "/about", label: "회사소개" },
  { to: "/history", label: "연혁 및 인증" },
  { to: "/business", label: "사업분야" },
  { to: "/production", label: "생산설비" },
  { to: "/quality", label: "품질경영" },
  { to: "/results", label: "주요실적" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const bgActive = scrolled || menuOpen;

  return (
    <>
      <header style={{
        background: bgActive ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        color: bgActive ? "#111827" : "white",
        padding: isMobile ? "0 1.5rem" : "0 3rem",
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.15s, color 0.15s",
      }}>
        <Link to="/" style={{ color: bgActive ? "#111827" : "white", textDecoration: "none" }}>
          <span style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.3px" }}>(주)무유플랜트</span>
        </Link>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.4rem", color: bgActive ? "#111827" : "white", fontSize: "1.5rem", lineHeight: 1, display: "flex", alignItems: "center" }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        ) : (
          <>
            <nav style={{ display: "flex", gap: 0 }}>
              {NAV.map(({ to, label }) => {
                const active = pathname === to;
                const isHovered = hovered === to;
                const showLine = active || isHovered;
                return (
                  <Link
                    key={to}
                    to={to}
                    onMouseEnter={() => setHovered(to)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      color: showLine ? (scrolled ? "#111827" : "white") : (scrolled ? "rgba(17,24,39,0.55)" : "rgba(255,255,255,0.75)"),
                      textDecoration: "none",
                      padding: "0 1.2rem",
                      height: "72px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "0.95rem",
                      fontWeight: (active || isHovered) ? 700 : 600,
                      letterSpacing: "-0.2px",
                      borderBottom: showLine ? `2px solid ${scrolled ? "#111827" : "white"}` : "2px solid transparent",
                      outline: "none",
                      transition: "color 0.15s, border-color 0.15s",
                      boxSizing: "border-box",
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div />
          </>
        )}
      </header>

      {isMobile && menuOpen && (
        <div style={{
          position: "fixed",
          top: "72px", left: 0, right: 0,
          background: "#fff",
          zIndex: 99,
          borderTop: "1px solid #e5e7eb",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}>
          {NAV.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                display: "block",
                padding: "1rem 1.5rem",
                color: pathname === to ? "#111827" : "#6b7280",
                fontWeight: pathname === to ? 700 : 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
