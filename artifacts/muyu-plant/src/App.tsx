import { useEffect, useRef } from "react";

const historyItems = [
  { date: "2015. 06", content: "(주)무유플랜트 설립\n제이테크 협력업체 등록\n코오롱앤솔루션 협력업체 등록" },
  { date: "2016. 12", content: "발맥스기술 협력업체 등록" },
  { date: "2017. 03", content: "금성하이텍 협력업체 등록\n가람플랜트 협력업체 등록\n티에스아이 협력업체 등록" },
  { date: "2018. 08", content: "현 공장 매입\nISO9001/14001/OHSAS18001 취득" },
  { date: "2019. 01", content: "특정설비제조등록 취득\n제이오 협력업체 등록\n재원산업 협력업체 등록" },
  { date: "2020. 01", content: "앱스필 협력업체 등록\n동부제철 협력업체 등록\n특허 제 10-2147620호 (철판롤링장치)" },
  { date: "2021. 01", content: "KC코츠렐 협력업체 등록" },
  { date: "2022. 01", content: "삼성전자\n(삼성물산/삼성엔지니어링 제작사 등록)" },
  { date: "2022. 03", content: "ASME U STAMP 취득" },
  { date: "2023. 11", content: "뿌리기술 전문기업 지정" },
  { date: "2025. 05", content: "SK 하이닉스 협력업체 등록" },
];

function TimelineItem({ item, index }: { item: typeof historyItems[0]; index: number }) {
  const isTop = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", isTop ? "-translate-y-4" : "translate-y-4");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isTop]);

  return (
    <div className="flex flex-col items-center" style={{ minWidth: "200px", maxWidth: "220px" }}>
      {isTop ? (
        <>
          <div
            ref={ref}
            className="opacity-0 -translate-y-4 transition-all duration-500 text-center mb-3"
            style={{ minHeight: "90px" }}
          >
            <div
              className="font-bold text-base mb-1"
              style={{ color: "#0A192F" }}
            >
              {item.date}
            </div>
            <div className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
              {item.content.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </div>
          </div>
          <div
            className="w-3 h-3 rounded-full z-10 flex-shrink-0"
            style={{ background: "#0A192F", border: "2px solid #64FFDA" }}
          />
          <div className="flex-1" />
        </>
      ) : (
        <>
          <div className="flex-1" />
          <div
            className="w-3 h-3 rounded-full z-10 flex-shrink-0"
            style={{ background: "#0A192F", border: "2px solid #64FFDA" }}
          />
          <div
            ref={ref}
            className="opacity-0 translate-y-4 transition-all duration-500 text-center mt-3"
            style={{ minHeight: "90px" }}
          >
            <div
              className="font-bold text-base mb-1"
              style={{ color: "#0A192F" }}
            >
              {item.date}
            </div>
            <div className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
              {item.content.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#333", lineHeight: 1.6 }}>
      {/* 구글 폰트 */}
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
        <nav>
          {[
            { href: "#about", label: "회사소개" },
            { href: "#history", label: "연혁 및 인증" },
            { href: "#capacity", label: "생산능력" },
            { href: "#location", label: "오시는 길" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: "1.5rem",
                fontWeight: 500,
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#64FFDA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* 히어로 */}
      <section
        style={{
          background: "#0F2942",
          color: "white",
          textAlign: "center",
          padding: "8rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.8rem", marginBottom: "1rem", wordBreak: "keep-all" }}>
            고객이 필요로 하는<br />모든 플랜트 제품을 만족시킵니다
          </h2>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
            최고의 품질 · 경쟁력 있는 가격 · 정시 공급 · 혁신적인 원가 절감
          </p>
        </div>
      </section>

      {/* CEO 인사말 */}
      <section
        id="about"
        style={{ padding: "5rem 2rem", borderBottom: "1px solid #e2e8f0" }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h3
            style={{
              color: "#0A192F",
              borderBottom: "2px solid #173A5E",
              paddingBottom: "0.5rem",
              display: "inline-block",
              marginBottom: "2rem",
              fontSize: "1.8rem",
            }}
          >
            CEO 인사말
          </h3>
          <p>
            국제 플랜트 시장의 급속한 변화는 국내 플랜트 시장의 흐름을 예측하기 어렵게 만들고 있습니다.<br />
            이러한 상황 속에서도 (주)무유플랜트는 철저한 제조 시스템 구축을 통해 최상의 결과를 약속드립니다.
          </p>
          <p style={{ textAlign: "right", fontWeight: "bold", marginTop: "2rem", fontSize: "1.2rem" }}>
            대표이사 이 종 수
          </p>
        </div>
      </section>

      {/* 주요 연혁 - 위아래 번갈아 지그재그 타임라인 */}
      <section
        id="history"
        style={{ padding: "5rem 2rem", borderBottom: "1px solid #e2e8f0" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h3
            style={{
              color: "#0A192F",
              borderBottom: "2px solid #173A5E",
              paddingBottom: "0.5rem",
              display: "inline-block",
              marginBottom: "3rem",
              fontSize: "1.8rem",
            }}
          >
            주요 연혁
          </h3>

          {/* 타임라인 컨테이너 */}
          <div style={{ overflowX: "auto", paddingBottom: "1rem" }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                minWidth: "max-content",
                gap: 0,
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
                  background: "#cbd5e1",
                  zIndex: 0,
                }}
              />

              {historyItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "200px",
                    maxWidth: "220px",
                    height: "260px",
                    padding: "0 12px",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    // 위쪽 (짝수 인덱스)
                    <>
                      <ItemBlock item={item} position="top" />
                      {/* 세로 연결선 */}
                      <div style={{ width: "1px", height: "20px", background: "#cbd5e1" }} />
                      <Dot />
                      <div style={{ flex: 1 }} />
                    </>
                  ) : (
                    // 아래쪽 (홀수 인덱스)
                    <>
                      <div style={{ flex: 1 }} />
                      <Dot />
                      <div style={{ width: "1px", height: "20px", background: "#cbd5e1" }} />
                      <ItemBlock item={item} position="bottom" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 생산 품목 및 주요 설비 */}
      <section
        id="capacity"
        style={{ padding: "5rem 2rem", borderBottom: "1px solid #e2e8f0" }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h3
            style={{
              color: "#0A192F",
              borderBottom: "2px solid #173A5E",
              paddingBottom: "0.5rem",
              display: "inline-block",
              marginBottom: "2rem",
              fontSize: "1.8rem",
            }}
          >
            생산 품목 및 주요 설비
          </h3>
          <p>
            Pressure Vessel (압력용기), Heat Exchanger (열교환기), Tower and Column 등 대형 플랜트 설비 제작
          </p>
          <ul style={{ marginTop: "1.5rem" }}>
            <li>
              <strong>주요 설비</strong> 30Ton 크레인, Bending Roller, RT ROOM(방사선 투과 시험실) 등 완비
            </li>
          </ul>
        </div>
      </section>

      {/* 오시는 길 */}
      <section id="location" style={{ padding: "5rem 2rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h3
            style={{
              color: "#0A192F",
              borderBottom: "2px solid #173A5E",
              paddingBottom: "0.5rem",
              display: "inline-block",
              marginBottom: "2rem",
              fontSize: "1.8rem",
            }}
          >
            오시는 길
          </h3>
          <p>
            <strong>공장 및 본사 :</strong> 충청남도 당진시 송악읍 부곡공단 (현대제철 인근)
          </p>
          <div
            style={{
              background: "#e2e8f0",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.5rem",
              color: "#718096",
            }}
          >
            [지도 API 연동 영역]
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer
        style={{
          background: "#f7fafc",
          textAlign: "center",
          padding: "2rem",
          fontSize: "0.9rem",
          color: "#718096",
        }}
      >
        <p>&copy; 2026 (주)무유플랜트. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Dot() {
  return (
    <div
      style={{
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        background: "#0A192F",
        border: "2px solid #64FFDA",
        flexShrink: 0,
        zIndex: 2,
      }}
    />
  );
}

function ItemBlock({
  item,
  position,
}: {
  item: { date: string; content: string };
  position: "top" | "bottom";
}) {
  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: position === "top" ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "#0A192F",
          marginBottom: "4px",
          whiteSpace: "nowrap",
        }}
      >
        {item.date}
      </div>
      <div style={{ fontSize: "0.82rem", color: "#4a5568", lineHeight: 1.6, wordBreak: "keep-all" }}>
        {item.content.split("\n").map((line, i) => (
          <span key={i} style={{ display: "block" }}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
