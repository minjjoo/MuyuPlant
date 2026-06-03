import PageHero from "../components/PageHero";

export default function About() {
  return (
    <div>
      <PageHero title="회사소개" subtitle="(주)무유플랜트를 소개합니다" />

      <section style={{ padding: "8rem 5rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1rem", textTransform: "uppercase" }}>CEO Message</p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "2rem" }}>CEO 인사말</h3>
          <div style={{ color: "#444", lineHeight: 2, fontSize: "0.95rem", borderLeft: "3px solid #e5e7eb", paddingLeft: "1.5rem" }}>
            <p style={{ marginTop: 0 }}>안녕하십니까, (주)무유플랜트 대표이사 이종수입니다.</p>
            <p>
              국제 플랜트 시장의 급속한 변화는 국내 플랜트 시장의 흐름을 예측하기 어렵게 만들고 있습니다.
              이러한 불확실한 환경 속에서도 (주)무유플랜트는 <strong>철저한 제조 시스템 구축</strong>과
              끊임없는 기술 혁신을 통해 최상의 결과를 약속드립니다.
            </p>
            <p>
              당사는 고객이 필요로 하는 모든 플랜트 제품을
              <strong> 최고의 품질, 경쟁력 있는 가격, 정시 공급, 혁신적인 원가 절감</strong>으로
              공급하겠습니다. 앞으로도 변함없는 신뢰와 성원을 부탁드립니다.
            </p>
            <p style={{ fontWeight: 700, color: "#111827", marginBottom: 0 }}>대표이사 이 종 수</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "7rem 5rem 8rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1rem", textTransform: "uppercase" }}>Company Overview</p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "2rem" }}>회사 개요</h3>
          <div style={{ borderTop: "1px solid #e5e7eb" }}>
            {[
              { label: "상호", value: "(주)무유플랜트" },
              { label: "설립연도", value: "2015년 6월" },
              { label: "대표이사", value: "이 종 수" },
              { label: "소재지", value: "충청남도 당진시 송악읍 부곡공단 (현대제철 인근)" },
              { label: "주요 사업", value: "플랜트 설비 제작 (압력용기, 열교환기, Tower & Column)" },
              { label: "보유 인증", value: "ISO9001 / ISO14001 / OHSAS18001 / ASME U STAMP" },
              { label: "특허", value: "특허 제 10-2147620호 (철판롤링장치)" },
              { label: "지정", value: "뿌리기술 전문기업 (2023년)" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", borderBottom: "1px solid #e5e7eb" }}>
                <div style={{ padding: "1rem 1.5rem 1rem 0", fontWeight: 600, color: "#374151", width: "160px", flexShrink: 0, fontSize: "0.85rem", display: "flex", alignItems: "center" }}>{label}</div>
                <div style={{ padding: "1rem 1.5rem", color: "#555", fontSize: "0.9rem", display: "flex", alignItems: "center" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
