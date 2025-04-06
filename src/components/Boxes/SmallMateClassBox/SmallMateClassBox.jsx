import { useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import PercentageProgressBar from "../../ProgressBar/PercentageProgressBar/PercentageProgressBar";
import VerticalDots from "../../VerticalDots/VerticalDots";
import boxStyles from "../Box.module.css";
import styles from "./SmallMateClassBox.module.css";
import { useData } from "../../../scripts/useData";
import useVibration from "../../../scripts/useVibration";

function SmallMateClassBox() {
  const [data] = useData();
  const vibrate = useVibration();
  const timetables = data.timetables.filter((t) => t.className !== "new" && !t.isUser) || [];

  const [activeTimetableIdx, setActiveTimetableIdx] = useState(0);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [appearAnim, setAppearAnim] = useState("");
  const hasInteracted = useRef(false);

  const nextIdx = (delta) => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
    }

    setAppearAnim(styles.disappear);
    setActiveTimetableIdx(
      (prev) => (prev + delta + timetables.length) % timetables.length
    );
    setAppearAnim(delta > 0 ? styles.appearDown : styles.appearUp);
    setSwipeProgress(0);

    setTimeout(() => {
      setAppearAnim("");
    }, 300);

    vibrate(5);
  };

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => nextIdx(1),
    onSwipedDown: () => nextIdx(-1),
    onSwiping: (eventData) => {
      const deltaY = eventData.deltaY;
      const progress = Math.min(Math.abs(deltaY) / window.innerHeight, 1);
      setSwipeProgress(
        eventData.dir === "Up" ? -progress * 100 : progress * 100
      );
    },
    delta: 10,
  });

  const containerStyle = {
    transform: `translateY(${swipeProgress}%)`,
    transition: swipeProgress === 0 ? "transform 0.2s ease" : "none",
    opacity: 1 - Math.abs(swipeProgress / 25),
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  };

  const current = timetables[activeTimetableIdx] || {};
  let room,subject,teacher;
  const day = (new Date().getDay() + 6) % 7;
  let hour = new Date().getHours() - 7;
  if (timetables.length > 0) {
    if (hour < 0 || hour > 9 || current.schedule[day][hour].off) {
      room = "No lesson"
      subject = "";
      teacher = "";
    } else {
      room = current.schedule[day][hour].room;
      subject = current.schedule[day][hour].subject;
      teacher = current.schedule[day][hour].teacher;
    }
  }

  const nextTimetable = () => {
    nextIdx(1);
  };

  const prevTimetable = () => {
    nextIdx(-1);
  };

  return (
    <div
      {...swipeHandlers}
      className={boxStyles.box}
      onWheel={(e) => {
        if (e.deltaY > 0) {
          nextTimetable();
        } else {
          prevTimetable();
        }
      }}
    >
      <VerticalDots
        dots={timetables.length}
        activeDotIdx={activeTimetableIdx}
      />
      <div
        className={`${styles.timetablePage} ${appearAnim}`}
        style={containerStyle}
      >
        <h3 className={boxStyles.boxTitle} style={{"margin": "0 10px"}}>
         {current.className ? "Class " + current.className : "No mates timetables saved"}
        </h3>
        {room && <h4 className={styles.room}>{room}</h4>}
        {room && teacher ? <h5 className={styles.subjectAndTeacher}>
          {subject}
          <br />
          {teacher}
        </h5> : ""}
      </div>
        <PercentageProgressBar percentage={0} />
    </div>
  );
}

export default SmallMateClassBox;
