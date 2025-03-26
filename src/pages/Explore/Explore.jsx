import SwiperWrap from "../../components/SwiperWrap/SwiperWrap";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import UserClassBox from "../../components/Boxes/UserClassBox/UserClassBox";
import LargeMateClassBox from "../../components/Boxes/LargeMateClassBox/LargeMateClassBox";
import styles from "./Explore.module.css";
import { useEffect } from "react";

function Explore() {
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
    <LargeMateClassBox />
    <LargeMateClassBox />
    <LargeMateClassBox />
    <LargeMateClassBox />
    </>
  );

  return element;
}

export default Explore;
