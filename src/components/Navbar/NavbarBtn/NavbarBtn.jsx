import React from "react";
import styles from "./NavbarBtn.module.css";
import {track} from "@vercel/analytics";

function NavbarBtn({ onNavigate, text = "", iconName = "", active = false }) {
  const iconClasses = `material-symbols-outlined ${styles.icon}`;
  const pillClasses = `${styles.pill} ${active && styles.pillActive}`;
  const textClasses = `${styles.label} ${active && styles.labelActive}`;

  const element = (
    <button
      onClick={() => {
        onNavigate(text);
        track('Navbar Click', { buttonText: text }, { flags: ['navbar-action'] });
      }}
    >
      <div className={pillClasses}>
        {iconName && <span className={iconClasses}>{iconName}</span>}
      </div>
      <p className={textClasses}> {text && text} </p>
    </button>
  );

  return element;
}

export default NavbarBtn;
