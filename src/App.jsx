import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Calendar from "./pages/Calendar/Calendar";
import Settings from "./pages/Settings/Settings";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Schedule":
        return <Schedule />;
      case "Calendar":
        return <Calendar />;
      case "Settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      <SpeedInsights />
      <div>
        {renderPage()}
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      </div>
    </>
  );
}

export default App;
