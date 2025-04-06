import PageHeader from "../../components/PageHeader/PageHeader";
import TextInput from "../../components/TextInput/TextInput";
import Dropdown from "../../components/Dropdown/Dropdown";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import useVibration from "../../scripts/useVibration";
import Button from "../../components/Button/Button";
import { useData } from "../../scripts/useData";
import { Cell } from "../../scripts/Data";
import { useState, useEffect } from "react";
import styles from "./Timetables.module.css";

function Timetables({ onBack }) {
  const vibrate = useVibration();
  const [data, setData] = useData();
  const [timetables, setTimetables] = useState(data.timetables);
  const [activeTimetable, setActiveTimetable] = useState(
    data.timetables.find((t) => t.isUser) || data.timetables[0]
  );

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

  const syncUserInfo = () =>  {
    const newData = { ...data };
    newData.user.name = timetables.find(t => t.isUser).matesNames;
    newData.user.className = timetables.find(t => t.isUser).className;
    setData(newData);
  };

  const createNewTimetable = () => ({
    isUser: false,
    matesNames: "",
    className: "new",
    dayStart: 0,
    timeStart: 0,
    schedule: Array.from({ length: 7 }, () =>
      Array.from({ length: 24 }, () => new Cell())
    ),
  });

  const handleNewTimetable = () => {
    const alreadyExists = timetables.some((t) => t.className === "new");
    if (!alreadyExists) {
      const newTimetable = createNewTimetable();
      setTimetables([...timetables, newTimetable]);
    } else {
      setActiveTimetable(timetables.find((t) => t.className === "new"));
    }
  };

  useEffect(() => {
    const newData = { ...data };
    setDeepValue(newData, "timetables", timetables);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  }, [timetables, activeTimetable]);

  const handleClassSlotChange = (val) => {
    const selectedTimetable = timetables.find((t) => t.className === val);
    setActiveTimetable(selectedTimetable);
  };

  function setDeepValue(obj, path, value) {
    const keys = path.split(".");
    let temp = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!temp[keys[i]]) temp[keys[i]] = {};
      temp = temp[keys[i]];
    }
    temp[keys[keys.length - 1]] = value;
  }

  const handleBack = () => {
    vibrate(5);
    document
      .querySelector("#timetablesPage")
      .classList.add(styles.exitAnimation);
    document.querySelector("#pageHeader").classList.add(styles.exitAnimation);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  return (
    <>
      <PageHeader handleBack={handleBack} />
      <div id="timetablesPage" className={styles.container}>
        <h1 className={styles.title}>Timetables</h1>
        <div className={styles.newTimetableBtnContainer}>
          <Button
            onClick={handleNewTimetable}
            text="New timetable"
            iconName="add"
            border="rounded"
            variant="outlined"
          />
        </div>
        <div className={styles.timetableSettingsContainer}>
          <div className={styles.classSelectorContainer}>
            <h4>Class</h4>
            <Dropdown
              options={timetables.map((t) => t.className)}
              value={activeTimetable.className}
              onChange={handleClassSlotChange}
            />
          </div>
          <div className={styles.settingsGrid}>
            <label className={styles.settingLabel} htmlFor="className">
              Class name
            </label>
            <TextInput
              maxLength={5}
              id={"className"}
              name={"Class name"}
              path={`timetables[${timetables.indexOf(
                activeTimetable
              )}].className`}
              onChangeAction={syncUserInfo}
            />
            <label className={styles.settingLabel} htmlFor="matesNames">
              Mates names
            </label>
            <TextInput
              maxLength={40}
              id={"matesNames"}
              name={"Mates names"}
              path={`timetables[${timetables.indexOf(
                activeTimetable
              )}].matesNames`}
              onChangeAction={syncUserInfo}
            />
          </div>
          <HorizontalLine
            color={"var(--palette-200)"}
            length={"95%"}
            height={"1px"}
          />
        </div>
      </div>
    </>
  );
}

export default Timetables;
