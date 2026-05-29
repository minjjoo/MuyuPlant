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

const PRODUCTS = [
  { nameKo: "압력용기", nameEn: "Pressure Vessel" },
  { nameKo: "열교환기", nameEn: "Heat Exchanger" },
  { nameKo: "탑류 설비", nameEn: "Tower & Column" },
  { nameKo: "저장 탱크", nameEn: "Storage Tank" },
];

export default function Home() {
  return (
    <div>
      {/* 히어로 */}
      <section style={{ position: "relative", background: "#111827", color: "white", padding: "11rem 3rem 9rem", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/factory.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.2, zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "3px", color: "rgba(255,255,255,0.4)", marginBottom: "1.3rem", textTransform: "uppercase" }}>
            Plant Manufacturing Since 2015
          </p>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 700, margin: "0 0 1.2rem", lineHeight: 1.25, wordBreak: "keep-all" }}>
            고객이 필요로 하는<br />모든 플랜트 제품을<br />만족시킵니다
          </h1>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "3rem" }}>
            최고의 품질 · 경쟁력 있는 가격 · 정시 공급 · 혁신적인 원가 절감
          </p>
          <Link to="/about"
            style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.4)", color: "white", padding: "0.7rem 2rem", borderRadius: "3px", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500, transition: "background 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            회사 소개 보기
          </Link>
        </div>
      </section>

      {/* 수치 */}
      <section style={{ background: "#1f2937", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", padding: "2.8rem 2rem", gap: "1.5rem", textAlign: "center" }}>
          {STATS.map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "#fff" }}>{num}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginTop: "0.3rem", letterSpacing: "0.5px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 회사 소개 — 실제 공장 사진 활용 */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "6rem 3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1rem", textTransform: "uppercase" }}>About Us</p>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 1.5rem", lineHeight: 1.3, wordBreak: "keep-all" }}>
              뿌리기술 전문기업,<br />(주)무유플랜트
            </h2>
            <p style={{ color: "#6b7280", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: "2rem" }}>
              2015년 설립 이후 Pressure Vessel, Heat Exchanger, Tower &amp; Column 등
              대형 플랜트 설비를 전문으로 제작합니다. ASME U STAMP 및 ISO 인증 보유,
              삼성전자·SK하이닉스 등 국내 주요 대기업 공인 제작사로 등록되어 있습니다.
            </p>
            <Link to="/about" style={{ color: "#111827", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", borderBottom: "1px solid #111827", paddingBottom: "2px" }}>
              더 알아보기 →
            </Link>
          </div>

          {/* 실제 공장 사진 */}
          <div style={{ borderRadius: "6px", overflow: "hidden", aspectRatio: "4/3" }}>
            <img
              src="/factory.jpg"
              alt="무유플랜트 공장"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* 주요 제품 — 텍스트 중심 심플 테이블 */}
      <section style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "5rem 3rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.8rem", textTransform: "uppercase" }}>Products</p>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111827", margin: "0 0 2.5rem" }}>주요 생산 품목</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", border: "1px solid #e5e7eb", borderRadius: "6px", overflow: "hidden", background: "#fff" }}>
            {PRODUCTS.map(({ nameKo, nameEn }, i) => (
              <div key={nameKo} style={{
                padding: "2rem 1.5rem",
                borderRight: i < 3 ? "1px solid #e5e7eb" : "none",
                textAlign: "center",
              }}>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#111827", marginBottom: "0.4rem" }}>{nameKo}</div>
                <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{nameEn}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
            <Link to="/capacity" style={{ color: "#374151", fontWeight: 600, fontSize: "0.83rem", textDecoration: "none", borderBottom: "1px solid #374151", paddingBottom: "1px" }}>
              생산능력 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 인증 */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "4rem 3rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1.5rem", textTransform: "uppercase" }}>Certifications</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", flexWrap: "wrap" }}>
            {["ISO 9001", "ISO 14001", "OHSAS 18001", "ASME U STAMP", "특정설비제조등록", "뿌리기술 전문기업"].map((cert) => (
              <span key={cert} style={{ padding: "0.4rem 1rem", border: "1px solid #d1d5db", borderRadius: "999px", fontSize: "0.8rem", color: "#374151" }}>{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section style={{ background: "#f9fafb", padding: "6rem 3rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Location</p>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111827", margin: "0 0 0.4rem" }}>오시는 길</h2>
            <p style={{ color: "#6b7280", fontSize: "0.88rem", margin: 0 }}>충청남도 당진시 송악읍 부곡공단 (현대제철 인근)</p>
          </div>
          <NaverMapMini />
          <div style={{ marginTop: "1.2rem", textAlign: "right" }}>
            <Link to="/location" style={{ color: "#374151", fontWeight: 600, fontSize: "0.83rem", textDecoration: "none", borderBottom: "1px solid #374151", paddingBottom: "1px" }}>
              자세히 보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
