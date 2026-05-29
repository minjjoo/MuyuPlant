import PageHero from "../components/PageHero";

const techAreas = [
  {
    title: "용접 기술 (Welding)",
    icon: "🔥",
    items: [
      "SAW (서브머지드 아크 용접) — 두꺼운 강판 고품질 자동 용접",
      "FCAW (플럭스 코어드 아크 용접) — 구조물·이음부 전위치 용접",
      "GTAW/TIG 용접 — 스테인리스·고합금강 정밀 용접",
      "AWS D1.1 / ASME Section IX 기준 적용",
    ],
    color: "#e74c3c",
  },
  {
    title: "철판 성형 기술 (Forming)",
    icon: "⚙️",
    items: [
      "철판롤링장치 특허 보유 (특허 제 10-2147620호)",
      "대형 직경 Shell 원통 성형 — 정밀 곡률 제어",
      "헤드(Head) 프레스 성형 — 반구형·타원형 등",
      "후판 (Heavy Plate) 벤딩 롤링 가공",
    ],
    color: "#2980b9",
  },
  {
    title: "비파괴 검사 (NDT)",
    icon: "🔬",
    items: [
      "RT (방사선 투과 시험) — 사내 전용 RT ROOM 운영",
      "UT (초음파 탐상 시험) — 용접부 내부 결함 검출",
      "MT (자분 탐상) / PT (침투 탐상) — 표면 결함 검사",
      "ASME Code 기준 전수 검사 체계 구축",
    ],
    color: "#27ae60",
  },
  {
    title: "ASME U STAMP",
    icon: "🏅",
    items: [
      "2022년 ASME U STAMP 취득 (미국기계학회 공인)",
      "Section VIII Division 1 기준 압력용기 설계·제작",
      "Authorized Inspector (AI) 입회 검사 대응",
      "국내외 플랜트 수출 프로젝트 참여 가능",
    ],
    color: "#8e44ad",
  },
  {
    title: "품질 관리 시스템",
    icon: "📋",
    items: [
      "ISO 9001 품질경영시스템 — 전 공정 문서화 관리",
      "ISO 14001 환경경영 — 친환경 제조 공정 준수",
      "OHSAS 18001 안전보건 — 현장 안전 관리 체계",
      "용접사 자격 관리 및 절차서(WPS/PQR) 운영",
    ],
    color: "#e67e22",
  },
  {
    title: "주요 협력 납품 실적",
    icon: "🏭",
    items: [
      "삼성전자 (삼성물산 / 삼성엔지니어링)",
      "SK 하이닉스",
      "동부제철",
      "KC코츠렐, 제이오, 앱스필 등 플랜트 전문사",
    ],
    color: "#1abc9c",
  },
];

export default function Tech() {
  return (
    <div>
      <PageHero title="기술" subtitle="ASME U STAMP 기반의 검증된 플랜트 제조 기술" />

      <section style={{ padding: "5rem 2rem", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "2rem 2.5rem", marginBottom: "3.5rem", border: "1px solid #e2e8f0" }}>
            <p style={{ margin: 0, fontSize: "1rem", lineHeight: 2, color: "#334155" }}>
              (주)무유플랜트는 <strong>용접·성형 기반의 뿌리기술 전문기업</strong>으로서, 설립 이후 지속적인 기술 투자와 인증 취득을 통해
              국내 주요 대기업 및 플랜트 기업의 공인 제작사로 자리매김하였습니다.
              특히 <strong>ASME U STAMP</strong>를 보유하여 국제 기준의 압력용기 제작이 가능하며,
              사내 RT ROOM 운영으로 빠르고 신뢰성 높은 품질 검사를 제공합니다.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.8rem" }}>
            {techAreas.map(({ title, icon, items, color }) => (
              <div key={title} style={{ background: "#f8fafc", borderRadius: "12px", padding: "1.8rem", border: "1px solid #e2e8f0", borderTop: `4px solid ${color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.2rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{icon}</span>
                  <span style={{ fontWeight: 700, fontSize: "1rem", color: "#0A192F" }}>{title}</span>
                </div>
                <ul style={{ margin: 0, padding: "0 0 0 1.1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {items.map((item) => (
                    <li key={item} style={{ fontSize: "0.87rem", color: "#475569", lineHeight: 1.7 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "3.5rem 2rem 4.5rem", background: "#0A192F", color: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ color: "#64FFDA", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>기술 문의</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.9, fontSize: "0.95rem" }}>
            제품 규격, 재질, 납기 등 기술적 사항은 언제든지 문의해주세요.<br />
            당사의 기술팀이 최적의 솔루션을 제안해드립니다.
          </p>
        </div>
      </section>
    </div>
  );
}
