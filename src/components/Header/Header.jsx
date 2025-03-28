import React from "react";
import Button from "../Button/Button";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
import Overlay from "../Overlay/Overlay";
import "material-symbols";
import styles from "./Header.module.css";
import {useState} from "react"


function Header() {
  const [vertMenuState, setVertMenuState] = useState(false);
  
  function handleVertMenuState() {
      setVertMenuState(vertMenuState => !vertMenuState);
  }

  const element = (
    <>
      {vertMenuState ? <><VerticalMenu /> <Overlay window={handleVertMenuState} zIndex={101} blur={"3px"} color={"rgba(0,0,0,0.1)"} /></> : ""}
      <div className={styles.headerContainer}>
        <h1 className={styles.appName}>School Times</h1>
        <div className={styles.buttonsContainer}>
          <Button iconName="table_edit" variant="outlined" />
          <Button onClick={handleVertMenuState} iconName="more_vert" variant="outlined" />
        </div>
      </div>
      <div className={styles.placeholder}></div>
    </>
  );

  return element;
}

export default Header;
