import useVibration from "../../../scripts/useVibration";
import React from "react";
import styles from "./NavbarBtn.module.css";

function NavbarBtn({onNavigate, text = "", iconName = "", active = false}) {
  const iconClasses = `material-symbols-outlined ${styles.icon}`;
  const pillClasses = `${styles.pill} ${active && styles.pillActive}`;
  const textClasses = `${styles.label} ${active && styles.labelActive}`;
  const vibrate = useVibration();

  const element = (
        <button onClick={() => {onNavigate(text); vibrate(5); umami.track("navbar-tab", {tab: text, source: "navbar-click<"})}}>
      <div className={pillClasses}>
        {iconName && <span className={iconClasses}>{iconName}</span>}
      </div>
      <p className={textClasses}> {text && text} </p>
    </button>
  );

  return element;
}

export default NavbarBtn;
