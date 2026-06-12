import PageHero from "../components/PageHero";
import { useIsMobile } from "../hooks/use-mobile";

const sections = [
  {
    title: "절단설비", en: "Cutting Equipment",
    desc: "원자재를 정확한 규격으로 가공하기 위한 설비입니다.",
    items: ["CNC Plasma Cutting Machine", "Gas Cutting Machine", "Band Saw Machine", "Portable Cutting Machine"],
    functions: ["강판 및 형강 절단", "배관 절단 가공", "정밀 형상 절단"],
  },
  {
    title: "성형설비", en: "Forming Equipment",
    desc: "압력용기 및 저장탱크 제작에 필요한 성형 설비입니다.",
    items: ["Plate Rolling Machine"],
    functions: ["강판 곡면 성형", "원통 제작"],
  },
  {
    title: "용접설비", en: "Welding Equipment",
    desc: "고품질 용접 시공을 위한 전문 용접설비를 운영하고 있습니다.",
    items: ["TIG Welding Machine", "MIG Welding Machine", "SAW Welding Machine", "ARC Welding Machine"],
    functions: ["압력용기 용접", "배관 용접", "열교환기 제작", "저장탱크 제작"],
  },
  {
    title: "조립설비", en: "Assembly Equipment",
    desc: "제품 조립 및 대형 구조물 제작을 위한 설비입니다.",
    items: ["Overhead Crane", "Gantry Crane", "Welding Rotator"],
    functions: ["대형 구조물 조립", "압력용기 조립", "탱크 조립", "배관 모듈 제작"],
  },
  {
    title: "검사장비", en: "Inspection Equipment",
    desc: "제품의 품질과 안전성을 확보하기 위한 검사장비를 보유하고 있습니다.",
    items: ["Ultrasonic Thickness Gauge", "Digital Vernier Caliper", "Welding Gauge", "Surface Roughness Tester"],
    functions: ["치수 검사", "용접 검사", "수압 시험(Hydro Test)", "두께 측정", "외관 검사"],
  },
  {
    title: "운반설비", en: "Material Handling Equipment",
    desc: "안전하고 효율적인 생산을 위한 운반설비를 운영하고 있습니다.",
    items: ["5Ton ~ 20Ton Overhead Crane", "Forklift"],
    functions: ["원자재 이동", "제품 운반", "출하 작업 지원"],
  },
];

const competitiveness = [
  "체계적인 제작 공정 운영", "품질 중심 생산관리 시스템",
  "납기 준수 및 신속 대응", "숙련된 기술인력 보유", "고객 맞춤형 제작 가능",
];

export default function Production() {
  const isMobile = useIsMobile();
  return (
    <div>
      <PageHero title="생산설비" subtitle="고품질 제작을 위한 체계적인 생산 시스템을 운영합니다" />

      <section style={{ padding: isMobile ? "3rem 1.5rem 2rem" : "6rem 5rem 4rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Production Facility</p>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 1.5rem" }}>생산설비</h2>
          <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 2, marginBottom: "4rem", maxWidth: "900px" }}>
            <span style={{ display: "block" }}>(주)무유플랜트는 플랜트 배관, 압력용기, 열교환기 및 저장탱크의 고품질 제작을 위해 다양한 생산설비와 검사장비를 운영하고 있습니다.</span>
            <span style={{ display: "block" }}>체계적인 생산 시스템과 철저한 품질관리를 통해 고객이 요구하는 품질과 납기를 실현하고 있습니다.</span>
          </p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
            {sections.map(({ title, en, desc, items, functions }) => (
              <div key={title} style={{ border: "1px solid #e5e7eb", padding: "2rem" }}>
                <div style={{ marginBottom: "1.2rem" }}>
                  <p style={{ fontSize: "0.7rem", color: "#9ca3af", letterSpacing: "1px", margin: "0 0 0.3rem" }}>{en}</p>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", margin: 0 }}>{title}</h3>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.8, marginBottom: "1.5rem" }}>{desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "1.5px", color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.8rem", fontWeight: 600 }}>주요 설비</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {items.map(item => (
                        <li key={item} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "#374151" }}>
                          <span style={{ color: "#9ca3af", flexShrink: 0 }}>•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "1.5px", color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.8rem", fontWeight: 600 }}>주요 기능</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {functions.map(f => (
                        <li key={f} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "#374151" }}>
                          <span style={{ color: "#9ca3af", flexShrink: 0 }}>•</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "2rem 1.5rem 4rem" : "4rem 5rem 8rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Competitiveness</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", margin: "0 0 2rem" }}>생산 경쟁력</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {competitiveness.map(item => (
              <div key={item} style={{ background: "#111827", color: "#fff", padding: "0.8rem 1.5rem", fontSize: "0.88rem", fontWeight: 500 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
