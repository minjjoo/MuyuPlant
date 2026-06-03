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
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.async = true;
    script.setAttribute("data-naver-map", "true");
    script.onload = init;
    document.head.appendChild(script);
  }, []);
  return <div ref={mapRef} style={{ width: "100%", height: "400px", background: "#e5e7eb" }} />;
}

const STATS = [
  { num: "2015", label: "설립연도" },
  { num: "10+", label: "보유 인증" },
  { num: "ASME", label: "U STAMP" },
  { num: "30T", label: "크레인" },
];

const PRODUCTS = [
  {
    nameKo: "압력용기",
    nameEn: "Pressure Vessel",
    desc: "고압 환경에서 기체나 액체를 안전하게 저장·처리하는 용기. 석유화학, 발전, 가스 산업 전반에 공급합니다. ASME Section VIII Division 1 기준 설계·제작.",
    img: "/압력용기1.jpg",
  },
  {
    nameKo: "열교환기",
    nameEn: "Heat Exchanger",
    desc: "서로 다른 온도의 유체 사이에서 열을 교환하는 설비. Shell & Tube 방식을 주력으로 제작하며 다양한 소재와 규격에 대응합니다.",
    img: "/열교환기.png",
  },
  {
    nameKo: "탑류 설비",
    nameEn: "Tower & Column",
    desc: "증류, 흡수, 세정 등의 공정에 사용되는 탑형 설비. 대형 플랜트 현장 납품 실적 다수 보유. 설계부터 현장 설치까지 일괄 대응.",
    img: "/탑류설비.jpg",
  },
];

export default function Home() {
  return (
    <div>
      {/* 히어로 — 헤더가 fixed라 최상단부터 시작 */}
      <section style={{ position: "relative", background: "#000629", color: "white", padding: "14rem 3rem 9rem", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.35, zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "3px", color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem", textTransform: "uppercase" }}>
            Plant Manufacturing Since 2015
          </p>
          <h1 style={{ fontSize: "3rem", fontWeight: 700, margin: "0 0 1.4rem", lineHeight: 1.25, wordBreak: "keep-all" }}>
            고객이 필요로 하는<br />모든 플랜트 제품을<br />만족시킵니다
          </h1>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "3.5rem" }}>
            최고의 품질 · 경쟁력 있는 가격 · 정시 공급 · 혁신적인 원가 절감
          </p>
          <Link to="/about"
            style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.4)", color: "white", padding: "0.8rem 2.2rem", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500, transition: "background 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            회사 소개 보기
          </Link>
        </div>
      </section>

      {/* 수치 */}
      <section style={{ background: "#000629" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", padding: "3.5rem 2rem", gap: "2rem", textAlign: "center" }}>
          {STATS.map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "#fff" }}>{num}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginTop: "0.4rem", letterSpacing: "0.5px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 회사 소개 */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1.2rem", textTransform: "uppercase" }}>About Us</p>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827", margin: "0 0 1.8rem", lineHeight: 1.3, wordBreak: "keep-all" }}>
              뿌리기술 전문기업,<br />(주)무유플랜트
            </h2>
            <p style={{ color: "#6b7280", lineHeight: 2, fontSize: "0.92rem", marginBottom: "2.5rem" }}>
              2015년 설립 이후 Pressure Vessel, Heat Exchanger, Tower &amp; Column 등
              대형 플랜트 설비를 전문으로 제작합니다. ASME U STAMP 및 ISO 인증 보유,
              삼성전자·SK하이닉스 등 국내 주요 대기업 공인 제작사로 등록되어 있습니다.
            </p>
            <Link to="/about" style={{ color: "#111827", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", borderBottom: "1px solid #111827", paddingBottom: "2px" }}>
              더 알아보기 →
            </Link>
          </div>
          <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
            <img src="/home1.avif" alt="무유플랜트 공장" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* 주요 제품 */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 3rem 2rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1rem", textTransform: "uppercase" }}>Products</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827", margin: "0 0 0.5rem" }}>주요 생산 품목</h2>
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem 6rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {PRODUCTS.map(({ nameKo, nameEn, desc, img }, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={nameKo} style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderTop: "1px solid #e5e7eb",
                  direction: isEven ? "ltr" : "rtl",
                }}>
                  <div style={{ overflow: "hidden", aspectRatio: "16/9", direction: "ltr" }}>
                    <img src={img} alt={nameKo} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "4rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "center", direction: "ltr" }}>
                    <div style={{ fontSize: "0.75rem", color: "#9ca3af", letterSpacing: "1px", marginBottom: "0.8rem" }}>{nameEn}</div>
                    <div style={{ fontWeight: 700, fontSize: "1.4rem", color: "#111827", marginBottom: "1.2rem" }}>{nameKo}</div>
                    <div style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.9 }}>{desc}</div>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid #e5e7eb" }} />
          </div>
          <div style={{ marginTop: "2rem", textAlign: "right" }}>
            <Link to="/capacity" style={{ color: "#374151", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", borderBottom: "1px solid #374151", paddingBottom: "1px" }}>
              생산능력 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 인증 */}
      <section style={{ background: "#fff", color: "#111827" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 3rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "2rem", textTransform: "uppercase" }}>Certifications</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", flexWrap: "wrap" }}>
            {["ISO 9001", "ISO 14001", "OHSAS 18001", "ASME U STAMP", "특정설비제조등록", "뿌리기술 전문기업"].map((cert) => (
              <span key={cert} style={{ padding: "0.45rem 1.1rem", border: "1px solid #d1d5db", fontSize: "0.8rem", color: "#374151" }}>{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 3rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.8rem", textTransform: "uppercase" }}>Location</p>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827", margin: "0 0 0.5rem" }}>오시는 길</h2>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>충청남도 당진시 송악읍 부곡공단 (현대제철 인근)</p>
          </div>
          <NaverMapMini />
          <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
            <Link to="/location" style={{ color: "#374151", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", borderBottom: "1px solid #374151", paddingBottom: "1px" }}>
              자세히 보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
