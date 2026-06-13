import { useEffect, useRef } from "react";
import PageHero from "../components/PageHero";
import { useIsMobile } from "../hooks/use-mobile";

function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    if (!clientId) return;
    const existing = document.querySelector("script[data-naver-map]");
    const init = () => {
      try {
        const naver = (window as any).naver;
        if (!naver || !mapRef.current) return;
        const loc = new naver.maps.LatLng(36.9528, 126.7463);
        const map = new naver.maps.Map(mapRef.current, { center: loc, zoom: 15 });
        new naver.maps.Marker({ position: loc, map, title: "(주)무유플랜트" });
      } catch (e) {
        console.warn("네이버 지도 초기화 실패", e);
      }
    };
    if (existing) { init(); return; }
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
    script.async = true;
    script.setAttribute("data-naver-map", "true");
    script.onload = init;
    document.head.appendChild(script);
  }, []);
  return <div ref={mapRef} style={{ width: "100%", height: "440px", background: "#e5e7eb" }} />;
}

export default function Location() {
  const isMobile = useIsMobile();
  return (
    <div>
      <PageHero title="오시는 길" subtitle="충청남도 당진시 부곡공단에 위치합니다" />

      <section style={{ padding: isMobile ? "3rem 1.5rem 4rem" : "8rem 5rem 9rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1.5rem", textTransform: "uppercase" }}>Address</p>
              <div style={{ borderTop: "1px solid #e5e7eb" }}>
                {[
                  { label: "공장 및 본사", value: "충청남도 당진시 송악읍 부공공단 4길 53-39" },
                  { label: "인근 랜드마크", value: "현대제철 당진제철소 인근" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ padding: "2.4rem 0", borderBottom: "1px solid #e5e7eb" }}>
                    <div style={{ fontSize: "0.76rem", color: "#9ca3af", marginBottom: "0.3rem" }}>{label}</div>
                    <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.9rem" }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "2.5px", color: "#9ca3af", marginBottom: "1.5rem", textTransform: "uppercase" }}>Contact</p>
              <div style={{ borderTop: "1px solid #e5e7eb" }}>
                {[
                  { label: "전화", value: "041) 357-6951~3" },
                  { label: "팩스", value: "041-357-6954" },
                  { label: "이메일", value: "yoook12@naver.com" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ padding: "1.1rem 0", borderBottom: "1px solid #e5e7eb" }}>
                    <div style={{ fontSize: "0.76rem", color: "#9ca3af", marginBottom: "0.3rem" }}>{label}</div>
                    <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.9rem" }}>{value}</div>
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
