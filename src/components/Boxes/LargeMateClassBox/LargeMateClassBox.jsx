import React from "react";
import { useData } from "../../../scripts/useData";
import "material-symbols";
import styles from "./LargeMateClassBox.module.css";

function LargeMateClassBox({ timetable, day = 0, hour = 0 }) {
  const [data] = useData();
  //   const vibrate = useVibration();
  const propsLayout = data.settings.boxLayout;
  let layout = [];

  if (
    hour < 0 ||
    hour > 9 ||
    (hour >= 0 && hour <= 9 && timetable.schedule[day][hour].off)
  ) {
    layout[0] = "No lesson";
    layout[1] = timetable.className;
    layout[2] = timetable.matesNames;
    layout[3] = "";
    layout[4] = "";
  } else {
    for (let i = 0; i < propsLayout.length; i++) {
      switch (propsLayout[i]) {
        case "Room":
          layout[i] = timetable.schedule[day][hour].room;
          break;
        case "Class name":
          layout[i] = timetable.className;
          break;
        case "Mates names":
          layout[i] = timetable.matesNames;
          break;
        case "Subject":
          layout[i] = timetable.schedule[day][hour].subject;
          break;
        case "Teacher":
          layout[i] = timetable.schedule[day][hour].teacher;
          break;
        default:
          layout[i] = "ERR";
          break;
      }
    }
  }

  const containerStyles = `${styles.container}${
    layout[0] === "No lesson" ? ` ${styles.disabled}` : ""
  }`;
  const element = (
    <div className={containerStyles}>
      <h2 className={styles.mainProperty}>{layout[0]}</h2>
      <div className={styles.grid}>
        {layout[1] ? (
          <p className={styles.property}>{layout[1]}</p>
        ) : (
          ""
        )}
        {layout[2] ? (
          <p className={styles.property}>{layout[2]}</p>
        ) : (
          ""
        )}
        {layout[3] ? (
          <p className={styles.property}>{layout[3]}</p>
        ) : (
          ""
        )}
        {layout[4] ? (
          <p className={styles.property}>{layout[4]}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );

  return element;
}

export default LargeMateClassBox;
