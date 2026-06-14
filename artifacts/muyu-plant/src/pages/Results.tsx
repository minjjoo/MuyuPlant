import { useState, useRef } from "react";
import PageHero from "../components/PageHero";
import { useIsMobile } from "../hooks/use-mobile";

const ext = (n: number) => {
  const pngNums = new Set([1,2,3,6,7,8,9,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]);
  return pngNums.has(n) ? "png" : "jpg";
};

type Project = { n: number; title: string; client: string };

const projects: Project[] = [
  { n:1, client:"GS Engineering", title:"RUWAIS 4th NGL TRAIN INTER REFINRIES PIPELINES" },
  { n:2, client:"한모기술", title:"Dangjin thermal power Unit 9&10 DUCT & SUPPORT" },
  { n:3, client:"삼성엔지니어링", title:"BOROUGE PROJECT SAUDI ARABIAN OIL" },
  { n:6, client:"대림", title:"JG SUMMIT NAPHTHA CRACKER HP-3 PROJECT" },
  { n:7, client:"현대", title:"2D PROJECT" },
  { n:8, client:"BELCO", title:"SINOPEC SHANGHAI REFINERY" },
  { n:9, client:"SK", title:"WASIT GAS PLANT PAKG #1,2,3" },
  { n:10, client:"기타", title:"DONGDUCHEON CCPP CONSTRUCTION PROJECT SHOP FABRICATED TANK" },
  { n:11, client:"KCC Corporation", title:"P2 PROJECT REACTOR" },
  { n:12, client:"KCC Corporation", title:"P2 PROJECT DRUM" },
  { n:13, client:"GMR Energy", title:"2x400MW CCP SHOP FABRICATED TANK" },
  { n:14, client:"GMR Energy", title:"2x400MW CCP SHOP FABRICATED TANK" },
  { n:15, client:"현대제철", title:"GAS REFINERY PLANT PROJECT" },
  { n:16, client:"KCC Corporation", title:"AN/BD RECOVERY SYSTEM OF NBR LATEX PLANT" },
  { n:17, client:"금호석유화학", title:"NBR LATEX EXPANSION PROJECT" },
  { n:18, client:"기타", title:"LONGFORD GAS CONDITIONING PROJECT THERMAL OXIDIZER" },
  { n:19, client:"기타", title:"LONGFORD GAS CONDITIONING PROJECT VENT STACK" },
  { n:20, client:"기타", title:"AP LNG PROJECT NRU THERMAL OXIDIZER" },
  { n:21, client:"현대건설", title:"공주소방방재시설 공사 (TrailerTank)" },
  { n:22, client:"현대건설", title:"공주소방방재시설 공사 (TrailerTank)" },
  { n:23, client:"현대건설", title:"공주소방방재시설 공사 (Fuel Storage Tank)" },
  { n:24, client:"한농케미칼", title:"H6PROJECT HOLDING VESSEL 3SET" },
  { n:25, client:"한마음플랜트", title:"LINED TANK" },
  { n:26, client:"한화케미칼", title:"K-10 PROJECT VESSEL 2SET ID6000/ID5000" },
  { n:27, client:"KC코트렐", title:"SCRUBBER" },
  { n:28, client:"기타", title:"DME PLANT STORAGE TANK BIOFRIENDS" },
  { n:29, client:"씨엔비산업", title:"PO TANK PROJECT NO.5 PO TANK" },
  { n:30, client:"이엠테크", title:"K-7 PROJECT 열교환기 6기" },
  { n:31, client:"이엠테크", title:"K-7 PROJECT 열교환기 6기" },
  { n:32, client:"중부발전소", title:"신서천FGD WWT Tank" },
  { n:33, client:"중부발전소", title:"신서천FGD WWT Tank" },
  { n:34, client:"중부발전소", title:"신서천FGD WWT Tank" },
  { n:35, client:"중부발전소", title:"신서천FGD WWT Tank" },
  { n:36, client:"중부발전소", title:"신서천FGD WWT Tank" },
  { n:37, client:"중부발전소", title:"신서천FGD WWT Tank" },
  { n:38, client:"중부발전소", title:"신서천FGD WWT Tank" },
  { n:39, client:"씨엔비산업", title:"반응기" },
  { n:40, client:"기타", title:"N2 RECEIVER TANK 에스엔엔씨" },
  { n:41, client:"한화건설", title:"K10-PROJECT" },
  { n:42, client:"한화건설", title:"K10-PROJECT" },
  { n:43, client:"한화건설", title:"K10-PROJECT" },
  { n:44, client:"한화건설", title:"K10-PROJECT" },
  { n:45, client:"한화건설", title:"K10-PROJECT" },
  { n:46, client:"한화건설", title:"K10-PROJECT" },
  { n:47, client:"KC코트렐", title:"KC코트렐" },
  { n:48, client:"KC코트렐", title:"KC코트렐" },
  { n:49, client:"현대오일뱅크", title:"HPC-PROJECT" },
  { n:50, client:"현대오일뱅크", title:"HPC-PROJECT" },
  { n:51, client:"현대오일뱅크", title:"HPC-PROJECT" },
  { n:52, client:"현대오일뱅크", title:"HPC-PROJECT" },
  { n:53, client:"현대오일뱅크", title:"HPC-PROJECT" },
  { n:54, client:"현대오일뱅크", title:"HPC-PROJECT" },
  { n:55, client:"재원산업", title:"재원산업" },
  { n:56, client:"한모기술", title:"SK에너지 DUCT" },
  { n:57, client:"한마음플랜트", title:"한마음플랜트" },
  { n:58, client:"한마음플랜트", title:"한마음플랜트" },
  { n:59, client:"아이펙이엔지", title:"아이펙이엔지" },
  { n:60, client:"아이펙이엔지", title:"아이펙이엔지" },
  { n:61, client:"제이오", title:"풍국주정 타워" },
  { n:62, client:"제이오", title:"풍국주정 타워" },
  { n:63, client:"제이오", title:"풍국주정 타워" },
  { n:64, client:"제이오", title:"풍국주정 타워" },
  { n:65, client:"제이오", title:"대산 선도화학" },
  { n:66, client:"제이오", title:"대산 선도화학" },
  { n:67, client:"제이오", title:"대산 선도화학" },
  { n:68, client:"제이오", title:"대산 선도화학" },
  { n:69, client:"제이오", title:"구다우케미칼" },
  { n:70, client:"제이오", title:"구다우케미칼" },
  { n:71, client:"제이오", title:"구다우케미칼" },
  { n:72, client:"제이오", title:"구다우케미칼" },
  { n:73, client:"앱스필/삼성전자", title:"PCW P2 PROJECT" },
  { n:74, client:"앱스필/삼성전자", title:"PCW P2 PROJECT" },
  { n:75, client:"앱스필/삼성전자", title:"PCW P2 PROJECT" },
  { n:76, client:"앱스필/삼성전자", title:"PCW P2 PROJECT" },
  { n:77, client:"KC코트렐", title:"당진화력발전소" },
  { n:78, client:"KC코트렐", title:"당진화력발전소" },
  { n:79, client:"KC코트렐", title:"당진화력발전소" },
  { n:80, client:"KC코트렐", title:"당진화력발전소" },
  { n:81, client:"디에스21/삼성엔지니어링", title:"SARAWAK PJT" },
  { n:82, client:"디에스21/삼성엔지니어링", title:"SARAWAK PJT" },
  { n:83, client:"디에스21/삼성엔지니어링", title:"SARAWAK PJT" },
  { n:84, client:"디에스21/삼성엔지니어링", title:"SARAWAK PJT" },
  { n:85, client:"한마음플랜트", title:"서인천/신인천 발전소" },
  { n:86, client:"한마음플랜트", title:"서인천/신인천 발전소" },
  { n:87, client:"엑스필", title:"PTTLNG Nong Fab LNG Receiving Terminal" },
  { n:88, client:"엑스필", title:"PTTLNG Nong Fab LNG Receiving Terminal" },
  { n:89, client:"태방/LG에너지솔루션", title:"LGESOC2 1P PROJECT" },
  { n:90, client:"태방/LG에너지솔루션", title:"LGESOC2 1P PROJECT" },
  { n:91, client:"태방/LG에너지솔루션", title:"LGESOC2 1P PROJECT" },
  { n:92, client:"태방/LG에너지솔루션", title:"LGESOC2 1P PROJECT" },
  { n:93, client:"유니슨/삼성엔지니어링", title:"APOC PDH PROJECT" },
  { n:94, client:"유니슨/삼성엔지니어링", title:"APOC PDH PROJECT" },
  { n:95, client:"유니슨/삼성엔지니어링", title:"APOC PDH PROJECT" },
  { n:96, client:"유니슨/삼성엔지니어링", title:"APOC PDH PROJECT" },
  { n:97, client:"성산기업", title:"HEC PROJECT" },
  { n:98, client:"성산기업", title:"HEC PROJECT" },
  { n:99, client:"성산기업", title:"HEC PROJECT" },
  { n:100, client:"성산기업", title:"HEC PROJECT" },
  { n:101, client:"제이오", title:"ECOPRO COTAGON PROJECT" },
  { n:102, client:"제이오", title:"ECOPRO COTAGON PROJECT" },
  { n:103, client:"재원산업", title:"JAC-20 REVAMP PROJECT" },
  { n:104, client:"재원산업", title:"JAC-20 REVAMP PROJECT" },
  { n:105, client:"디노/두산에너빌리티", title:"Shuaibah3 Independent Water Project" },
  { n:106, client:"디노/두산에너빌리티", title:"Shuaibah3 Independent Water Project" },
  { n:107, client:"서은플랜트", title:"진성이엔지 J1PROJECT" },
  { n:108, client:"서은플랜트", title:"진성이엔지 J1PROJECT" },
  { n:109, client:"우리이엠아이", title:"천보BLS 군산공장 GLS PROJECT" },
  { n:110, client:"우리이엠아이", title:"천보BLS 군산공장 GLS PROJECT" },
  { n:111, client:"우리이엠아이", title:"천보BLS 군산공장 GLS PROJECT" },
  { n:112, client:"우리이엠아이", title:"천보BLS 군산공장 GLS PROJECT" },
  { n:113, client:"덕산실업", title:"REFINE PROJECT" },
  { n:114, client:"덕산실업", title:"REFINE PROJECT" },
  { n:115, client:"덕산실업", title:"REFINE PROJECT" },
  { n:116, client:"덕산실업", title:"REFINE PROJECT" },
  { n:117, client:"디에스21/삼성엔지니어링", title:"ROSMARI MARJORAM FIELD DEVELOPMENT PROJECT" },
  { n:118, client:"디에스21/삼성엔지니어링", title:"ROSMARI MARJORAM FIELD DEVELOPMENT PROJECT" },
  { n:119, client:"디에스21/삼성엔지니어링", title:"ROSMARI MARJORAM FIELD DEVELOPMENT PROJECT" },
  { n:120, client:"디에스21/삼성엔지니어링", title:"ROSMARI MARJORAM FIELD DEVELOPMENT PROJECT" },
  { n:121, client:"셀렌텍/POSCO", title:"포항 Crude 네온 생산설비 콜드박스" },
  { n:122, client:"셀렌텍/POSCO", title:"포항 Crude 네온 생산설비 콜드박스" },
  { n:123, client:"셀렌텍/POSCO", title:"포항 Crude 네온 생산설비" },
  { n:124, client:"셀렌텍/POSCO", title:"포항 Crude 네온 생산설비" },
  { n:125, client:"가람플랜트", title:"켐트로닉스 QL PROJECT" },
  { n:126, client:"한양인더스트리", title:"OCI KUMHO ME1 PROJECT" },
  { n:127, client:"한양인더스트리", title:"OCI KUMHO ME1 PROJECT" },
  { n:128, client:"한양인더스트리", title:"롯데정밀화학 그린소개 VOC 소각로 이중화" },
  { n:129, client:"성산기업", title:"성산기업" },
  { n:130, client:"성산기업", title:"성산기업" },
  { n:131, client:"성산기업", title:"성산기업" },
  { n:132, client:"성산기업", title:"성산기업" },
  { n:133, client:"LS엔지니어링", title:"조선기기 CO2 포집분리막공정" },
  { n:134, client:"LS엔지니어링", title:"조선기기 CO2 포집분리막공정" },
  { n:135, client:"SK", title:"환경에너지솔루션 SK하이닉스 M15X Ph4 Project" },
  { n:136, client:"LS엔지니어링", title:"에너토크 DANYANG 20TPD CCU PROJECT" },
  { n:137, client:"LS엔지니어링", title:"IT CHEM ITC Phase-2" },
];

const clientCounts = projects.reduce((acc, p) => { acc[p.client] = (acc[p.client] || 0) + 1; return acc; }, {} as Record<string, number>);
const clients = ["전체", ...Array.from(new Set(projects.map(p => p.client))).filter(c => c !== "기타").sort((a, b) => clientCounts[b] - clientCounts[a]), "기타"];

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
  const [activeClient, setActiveClient] = useState("전체");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const tabRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => { tabRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" }); };

  const filtered = activeClient === "전체" ? projects : projects.filter(p => p.client === activeClient);

  return (
    <div>
      <PageHero title="주요실적" subtitle="국내외 주요 플랜트 프로젝트 납품 실적입니다" />

      <section style={{ padding: isMobile ? "3rem 1.5rem 4rem" : "6rem 5rem 8rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Project Gallery</p>
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 2rem" }}>주요 프로젝트</h2>

          {/* 클라이언트 필터 탭 */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
            <button onClick={() => scroll("left")} style={{ flexShrink: 0, background: "none", border: "1px solid #e5e7eb", width: "36px", height: "36px", cursor: "pointer", fontSize: "1.2rem", color: "#6b7280", position: "relative" as const, top: "-2px", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "4px" }}>‹</button>
            <div ref={tabRef} style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.25rem", scrollbarWidth: "none" }}>
              {clients.map(c => (
                <button key={c} onClick={() => setActiveClient(c)} style={{
                  flexShrink: 0, padding: "0.45rem 1rem", fontSize: "0.78rem", fontWeight: activeClient === c ? 700 : 400,
                  background: activeClient === c ? "#1e3a5f" : "transparent",
                  color: activeClient === c ? "#fff" : "#6b7280",
                  border: `1px solid ${activeClient === c ? "#1e3a5f" : "#e5e7eb"}`,
                  cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.15s",
                }}>{c}</button>
              ))}
            </div>
            <button onClick={() => scroll("right")} style={{ flexShrink: 0, background: "none", border: "1px solid #e5e7eb", width: "36px", height: "36px", cursor: "pointer", fontSize: "1.2rem", color: "#6b7280", position: "relative" as const, top: "-2px", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "4px" }}>›</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: "0.5rem", marginBottom: isMobile ? "4rem" : "10rem" }}>
            {filtered.map((p, i) => (
              <div key={p.n} onClick={() => setLightbox(i)} style={{ cursor: "pointer" }}>
                <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
                  <img src={`/project${p.n}.${ext(p.n)}`} alt={p.title} loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "0.5rem 0 0.25rem" }}>
                  <div style={{ fontSize: "0.68rem", color: "#a8c4e0", fontWeight: 600, marginBottom: "0.15rem" }}>{p.client}</div>
                  <div style={{ fontSize: "0.7rem", color: "#374151", lineHeight: 1.4 }}>{p.title}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "0.6rem", textTransform: "uppercase" }}>Client List</p>
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "1.8rem", fontWeight: 700, color: "#111827", margin: "0 0 1.5rem" }}>납품 실적</h2>
          <div style={{ marginBottom: "1.5rem", padding: "0.8rem 1.2rem", background: "#f9fafb", borderLeft: "3px solid #374151" }}>
            <span style={{ fontSize: "0.82rem", color: "#374151" }}>삼성전자·SK하이닉스·동부제철 등 국내 주요 대기업 공인 제작사로 등록되어 있습니다.</span>
          </div>

          {isMobile ? (
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
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", borderTop: "2px solid #111827" }}>
                <thead><tr><TH>No.</TH><TH>Client / 거래처</TH><TH>Supply Items</TH></tr></thead>
                <tbody>
                  {experienceData.map((row, i) => (
                    <tr key={i}><TD>{i + 1}</TD><TD><span style={{ fontWeight: 600, color: "#111827" }}>{row.client}</span></TD><TD>{row.items}</TD></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={e => { e.stopPropagation(); setLightbox(i => i !== null && i > 0 ? i - 1 : i); }}
            style={{ position: "absolute", left: "1.5rem", background: "none", border: "none", color: "#fff", fontSize: "2.5rem", cursor: "pointer", lineHeight: 1 }}>‹</button>
          <div onClick={e => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <img src={`/project${filtered[lightbox].n}.${ext(filtered[lightbox].n)}`} alt=""
              style={{ maxWidth: "85vw", maxHeight: "78vh", objectFit: "contain" }} />
            <div style={{ color: "#fff", fontSize: "0.85rem", textAlign: "center" }}>
              <span style={{ color: "#a8c4e0", marginRight: "0.5rem" }}>{filtered[lightbox].client}</span>
              {filtered[lightbox].title}
            </div>
          </div>
          <button onClick={e => { e.stopPropagation(); setLightbox(i => i !== null && i < filtered.length - 1 ? i + 1 : i); }}
            style={{ position: "absolute", right: "1.5rem", background: "none", border: "none", color: "#fff", fontSize: "2.5rem", cursor: "pointer", lineHeight: 1 }}>›</button>
          <button onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "1rem", right: "1.5rem", background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
          <div style={{ position: "absolute", bottom: "1.5rem", color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>{lightbox + 1} / {filtered.length}</div>
        </div>
      )}
    </div>
  );
}
