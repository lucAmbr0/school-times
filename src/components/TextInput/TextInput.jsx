import styles from "./TextInput.module.css";
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

  const lastKey = isNaN(keys[keys.length - 1]) ? keys[keys.length - 1] : parseInt(keys[keys.length - 1]);
  temp[lastKey] = value;
}

function getDeepValue(obj, path) {
  const keys = path.split(/[\.\[\]]/).filter(Boolean);
  return keys.reduce((acc, key) => {
    const k = isNaN(key) ? key : parseInt(key);
    return acc && acc[k] !== undefined ? acc[k] : "";
  }, obj);
}

function TextInput({type, path, name, id, placeholder, maxLength = 0, onChangeAction = () => {} }) {
  const [data, setData] = useData();
  let eventPtr;

  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const storedValue =
    getDeepValue(storedData, path) || getDeepValue(data, path);

  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || {};
    const storedValue = getDeepValue(storedData, path) || getDeepValue(data, path);
    setValue(storedValue);
  }, [path, data]);

  useEffect(() => {
    if (type == "textarea") {
      setValue(
        value.toString()
          .split(",")
          .map(
            (v) =>
              " " + v.trim().charAt(0).toUpperCase() + v.trim().substring(1)
          ).toString().trim()
      );
    }
  }, []);

  const handleTextChange = (event) => {
    const newValue = event.target.value;
    if (newValue !== value) {
      const updatedData = { ...data };
      setDeepValue(updatedData, path, newValue);
      localStorage.setItem("data", JSON.stringify(updatedData));
      setData(updatedData);
    }
  };

  if (type == "textarea") {
    return (
      <textarea
        className={styles.textArea}
        value={value}
        placeholder={placeholder + "..."}
        name={name}
        maxLength={maxLength}
        id={id}
        rows={4}
        onChange={handleTextChange}
      ></textarea>
    );
  } else {
    return (
      <input
        type={type}
        className={styles.inputElement}
        value={value}
        maxLength={maxLength}
        name={name}
        id={id}
        onChange={handleTextChange}
      />
    );
  }
}

export default TextInput;
