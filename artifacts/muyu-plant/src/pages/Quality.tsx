import PageHero from "../components/PageHero";

const policy = [
  "고객 만족을 최우선 가치로 실현한다.",
  "품질 중심의 생산 시스템을 구축한다.",
  "관련 법규 및 규격을 철저히 준수한다.",
  "지속적인 개선과 기술 혁신을 추구한다.",
  "무결점 품질 실현을 목표로 한다.",
];

const processSteps = [
  "원자재 검사", "절단 전 마킹검사", "FIT-UP 후 검사", "용접 작업",
  "중간 검사", "비파괴 검사(NDT)", "최종 검사", "출하 승인",
];

const materialMgmt = [
  "Mill Test Certificate(MTC) 확인", "자재 규격 및 재질 검사",
  "입고 자재 식별 관리", "자재 추적성(Material Traceability) 확보",
];
const processMgmt = [
  "작업표준서 준수", "WPS 기반 용접 관리", "공정별 품질 점검", "제작 이력 관리",
];
const weldMgmt = [
  "용접 절차 승인(WPS)", "용접사 자격관리(WQ)", "용접부 외관 검사", "용접 품질 기록 관리",
];

const ndt = ["PT (침투탐상검사)", "MT (자분탐상검사)", "UT (초음파탐상검사)", "RT (방사선투과검사)"];
const performance = ["Hydro Test (수압시험)", "Pneumatic Test (기밀시험)", "Leak Test (누설시험)", "Dimensional Inspection (치수검사)"];
const finalInspection = ["외관 검사", "도장 상태 확인", "명판 및 식별 확인", "출하 전 최종 품질 검증"];

const goals = [
  "고객 불만 최소화", "납기 준수율 향상", "공정 불량률 감소",
  "품질 개선 활동 지속 추진", "고객 만족도 향상",
];

export default function Quality() {
  return (
    <div>
      <PageHero title="품질경영" subtitle="품질은 고객과의 약속이며 기업의 경쟁력입니다" />

      <section style={{ padding: "6rem 5rem 8rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* 인트로 */}
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Quality Management</p>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 1.5rem" }}>품질경영</h2>
          <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 2, maxWidth: "900px", marginBottom: "1rem" }}>
            (주)무유플랜트는 압력용기, 열교환기 및 저장탱크 제작 분야에서 최고의 품질과 신뢰성을 확보하기 위해 체계적인 품질경영 시스템을 운영하고 있습니다.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 2, maxWidth: "900px", marginBottom: "4rem" }}>
            고객이 요구하는 품질 수준을 충족하는 것은 물론, 관련 규격과 기준을 철저히 준수하여 안전하고 신뢰할 수 있는 제품을 공급하고 있습니다.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
            {/* 품질방침 */}
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "1.5rem", paddingBottom: "0.8rem", borderBottom: "2px solid #111827" }}>품질방침</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {policy.map(item => (
                  <li key={item} style={{ display: "flex", gap: "0.8rem", fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>
                    <span style={{ color: "#111827", fontWeight: 700, flexShrink: 0 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 품질관리 체계 */}
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "1.5rem", paddingBottom: "0.8rem", borderBottom: "2px solid #111827" }}>품질관리 체계</h3>
              <div style={{ display: "flex", flexDirection: "column", width: "220px" }}>
                {processSteps.map((step, i) => (
                  <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ background: i === 0 || i === processSteps.length - 1 ? "#111827" : "#f3f4f6", color: i === 0 || i === processSteps.length - 1 ? "#fff" : "#374151", padding: "0.7rem 1.2rem", fontSize: "0.85rem", fontWeight: i === 0 || i === processSteps.length - 1 ? 700 : 400, width: "100%", textAlign: "center", boxSizing: "border-box" }}>
                      {step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div style={{ color: "#9ca3af", fontSize: "1.1rem", margin: "0.9rem 0", lineHeight: 1 }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 주요 품질관리 항목 */}
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "1.5rem", paddingBottom: "0.8rem", borderBottom: "2px solid #111827" }}>주요 품질관리 항목</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", marginBottom: "4rem" }}>
            {[
              { title: "원자재 관리", items: materialMgmt },
              { title: "공정 품질관리", items: processMgmt },
              { title: "용접 품질관리", items: weldMgmt },
            ].map(({ title, items }) => (
              <div key={title} style={{ background: "#f9fafb", padding: "1.5rem 2rem" }}>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827", marginBottom: "1rem" }}>{title}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {items.map(item => (
                    <li key={item} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "#374151", lineHeight: 1.6 }}>
                      <span style={{ color: "#9ca3af", flexShrink: 0 }}>•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 검사 및 시험 */}
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "1.5rem", paddingBottom: "0.8rem", borderBottom: "2px solid #111827" }}>검사 및 시험</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", marginBottom: "4rem" }}>
            {[
              { title: "비파괴 검사(NDT)", items: ndt },
              { title: "성능 검사", items: performance },
              { title: "최종 검사", items: finalInspection },
            ].map(({ title, items }) => (
              <div key={title} style={{ background: "#f9fafb", padding: "1.5rem 2rem" }}>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827", marginBottom: "1rem" }}>{title}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {items.map(item => (
                    <li key={item} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "#374151", lineHeight: 1.6 }}>
                      <span style={{ color: "#9ca3af", flexShrink: 0 }}>•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 품질 목표 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "1.5rem", paddingBottom: "0.8rem", borderBottom: "2px solid #111827" }}>품질 목표</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {goals.map(item => (
                  <li key={item} style={{ display: "flex", gap: "0.8rem", fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>
                    <span style={{ color: "#111827", fontWeight: 700, flexShrink: 0 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "1.5rem", paddingBottom: "0.8rem", borderBottom: "2px solid #111827" }}>지속적인 품질 개선</h3>
              <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 2 }}>
                (주)무유플랜트는 품질을 단순한 결과가 아닌 모든 임직원이 함께 만들어가는 핵심 가치로 생각합니다.
              </p>
              <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 2 }}>
                지속적인 교육과 기술 개발, 품질 개선 활동을 통해 고객에게 신뢰받는 제품과 서비스를 제공하며, 플랜트 산업의 발전에 기여하는 기업이 되겠습니다.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
