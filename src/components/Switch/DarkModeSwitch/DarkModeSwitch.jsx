import styles from "./DarkModeSwitch.module.css";
import Button from "../../Button/Button";
import { useState } from "react";

function DarkModeSwitch() {
    const [selected, setSelected] = useState("light");

    const element = 
    <div className={styles.container}>
        <div className={styles.buttonsContainer}>
            <Button variant="clear" iconName="clear_day" />
            <Button variant="clear" iconName="brightness_auto" />
            <Button variant="clear" iconName="dark_mode" />
        </div>
        <div className={styles.indicator}></div>
    </div>
    
    return element;
}

export default DarkModeSwitch;
