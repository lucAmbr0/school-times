import Overlay from "../Overlay/Overlay";
import styles from "./VerticalMenu.module.css"
import Settings from "../../pages/Settings/Settings"
import { useState, useEffect } from "react";

function VerticalMenu({showMenu, setShowMenu}) {

    const handleOverlayClick = () => {
        setShowMenu(false);
    };

    const element = showMenu ? (
    <>
        <Overlay zIndex={101} blur={"3px"} color={"rgba(0,0,0,0.1)"} event={handleOverlayClick} />
        <div className={styles.container}>
            <button onClick={() => { window.location.reload(true) }} className={styles.button}>
                <span className="material-symbols-outlined">refresh</span>Reload
            </button>
            <button onClick={() => ""} className={styles.button}>
                <span className="material-symbols-outlined">settings</span>Settings
            </button>
            <button className={styles.button}>
                <span className="material-symbols-outlined">info</span>About
            </button>
        </div>
    </>
    ) : null;

    return element;
}

export default VerticalMenu;