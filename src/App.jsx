import "./App.css";
// import ButtonTable from "./components/Table/ButtonTable";
import Navbar from "./components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <SpeedInsights />
      <div>
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
