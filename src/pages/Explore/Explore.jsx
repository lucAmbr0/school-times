import SwiperWrap from "../../components/SwiperWrap/SwiperWrap";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import UserClassBox from "../../components/Boxes/UserClassBox/UserClassBox";
import LargeMateClassBox from "../../components/Boxes/LargeMateClassBox/LargeMateClassBox";
import { useState } from "react";
import { useData } from "../../scripts/useData";
import styles from "./Explore.module.css";

function Explore() {
  const [data] = useData();
  const [activeDay, setActiveDay] = useState((new Date().getDay() + 6) % 7);
  const [activeHour, setActiveHour] = useState(new Date().getHours() - 7);
  const timetables = data.timetables;

  const generateMatesTimetables = () => {
    return timetables
      .filter(t => !t.isUser && t.className !== "new")
      .map(t => (
        <LargeMateClassBox
          key={"matesTimetable-" + t.index}
          timetable={t}
          day={activeDay}
          hour={activeHour}
        />
      ));
  };

  const element = (
    <>
      {/* <h2 className={styles.setTimeAndDayLabel}>Set time and day</h2> */}
      <div className={styles.swipers}>
        <SwiperWrap
          className={styles.swiper}
          type={"days"}
          activeSlide={activeDay}
          setActiveSlide={setActiveDay}
        />
        <SwiperWrap
          className={styles.swiper}
          type={"time"}
          start={7}
          length={10}
          activeSlide={activeHour}
          setActiveSlide={setActiveHour}
        />

        <div className={styles.swipersIndicator}></div>
        <div className={styles.swipersGradient}></div>
      </div>
      <UserClassBox day={activeDay} hour={activeHour} />
      <HorizontalLine
        length={"90%"}
        height={"1px"}
        margin={"20px auto"}
        color={"var(--palette-300)"}
        alpha={1}
      />
      <h4 className={styles.matesLabel}>Mates</h4>
      {generateMatesTimetables()}
    </>
  );

  return element;
}

export default Explore;
