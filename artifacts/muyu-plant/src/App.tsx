import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Capacity from "./pages/Capacity";
import Tech from "./pages/Tech";
import Location from "./pages/Location";

export default function App() {
  return (
    <BrowserRouter>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#111", lineHeight: 1.6, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/capacity" element={<Capacity />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>
        <footer style={{ background: "#111827", color: "rgba(255,255,255,0.4)", textAlign: "center", padding: "2rem 3rem", fontSize: "0.82rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ margin: 0 }}>&copy; 2026 (주)무유플랜트 · 충청남도 당진시 송악읍 부곡공단</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
