import PageHero from "../components/PageHero";

export default function About() {
  return (
    <div>
      <PageHero title="회사소개" subtitle="(주)무유플랜트를 소개합니다" />

      <section style={{ padding: "5rem 2rem", background: "white" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h3 style={{ color: "#0A192F", fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.5rem", borderLeft: "4px solid #64FFDA", paddingLeft: "1rem" }}>
            CEO 인사말
          </h3>
          <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "2.5rem", lineHeight: 2, color: "#334155" }}>
            <p style={{ marginTop: 0 }}>
              안녕하십니까, (주)무유플랜트 대표이사 이종수입니다.
            </p>
            <p>
              국제 플랜트 시장의 급속한 변화는 국내 플랜트 시장의 흐름을 예측하기 어렵게 만들고 있습니다.
              이러한 불확실한 환경 속에서도 (주)무유플랜트는 <strong>철저한 제조 시스템 구축</strong>과
              끊임없는 기술 혁신을 통해 최상의 결과를 약속드립니다.
            </p>
            <p>
              당사는 고객이 필요로 하는 모든 플랜트 제품을 <strong>최고의 품질, 경쟁력 있는 가격,
              정시 공급, 혁신적인 원가 절감</strong>으로 공급하겠습니다.
              앞으로도 변함없는 신뢰와 성원을 부탁드립니다.
            </p>
            <p style={{ textAlign: "right", fontWeight: 700, fontSize: "1.1rem", marginBottom: 0, color: "#0A192F" }}>
              대표이사 이 종 수
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem 5rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h3 style={{ color: "#0A192F", fontSize: "1.6rem", fontWeight: 700, marginBottom: "2rem", borderLeft: "4px solid #64FFDA", paddingLeft: "1rem" }}>
            회사 개요
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <tbody>
              {[
                { label: "상호", value: "(주)무유플랜트" },
                { label: "설립연도", value: "2015년 6월" },
                { label: "대표이사", value: "이 종 수" },
                { label: "소재지", value: "충청남도 당진시 송악읍 부곡공단 (현대제철 인근)" },
                { label: "주요 사업", value: "플랜트 설비 제작 (압력용기, 열교환기, Tower & Column)" },
                { label: "보유 인증", value: "ISO9001 / ISO14001 / OHSAS18001 / ASME U STAMP" },
                { label: "특허", value: "특허 제 10-2147620호 (철판롤링장치)" },
                { label: "지정", value: "뿌리기술 전문기업 (2023)" },
              ].map(({ label, value }, i) => (
                <tr key={label} style={{ borderBottom: "1px solid #e2e8f0", background: i % 2 === 0 ? "white" : "#f8fafc" }}>
                  <td style={{ padding: "1rem 1.5rem", fontWeight: 700, color: "#0A192F", width: "30%", fontSize: "0.9rem" }}>{label}</td>
                  <td style={{ padding: "1rem 1.5rem", color: "#334155", fontSize: "0.9rem" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
