import "./App.css";
import React, { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"
import useThemeColor from "./scripts/useThemeColor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Events from "./pages/Events/Events";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import checkUpdated from "./scripts/checkUpdated";
import UpdateNotice from "./components/UpdateNotice/UpdateNotice";
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
        case "Explore":
          return <Explore />;
          case "Events":
            return <Events />;
      case "Profile":
        return <Profile />;
        default:
          return <Home />;
    }
  };
  const [savedVersion, currVersion, updated, cleared] = checkUpdated("0.11.1");
  const [showUpdateNotice, setShowUpdateNotice] = useState(updated);
  return (
    <>
      <SpeedInsights />
      <Analytics />
        <Header />
      <div className="appContainer">
        {renderPage()}
        { showUpdateNotice ? <UpdateNotice oldVersion={savedVersion} newVersion={currVersion} cleared={cleared} closeAction={() => {setShowUpdateNotice(false);}
        } /> : "" }
        <div className="placeholder"></div>
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      </div>
    </>
  );
}

export default App;
