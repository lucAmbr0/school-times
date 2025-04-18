import "./App.css";
import React, { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import ScreenRatioError from "./components/ScreenRatioError/ScreenRatioError";
import useThemeColor from "./scripts/useThemeColor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Settings from "./pages/Settings/Settings";
// import Events from "./pages/Events/Events";
// import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import checkUpdated from "./scripts/checkUpdated";
import UpdateNotice from "./components/UpdateNotice/UpdateNotice";
import { useData } from "./scripts/useData";
import DonationPopup from "./components/DonationPopup/DonationPopup";

function App() {
  const [data, setData] = useData();
  const [currentPage, setCurrentPage] = useState(data.settings.tab);
  const [launches, setLaunches] = useState(data.settings.appLaunches || 0);

  const [showDonationPopup, setShowDonationPopup] = useState(false);

  useEffect(() => {
    const upd = launches + 1;
    setLaunches(upd);
    setData({ ...data, settings: { ...data.settings, appLaunches: upd } });
    if (upd % 50 == 0 && upd > 0) {
      setShowDonationPopup(true);
    }
  }, []);

  useThemeColor();

  const renderPage = () => {
    data.settings.tab = currentPage;
    setData(data);
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Explore":
        return <Explore />;
      case "Settings":
        return <Settings />;
      // case "Events":
      //   return <Events />;
      // case "Profile":
      //   return <Profile />;
      default:
        return <Home />;
    }
  };
  const [savedVersion, currVersion, updated, cleared] = checkUpdated();
  const [showUpdateNotice, setShowUpdateNotice] = useState(updated);

  if (process.env.NODE_ENV === "production") {
    console.log("UMAMI ENABLED");
    const script = document.createElement("script");
    script.src = "https://cloud.umami.is/script.js";
    script.setAttribute(
      "data-website-id",
      import.meta.env.VITE_UMAMI_WEBSITE_ID
    );
    document.head.appendChild(script);
  }

  return (
    <>
      <SpeedInsights />
      <Analytics />
      {showUpdateNotice && launches > 0 ? (
        <UpdateNotice
          oldVersion={savedVersion}
          newVersion={currVersion}
          cleared={cleared}
          closeAction={() => {
            setShowUpdateNotice(false);
          }}
        />
      ) : (
        ""
      )}
      {showDonationPopup && launches > 0 && !showUpdateNotice ? (
        <DonationPopup
          closeAction={() => {
            setShowDonationPopup(false);
          }}
        />
      ) : (
        ""
      )}
      {window.innerWidth <= 768 ? (
        <>
          <Header />
          <div id="appContainer" className="appContainer">
            {renderPage()}
            <div className="placeholder"></div>
            <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
          </div>
        </>
      ) : (
        <ScreenRatioError />
      )}
    </>
  );
}

export default App;
