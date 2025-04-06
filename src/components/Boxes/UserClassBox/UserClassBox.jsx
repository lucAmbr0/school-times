import StepProgressBar from "../../ProgressBar/StepProgressBar/StepProgressBar";
import React from "react";
import "material-symbols";
// import {useVibration} from "../../../scripts/useVibration"
import { useData } from "../../../scripts/useData";
import styles from "./UserClassBox.module.css";

function UserClassBox({day = 0, hour = 0}) {
  const [data] = useData();
  //   const vibrate = useVibration();
  const timetable =
    data.timetables.find((t) => t.isUser) || [];

  let room, subject, teacher;
  
  if (hour < 0 || hour > 9 || (hour >= 0 && hour <= 9 && timetable.schedule[day][hour].off)) {
    room = "No lesson";
    subject = "";
    teacher = "";
  } else {
    room = timetable.schedule[day][hour].room;
    subject = timetable.schedule[day][hour].subject;
    teacher = timetable.schedule[day][hour].teacher;
  }

  const element = (
    <>
      <div className={styles.container}>
        <h2 className={styles.room}>{room}</h2>
        {subject && teacher ? <h3 className={styles.subjectAndTeacher}>
          <span className={styles.subject}>{subject || " "}</span> {" - "}
          <span className={styles.teacher}>{teacher || " "}</span>
        </h3> : ""}
        {room && room !== "No lesson" ? <StepProgressBar totalBars={5} activeBars={0} /> : ""}
      </div>
    </>
  );

  return element;
}

export default UserClassBox;
