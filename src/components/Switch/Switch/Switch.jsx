import styles from "./Switch.module.css";
import { useState, useEffect } from "react";
import useVibration from "../../../scripts/useVibration";
import { useData } from "../../../scripts/useData";

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
    .reduce((o, key) => (o && o[key] !== undefined ? o[key] : false), obj);
}

function Switch({ path, id }) {
  const vibrate = useVibration();
  const [data, setData] = useData();

  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const storedValue =
    getDeepValue(storedData, path) || getDeepValue(data, path);

  const [isOn, setIsOn] = useState(storedValue);

  useEffect(() => {
    const newData = { ...data };
    setDeepValue(newData, path, isOn);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  }, [isOn, path]);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    vibrate(5);
  };

  return (
    <div
      className={styles.switch}
      data-on={isOn}
      role="switch"
      aria-checked={isOn}
      tabIndex="0"
      onClick={toggleSwitch}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleSwitch()}
      id={id}
    >
      <div className={styles.slider}></div>
    </div>
  );
}

export default Switch;
