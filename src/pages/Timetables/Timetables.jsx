import PageHeader from "../../components/PageHeader/PageHeader";
import TextInput from "../../components/TextInput/TextInput";
import Dropdown from "../../components/Dropdown/Dropdown";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import useVibration from "../../scripts/useVibration";
import Button from "../../components/Button/Button";
import Overlay from "../../components/Overlay/Overlay";
import { showSnackbar } from "../../scripts/snackbar";
import { Cell } from "../../scripts/Data";
import { useData } from "../../scripts/useData";
import { useState, useEffect } from "react";
import styles from "./Timetables.module.css";

function Timetables({ onBack }) {
  const vibrate = useVibration();
  const [data, setData] = useData();
  const [showErase, setShowErase] = useState(false);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = [
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];
  let roomsTxts = [];
  if (data.user.rooms !== "") {
    roomsTxts = data.user.rooms
      .split(",")
      .map(
        (r) =>
          r.trim().charAt(0).toUpperCase() + r.trim().slice(1).toLowerCase()
      );
  }
  let rooms = [];
  rooms.push("N/A");
  roomsTxts.forEach((r) => rooms.push(r));

  let subjectsTxts = [];
  if (data.user.subjects !== "") {
    subjectsTxts = data.user.subjects
      .split(",")
      .map(
        (r) =>
          r.trim().charAt(0).toUpperCase() + r.trim().slice(1).toLowerCase()
      );
  }
  let subjects = [];
  subjects.push("N/A");
  subjectsTxts.forEach((r) => subjects.push(r));

  let teachersTxts = [];
  if (data.user.teachers !== "") {
    teachersTxts = data.user.teachers
      .split(",")
      .map(
        (r) =>
          r.trim().charAt(0).toUpperCase() + r.trim().slice(1).toLowerCase()
      );
  }
  let teachers = [];
  teachers.push("N/A");
  teachersTxts.forEach((r) => teachers.push(r));
  let x = new Date().getHours() - 7;
  if (x < 0) x = 0;
  else if (x > hours.length - 1) x = hours.length - 1;
  const [activeDay, setActiveDay] = useState((new Date().getDay() + 6) % 7);
  const [activeHour, setActiveHour] = useState(x);
  const [timetables, setTimetables] = useState(data.timetables);
  const [activeTimetable, setActiveTimetable] = useState(
    timetables.indexOf(data.timetables.find((t) => t.isUser)) || 0
  );
  const [editTimetableClassInfo, setEditTimetableClassInfo] = useState(true);

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

  const createNewTimetable = () => ({
    isUser: false,
    matesNames: "",
    className: "new",
    dayStart: 0,
    timeStart: 0,
    schedule: Array.from({ length: 7 }, () =>
      Array.from({ length: 10 }, () => new Cell(true))
    ),
  });

  const handleNewTimetable = () => {
    const alreadyExists = timetables.some((t) => t.className === "new");
    if (!alreadyExists) {
      if (timetables.length < 10) {
        const newTimetable = createNewTimetable();

        setTimetables([...timetables, newTimetable]);
      } else {
        showSnackbar("The maximum amount of timetables is 10.");
      }
    } else {
      const index = timetables.findIndex((t) => t.className === "new");
      if (index !== -1) setActiveTimetable(index);
    }
  };

  const handleDeleteTimetable = () => {
    const timetable = timetables[activeTimetable];
    if (timetable.isUser) {
      showSnackbar("You can't delete your own timetable.");
      return;
    }

    const confirmed = confirm(
      `Are you sure you want to delete "${timetable.className}" times? This action can't be undone.`
    );
    if (confirmed) {
      const updatedTimetables = timetables.filter(
        (t, index) => index !== activeTimetable
      );
      setTimetables(updatedTimetables);
      setActiveTimetable(0);
    }
  };

  const handleClassSlotChange = (val) => {
    const selectedIndex = timetables.findIndex((t) => t.className === val);
    if (selectedIndex !== -1) {
      setActiveTimetable(selectedIndex);
    }
  };

  const handleTimetableClassInfo = () => {
    if (!editTimetableClassInfo) showSnackbar("You can edit your own name and class name in settings")
  }

  const handleDaySlotChange = (val) => {
    let k = days.indexOf(val);
    if (k < 0) k = 0;
    else if (k > days.length - 1) k = days.length - 1;
    setActiveDay(k);
  };

  const handleHoursSlotChange = (val) => {
    let k = val.split(":")[0];
    k = parseInt(k) - 7;
    if (k < 0) k = 0;
    else if (k > hours.length - 1) k = hours.length - 1;
    setActiveHour(k);
  };

  const handleRoomChange = (val = "N/A") => {
    const updated = [...timetables];
    updated[activeTimetable].schedule[activeDay][activeHour].room = val;
    checkIfDayOff();
    setTimetables(updated);
  };

  const handleSubjectChange = (val = "N/A") => {
    const updated = [...timetables];
    updated[activeTimetable].schedule[activeDay][activeHour].subject = val;
    checkIfDayOff();
    setTimetables(updated);
  };

  const handleTeacherChange = (val = "N/A") => {
    const updated = [...timetables];
    updated[activeTimetable].schedule[activeDay][activeHour].teacher = val;
    checkIfDayOff();
    setTimetables(updated);
  };

  const checkIfDayOff = () => {
    const cell = timetables[activeTimetable].schedule[activeDay][activeHour];
    if (cell.room != "N/A" && cell.subject != "N/A" && cell.teacher != "N/A") {
      cell.off = false;
    } else {
      cell.off = true;
    }
  };

  useEffect(() => {
    const newData = { ...data };
    setDeepValue(newData, "timetables", timetables);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  }, [timetables]);

  useEffect(() => {
    if (timetables[activeTimetable].isUser)
      setEditTimetableClassInfo(false);
    else setEditTimetableClassInfo(true);
  }, [activeTimetable]);

  const handleBack = () => {
    vibrate(5);
    document
      .querySelector("#timetablesPage")
      .classList.add(styles.animationOut);
    document.querySelector("#pageHeader").classList.add(styles.animationOut);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  const handleCloseErase = () => {
    document
      .querySelector("#eraseContainer")
      .classList.add(styles.animationClose);
    setTimeout(() => {
      document
        .querySelector("#eraseContainer")
        .classList.remove("animationClose");
      setShowErase(false);
    }, 200);
  };

  const erase = (idx) => {
    const updated = [...timetables];

    switch (idx) {
      case 0: {
        const cell = updated[activeTimetable].schedule[activeDay][activeHour];
        cell.room = "N/A";
        cell.subject = "N/A";
        cell.teacher = "N/A";
        cell.off = true;
        break;
      }

      case 1: {
        for (let hour = 0; hour < 10; hour++) {
          const cell = updated[activeTimetable].schedule[activeDay][hour];
          cell.room = "N/A";
          cell.subject = "N/A";
          cell.teacher = "N/A";
          cell.off = true;
        }
        break;
      }

      case 2: {
        for (let day = 0; day < 7; day++) {
          for (let hour = 0; hour < 10; hour++) {
            const cell = updated[activeTimetable].schedule[day][hour];
            cell.room = "N/A";
            cell.subject = "N/A";
            cell.teacher = "N/A";
            cell.off = true;
          }
        }
        break;
      }
    }

    setTimetables(updated);
  };

  const propsOptions = [
    "Room",
    "Subject",
    "Teacher",
    "Class name",
    "Mates names",
  ];

  return (
    <>
      <PageHeader handleBack={handleBack} />
      {showErase ? (
        <>
          <Overlay blur={"5px"} zIndex={110} event={handleCloseErase}></Overlay>
          <div id="eraseContainer" className={styles.eraseContainer}>
            <h3 className={styles.eraseLabel}>Select what fields to erase</h3>
            <Button
              onClick={() => {
                erase(0), handleCloseErase();
              }}
              text={`This cell (${days[activeDay]} at ${hours[activeHour]})`}
            />
            <Button
              onClick={() => {
                erase(1), handleCloseErase();
              }}
              text={`This day (${days[activeDay]})`}
            />
            <Button
              onClick={() => {
                erase(2), handleCloseErase();
              }}
              text={`Entire timetable (${timetables[activeTimetable].className})`}
            />
          </div>
        </>
      ) : (
        ""
      )}
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
              value={timetables[activeTimetable].className}
              onChange={handleClassSlotChange}
            />
          </div>
          <div id="timetableClassInfoSettings" className={styles.settingsGrid}>
            <label className={styles.settingLabel} htmlFor="className">
              Class name
            </label>
            <TextInput
              onClickAction={handleTimetableClassInfo}
              disabled={!editTimetableClassInfo}
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
              onClickAction={handleTimetableClassInfo}
              disabled={!editTimetableClassInfo}
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
              value={
                data.timetables[activeTimetable].schedule[activeDay][activeHour]
                  .room
              }
              onChange={handleRoomChange}
              options={rooms}
              name={"Room"}
              id={"room"}
            />
            <label className={styles.settingLabel} htmlFor="room">
              Subject
            </label>
            <Dropdown
              value={
                data.timetables[activeTimetable].schedule[activeDay][activeHour]
                  .subject
              }
              onChange={handleSubjectChange}
              options={subjects}
              name={"Subject"}
              id={"subjects"}
            />
            <label className={styles.settingLabel} htmlFor="room">
              Teacher
            </label>
            <Dropdown
              value={
                data.timetables[activeTimetable].schedule[activeDay][activeHour]
                  .teacher
              }
              onChange={handleTeacherChange}
              options={teachers}
              name={"teacher"}
              id={"teachers"}
            />
          </div>
          <div className={styles.bottomButtons}>
            <div className={styles.destructiveBtns}>
              <Button
                onClick={handleDeleteTimetable}
                variant="outlined"
                border="rounded"
                iconName="delete"
              ></Button>
              <Button
                onClick={() => setShowErase(true)}
                variant="outlined"
                border="rounded"
                iconName="ink_eraser"
              ></Button>
            </div>
            <Button
              variant="filled"
              border="rounded"
              iconName="share"
              text="Share"
            ></Button>
          </div>
        </div>
        <h3 className={styles.timetablesLayoutTitle}>Timetables layout</h3>
        <div className={styles.boxLayoutSettingsContainer}>
          <div className={styles.mainPropertyContainer}>
            <Dropdown
              path="settings.boxLayout[0]"
              name={"Main prop dropdown"}
              id={"mainPropDropdown"}
              options={propsOptions}
            />
          </div>
          <div className={styles.otherPropsGrid}>
            <Dropdown
              path="settings.boxLayout[1]"
              name={"prop1 Dropdown"}
              id={"prop1Dropdown"}
              options={propsOptions}
            />
            <Dropdown
              path="settings.boxLayout[2]"
              name={"prop2 Dropdown"}
              id={"prop2Dropdown"}
              options={propsOptions}
            />
            <Dropdown
              path="settings.boxLayout[3]"
              name={"prop3 Dropdown"}
              id={"prop3Dropdown"}
              options={propsOptions}
            />
            <Dropdown
              path="settings.boxLayout[4]"
              name={"prop4 Dropdown"}
              id={"prop4Dropdown"}
              options={propsOptions}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timetables;
