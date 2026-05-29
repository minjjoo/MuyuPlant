import { useEffect, useRef, useState } from "react";

const historyItems = [
  { year: "2025", content: "SK 하이닉스 협력업체 등록" },
  { year: "2023", content: "뿌리기술 전문기업 지정" },
  { year: "2022", content: "ASME U STAMP 취득\n삼성전자 (삼성물산/삼성엔지니어링 제작사 등록)" },
  { year: "2021", content: "KC코츠렐 협력업체 등록" },
  { year: "2020", content: "앱스필 협력업체 등록\n동부제철 협력업체 등록\n특허 제 10-2147620호 (철판롤링장치)" },
  { year: "2019", content: "특정설비제조등록 취득\n제이오 협력업체 등록\n재원산업 협력업체 등록" },
  { year: "2018", content: "현 공장 매입\nISO9001/14001/OHSAS18001 취득" },
  { year: "2017", content: "금성하이텍 협력업체 등록\n가람플랜트 협력업체 등록\n티에스아이 협력업체 등록" },
  { year: "2016", content: "발맥스기술 협력업체 등록" },
  { year: "2015", content: "(주)무유플랜트 설립\n제이테크 협력업체 등록\n코오롱앤솔루션 협력업체 등록" },
];

function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    if (!clientId) return;

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
    script.async = true;
    script.onload = () => {
      const naver = (window as any).naver;
      if (!naver || !mapRef.current) return;
      const location = new naver.maps.LatLng(36.9528, 126.7463);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });
      new naver.maps.Marker({
        position: location,
        map,
        title: "(주)무유플랜트",
      });
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "350px", borderRadius: "8px", marginTop: "1.5rem" }}
    />
  );
}

function TimelineDot({ active }: { active: boolean }) {
  return (
    <div
      style={{
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: active ? "#0A192F" : "#94a3b8",
        border: `2px solid ${active ? "#0A192F" : "#cbd5e1"}`,
        flexShrink: 0,
        zIndex: 2,
        transition: "background 0.25s, border-color 0.25s",
        cursor: "pointer",
      }}
    />
  );
}

function TimelineItem({
  item,
  index,
  active,
  onHover,
}: {
  item: (typeof historyItems)[0];
  index: number;
  active: boolean;
  onHover: (i: number | null) => void;
}) {
  const isTop = index % 2 === 0;

  const textBlock = (
    <div
      style={{
        textAlign: "center",
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: isTop ? "flex-end" : "flex-start",
        padding: "0 8px",
        transition: "opacity 0.25s",
        opacity: active ? 1 : 0.55,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "1rem",
          color: active ? "#0A192F" : "#64748b",
          marginBottom: "4px",
          transition: "color 0.25s",
        }}
      >
        {item.year}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: active ? "#1e293b" : "#94a3b8",
          lineHeight: 1.65,
          wordBreak: "keep-all",
          transition: "color 0.25s",
        }}
      >
        {item.content.split("\n").map((line, i) => (
          <span key={i} style={{ display: "block" }}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "190px",
        maxWidth: "210px",
        height: "260px",
        padding: "0 8px",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {isTop ? (
        <>
          {textBlock}
          <div style={{ width: "1px", height: "18px", background: active ? "#0A192F" : "#cbd5e1", transition: "background 0.25s" }} />
          <TimelineDot active={active} />
          <div style={{ flex: 1 }} />
        </>
      ) : (
        <>
          <div style={{ flex: 1 }} />
          <TimelineDot active={active} />
          <div style={{ width: "1px", height: "18px", background: active ? "#0A192F" : "#cbd5e1", transition: "background 0.25s" }} />
          {textBlock}
        </>
      )}
    </div>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "회사소개" },
  { href: "#history", label: "연혁 및 인증" },
  { href: "#capacity", label: "생산능력" },
  { href: "#location", label: "오시는 길" },
];

const SECTION_STYLE: React.CSSProperties = {
  padding: "5rem 2rem",
  borderBottom: "1px solid #e2e8f0",
};

const H3_STYLE: React.CSSProperties = {
  color: "#0A192F",
  borderBottom: "2px solid #173A5E",
  paddingBottom: "0.5rem",
  display: "inline-block",
  marginBottom: "2rem",
  fontSize: "1.8rem",
};

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const activeIndex = clickedIndex !== null ? clickedIndex : hoveredIndex;

  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#333", lineHeight: 1.6 }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap"
        rel="stylesheet"
      />

      {/* 헤더 */}
      <header
        style={{
          background: "#0A192F",
          color: "white",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.5rem", letterSpacing: "-1px" }}>(주)무유플랜트</h1>
        <nav style={{ display: "flex", gap: "0.25rem" }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                color: "white",
                textDecoration: "none",
                padding: "0.4rem 0.9rem",
                borderRadius: "4px",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* 히어로 */}
      <section
        style={{
          position: "relative",
          background: "#0A192F",
          color: "white",
          textAlign: "center",
          padding: "9rem 2rem",
          overflow: "hidden",
        }}
      >
        {/* 공장 배경 이미지 (반투명 오버레이) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.8rem", marginBottom: "1rem", wordBreak: "keep-all", fontWeight: 700 }}>
            고객이 필요로 하는<br />모든 플랜트 제품을 만족시킵니다
          </h2>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
            최고의 품질 · 경쟁력 있는 가격 · 정시 공급 · 혁신적인 원가 절감
          </p>
        </div>
      </section>

      {/* CEO 인사말 */}
      <section id="about" style={SECTION_STYLE}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={H3_STYLE}>CEO 인사말</h3>
          <p style={{ maxWidth: "700px", margin: "0 auto" }}>
            국제 플랜트 시장의 급속한 변화는 국내 플랜트 시장의 흐름을 예측하기 어렵게 만들고 있습니다.<br />
            이러한 상황 속에서도 (주)무유플랜트는 철저한 제조 시스템 구축을 통해 최상의 결과를 약속드립니다.
          </p>
          <p style={{ fontWeight: "bold", marginTop: "2rem", fontSize: "1.2rem" }}>
            대표이사 이 종 수
          </p>
        </div>
      </section>

      {/* 주요 연혁 */}
      <section id="history" style={{ ...SECTION_STYLE, background: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={H3_STYLE}>주요 연혁</h3>

          <div style={{ overflowX: "auto", paddingBottom: "1rem" }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                minWidth: "max-content",
              }}
            >
              {/* 가운데 가로선 */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  height: "2px",
                  background: "#e2e8f0",
                  zIndex: 0,
                }}
              />

              {historyItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  active={activeIndex === index}
                  onHover={(i) => setHoveredIndex(i)}
                />
              ))}
            </div>
          </div>

          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#94a3b8" }}>
            각 항목에 마우스를 올려보세요
          </p>
        </div>
      </section>

      {/* 생산 품목 및 주요 설비 */}
      <section id="capacity" style={SECTION_STYLE}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={H3_STYLE}>생산 품목 및 주요 설비</h3>
          <p>
            Pressure Vessel (압력용기), Heat Exchanger (열교환기), Tower and Column 등 대형 플랜트 설비 제작
          </p>
          <ul style={{ marginTop: "1.5rem", display: "inline-block", textAlign: "left" }}>
            <li>
              <strong>주요 설비</strong> — 30Ton 크레인, Bending Roller, RT ROOM(방사선 투과 시험실) 등 완비
            </li>
          </ul>
        </div>
      </section>

      {/* 오시는 길 */}
      <section id="location" style={{ ...SECTION_STYLE, background: "#f8fafc" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={H3_STYLE}>오시는 길</h3>
          <p>
            <strong>공장 및 본사 :</strong> 충청남도 당진시 송악읍 부곡공단 (현대제철 인근)
          </p>
          <NaverMap />
        </div>
      </section>

      {/* 푸터 */}
      <footer
        style={{
          background: "#0A192F",
          color: "rgba(255,255,255,0.6)",
          textAlign: "center",
          padding: "2rem",
          fontSize: "0.9rem",
        }}
      >
        <p style={{ margin: 0 }}>&copy; 2026 (주)무유플랜트. All rights reserved.</p>
      </footer>
    </div>
  );
}
