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
  const timetables = data.timetables.filter((t) => t.className !== "new") || [];

  const [activeTimetableIdx, setActiveTimetableIdx] = useState(0);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [appearAnim, setAppearAnim] = useState(""); // inizialmente nessuna animazione
  const hasInteracted = useRef(false);

  const nextIdx = (delta) => {
    if (!hasInteracted.current) {
      hasInteracted.current = true; // ora possiamo iniziare ad animare
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
    justifyContent: "space-between",
  };

  const current = timetables[activeTimetableIdx] || {};

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
        <h3 className={boxStyles.boxTitle}>
          Class {current.className || "N/A"}
        </h3>
        <h4 className={styles.room}>{current.room || "N/A"}</h4>
        <h5 className={styles.subjectAndTeacher}>
          {current.subject || "N/A"}
          <br />
          {current.teacher || "N/A"}
        </h5>
        <PercentageProgressBar percentage={30} className={styles.progressBar} />
      </div>
    </div>
  );
}

export default SmallMateClassBox;
