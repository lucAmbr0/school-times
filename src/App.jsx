import { useState } from "react";
import "./App.css";
import ButtonTable from './components/Table/ButtonTable'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <SpeedInsights />
      <ButtonTable />
    </>
  );
}

export default App;
