import styles from "./ProfileCard.module.css";
import Button from "../Button/Button";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import FavoriteSubject from "./FavoriteSubject/FavoriteSubject";
import StudentStats from "./StudentStats/StudentStats";
import GradesList from "./GradesList/GradesList";
import HorizontalLine from "../Separator/HorizontalLine";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFlip } from "swiper/modules";
import { useData } from "../../scripts/useData";

function ProfileCard() {
  const [data] = useData();
  const daysStreak = 0;

  const element = (
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
      <GradesList grades={["", "", "", "", ""]} />
    </div>
  );

  const pokeStreak = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${daysStreak + 1}.png`;

  const back = (
    <div className={styles.container}>
      <div className={styles.elementPlchd}>{element}</div>
      <div className={styles.backDiv}>
        <img src={pokeStreak} alt="Your pokemon streak!" className={styles.pokeStreak} />
        <h2 className={styles.pokeStreakLabel}><span style={{fontWeight: 600}}>{daysStreak} days</span> since last absence</h2>
        <h2 className={styles.backLabel}>Save and share this card to your friends!</h2>
      </div>
      <div className={styles.btnContainer}>
        <Button text="Download" border="rounded" variant="filled" iconName="download" />
        <Button text="Share" border="rounded" variant="filled" iconName="share" />
      </div>
    </div>
  );

  const swiper = (
    <Swiper
      effect={'flip'}
      grabCursor={true}
      loop={true}
      touchRatio={1}
      modules={[EffectFlip]}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.swiperSlide}>{element}</SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>{back}</SwiperSlide>
    </Swiper>
  );

  return swiper;
}

export default ProfileCard;
