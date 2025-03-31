import styles from "./TextInput.module.css";
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

function TextInput({ type, path, name, id, placeholder, maxLength = 0 }) {
  const [data, setData] = useData();
  let eventPtr;

  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const storedValue =
    getDeepValue(storedData, path) || getDeepValue(data, path);

  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    const newData = { ...data };
    setDeepValue(newData, path, value);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
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
    if (event.target.localName == "textarea") newValue = newValue.split(",");
    setValue(newValue);
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
