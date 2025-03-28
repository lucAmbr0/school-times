import Overlay from "../Overlay/Overlay";
import styles from "./VerticalMenu.module.css"
import Settings from "../../pages/Settings/Settings"
import { useState, useEffect } from "react";

function VerticalMenu({showMenu, setShowMenu}) {
    const [showSettings, setShowSettings] = useState();
    useEffect(() => {
        const handleBack = (event) => {
            if (showSettings) {
                event.preventDefault();
                setShowSettings(false);
                window.history.pushState(null, ""); // Recreate state to prevent exit
            }
        };

        if (showSettings) {
            window.history.pushState(null, ""); // Add a dummy state
            window.addEventListener("popstate", handleBack);
        } else {
            window.removeEventListener("popstate", handleBack);
        }

        return () => {
            window.removeEventListener("popstate", handleBack);
        };
    }, [showSettings]);
    const menu = showMenu ? (
    <>
        <Overlay zIndex={101} blur={"3px"} color={"rgba(0,0,0,0.1)"} event={() => setShowMenu(false)} />
        <div className={styles.container}>
            <button onClick={() => { window.location.reload(true) }} className={styles.button}>
                <span className="material-symbols-outlined">refresh</span>Reload
            </button>
            <button onClick={() => {setShowMenu(false); setShowSettings(!showSettings)}} className={styles.button}>
                <span className="material-symbols-outlined">settings</span>Settings
            </button>
            <button className={styles.button}>
                <span className="material-symbols-outlined">info</span>About
            </button>
        </div>
    </>
    ) : null;

    const element = (
        <>
        {menu}
        {showSettings ? <Settings /> : ""}
        </>
    )

    return element;
}

export default VerticalMenu;