import React, { useState } from "react";
import Button from "../Button/Button";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
import "material-symbols";
import styles from "./Header.module.css";


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleShowMenu() {
    setShowMenu((prev) => !prev);
  }
  const verticalMenuProps = {
    showMenu,
    setShowMenu,
  };
  const element = (
    <>
      <VerticalMenu {...verticalMenuProps} />
      <div className={styles.headerContainer}>
        <h1 className={styles.appName}>School Times</h1>
        <div className={styles.buttonsContainer}>
          <Button iconName="table_edit" variant="outlined" />
          <Button onClick={toggleShowMenu} iconName="more_vert" variant="outlined" />
      </div>
      </div>
      <div className={styles.placeholder}></div>
    </>);

  return element;
}

export default Header;
