import SwiperWrap from "../../components/SwiperWrap/SwiperWrap";
import styles from "./Schedule.module.css";

function Schedule() {
  const element = (
    <>
    <div className={styles.swipers}>
    <SwiperWrap className={styles.swiper} type={"days"} />
    <SwiperWrap className={styles.swiper} type={"time"} start={7} length={10} />

    </div>
    </>
  );

  return element;
}

export default Schedule;
