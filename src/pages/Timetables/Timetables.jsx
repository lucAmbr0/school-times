import PageHeader from "../../components/PageHeader/PageHeader";
import TextInput from "../../components/TextInput/TextInput";
import Dropdown from "../../components/Dropdown/Dropdown";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import useVibration from "../../scripts/useVibration";
import Button from "../../components/Button/Button";
import { useData } from "../../scripts/useData";
import { useState, useEffect } from "react";
import styles from "./Timetables.module.css";

function Timetables({ onBack }) {
  const vibrate = useVibration();
  const [data, setData] = useData();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = [
    "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
  ];
  let roomsTxts = data.user.rooms
  .split(",")
  .map((r) => r.trim().charAt(0).toUpperCase() + r.trim().slice(1).toLowerCase());
  let rooms = [];
  rooms.push("N/A");
  roomsTxts.forEach(r => rooms.push(r));
    const [activeDay, setActiveDay] = useState((new Date().getDay() + 6) % 7);
    let x = new Date().getHours() - 7;
    if (x < 0) x = 0;
    else if (x > hours.length - 1) x = hours.length - 1;
    const [activeHour, setActiveHour] = useState(x);
    const [timetables, setTimetables] = useState(data.timetables);
    const [activeTimetable, setActiveTimetable] = useState(timetables.indexOf(data.timetables.find((t) => t.isUser)) || 0);

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

  const syncUserInfo = () => {
    const newData = { ...data };
    newData.user.name = activeTimetable.matesNames;
    newData.user.className = activeTimetable.className;
    setData(newData);
  };

  const handleClassSlotChange = (val) => {
    const selectedTimetable = timetables.find((t) => t.className === val);
    setActiveTimetable(selectedTimetable);
  };

  const handleDaySlotChange = (val) => {
    let k = days.indexOf(val);
    if (k < 0) k = 0;
    else if (k > days.length - 1) k = days.length - 1;
    setActiveDay(k);
    console.log("ACTIVE DAY ", k);
    
  };

  const handleHoursSlotChange = (val) => {
    let k = val.split(":")[0];
    k = parseInt(k) - 7;
    if (k < 0) k = 0;
    else if (k > hours.length - 1) k = hours.length - 1;
    setActiveHour(k);
    console.log("ACTIVE HOUR ", k);
  };

  useEffect(() => {
    document.getElementById("room").value = data.timetables[activeTimetable].schedule[activeDay][activeHour].room;
    console.log(document.getElementById("room").value);
    
  }, [activeTimetable, activeDay, activeHour]);

  const handleRoomChange = (val = "N/A") => {
    console.log(data.timetables[activeTimetable]);
    console.log(data.timetables[activeTimetable].schedule);
    console.log(data.timetables[activeTimetable].schedule[activeDay]);
    console.log(data.timetables[activeTimetable].schedule[activeDay][activeHour]);
    
    data.timetables[activeTimetable].schedule[activeDay][activeHour].room = val;
    setTimetables([...timetables]);
  }

  useEffect(() => {
    const newData = { ...data };
    setDeepValue(newData, "timetables", timetables);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  }, [timetables, activeTimetable]);

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
            onClick={handleClassSlotChange}
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
              value={timetables[activeTimetable].className}
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
              path={`timetables[${activeTimetable}].className`}
              onChangeAction={syncUserInfo}
            />
            <label className={styles.settingLabel} htmlFor="matesNames">
              Mates names
            </label>
            <TextInput
              maxLength={40}
              id={"matesNames"}
              name={"Mates names"}
              path={`timetables[${activeTimetable}].matesNames`}
              onChangeAction={syncUserInfo}
            />
          </div>
          <HorizontalLine
            color={"var(--palette-200)"}
            length={"95%"}
            height={"1px"}
          />
          <div className={styles.dayTimeSelectorContainer}>
            <Dropdown
              onChange={handleDaySlotChange}
              value={days[activeDay]}
              name={"Days selector"}
              id={"daysSelector"}
              options={days}
            />
            <span>at</span>
            <Dropdown
              onChange={handleHoursSlotChange}
              value={hours[activeHour]}
              name={"Hours selector"}
              id={"hoursSelector"}
              options={hours}
            />
          </div>
          <div className={styles.settingsGrid}>
            <label className={styles.settingLabel} htmlFor="room">
              Room
            </label>
            <Dropdown
              value={data.timetables[activeTimetable].schedule[activeDay][activeHour].room}
              onChange={handleRoomChange}
              options={rooms}
              name={"Room"}
              id={"room"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timetables;
