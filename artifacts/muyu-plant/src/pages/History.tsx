import { useState } from "react";
import PageHero from "../components/PageHero";
import { useIsMobile } from "../hooks/use-mobile";

const historyItems = [
  { year: "2025", content: "SK 하이닉스 협력업체 등록" },
  { year: "2023", content: "뿌리기술 전문기업 지정" },
  { year: "2022", content: "ASME U STAMP 취득\n삼성전자 (삼성물산/삼성엔지니어링 제작사 등록)" },
  { year: "2021", content: "KC코츠렐 협력업체 등록" },
  { year: "2020", content: "앱스필 협력업체 등록\n동부제철 협력업체 등록\n특허 제 10-2147620호 (철판롤링장치)" },
  { year: "2019", content: "특정설비제조등록 취득\n제이오 협력업체 등록\n재원산업 협력업체 등록" },
  { year: "2018", content: "현 공장 매입\nISO9001 / ISO14001 / OHSAS18001 취득" },
  { year: "2017", content: "금성하이텍 협력업체 등록\n가람플랜트 협력업체 등록\n티에스아이 협력업체 등록" },
  { year: "2016", content: "발맥스기술 협력업체 등록" },
  { year: "2015", content: "(주)무유플랜트 설립\n제이테크 협력업체 등록\n코오롱앤솔루션 협력업체 등록" },
];

const certs = [
  { name: "뿌리기술 전문기업", desc: "용접·성형 기반 제조 전문기업 지정", year: "2023" },
  { name: "ASME U STAMP", desc: "압력용기 국제 인증 (미국기계학회)", year: "2022" },
  { name: "특정설비제조등록", desc: "고압가스 특정설비 제조업 등록", year: "2019" },
  { name: "ISO 9001", desc: "품질경영시스템", year: "2018" },
  { name: "ISO 14001", desc: "환경경영시스템", year: "2018" },
  { name: "OHSAS 18001", desc: "안전보건경영시스템", year: "2018" },
];

export default function History() {
  const [hovered, setHovered] = useState<number | null>(null);
  const isMobile = useIsMobile();
  return (
    <div>
      <PageHero title="연혁 및 인증" subtitle="2015년 설립 이후 꾸준한 성장을 이어왔습니다" />
      <section style={{ padding: isMobile ? "3rem 1.5rem" : "8rem 5rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.8rem", textTransform: "uppercase" }}>Timeline</p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "3rem" }}>주요 연혁</h3>

          {/* 가로 타임라인 */}
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "flex", minWidth: `${historyItems.length * 200}px` }}>
              {historyItems.map((item, i) => {
                const active = hovered === i;
                const isTop = i % 2 === 0;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ flex: "1 1 0", display: "flex", flexDirection: "column", alignItems: "center", cursor: "default", minWidth: isMobile ? "130px" : "0" }}
                  >
                    {/* 위 텍스트 영역 */}
                    <div style={{ height: "130px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
                      {isTop && <TextBlock item={item} active={active} position="top" />}
                      {isTop && <div style={{ width: "1px", height: "20px", background: "#e5e7eb", marginTop: "6px" }} />}
                    </div>

                    {/* 도트 + 가로선 */}
                    <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "20px" }}>
                      <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "#e5e7eb", transform: "translateY(-50%)" }} />
                      <Dot active={active} />
                    </div>

                    {/* 아래 텍스트 영역 */}
                    <div style={{ height: "130px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
                      {!isTop && <div style={{ width: "1px", height: "20px", background: "#e5e7eb", marginBottom: "6px" }} />}
                      {!isTop && <TextBlock item={item} active={active} position="bottom" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "3rem 1.5rem 4rem" : "7rem 5rem 8rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.8rem", textTransform: "uppercase" }}>Certifications</p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "2rem" }}>보유 인증</h3>
          <div style={{ borderTop: "1px solid #e5e7eb" }}>
            {certs.map(({ name, desc, year }) => (
              <div key={name} style={{ display: "flex", alignItems: isMobile ? "flex-start" : "center", gap: "1rem", padding: "1.1rem 0", borderBottom: "1px solid #e5e7eb", flexWrap: isMobile ? "wrap" : "nowrap" }}>
                <div style={{ background: "#1e3a5f", color: "#fff", padding: "0.25rem 0.6rem", fontSize: "0.72rem", fontWeight: 700, flexShrink: 0, minWidth: "42px", textAlign: "center" }}>{year}</div>
                <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.9rem", minWidth: isMobile ? "auto" : "170px" }}>{name}</div>
                <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: active ? "#111827" : "#d1d5db", border: `2px solid ${active ? "#111827" : "#e5e7eb"}`, flexShrink: 0, zIndex: 2, transition: "background 0.2s, border-color 0.2s" }} />;
}

function TextBlock({ item, active, position }: { item: { year: string; content: string }; active: boolean; position: "top" | "bottom" }) {
  return (
    <div style={{ textAlign: "center", minHeight: "100px", display: "flex", flexDirection: "column", justifyContent: position === "top" ? "flex-end" : "flex-start", padding: "0 8px" }}>
      <div style={{ fontWeight: 700, fontSize: "0.95rem", color: active ? "#111827" : "#4b5563", marginBottom: "4px", transition: "color 0.2s" }}>{item.year}</div>
      <div style={{ fontSize: "0.78rem", color: active ? "#374151" : "#6b7280", lineHeight: 1.65, wordBreak: "keep-all", transition: "color 0.2s" }}>
        {item.content.split("\n").map((line, i) => <span key={i} style={{ display: "block" }}>{line}</span>)}
      </div>
    </div>
  );
}
