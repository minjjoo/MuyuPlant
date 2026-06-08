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
            <p style={{ marginTop: 0, marginBottom: "1.8rem" }}>안녕하십니까.<br />(주)무유플랜트 대표이사 이종수입니다.</p>
            <p style={{ marginBottom: "1.8rem" }}>(주)무유플랜트 홈페이지를 방문해 주신 여러분께 진심으로 감사드립니다.</p>
            <p style={{ marginBottom: "1.8rem" }}>플랜트 산업은 국가 기간산업의 근간을 이루는 분야로서 높은 기술력과 품질, 그리고 안전에 대한 철저한 책임이 요구됩니다. 특히 압력용기, 열교환기, 저장탱크와 같은 핵심 설비는 산업 현장의 안정적인 운영과 직결되는 만큼, 제작 과정의 정밀성과 신뢰성이 무엇보다 중요합니다.</p>
            <p style={{ marginBottom: "1.8rem" }}>(주)무유플랜트는 축적된 기술력과 풍부한 현장 경험을 바탕으로 플랜트 설비 제작 분야에서 고객의 다양한 요구에 부응해 왔습니다. 설계 검토부터 자재 선정, 제작, 검사 및 납품에 이르기까지 모든 공정에 체계적인 품질관리 시스템을 적용하여 고객이 신뢰할 수 있는 제품을 공급하고 있습니다.</p>
            <p style={{ marginBottom: "1.8rem" }}>또한 지속적인 설비 투자와 기술 개발을 통해 생산 경쟁력을 강화하고 있으며, 철저한 공정 관리와 납기 준수로 고객의 사업 일정과 성공에 기여하고자 최선을 다하고 있습니다. 우리는 단순히 제품을 제작하는 기업을 넘어 고객의 가치 창출과 지속 가능한 성장을 함께하는 동반자가 되고자 합니다.</p>
            <p style={{ marginBottom: "1.8rem" }}>앞으로도 (주)무유플랜트는 품질에 대한 책임, 기술에 대한 끊임없는 도전, 그리고 고객과의 신뢰를 바탕으로 국내외 플랜트 산업 발전에 기여하는 기업으로 성장해 나가겠습니다.</p>
            <p style={{ marginBottom: "1.8rem" }}>감사합니다.</p>
            <p style={{ fontWeight: 700, color: "#111827", marginBottom: 0 }}>(주)무유플랜트<br />대표이사 이종수</p>
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
              { label: "소재지", value: "충청남도 당진시 송악읍 부공공단 4길 53-39" },
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
