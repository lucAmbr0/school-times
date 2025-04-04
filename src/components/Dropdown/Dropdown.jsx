import styles from "./Dropdown.module.css";
import { useState, useEffect } from "react";
import { useData } from "../../scripts/useData";

function setDeepValue(obj, path, value) {
  const keys = path.split(".");
  let temp = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!temp[keys[i]]) temp[keys[i]] = {};
    temp = temp[keys[i]];
  }
  temp[keys[keys.length - 1]] = value;
}

function getDeepValue(obj, path) {
  return path
    .split(".")
    .reduce((o, key) => (o && o[key] !== undefined ? o[key] : ""), obj);
}

function Dropdown({ path = "settings.buffer", name, id, options = ["N/A"] }) {
  const [data, setData] = useData();
  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const storedValue =
    getDeepValue(storedData, path) || getDeepValue(data, path);
  const [value, setValue] = useState(storedValue);
  const iconClasses = `material-symbols-outlined ${styles.dropdownIcon}`;

  useEffect(() => {
    const newData = { ...data };
    setDeepValue(newData, path, value);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  }, [value, path]);

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      <span className={iconClasses}>arrow_drop_down</span>
      <select
        className={styles.container}
        name={name}
        id={id}
        value={value}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
