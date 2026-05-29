import { Link } from "react-router-dom";

const CARDS = [
  { to: "/about", emoji: "🏭", title: "회사소개", desc: "CEO 인사말과 (주)무유플랜트의 비전을 소개합니다." },
  { to: "/history", emoji: "📋", title: "연혁 및 인증", desc: "2015년 설립부터 현재까지의 성장 과정과 보유 인증을 확인하세요." },
  { to: "/capacity", emoji: "⚙️", title: "생산능력", desc: "압력용기, 열교환기 등 대형 플랜트 설비 제작 능력을 소개합니다." },
  { to: "/tech", emoji: "🔬", title: "기술", desc: "ASME U STAMP, ISO 인증 기반의 핵심 기술과 설비를 확인하세요." },
  { to: "/location", emoji: "📍", title: "오시는 길", desc: "충청남도 당진시 부곡공단, 현대제철 인근에 위치합니다." },
];

export default function Home() {
  return (
    <div>
      {/* 히어로 */}
      <section style={{
        position: "relative",
        background: "#0A192F",
        color: "white",
        textAlign: "center",
        padding: "9rem 2rem 8rem",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.18, zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.9rem", letterSpacing: "3px", opacity: 0.6, marginBottom: "1.2rem", textTransform: "uppercase" }}>
            Plant Manufacturing
          </p>
          <h2 style={{ fontSize: "3rem", marginBottom: "1.2rem", wordBreak: "keep-all", fontWeight: 700, lineHeight: 1.3 }}>
            고객이 필요로 하는<br />모든 플랜트 제품을 만족시킵니다
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, marginBottom: "2.5rem" }}>
            최고의 품질 · 경쟁력 있는 가격 · 정시 공급 · 혁신적인 원가 절감
          </p>
          <Link to="/about" style={{
            display: "inline-block",
            background: "transparent",
            border: "1.5px solid rgba(255,255,255,0.6)",
            color: "white",
            padding: "0.75rem 2.2rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: 500,
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            회사 소개 보기
          </Link>
        </div>
      </section>

      {/* 핵심 수치 */}
      <section style={{ background: "#173A5E", color: "white", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem", textAlign: "center" }}>
          {[
            { num: "2015", label: "설립연도" },
            { num: "10+", label: "보유 인증" },
            { num: "ASME", label: "U STAMP 보유" },
            { num: "30T", label: "크레인 보유" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "#64FFDA" }}>{num}</div>
              <div style={{ fontSize: "0.9rem", opacity: 0.7, marginTop: "0.3rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 카드 메뉴 */}
      <section style={{ padding: "5rem 2rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h3 style={{ textAlign: "center", color: "#0A192F", fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>무엇을 알고 싶으신가요?</h3>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "3rem", fontSize: "0.95rem" }}>각 항목을 클릭하면 상세 페이지로 이동합니다</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {CARDS.map(({ to, emoji, title, desc }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: "block",
                  background: "white",
                  borderRadius: "10px",
                  padding: "2rem 1.5rem",
                  textDecoration: "none",
                  color: "#333",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(10,25,47,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{emoji}</div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#0A192F", marginBottom: "0.5rem" }}>{title}</div>
                <div style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
