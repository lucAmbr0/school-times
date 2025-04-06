import SwiperWrap from "../../components/SwiperWrap/SwiperWrap";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import UserClassBox from "../../components/Boxes/UserClassBox/UserClassBox";
import LargeMateClassBox from "../../components/Boxes/LargeMateClassBox/LargeMateClassBox";
import { useData } from "../../scripts/useData";
import styles from "./Explore.module.css";

function Explore() {
  const [data] = useData();
  const timetables = data.timetables;
  
  const generateMatesTimetables = () => {
    let timetableElements = [];
    for (let timetable of timetables) {
      if (!timetable.isUser && timetable.className !== "new") {
        timetableElements.push(
        <LargeMateClassBox
        className={timetable.className}
        room={timetable.room}
        matesNames={timetable.matesNames}
        subject={timetable.subject}
        teacher={timetable.teacher}
        key={"matesTimetable-" + timetable.index}
        />);
      }
    }
    return timetableElements;
  }
  
  const element = (
    <>
    {/* <h2 className={styles.setTimeAndDayLabel}>Set time and day</h2> */}
    <div className={styles.swipers}>
      <SwiperWrap className={styles.swiper} type={"days"} />
      <SwiperWrap className={styles.swiper} type={"time"} start={7} length={10} />
      <div className={styles.swipersIndicator}></div>
      <div className={styles.swipersGradient}></div>
    </div>
    <UserClassBox />
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
