import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Business from "./pages/Business";
import Production from "./pages/Production";
import Quality from "./pages/Quality";
import Results from "./pages/Results";
import Location from "./pages/Location";
import Capacity from "./pages/Capacity";

export default function App() {
  return (
    <BrowserRouter>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#111", lineHeight: 1.6, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ScrollToTop />
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/business" element={<Business />} />
            <Route path="/production" element={<Production />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/results" element={<Results />} />
            <Route path="/location" element={<Location />} />
            <Route path="/capacity" element={<Capacity />} />
          </Routes>
        </main>
        <footer style={{ background: "#111827", color: "rgba(255,255,255,0.4)", textAlign: "center", padding: "2.5rem 3rem", fontSize: "0.82rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ margin: "0 0 0.5rem", color: "rgba(255,255,255,0.6)", fontWeight: 600, fontSize: "0.88rem" }}>(주)무유플랜트</p>
          <p style={{ margin: "0 0 0.4rem" }}>충청남도 당진시 송악읍 부공공단 4길 53-39</p>
          <p style={{ margin: "0 0 0.6rem" }}>
            <span>Tel. 041) 357-6951~3</span>
            <span style={{ margin: "0 0.8rem" }}>|</span>
            <span>Fax. 041-357-6954</span>
            <span style={{ margin: "0 0.8rem" }}>|</span>
            <span>yoook12@naver.com</span>
          </p>
          <p style={{ margin: 0, fontSize: "0.75rem" }}>&copy; 2026 (주)무유플랜트. All Rights Reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
