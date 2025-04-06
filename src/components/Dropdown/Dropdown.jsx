import styles from "./Dropdown.module.css";
import { useState, useEffect } from "react";
import { useData } from "../../scripts/useData";

function setDeepValue(obj, path, value) {
  const keys = path.split(/[\.\[\]]/).filter(Boolean);
  let temp = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = isNaN(keys[i]) ? keys[i] : parseInt(keys[i]);
    if (temp[key] === undefined) {
      temp[key] = isNaN(keys[i + 1]) ? {} : [];
    }
    temp = temp[key];
  }

  const lastKey = isNaN(keys[keys.length - 1])
    ? keys[keys.length - 1]
    : parseInt(keys[keys.length - 1]);
  temp[lastKey] = value;
}

function getDeepValue(obj, path) {
  const keys = path.split(/[\.\[\]]/).filter(Boolean);
  return keys.reduce((acc, key) => {
    const k = isNaN(key) ? key : parseInt(key);
    return acc && acc[k] !== undefined ? acc[k] : "";
  }, obj);
}

function Dropdown({
  path = "settings.buffer",
  name,
  id,
  options,
  value: externalValue,
  onChange,
}) {
  const [data, setData] = useData();
  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const defaultValue =
    getDeepValue(storedData, path) || getDeepValue(data, path);
  const [value, setValue] = useState(externalValue ?? defaultValue);
  const iconClasses = `material-symbols-outlined ${styles.dropdownIcon}`;

  useEffect(() => {
    const newData = { ...data };
    setDeepValue(newData, path, value);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  }, [value, path]);

  useEffect(() => {
    if (externalValue !== undefined) {
      setValue(externalValue);
    }
  }, [externalValue]);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
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
          <option className={styles.option} key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
