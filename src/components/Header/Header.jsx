import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
import useVibration from "../../scripts/useVibration";
import Timetables from "../../pages/Timetables/Timetables";
import "material-symbols";
import styles from "./Header.module.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showTimetablesPage, setShowTimetablesPage] = useState(false);
  const vibrate = useVibration();

  useEffect(() => {
    const handleBack = (event) => {
      if (showTimetablesPage) {
        event.preventDefault();
        setShowTimetablesPage(false);
        window.history.pushState(null, "");
      }
    };

    if (showTimetablesPage) {
      window.history.pushState(null, "");
      window.addEventListener("popstate", handleBack);
    } else {
      window.removeEventListener("popstate", handleBack);
    }

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [showTimetablesPage]);

  function toggleShowMenu() {
    vibrate(5);
    setShowMenu((prev) => !prev);
  }
  const verticalMenuProps = {
    showMenu,
    setShowMenu,
  };
  const element = (
    <>
    {showTimetablesPage ? <Timetables onBack={() => setShowTimetablesPage(false)} /> : ""}
      <VerticalMenu {...verticalMenuProps} />
      <div className={styles.headerContainer}>
        <h1 className={styles.appName}>School Times</h1>
        <div className={styles.buttonsContainer}>
          <Button
            onClick={() => {
              setShowTimetablesPage(true);
              umami.track("page", {page: "Timetables", source: "app-header"})
            }}
            iconName="table_edit"
            variant="outlined"
          />
          <Button
            onClick={toggleShowMenu}
            iconName="more_vert"
            variant="outlined"
          />
        </div>
      </div>
      <div className={styles.placeholder}></div>
    </>
  );

  return element;
}

export default Header;
