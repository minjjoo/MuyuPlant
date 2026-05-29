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
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#333", lineHeight: 1.6, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
        <footer style={{ background: "#0A192F", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "1.5rem 2rem", fontSize: "0.85rem" }}>
          <p style={{ margin: 0 }}>&copy; 2026 (주)무유플랜트. All rights reserved. | 충청남도 당진시 송악읍 부곡공단</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
