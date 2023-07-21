import React from "react";
import LandingPage from "@/pages/LandingPage.jsx";
import Dashboard from "@/pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Real from "./pages/Teams/Real";
import Barca from "./pages/Teams/Barca";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Real />} />
          <Route path="/dashboard/real" element={<Real />} />
          <Route path="/dashboard/barca" element={<Barca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
