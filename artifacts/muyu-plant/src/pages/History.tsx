import { useState } from "react";
import PageHero from "../components/PageHero";

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
  { name: "ISO 9001", desc: "품질경영시스템", year: "2018" },
  { name: "ISO 14001", desc: "환경경영시스템", year: "2018" },
  { name: "OHSAS 18001", desc: "안전보건경영시스템", year: "2018" },
  { name: "ASME U STAMP", desc: "압력용기 국제 인증 (미국기계학회)", year: "2022" },
  { name: "특정설비제조등록", desc: "고압가스 특정설비 제조업 등록", year: "2019" },
  { name: "뿌리기술 전문기업", desc: "용접·성형 기반 제조 전문기업 지정", year: "2023" },
];

export default function History() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <PageHero title="연혁 및 인증" subtitle="2015년 설립 이후 꾸준한 성장을 이어왔습니다" />

      {/* 타임라인 */}
      <section style={{ padding: "5rem 2rem", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ color: "#0A192F", fontSize: "1.6rem", fontWeight: 700, marginBottom: "3rem", textAlign: "center" }}>주요 연혁</h3>
          <div style={{ overflowX: "auto", paddingBottom: "1rem" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", minWidth: "max-content" }}>
              <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: "2px", background: "#e2e8f0", zIndex: 0 }} />
              {historyItems.map((item, index) => {
                const isTop = index % 2 === 0;
                const active = hovered === index;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", minWidth: "190px", maxWidth: "210px", height: "260px", padding: "0 8px", justifyContent: "center", cursor: "pointer" }}
                  >
                    {isTop ? (
                      <>
                        <TextBlock item={item} active={active} position="top" />
                        <div style={{ width: "1px", height: "18px", background: active ? "#0A192F" : "#cbd5e1", transition: "background 0.25s" }} />
                        <Dot active={active} />
                        <div style={{ flex: 1 }} />
                      </>
                    ) : (
                      <>
                        <div style={{ flex: 1 }} />
                        <Dot active={active} />
                        <div style={{ width: "1px", height: "18px", background: active ? "#0A192F" : "#cbd5e1", transition: "background 0.25s" }} />
                        <TextBlock item={item} active={active} position="bottom" />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.85rem", color: "#94a3b8" }}>각 항목에 마우스를 올려보세요</p>
        </div>
      </section>

      {/* 인증 */}
      <section style={{ padding: "4rem 2rem 5rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h3 style={{ color: "#0A192F", fontSize: "1.6rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>보유 인증</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {certs.map(({ name, desc, year }) => (
              <div key={name} style={{ background: "white", borderRadius: "10px", padding: "1.5rem", border: "1px solid #e2e8f0", display: "flex", alignItems: "flex-start", gap: "1rem", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
                <div style={{ background: "#0A192F", color: "#64FFDA", borderRadius: "6px", padding: "0.4rem 0.7rem", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>{year}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#0A192F", marginBottom: "0.2rem" }}>{name}</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return (
    <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: active ? "#0A192F" : "#94a3b8", border: `2px solid ${active ? "#0A192F" : "#cbd5e1"}`, flexShrink: 0, zIndex: 2, transition: "background 0.25s, border-color 0.25s" }} />
  );
}

function TextBlock({ item, active, position }: { item: { year: string; content: string }; active: boolean; position: "top" | "bottom" }) {
  return (
    <div style={{ textAlign: "center", minHeight: "100px", display: "flex", flexDirection: "column", justifyContent: position === "top" ? "flex-end" : "flex-start", padding: "0 8px" }}>
      <div style={{ fontWeight: 700, fontSize: "1rem", color: active ? "#0A192F" : "#64748b", marginBottom: "4px", transition: "color 0.25s" }}>{item.year}</div>
      <div style={{ fontSize: "0.8rem", color: active ? "#1e293b" : "#94a3b8", lineHeight: 1.65, wordBreak: "keep-all", transition: "color 0.25s" }}>
        {item.content.split("\n").map((line, i) => <span key={i} style={{ display: "block" }}>{line}</span>)}
      </div>
    </div>
  );
}
