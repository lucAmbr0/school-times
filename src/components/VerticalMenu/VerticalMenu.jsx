import Overlay from "../Overlay/Overlay";
import styles from "./VerticalMenu.module.css"
import Settings from "../../pages/Settings/Settings"
import About from "../../pages/About/About";
import useVibration from "../../scripts/useVibration";
import { useState, useEffect } from "react";

function VerticalMenu({showMenu, setShowMenu}) {
    const vibrate = useVibration();
    const [showSettings, setShowSettings] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    useEffect(() => {
        const handleBack = (event) => {
            if (showSettings) {
                event.preventDefault();
                setShowSettings(false);
                window.history.pushState(null, "");
            }
        };

        if (showSettings) {
            window.history.pushState(null, "");
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
        <Overlay zIndex={101} blur={"0px"} color={"rgba(0,0,0,0.075)"} event={() => { document.querySelector("#settingsContainer").classList.add(styles.menuOut); setTimeout(() => {setShowMenu(false)}, 150)}} />
        <div id="settingsContainer" className={styles.container}>
            <button onClick={() => {vibrate(5); window.location.reload(true) }} className={styles.button}>
                <span className="material-symbols-outlined">refresh</span>Reload
            </button>
            <button onClick={() => {vibrate(5);setShowMenu(false); setShowSettings(!showSettings)}} className={styles.button}>
                <span className="material-symbols-outlined">settings</span>Settings
            </button>
            <button onClick={() => {vibrate(5);setShowMenu(false); setShowAbout(!showAbout)}} className={styles.button}>
                <span className="material-symbols-outlined">info</span>About
            </button>
        </div>
    </>
    ) : null;

    const element = (
        <>
        {menu}
        {showSettings ? <Settings onBack={() => setShowSettings(false)} /> : ""}
        {showAbout ? <About onBack={() => setShowAbout(false)} /> : ""}
        </>
    )

    return element;
}

export default VerticalMenu;