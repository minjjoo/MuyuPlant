import { useState } from "react";
import PageHero from "../components/PageHero";

type TabId = "pressure" | "heat" | "storage" | "special";

const TABS: { id: TabId; ko: string; en: string }[] = [
  { id: "pressure", ko: "압력용기", en: "Pressure Vessel" },
  { id: "heat", ko: "열교환기", en: "Heat Exchanger" },
  { id: "storage", ko: "저장탱크", en: "Storage Tank" },
  { id: "special", ko: "플랜트 기자재", en: "Plant Equipment" },
];

const DATA: Record<TabId, { desc: string; items: string[]; fields: string[] }> = {
  pressure: {
    desc: "고온·고압 환경에서 안정적인 운전이 가능하도록 설계 및 제작되는 압력용기를 공급합니다. 관련 규격과 품질 기준을 준수하여 안전성과 내구성을 확보하고 있습니다.",
    items: ["Separator Vessel", "Reactor Vessel", "Surge Tank", "Filter Vessel", "Air Receiver Tank"],
    fields: ["석유화학 공정", "가스 플랜트", "발전 설비", "산업용 공정 설비"],
  },
  heat: {
    desc: "공정 효율 향상과 에너지 절감을 위한 다양한 형태의 열교환기를 제작합니다. 사용 환경과 운전 조건에 최적화된 제품을 제공합니다.",
    items: ["Shell & Tube Heat Exchanger", "Air Cooler", "Condenser", "Evaporator", "Heater & Cooler"],
    fields: ["정유 및 석유화학 플랜트", "발전소", "화학 공장", "산업용 생산설비"],
  },
  storage: {
    desc: "액체 및 가스를 안전하게 저장하기 위한 각종 저장탱크를 제작합니다. 사용 목적과 저장 물질의 특성을 고려한 설계와 제작을 통해 높은 안정성을 제공합니다.",
    items: ["Atmospheric Tank", "Process Tank", "Water Storage Tank", "Chemical Storage Tank", "Fuel Oil Tank"],
    fields: ["정유 및 석유화학 시설", "발전소", "수처리 시설", "산업용 저장 설비"],
  },
  special: {
    desc: "고객의 요구 사양에 맞춘 각종 플랜트 기자재와 구조물을 제작하며, 프로젝트별 맞춤형 제작 서비스를 제공합니다.",
    items: ["Skid Module", "Steel Structure", "Duct 및 Hopper", "산업용 설비 구조물", "주문 제작 설비"],
    fields: ["EPC 프로젝트", "산업 플랜트", "발전 설비", "환경 설비"],
  },
};

export default function Business() {
  const [active, setActive] = useState<TabId>("pressure");
  const tab = DATA[active];

  return (
    <div>
      <PageHero title="사업분야" subtitle="고객이 필요로 하는 플랜트 설비를 전문 제작합니다" />

      {/* 탭 */}
      <div style={{ background: "#fff", position: "sticky", top: "88px", zIndex: 90 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5rem" }}>
          <div style={{ display: "flex", borderBottom: "2px solid #e5e7eb" }}>
          {TABS.map(({ id, ko }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              style={{
                padding: "1.2rem 1.8rem",
                background: "transparent",
                border: "none",
                borderBottom: active === id ? "2px solid #111827" : "2px solid transparent",
                marginBottom: "-2px",
                color: active === id ? "#111827" : "#9ca3af",
                fontWeight: active === id ? 700 : 400,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {ko}
            </button>
          ))}
          </div>
        </div>
      </div>

      {/* 콘텐츠 */}
      <section style={{ padding: "6rem 5rem 8rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Business Area</p>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 1rem" }}>
            {TABS.find(t => t.id === active)?.ko}
            <span style={{ fontSize: "1rem", fontWeight: 400, color: "#9ca3af", marginLeft: "0.8rem" }}>
              {TABS.find(t => t.id === active)?.en}
            </span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 2, marginBottom: "3.5rem", maxWidth: "780px" }}>{tab.desc}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {/* 주요 제작 품목 */}
            <div style={{ background: "#f9fafb", padding: "2rem 2.5rem" }}>
              <h3 style={{ fontSize: "0.72rem", letterSpacing: "2px", color: "#9ca3af", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 600 }}>주요 제작 품목</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {tab.items.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.9rem", color: "#374151" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#111827", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 적용 분야 */}
            <div style={{ background: "#f9fafb", padding: "2rem 2.5rem" }}>
              <h3 style={{ fontSize: "0.72rem", letterSpacing: "2px", color: "#9ca3af", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 600 }}>적용 분야</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {tab.fields.map(field => (
                  <li key={field} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.9rem", color: "#374151" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#111827", flexShrink: 0 }} />
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
