import styles from "./DarkModeSwitch.module.css";
import Button from "../../Button/Button";
import { useState } from "react";

function DarkModeSwitch() {
    const [darkModeState, setDarkModeState] = useState("system");
    let indicatorStyles = {transform: darkModeState == "light" ? "translateX(-112.5%)" : (darkModeState == "dark" ? "translateX(112.5%)" : "translateX(0%)")};

    const element = 
    <div className={styles.container}>
        <div className={styles.buttonsContainer}>
            <Button onClick={() => setDarkModeState("light")} iconState={darkModeState == "light" ? "filled" : "empty"} variant="clear" iconName="clear_day" />
            <Button onClick={() => setDarkModeState("system")} iconState={darkModeState == "system" ? "filled" : "empty"} variant="clear" iconName="brightness_auto" />
            <Button onClick={() => setDarkModeState("dark")} iconState={darkModeState == "dark" ? "filled" : "empty"} variant="clear" iconName="dark_mode" />
        </div>
        <div style={indicatorStyles} className={styles.indicator}></div>
    </div>
    
    return element;
}

export default DarkModeSwitch;
