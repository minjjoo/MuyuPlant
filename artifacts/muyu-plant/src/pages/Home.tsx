import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function NaverMapMini() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    if (!clientId) return;
    const existing = document.querySelector("script[data-naver-map]");
    const init = () => {
      const naver = (window as any).naver;
      if (!naver || !mapRef.current) return;
      const loc = new naver.maps.LatLng(36.9528, 126.7463);
      const map = new naver.maps.Map(mapRef.current, { center: loc, zoom: 14 });
      new naver.maps.Marker({ position: loc, map, title: "(주)무유플랜트" });
    };
    if (existing) { init(); return; }
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
    script.async = true;
    script.setAttribute("data-naver-map", "true");
    script.onload = init;
    document.head.appendChild(script);
  }, []);
  return <div ref={mapRef} style={{ width: "100%", height: "360px", borderRadius: "6px", background: "#e5e7eb" }} />;
}

const STATS = [
  { num: "2015", label: "설립연도" },
  { num: "10+", label: "보유 인증" },
  { num: "ASME", label: "U STAMP" },
  { num: "30T", label: "크레인" },
];

export default function Home() {
  return (
    <div>
      {/* 히어로 */}
      <section style={{ position: "relative", background: "#111827", color: "white", padding: "10rem 3rem 8rem", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15, zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.78rem", letterSpacing: "3px", color: "rgba(255,255,255,0.45)", marginBottom: "1.2rem", textTransform: "uppercase" }}>
            Plant Manufacturing Since 2015
          </p>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 700, margin: "0 0 1.2rem", lineHeight: 1.25, wordBreak: "keep-all" }}>
            고객이 필요로 하는<br />모든 플랜트 제품을<br />만족시킵니다
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", marginBottom: "2.8rem" }}>
            최고의 품질 · 경쟁력 있는 가격 · 정시 공급 · 혁신적인 원가 절감
          </p>
          <Link to="/about"
            style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.5)", color: "white", padding: "0.7rem 2rem", borderRadius: "4px", textDecoration: "none", fontSize: "0.88rem", fontWeight: 500, transition: "background 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            회사 소개 보기
          </Link>
        </div>
      </section>

      {/* 수치 */}
      <section style={{ background: "#1f2937", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", padding: "2.5rem 2rem", gap: "1.5rem", textAlign: "center" }}>
          {STATS.map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "#fff" }}>{num}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: "0.3rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 회사 소개 요약 */}
      <section style={{ padding: "6rem 3rem", background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.78rem", letterSpacing: "2px", color: "#999", marginBottom: "1rem", textTransform: "uppercase" }}>About Us</p>
            <h2 style={{ fontSize: "1.9rem", fontWeight: 700, color: "#111827", margin: "0 0 1.5rem", lineHeight: 1.3, wordBreak: "keep-all" }}>
              뿌리기술 전문기업,<br />(주)무유플랜트
            </h2>
            <p style={{ color: "#555", lineHeight: 1.9, fontSize: "0.93rem", marginBottom: "1.5rem" }}>
              (주)무유플랜트는 2015년 설립 이후 Pressure Vessel, Heat Exchanger,
              Tower &amp; Column 등 대형 플랜트 설비를 전문으로 제작하는 기업입니다.
              ASME U STAMP 및 ISO 인증을 보유하며, 삼성전자·SK하이닉스 등
              국내 주요 대기업의 공인 제작사로 등록되어 있습니다.
            </p>
            <Link to="/about" style={{ color: "#111827", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none", borderBottom: "1px solid #111827", paddingBottom: "2px" }}>
              더 알아보기 →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🏭", title: "압력용기", sub: "Pressure Vessel" },
              { icon: "🌡️", title: "열교환기", sub: "Heat Exchanger" },
              { icon: "🏗️", title: "탑류 설비", sub: "Tower & Column" },
              { icon: "🔬", title: "비파괴 검사", sub: "NDT · RT ROOM" },
            ].map(({ icon, title, sub }) => (
              <div key={title} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "1.4rem 1.2rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>{icon}</div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#111827" }}>{title}</div>
                <div style={{ fontSize: "0.78rem", color: "#9ca3af", marginTop: "0.2rem" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인증 배너 */}
      <section style={{ background: "#f3f4f6", padding: "4rem 3rem", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.78rem", letterSpacing: "2px", color: "#999", marginBottom: "1.5rem", textTransform: "uppercase" }}>Certifications</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {["ISO 9001", "ISO 14001", "OHSAS 18001", "ASME U STAMP", "특정설비제조등록", "뿌리기술 전문기업"].map((cert) => (
              <span key={cert} style={{ padding: "0.45rem 1rem", border: "1px solid #d1d5db", borderRadius: "999px", fontSize: "0.82rem", color: "#374151", background: "#fff" }}>{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 미리보기 */}
      <section style={{ padding: "6rem 3rem", background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.78rem", letterSpacing: "2px", color: "#999", marginBottom: "0.8rem", textTransform: "uppercase" }}>Location</p>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: "#111827", margin: "0 0 0.5rem" }}>오시는 길</h2>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>충청남도 당진시 송악읍 부곡공단 (현대제철 인근)</p>
          </div>
          <NaverMapMini />
          <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
            <Link to="/location" style={{ color: "#111827", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none", borderBottom: "1px solid #111827", paddingBottom: "2px" }}>
              자세히 보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
