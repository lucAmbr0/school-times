import styles from "./ProfileCard.module.css";
import Button from "../Button/Button";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import FavoriteSubject from "./FavoriteSubject/FavoriteSubject";
import StudentStats from "./StudentStats/StudentStats";
import GradesList from "./GradesList/GradesList";
import HorizontalLine from "../Separator/HorizontalLine";
import useVibration from '../../scripts/useVibration';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFlip } from "swiper/modules";
import { useData } from "../../scripts/useData";
import { useState, useEffect } from "react";

function ProfileCard() {
  const vibrate = useVibration();
  const [data] = useData();
  const [daysStreak, setDaysStreak] = useState(0);
  const icon360Styles = `material-symbols-outlined ${styles.icon360}`;

  useEffect(() => {
    const interval = setInterval(() => {
      if (daysStreak < 365) setDaysStreak((prev) => prev + 1);
      else setDaysStreak(0);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const frontCard = (
    <div className={styles.container}>
      <ProfileOverview user={data.user} />
      <FavoriteSubject favSubject={data.user.favoriteSubject} />
      <HorizontalLine
        length={"90%"}
        height={"1px"}
        margin={"5px auto"}
        color={"var(--palette-300)"}
        alpha={0.75}
      />
      <h3 className={styles.sectionLabel}>Year overview</h3>
      <div className={styles.statsContainer}>
        <StudentStats label={"Absences"} value={0} />
        <StudentStats label={"Infractions"} value={0} />
        <StudentStats label={"Delays"} value={0} />
        <StudentStats label={"GPA"} value={0} />
      </div>
      <h3 className={styles.sectionLabel}>Latest grades</h3>
      <GradesList className={styles.gradesList} grades={["", "", "", "", ""]} />
    </div>
  );

  const pokemonIndexes = [
    10, 19, 25, 16, 41, 52, 54, 66, 93, 125, 123, 130, 143, 248, 373, 448, 445,
    635, 468, 637, 376, 149, 257, 658, 681, 9, 718, 384, 890, 151, 150,
  ];
  const pokeStreak = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${
    pokemonIndexes[daysStreak > 30 ? 30 : daysStreak]
  }.png`;

  const back = (
    <div className={styles.container}>
      <div className={styles.elementPlchd}>{frontCard}</div>
      <div className={styles.backDiv}>
        <img
          src={pokeStreak}
          alt="Your pokemon streak!"
          className={styles.pokeStreak}
        />
        <h2 className={styles.pokeStreakLabel}>
          <span style={{ fontWeight: 600 }}>{daysStreak} days</span> since last
          absence
        </h2>
        <h2 className={styles.backLabel}>
          Save and share this card to your friends!
        </h2>
      </div>
      <div className={styles.btnContainer}>
        <Button
          text="Download"
          border="rounded"
          variant="filled"
          iconName="download"
        />
        <Button
          text="Share"
          border="rounded"
          variant="filled"
          iconName="share"
        />
      </div>
    </div>
  );

  const swiperElement = (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      loop={true}
      touchRatio={1}
      modules={[EffectFlip]}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.swiperSlide}>{frontCard}</SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>{back}</SwiperSlide>
      <div
        className={styles.icon360Container}
        onClick={() => {
          vibrate(100);
          const swiper = document.querySelector(`.${styles.swiper}`).swiper;
          if (swiper.activeIndex === 0) {
            swiper.slideNext();
          } else if (swiper.activeIndex === 1) {
            swiper.slidePrev();
          }
        }}
      >
        <span className={icon360Styles}>360</span>
        Rotate
      </div>
    </Swiper>
  );

  return swiperElement;
}

export default ProfileCard;
