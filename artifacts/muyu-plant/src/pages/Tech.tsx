import PageHero from "../components/PageHero";

const techAreas = [
  {
    title: "용접 기술 (Welding)",
    items: [
      "SAW (서브머지드 아크 용접) — 두꺼운 강판 고품질 자동 용접",
      "FCAW (플럭스 코어드 아크 용접) — 구조물·이음부 전위치 용접",
      "GTAW/TIG 용접 — 스테인리스·고합금강 정밀 용접",
      "AWS D1.1 / ASME Section IX 기준 적용",
    ],
  },
  {
    title: "철판 성형 기술 (Forming)",
    items: [
      "철판롤링장치 특허 보유 (특허 제 10-2147620호)",
      "대형 직경 Shell 원통 성형 — 정밀 곡률 제어",
      "헤드(Head) 프레스 성형 — 반구형·타원형 등",
      "후판 (Heavy Plate) 벤딩 롤링 가공",
    ],
  },
  {
    title: "비파괴 검사 (NDT)",
    items: [
      "RT (방사선 투과 시험) — 사내 전용 RT ROOM 운영",
      "UT (초음파 탐상 시험) — 용접부 내부 결함 검출",
      "MT (자분 탐상) / PT (침투 탐상) — 표면 결함 검사",
      "ASME Code 기준 전수 검사 체계 구축",
    ],
  },
  {
    title: "ASME U STAMP",
    items: [
      "2022년 ASME U STAMP 취득 (미국기계학회 공인)",
      "Section VIII Division 1 기준 압력용기 설계·제작",
      "Authorized Inspector (AI) 입회 검사 대응",
      "국내외 플랜트 수출 프로젝트 참여 가능",
    ],
  },
  {
    title: "품질 관리 시스템",
    items: [
      "ISO 9001 품질경영시스템 — 전 공정 문서화 관리",
      "ISO 14001 환경경영 — 친환경 제조 공정 준수",
      "OHSAS 18001 안전보건 — 현장 안전 관리 체계",
      "용접사 자격 관리 및 절차서(WPS/PQR) 운영",
    ],
  },
  {
    title: "주요 협력 납품 실적",
    items: [
      "삼성전자 (삼성물산 / 삼성엔지니어링)",
      "SK 하이닉스",
      "동부제철",
      "KC코츠렐, 제이오, 앱스필 등 플랜트 전문사",
    ],
  },
];

export default function Tech() {
  return (
    <div>
      <PageHero title="기술" subtitle="ASME U STAMP 기반의 검증된 플랜트 제조 기술" />

      <section style={{ padding: "5rem 3rem 6rem", background: "#fff" }}>
        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.93rem", lineHeight: 2, color: "#374151", marginBottom: "3.5rem", paddingBottom: "3rem", borderBottom: "1px solid #e5e7eb" }}>
            (주)무유플랜트는 <strong>용접·성형 기반의 뿌리기술 전문기업</strong>으로서, 설립 이후 지속적인 기술 투자와 인증 취득을 통해
            국내 주요 대기업 및 플랜트 기업의 공인 제작사로 자리매김하였습니다.
            특히 <strong>ASME U STAMP</strong>를 보유하여 국제 기준의 압력용기 제작이 가능하며,
            사내 RT ROOM 운영으로 빠르고 신뢰성 높은 품질 검사를 제공합니다.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "3rem 4rem" }}>
            {techAreas.map(({ title, items }) => (
              <div key={title}>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#111827", marginBottom: "1rem", paddingBottom: "0.6rem", borderBottom: "2px solid #111827" }}>{title}</div>
                <ul style={{ margin: 0, padding: "0 0 0 1rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {items.map((item) => (
                    <li key={item} style={{ fontSize: "0.83rem", color: "#555", lineHeight: 1.7 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem", background: "#111827", color: "white", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255,255,255,0.55)" }}>
          제품 규격, 재질, 납기 등 기술적 사항은 언제든지 문의해주세요.
        </p>
      </section>
    </div>
  );
}
