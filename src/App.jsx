import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Calendar from "./pages/Calendar/Calendar";
import Settings from "./pages/Settings/Settings";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const renderPage = () => {
    console.log(currentPage);
    switch (currentPage) {
      case "home":
        return <Home />;
      case "schedule":
        return <Schedule />;
      case "calendar":
        return <Calendar />;
      case "settings":
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
        <Navbar onNavigate={setCurrentPage} />
      </div>
    </>
  );
}

export default App;
