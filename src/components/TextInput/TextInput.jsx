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
    setTimeout(() => {
      const newData = { ...data };
      setDeepValue(newData, path, value);
      localStorage.setItem("data", JSON.stringify(newData));
      setData(newData);
    }, 100);
  }, [value, path]);

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
    let newValue = event.target.value;
    if (newValue != value) {
      if (event.target.localName == "textarea") newValue = newValue.split(",");
      setValue(newValue);
      onChangeAction(event);
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
