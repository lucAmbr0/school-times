import "./App.css";
import React, { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"
import useThemeColor from "./scripts/useThemeColor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Calendar from "./pages/Calendar/Calendar";
import Settings from "./pages/Settings/Settings";
import Header from "./components/Header/Header";
import { useData } from "./scripts/useData";

function App() {
  const [data, setData] = useData();
  const [currentPage, setCurrentPage] = useState(data.settings.tab);
  useThemeColor();

  const renderPage = () => {
    data.settings.tab = currentPage
    setData(data);
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
      <Analytics />
        <Header />
      <div className="appContainer">
        {renderPage()}
        <div className="placeholder"></div>
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      </div>
    </>
  );
}

export default App;
