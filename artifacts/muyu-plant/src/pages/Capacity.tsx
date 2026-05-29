import PageHero from "../components/PageHero";

const products = [
  { name: "Pressure Vessel", nameKo: "압력용기", desc: "고압 환경에서 기체나 액체를 안전하게 저장·처리하는 용기. 석유화학, 발전, 가스 산업 전반에 공급합니다.", icon: "🔧" },
  { name: "Heat Exchanger", nameKo: "열교환기", desc: "서로 다른 온도의 유체 사이에서 열을 교환하는 설비. Shell & Tube 방식을 주력으로 제작합니다.", icon: "🌡️" },
  { name: "Tower & Column", nameKo: "탑류 설비", desc: "증류, 흡수, 세정 등의 공정에 사용되는 탑형 설비. 대형 플랜트 현장 납품 실적 다수 보유.", icon: "🏗️" },
  { name: "Storage Tank", nameKo: "저장 탱크", desc: "액체·가스 원료의 저장 및 이송을 위한 탱크류. 다양한 규격 및 소재 맞춤 제작 가능.", icon: "🛢️" },
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

      <section style={{ padding: "5rem 3rem", background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.78rem", letterSpacing: "2px", color: "#999", marginBottom: "0.8rem", textTransform: "uppercase" }}>Products</p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "2.5rem" }}>주요 생산 품목</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1.2rem" }}>
            {products.map(({ name, nameKo, desc, icon }) => (
              <div key={name} style={{ background: "#f9fafb", borderRadius: "8px", padding: "2rem 1.5rem", border: "1px solid #e5e7eb" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#111827" }}>{nameKo}</div>
                <div style={{ fontSize: "0.77rem", color: "#9ca3af", marginBottom: "0.8rem" }}>{name}</div>
                <div style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.75 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 3rem 6rem", background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.78rem", letterSpacing: "2px", color: "#999", marginBottom: "0.8rem", textTransform: "uppercase" }}>Equipment</p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "2rem" }}>주요 설비 현황</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {equipment.map(({ name, desc }) => (
              <div key={name} style={{ background: "#fff", borderRadius: "6px", padding: "1.2rem 1.5rem", border: "1px solid #e5e7eb", display: "flex", gap: "1.2rem", alignItems: "center" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#374151", flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.9rem" }}>{name}</div>
                  <div style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: "0.15rem" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem", background: "#111827", color: "white", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9 }}>
          삼성전자, SK하이닉스, 동부제철 등 국내 주요 대기업 및 플랜트 전문사의 <strong style={{ color: "#fff" }}>공인 제작사</strong>로 등록되어 있습니다.
        </p>
      </section>
    </div>
  );
}
