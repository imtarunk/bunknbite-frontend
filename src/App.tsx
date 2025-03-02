import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landpage";
import Navbar from "./components/navbar";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import AboutPage from "./pages/about";

type PageType = "explore" | "plane" | "about" | "login";

function App() {
  const [page, setPage] = useState<PageType>("explore");

  return (
    <div>
      <Navbar setPage={setPage} />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage page={page} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
