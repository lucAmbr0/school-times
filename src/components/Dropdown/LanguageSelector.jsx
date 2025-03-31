import styles from "./Dropdown.module.css";
import { useData } from "../../scripts/useData";
import { useState } from "react";

function LanguageSelector({ options = [] }) {
  const [data, setData] = useData();
  const [language, setLanguage] = useState(data.settings.language || "English");
  const iconClasses = `material-symbols-outlined ${styles.dropdownIcon}`;

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    setData({ ...data, settings: { ...data.settings, language: newLanguage } });
  };

  let optionElements = [];

  let i = 0;
  if (Array.isArray(options))
    for (let option of options) {
      optionElements.push(
        <option key={option + "-" + i} className={styles.option} value={option}>
          {option}
        </option>
      );
    }

  const element = (
    <div className={styles.selectContainer}>
      <select
        className={styles.container}
        name="select"
        value={language}
        onChange={(event) => handleLanguageChange(event)}
      >
        {optionElements}
      </select>
      <span class={iconClasses}>arrow_drop_down</span>
    </div>
  );

  return element;
}

export default LanguageSelector;
