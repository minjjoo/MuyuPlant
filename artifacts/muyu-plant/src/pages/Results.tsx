import PageHero from "../components/PageHero";
import { useIsMobile } from "../hooks/use-mobile";

const projectGallery = [
  { img: "/project1.png", title: "GS Engineering RUWAIS 4th NGL TRAIN INTER REFINRIES PIPELINES" },
  { img: "/project2.png", title: "Dangjin thermal power Unit 9&10 DUCT&SUPPORT" },
  { img: "/project3.png", title: "SAMSUNG BOROUGE PROJECT SAUDI ARABIAN OIL" },
  { img: "/project6.png", title: "DAELIM JG SUMMIT NAPHTHA CRACKER HP-3 PROJECT" },
  { img: "/project7.png", title: "HYUNDAI 2D PROJECT" },
  { img: "/project8.png", title: "BELCO SINOPEC SHANGHAI REFINERY" },
  { img: "/project9.png", title: "SK WASIT GAS PLANT PAKG #1,2,3" },
  { img: "/project10.jpg", title: "DONGDUCHEON CCPP CONSTRUCTION PROJECT" },
  { img: "/project11.jpg", title: "REACTOR (KCC CORPORATION / KOREA)" },
];

const experienceData = [
  { client: "삼성전자 / 삼성물산 / 삼성엔지니어링", items: "Pressure Vessel, Heat Exchanger, Tower & Column" },
  { client: "SK 하이닉스", items: "Pressure Vessel, Heat Exchanger" },
  { client: "동부제철", items: "Pressure Vessel, Storage Tank" },
  { client: "KC코츠렐", items: "Tower & Column, Heat Exchanger" },
  { client: "앱스필", items: "Pressure Vessel, Tower & Column" },
  { client: "제이오", items: "Heat Exchanger, Storage Tank" },
  { client: "재원산업", items: "Pressure Vessel" },
  { client: "가람플랜트", items: "Tower & Column, Pressure Vessel" },
  { client: "금성하이텍", items: "Heat Exchanger" },
  { client: "발맥스기술", items: "Pressure Vessel, Heat Exchanger" },
  { client: "티에스아이", items: "Storage Tank, Pressure Vessel" },
  { client: "코오롱앤솔루션", items: "Tower & Column" },
  { client: "제이테크", items: "Heat Exchanger, Pressure Vessel" },
];

const TH = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <th style={{ padding: "0.7rem 1.2rem", background: "#1f2937", color: "#e5e7eb", fontWeight: 600, fontSize: "0.78rem", textAlign: center ? "center" : "left", borderBottom: "1px solid #374151", whiteSpace: "nowrap" }}>
    {children}
  </th>
);

const TD = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <td style={{ padding: "0.9rem 1.2rem", fontSize: "0.85rem", color: "#374151", borderBottom: "1px solid #f3f4f6", textAlign: center ? "center" : "left", verticalAlign: "middle" }}>
    {children}
  </td>
);

export default function Results() {
  const isMobile = useIsMobile();

  return (
    <div>
      <PageHero title="주요실적" subtitle="국내외 주요 플랜트 프로젝트 납품 실적입니다" />

      <section style={{ padding: isMobile ? "3rem 1.5rem 4rem" : "6rem 5rem 8rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* 프로젝트 갤러리 */}
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Project Gallery</p>
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 2.5rem" }}>주요 프로젝트</h2>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)", gap: isMobile ? "1.5rem" : "3.5rem", marginBottom: isMobile ? "4rem" : "10rem" }}>
            {projectGallery.map(({ img, title }, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
                  <img src={img} alt={title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "0.5rem 0 0" }}>
                  <div style={{ fontSize: isMobile ? "0.68rem" : "0.74rem", fontWeight: 600, color: "#111827", lineHeight: 1.4, wordBreak: "keep-all" }}>{title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 거래처 목록 */}
          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Client List</p>
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 1.5rem" }}>납품 실적</h2>

          <div style={{ marginBottom: "1.5rem", padding: "0.8rem 1.2rem", background: "#f9fafb", borderLeft: "3px solid #374151" }}>
            <span style={{ fontSize: "0.82rem", color: "#374151" }}>삼성전자·SK하이닉스·동부제철 등 국내 주요 대기업 공인 제작사로 등록되어 있습니다.</span>
          </div>

          {isMobile ? (
            /* 모바일: 카드형 */
            <div style={{ borderTop: "2px solid #111827" }}>
              {experienceData.map((row, i) => (
                <div key={i} style={{ padding: "1rem 0", borderBottom: "1px solid #f3f4f6" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "0.72rem", color: "#9ca3af", fontWeight: 600, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111827" }}>{row.client}</span>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#6b7280", paddingLeft: "1.2rem", lineHeight: 1.6 }}>{row.items}</div>
                </div>
              ))}
            </div>
          ) : (
            /* 데스크탑: 테이블 */
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", borderTop: "2px solid #111827" }}>
                <thead>
                  <tr>
                    <TH>No.</TH>
                    <TH>Client / 거래처</TH>
                    <TH>Supply Items</TH>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((row, i) => (
                    <tr key={i}>
                      <TD>{i + 1}</TD>
                      <TD><span style={{ fontWeight: 600, color: "#111827" }}>{row.client}</span></TD>
                      <TD>{row.items}</TD>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
