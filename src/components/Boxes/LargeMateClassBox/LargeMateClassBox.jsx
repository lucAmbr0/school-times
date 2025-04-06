import React from "react";
import { useData } from "../../../scripts/useData";
import "material-symbols";
import styles from "./LargeMateClassBox.module.css";

function LargeMateClassBox({ timetable, day = 0, hour = 0 }) {
  const [data] = useData();
  //   const vibrate = useVibration();
  let room, subject, teacher;

  if (
    hour < 0 ||
    hour > 9 ||
    (hour >= 0 && hour <= 9 && timetable.schedule[day][hour].off)
  ) {
    room = "No lesson";
    subject = "";
    teacher = "";
  } else {
    room = timetable.schedule[day][hour].room;
    subject = timetable.schedule[day][hour].subject;
    teacher = timetable.schedule[day][hour].teacher;
  }

  const properties = [room, timetable.className, timetable.matesNames, subject, teacher];
  const containerStyles = `${styles.container}${
    room === "No lesson" ? ` ${styles.disabled}` : ""
  }`;
  const element = (
    <div className={containerStyles}>
      <h2 className={styles.mainProperty}>{properties[0]}</h2>
      <div className={styles.grid}>
        {properties[1] ? <p className={styles.property}>{properties[1]}</p> : ""}
        {properties[2] ? <p className={styles.property}>{properties[2]}</p> : ""}
        {properties[3] ? <p className={styles.property}>{properties[3]}</p> : ""}
        {properties[4] ? <p className={styles.property}>{properties[4]}</p> : ""}
      </div>
    </div>
  );

  return element;
}

export default LargeMateClassBox;
