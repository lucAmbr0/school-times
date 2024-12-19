import React from "react";
import styles from "./NavbarBtn.module.css";


function NavbarBtn({text = "", iconName = "", active = false}) {

    const iconClasses = `material-symbols-outlined ${styles.icon}`;
    const pillClasses = `${styles.pill} ${active && styles.pillActive}`
    const textClasses = `${styles.label} ${active && styles.labelActive}`
    
  return (
    <>
      <button>
        <div className={pillClasses}>
          {iconName && <span className={iconClasses}>{iconName}</span>}
        </div>
        <p className={textClasses}> {text && text} </p>
      </button>
    </>
  );
}

export default NavbarBtn;
