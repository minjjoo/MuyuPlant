import { useState } from "react";
import PageHero from "../components/PageHero";
import { useIsMobile } from "../hooks/use-mobile";

type SectionId = "production" | "products" | "facility" | "measurement";

const SECTIONS: { id: SectionId; label: string; labelKo: string }[] = [
  { id: "production", label: "Production Capacity", labelKo: "생산량" },
  { id: "products", label: "Products", labelKo: "생산제품" },
  { id: "facility", label: "Facility", labelKo: "시설" },
  { id: "measurement", label: "Measuring Equipment", labelKo: "측정장비" },
];

const productionData = [
  { no: 1, equipment: "Pressure Vessel", equipmentKo: "압력 용기", capacity: "2,400 Ton", size: "80t × 4,000 ID × 30,000 L", maxWeight: "100 Ton" },
  { no: 2, equipment: "Heat Exchanger", equipmentKo: "열교환기", capacity: "2,400 Ton", size: "80t × 12,000 ID × 12,000 L", maxWeight: "80 Ton" },
  { no: 3, equipment: "Tower and Column", equipmentKo: "탑류 설비", capacity: "2,400 Ton", size: "80t × 2,500 ID × 50,000 L", maxWeight: "100 Ton" },
];

const facilityData = [
  { no: 1, equipment: "Crane", spec: "30 Ton", qty: "3 ea" },
  { no: 2, equipment: "Crane", spec: "20 Ton", qty: "3 ea" },
  { no: 3, equipment: "Crane", spec: "10 Ton", qty: "3 ea" },
  { no: 4, equipment: "Turning Roller", spec: "100 Ton", qty: "5 ea" },
  { no: 5, equipment: "Turning Roller", spec: "50 Ton", qty: "10 ea" },
  { no: 6, equipment: "Turning Roller", spec: "10 Ton", qty: "15 ea" },
  { no: 7, equipment: "CO2 Welding Machine", spec: "600A", qty: "25 ea" },
  { no: 8, equipment: "Arc Welding Machine", spec: "600A", qty: "2 ea" },
  { no: 9, equipment: "TIG Welding Machine", spec: "600A", qty: "15 ea" },
  { no: 10, equipment: "Compressor", spec: "100 HP", qty: "1 ea" },
  { no: 11, equipment: "Compressor", spec: "10 HP", qty: "1 ea" },
  { no: 12, equipment: "Gouging Machine", spec: "1500A", qty: "4 ea" },
  { no: 13, equipment: "Auto Welding Machine", spec: "DC-1000", qty: "1 ea" },
  { no: 14, equipment: "Bending Machine", spec: "14,000×5,300×5,300", qty: "1 ea" },
  { no: 15, equipment: "RT ROOM", spec: "—", qty: "1 ea" },
];

const measurementData = [
  { no: 1, equipment: "Ultrasonic Thickness Gauge", spec: "1.2mm ~ 100mm", qty: "1 ea" },
  { no: 2, equipment: "AC/DC Clamp Meter", spec: "Max. 1000V / Max. 2500A", qty: "1 ea" },
  { no: 3, equipment: "Infrared/Contact Thermometer", spec: "-40 ~ 650°C", qty: "1 ea" },
  { no: 4, equipment: "Digital Vernier Calipers", spec: "0 ~ 300mm", qty: "1 ea" },
  { no: 5, equipment: "Digital Magnet Level (Bevel Protractors)", spec: "0 ~ ±90°", qty: "1 ea" },
  { no: 6, equipment: "Coating Thickness Gauge", spec: "0 ~ 2mm", qty: "1 ea" },
  { no: 7, equipment: "Pressure Gauge", spec: "0 ~ 6 Bar", qty: "5 ea" },
  { no: 8, equipment: "Pressure Gauge", spec: "0 ~ 10 Bar", qty: "5 ea" },
  { no: 9, equipment: "Pressure Gauge", spec: "0 ~ 25 Bar", qty: "10 ea" },
  { no: 10, equipment: "Pressure Gauge", spec: "0 ~ 50 Bar", qty: "5 ea" },
];


const products = [
  { nameKo: "압력용기", nameEn: "Pressure Vessel", desc: "고압 환경에서 기체나 액체를 안전하게 저장·처리하는 용기. 석유화학, 발전, 가스 산업 전반에 공급합니다. ASME Section VIII Division 1 기준 설계·제작.", img: "/압력용기1.jpg" },
  { nameKo: "열교환기", nameEn: "Heat Exchanger", desc: "서로 다른 온도의 유체 사이에서 열을 교환하는 설비. Shell & Tube 방식을 주력으로 제작하며 다양한 소재와 규격에 대응합니다.", img: "/열교환기.png" },
  { nameKo: "탑류 설비", nameEn: "Tower & Column", desc: "증류, 흡수, 세정 등의 공정에 사용되는 탑형 설비. 대형 플랜트 현장 납품 실적 다수 보유. 설계부터 현장 설치까지 일괄 대응.", img: "/탑류설비.jpg" },
];

const TH = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <th style={{ padding: "0.7rem 1.2rem", background: "#1f2937", color: "#e5e7eb", fontWeight: 600, fontSize: "0.78rem", textAlign: center ? "center" : "left", borderBottom: "1px solid #374151", whiteSpace: "nowrap" }}>
    {children}
  </th>
);
const TD = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <td style={{ padding: "0.7rem 1.2rem", fontSize: "0.82rem", color: "#374151", borderBottom: "1px solid #e5e7eb", textAlign: center ? "center" : "left" }}>
    {children}
  </td>
);

function ContentPanel({ active, isMobile }: { active: SectionId; isMobile: boolean }) {
  return <>
    {active === "production" && (
      <div>
        <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Production Capacity</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111827", margin: "0 0 2.5rem" }}>생산량</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", borderTop: "2px solid #111827" }}>
            <thead><tr><TH>No.</TH><TH>Equipment</TH><TH>Capacity (Ton / Year)</TH><TH>Size (mm)</TH><TH>Max. Weight (Ton)</TH></tr></thead>
            <tbody>{productionData.map((row) => (<tr key={row.no}><TD>{row.no}</TD><TD><div style={{ fontWeight: 600, color: "#111827" }}>{row.equipment}</div><div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{row.equipmentKo}</div></TD><TD>{row.capacity}</TD><TD>{row.size}</TD><TD>{row.maxWeight}</TD></tr>))}</tbody>
          </table>
        </div>
        <div style={{ marginTop: "1.5rem", padding: "0.8rem 1.2rem", background: "#f9fafb", borderLeft: "3px solid #374151" }}>
          <span style={{ fontSize: "0.82rem", color: "#374151", fontWeight: 500 }}>Loading port: 당진항</span>
        </div>
      </div>
    )}
    {active === "products" && (
      <div>
        <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Products</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111827", margin: "0 0 3rem" }}>생산제품</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {products.map(({ nameKo, nameEn, desc, img }, i) => {
            const isEven = i % 2 === 0;
            return (
            <div key={nameKo} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 3fr", borderTop: "1px solid #e5e7eb", direction: isMobile ? "ltr" : isEven ? "ltr" : "rtl" }}>
              <div style={{ overflow: "hidden", aspectRatio: "4/3", direction: "ltr" }}><img src={img} alt={nameKo} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
              <div style={{ padding: isMobile ? "1.5rem 0" : "2rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", direction: "ltr" }}>
                <div style={{ fontSize: "0.72rem", color: "#9ca3af", letterSpacing: "1px", marginBottom: "0.6rem" }}>{nameEn}</div>
                <div style={{ fontWeight: 700, fontSize: "1.3rem", color: "#111827", marginBottom: "1rem" }}>{nameKo}</div>
                <div style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.9 }}>{desc}</div>
              </div>
            </div>
          );
          })}
          <div style={{ borderTop: "1px solid #e5e7eb" }} />
        </div>
      </div>
    )}
    {active === "facility" && (
      <div>
        <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Facility</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111827", margin: "0 0 2.5rem" }}>시설</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", borderTop: "2px solid #111827" }}>
            <thead><tr><TH>No.</TH><TH>Equipment</TH><TH>Specification</TH><TH center>Q'ty</TH></tr></thead>
            <tbody>{facilityData.map((row) => (<tr key={row.no}><TD>{row.no}</TD><TD>{row.equipment}</TD><TD>{row.spec}</TD><TD center>{row.qty}</TD></tr>))}</tbody>
          </table>
        </div>
      </div>
    )}
    {active === "measurement" && (
      <div>
        <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Measuring Equipment</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111827", margin: "0 0 2.5rem" }}>측정장비</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", borderTop: "2px solid #111827" }}>
            <thead><tr><TH>No.</TH><TH>Equipment</TH><TH>Specification</TH><TH center>Q'ty</TH></tr></thead>
            <tbody>{measurementData.map((row) => (<tr key={row.no}><TD>{row.no}</TD><TD>{row.equipment}</TD><TD>{row.spec}</TD><TD center>{row.qty}</TD></tr>))}</tbody>
          </table>
        </div>
      </div>
    )}
  </>;
}

export default function Capacity() {
  const [active, setActive] = useState<SectionId>("production");
  const isMobile = useIsMobile();

  return (
    <div>
      <PageHero title="생산능력" subtitle="대형 플랜트 설비 전문 제작사" />

      {isMobile ? (
        /* 모바일: 탭 버튼 상단 배치 */
        <div>
          <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", display: "flex" }}>
            {SECTIONS.map(({ id, labelKo }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                style={{
                  flex: "1 1 0",
                  padding: "0.9rem 0.5rem",
                  background: "transparent",
                  border: "none",
                  borderBottom: active === id ? "2px solid #111827" : "2px solid transparent",
                  marginBottom: "-1px",
                  color: active === id ? "#111827" : "#9ca3af",
                  fontWeight: active === id ? 700 : 400,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {labelKo}
              </button>
            ))}
          </div>
          <main style={{ padding: "2rem 1.5rem 4rem", background: "#fff" }}>
            <div style={{ width: "100%" }}>
              <ContentPanel active={active} isMobile={true} />
            </div>
          </main>
        </div>
      ) : (
        /* 데스크탑: 사이드바 레이아웃 */
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "220px", background: "#fff" }} />
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", position: "relative" }}>
            <aside style={{ background: "transparent", paddingTop: "3rem", position: "sticky", top: "88px", alignSelf: "start" }}>
              <div style={{ padding: "0 0 1.5rem 0", borderBottom: "1px solid #e5e7eb", marginBottom: "0.5rem" }}>
                <span style={{ display: "block", padding: "0 2rem", fontSize: "1.1rem", letterSpacing: "2px", color: "#374151", textTransform: "uppercase", fontWeight: 600 }}>생산능력</span>
              </div>
              {SECTIONS.map(({ id, labelKo }) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  style={{
                    display: "block", width: "100%", textAlign: "left", padding: "0.9rem 2rem",
                    background: active === id ? "#f3f4f6" : "transparent",
                    color: active === id ? "#111827" : "#6b7280",
                    fontWeight: active === id ? 600 : 400, fontSize: "0.88rem",
                    border: "none", borderLeft: active === id ? "2px solid #111827" : "2px solid transparent",
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {labelKo}
                </button>
              ))}
            </aside>
            <main style={{ padding: "4rem 2rem 6rem", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", maxWidth: "1200px" }}>
                <ContentPanel active={active} isMobile={false} />
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}