import styles from "./ThemeSelector.module.css";
import useThemeColor from "../../scripts/useThemeColor";
import { useData } from "../../scripts/useData";
import { useState } from "react";

function ThemeSelector({ options = [] }) {
  const [data, setData] = useData();
  const [palette, setPalette] = useState(data.settings.palette || "Cornflower");
  const iconClasses = `material-symbols-outlined ${styles.dropdownIcon}`;

  const handleThemeChange = (event) => {
    const newPalette = event.target.value;
    setPalette(newPalette);
    setData({ ...data, settings: { ...data.settings, palette: newPalette } });
  };

  let optionElements = [];

  let i = 0;
  if (Array.isArray(options))
    for (let option of options) {
      optionElements.push(
        <option key={option + "-i"} className={styles.option} value={option}>
          {option}
        </option>
      );
    }

  useThemeColor(palette);
  const element = (
    <div className={styles.selectContainer}>
      <select
        className={styles.container}
        name="select"
        value={palette}
        onChange={(event) => handleThemeChange(event)}
      >
        {optionElements}
      </select>
      <span class={iconClasses}>arrow_drop_down</span>
    </div>
  );

  return element;
}

export default ThemeSelector;
