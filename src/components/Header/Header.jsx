import React from "react";
import Button from "../Button/Button";
import "material-symbols";
import styles from "./Header.module.css";

function Header() {
  const element = (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.appName}>School Times</h1>
        <div className={styles.buttonsContainer}>
          <Button iconName="table_edit" variant="outlined" />
          <Button iconName="more_vert" variant="outlined" />
        </div>
      </div>
      <div className={styles.placeholder}></div>
    </>
  );

  return element;
}

export default Header;
