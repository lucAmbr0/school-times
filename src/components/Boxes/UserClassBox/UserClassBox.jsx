import StepProgressBar from "../../ProgressBar/StepProgressBar/StepProgressBar";
import { useEffect, useState } from "react";
import "material-symbols";
// import {useVibration} from "../../../scripts/useVibration"
import { showSnackbar } from "../../../scripts/snackbar";
import { useData } from "../../../scripts/useData";
import styles from "./UserClassBox.module.css";

function UserClassBox({ day = 0, hour = 0, showProgress = false }) {
  const [data] = useData();
  //   const vibrate = useVibration();
  const timetable = data.timetables.find((t) => t.isUser) || data.timetables[0];

  let firstHour = -1;
  let lastHour = -1;
  for (let i = 0; i < 10; i++) {
    if (firstHour === -1 && !timetable.schedule[day][i].off) firstHour = i;
    if (!timetable.schedule[day][i].off) lastHour = i;
  }
  const dayDuration = lastHour - firstHour + 1;
  const hourProgress = 100 / 60 * (new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setRefresh((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  const [refresh, setRefresh] = useState(false);

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

  const element = (
    <>
      <div className={styles.container}>
        <h2 className={styles.room}>{room}</h2>
        {subject && teacher ? (
          <h3 className={styles.subjectAndTeacher}>
            <span className={styles.subject}>{subject || " "}</span> {" - "}
            <span className={styles.teacher}>{teacher || " "}</span>
          </h3>
        ) : (
          ""
        )}
        {room && room !== "No lesson" ? (
          <StepProgressBar
            totalBars={dayDuration}
            activeBars={hour - firstHour + 1}
            progress={showProgress ? hourProgress : 100}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );

  return element;
}

export default UserClassBox;
