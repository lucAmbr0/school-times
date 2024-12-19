import { useState } from "react";
import "./App.css";
import ButtonTable from './components/Table/ButtonTable'
import NavbarBtn from './components/Navbar/NavbarBtn/NavbarBtn'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <SpeedInsights />
      <NavbarBtn text="Home" iconName="home" active={false} />
    </>
  );
}

export default App;
