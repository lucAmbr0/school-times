import React from "react";
import "material-symbols";
import styles from "./LargeMateClassBox.module.css";
import PropTypes from "prop-types";

function LargeMateClassBox({className = "N/A", room = "N/A", matesNames = "N/A", subject = "N/A", teacher = "N/A"}) {
    const properties = [room, className, matesNames, subject, teacher];
    const containerStyles = `${styles.container}${subject === "N/A" ? ` ${styles.disabled}` : ""}`;
    const element = (
        <div className={containerStyles}>
            <h2 className={styles.mainProperty}>{properties[0]}</h2>
            <div className={styles.grid}>
                <p className={styles.property}>{properties[1]}</p>
                <p className={styles.property}>{properties[2]}</p>
                <p className={styles.property}>{properties[3]}</p>
                <p className={styles.property}>{properties[4]}</p>
            </div>
        </div>
    );

    return element;
}

export default LargeMateClassBox;