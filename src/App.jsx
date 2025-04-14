import "./App.css";
import React, { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import ScreenRatioError from "./components/ScreenRatioError/ScreenRatioError";
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
    data.settings.tab = currentPage;
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
  const [savedVersion, currVersion, updated, cleared] = checkUpdated();
  const [showUpdateNotice, setShowUpdateNotice] = useState(updated);

  if (process.env.NODE_ENV === "production") {
    const script = document.createElement("script");
    script.src = "https://cloud.umami.is/script.js";
    script.setAttribute(
      "data-website-id",
      "0326da66-101e-4439-8400-5ae584408e72"
    );
    document.head.appendChild(script);
  }

  return (
    <>
      <SpeedInsights />
      <Analytics />
      {showUpdateNotice ? (
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
