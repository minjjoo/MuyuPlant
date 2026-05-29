import PageHero from "../components/PageHero";

const products = [
  {
    name: "Pressure Vessel",
    nameKo: "압력용기",
    desc: "고압 환경에서 기체나 액체를 안전하게 저장·처리하는 용기. 석유화학, 발전, 가스 산업 전반에 공급합니다.",
    icon: "🔧",
  },
  {
    name: "Heat Exchanger",
    nameKo: "열교환기",
    desc: "서로 다른 온도의 유체 사이에서 열을 교환하는 설비. Shell & Tube 방식을 주력으로 제작합니다.",
    icon: "🌡️",
  },
  {
    name: "Tower & Column",
    nameKo: "탑류 설비",
    desc: "증류, 흡수, 세정 등의 공정에 사용되는 탑형 설비. 대형 플랜트 현장 납품 실적 다수 보유.",
    icon: "🏗️",
  },
  {
    name: "Storage Tank",
    nameKo: "저장 탱크",
    desc: "액체·가스 원료의 저장 및 이송을 위한 탱크류. 다양한 규격 및 소재 맞춤 제작 가능.",
    icon: "🛢️",
  },
];

const equipment = [
  { name: "30Ton 크레인", desc: "대형 설비 제작 및 이동에 필요한 중량물 핸들링 장비" },
  { name: "Bending Roller", desc: "철판을 원하는 곡률로 성형하는 롤링 설비 (특허 보유)" },
  { name: "RT ROOM", desc: "방사선 투과 시험실 — 용접부 내부 결함 비파괴 검사" },
  { name: "SAW / FCAW / GTAW 용접 설비", desc: "다양한 소재와 두께에 대응하는 용접 장비 완비" },
  { name: "절단·가공 설비", desc: "플라즈마 절단, 기계 가공 등 정밀 성형 장비" },
];

export default function Capacity() {
  return (
    <div>
      <PageHero title="생산능력" subtitle="대형 플랜트 설비 전문 제작사" />

      <section style={{ padding: "5rem 2rem", background: "white" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h3 style={{ color: "#0A192F", fontSize: "1.6rem", fontWeight: 700, marginBottom: "2rem", borderLeft: "4px solid #64FFDA", paddingLeft: "1rem" }}>주요 생산 품목</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {products.map(({ name, nameKo, desc, icon }) => (
              <div key={name} style={{ background: "#f8fafc", borderRadius: "10px", padding: "2rem 1.5rem", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.8rem" }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "#0A192F" }}>{nameKo}</div>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.6rem" }}>{name}</div>
                <div style={{ fontSize: "0.87rem", color: "#475569", lineHeight: 1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem 5rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h3 style={{ color: "#0A192F", fontSize: "1.6rem", fontWeight: 700, marginBottom: "2rem", borderLeft: "4px solid #64FFDA", paddingLeft: "1rem" }}>주요 설비 현황</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {equipment.map(({ name, desc }) => (
              <div key={name} style={{ background: "white", borderRadius: "8px", padding: "1.2rem 1.5rem", border: "1px solid #e2e8f0", display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0A192F", flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#0A192F", fontSize: "0.95rem" }}>{name}</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.2rem" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 2rem 4rem", background: "#0A192F", color: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 2, opacity: 0.85 }}>
            (주)무유플랜트는 삼성전자, SK하이닉스, 동부제철 등<br />
            국내 주요 대기업 및 플랜트 전문사의 <strong style={{ color: "#64FFDA" }}>공인 제작사</strong>로 등록되어 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
