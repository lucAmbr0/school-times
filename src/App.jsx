import { useState } from "react";
import "./App.css";
import ButtonTable from './components/Table/ButtonTable'
import Navbar from './components/Navbar/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <SpeedInsights />
      <Navbar />
    </>
  );
}

export default App;
