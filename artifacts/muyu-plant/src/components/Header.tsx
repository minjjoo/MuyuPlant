import { Link, useLocation } from "react-router-dom";

const NAV = [
  { to: "/about", label: "회사소개" },
  { to: "/history", label: "연혁 및 인증" },
  { to: "/capacity", label: "생산능력" },
  { to: "/tech", label: "기술" },
  { to: "/location", label: "오시는 길" },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header style={{
      background: "#0A192F",
      color: "white",
      padding: "0 2rem",
      position: "sticky",
      top: 0,
      zIndex: 100,
      height: "64px",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
    }}>
      {/* 로고 */}
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <span style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.5px" }}>(주)무유플랜트</span>
      </Link>

      {/* 가운데 정렬 네비게이션 */}
      <nav style={{ display: "flex", gap: "0.15rem" }}>
        {NAV.map(({ to, label }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                color: active ? "#64FFDA" : "white",
                textDecoration: "none",
                padding: "0.45rem 1rem",
                borderRadius: "4px",
                fontWeight: active ? 700 : 400,
                fontSize: "0.9rem",
                transition: "background 0.2s, color 0.2s",
                borderBottom: active ? "2px solid #64FFDA" : "2px solid transparent",
              }}
              onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* 우측 여백 균형 */}
      <div />
    </header>
  );
}
