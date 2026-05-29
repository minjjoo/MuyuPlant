import { useEffect, useRef } from "react";
import PageHero from "../components/PageHero";

function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    if (!clientId) return;
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
    script.async = true;
    script.onload = () => {
      const naver = (window as any).naver;
      if (!naver || !mapRef.current) return;
      const location = new naver.maps.LatLng(36.9528, 126.7463);
      const map = new naver.maps.Map(mapRef.current, { center: location, zoom: 15 });
      new naver.maps.Marker({ position: location, map, title: "(주)무유플랜트" });
    };
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "420px", borderRadius: "10px", border: "1px solid #e2e8f0" }} />;
}

export default function Location() {
  return (
    <div>
      <PageHero title="오시는 길" subtitle="충청남도 당진시 부곡공단에 위치합니다" />

      <section style={{ padding: "5rem 2rem", background: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginBottom: "2.5rem" }}>
            <div>
              <h3 style={{ color: "#0A192F", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.5rem", borderLeft: "4px solid #64FFDA", paddingLeft: "1rem" }}>주소</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "공장 및 본사", value: "충청남도 당진시 송악읍 부곡공단" },
                  { label: "인근 랜드마크", value: "현대제철 당진제철소 인근" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ background: "#f8fafc", borderRadius: "8px", padding: "1rem 1.2rem", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.2rem" }}>{label}</div>
                    <div style={{ fontWeight: 600, color: "#0A192F" }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ color: "#0A192F", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.5rem", borderLeft: "4px solid #64FFDA", paddingLeft: "1rem" }}>연락처</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "이메일", value: "문의 이메일" },
                  { label: "팩스", value: "팩스 번호" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ background: "#f8fafc", borderRadius: "8px", padding: "1rem 1.2rem", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.2rem" }}>{label}</div>
                    <div style={{ fontWeight: 600, color: "#0A192F" }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <NaverMap />
        </div>
      </section>
    </div>
  );
}
