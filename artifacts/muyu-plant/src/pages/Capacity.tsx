import PageHero from "../components/PageHero";

const products = [
  { name: "Pressure Vessel", nameKo: "압력용기", desc: "고압 환경에서 기체나 액체를 안전하게 저장·처리하는 용기. 석유화학, 발전, 가스 산업 전반에 공급합니다. ASME Section VIII Division 1 기준 설계·제작.", img: "/factory.jpg" },
  { name: "Heat Exchanger", nameKo: "열교환기", desc: "서로 다른 온도의 유체 사이에서 열을 교환하는 설비. Shell & Tube 방식을 주력으로 제작하며 다양한 소재와 규격에 대응합니다.", img: "/factory.jpg" },
  { name: "Tower & Column", nameKo: "탑류 설비", desc: "증류, 흡수, 세정 등의 공정에 사용되는 탑형 설비. 대형 플랜트 현장 납품 실적 다수 보유. 설계부터 현장 설치까지 일괄 대응.", img: "/factory.jpg" },
  { name: "Storage Tank", nameKo: "저장 탱크", desc: "액체·가스 원료의 저장 및 이송을 위한 탱크류. 다양한 규격 및 소재 맞춤 제작 가능. 현장 환경에 최적화된 설계를 제안합니다.", img: "/factory.jpg" },
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
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1060px", margin: "0 auto", padding: "8rem 3rem 3rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1rem", textTransform: "uppercase" }}>Products</p>
          <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 4rem" }}>주요 생산 품목</h3>
        </div>
        <div style={{ maxWidth: "1060px", margin: "0 auto", padding: "0 3rem 6rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {products.map(({ name, nameKo, desc, img }, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={name} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #e5e7eb", direction: isEven ? "ltr" : "rtl" }}>
                  <div style={{ overflow: "hidden", aspectRatio: "16/9", direction: "ltr" }}>
                    <img src={img} alt={nameKo} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "4rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "center", direction: "ltr" }}>
                    <div style={{ fontSize: "0.75rem", color: "#9ca3af", letterSpacing: "1px", marginBottom: "0.8rem" }}>{name}</div>
                    <div style={{ fontWeight: 700, fontSize: "1.4rem", color: "#111827", marginBottom: "1.2rem" }}>{nameKo}</div>
                    <div style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.9 }}>{desc}</div>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid #e5e7eb" }} />
          </div>
        </div>
      </section>
      <section style={{ padding: "7rem 5rem 8rem", background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.8rem", textTransform: "uppercase" }}>Equipment</p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "2rem" }}>주요 설비 현황</h3>
          <div style={{ borderTop: "1px solid #e5e7eb" }}>
            {equipment.map(({ name, desc }) => (
              <div key={name} style={{ display: "flex", gap: "1.5rem", alignItems: "center", padding: "1.1rem 0", borderBottom: "1px solid #e5e7eb" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#374151", flexShrink: 0 }} />
                <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.9rem", minWidth: "220px" }}>{name}</div>
                <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>{desc}</div>
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
