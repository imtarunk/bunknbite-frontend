import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landpage";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
import AboutPage from "./pages/about";
import { useState } from "react";
import AdminDashboard from "./pages/adminPage";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div>
      <Navbar isLogin={isLogin} setLogin={setLogin} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LandingPage isLogin={isLogin} setLogin={setLogin} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
