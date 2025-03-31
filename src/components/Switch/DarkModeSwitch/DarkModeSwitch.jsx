import styles from "./DarkModeSwitch.module.css";
import Button from "../../Button/Button";
import useThemeColor from "../../../scripts/useThemeColor";
import useVibration from '../../../scripts/useVibration';
import { useData } from "../../../scripts/useData";
import { useState } from "react";

function DarkModeSwitch() {
    const [data, setData] = useData();
    const [mode, setMode] = useState(data.settings.darkMode || "system");
    const vibrate = useVibration();
    let indicatorStyles = {transform: mode == "light" ? "translateX(-37px)" : (mode == "dark" ? "translateX(37px)" : "translateX(0%)")};

    const handleModeChange = (mode) => {
        vibrate(100);
        setMode(mode);
        setData({...data, settings: {...data.settings, darkMode: mode}});
      };
    
    useThemeColor(mode);
    const element = 
    <div className={styles.container}>
        <div className={styles.buttonsContainer}>
            <Button onClick={() => handleModeChange("light")} iconState={mode == "light" ? "filled" : "empty"} variant="clear" iconName="clear_day" />
            <Button onClick={() => handleModeChange("system")} iconState={mode == "system" ? "filled" : "empty"} variant="clear" iconName="brightness_auto" />
            <Button onClick={() => handleModeChange("dark")} iconState={mode == "dark" ? "filled" : "empty"} variant="clear" iconName="dark_mode" />
        </div>
        <div style={indicatorStyles} className={styles.indicator}></div>
    </div>
    
    return element;
}

export default DarkModeSwitch;
