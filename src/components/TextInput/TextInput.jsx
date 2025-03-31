import styles from "./TextInput.module.css";
import { useState, useEffect } from "react";
import { useData } from "../../scripts/useData";

function setDeepValue(obj, path, value) {
  const keys = path.split(".");
  let temp = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!temp[keys[i]]) temp[keys[i]] = {}; // Ensure nested object exists
    temp = temp[keys[i]];
  }

  temp[keys[keys.length - 1]] = value;
}

function getDeepValue(obj, path) {
  return path.split(".").reduce((o, key) => (o && o[key] !== undefined ? o[key] : ""), obj);
}

function TextInput({ type = "text", path, name, id }) {
  const [data, setData] = useData();

  // Load the entire "data" object from localStorage
  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const storedValue = getDeepValue(storedData, path) || getDeepValue(data, path);

  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    // Save the entire "data" object to localStorage when value changes
    const newData = { ...data };
    setDeepValue(newData, path, value);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  }, [value, path]);

  const handleTextChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <input
      type={type}
      className={styles.inputElement}
      value={value}
      name={name}
      id={id}
      onChange={handleTextChange}
    />
  );
}

export default TextInput;
