import styles from "./ProfileCard.module.css";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import FavoriteSubject from "./FavoriteSubject/FavoriteSubject";
import StudentStats from "./StudentStats/StudentStats";
import GradesList from "./GradesList/GradesList";
import HorizontalLine from "../Separator/HorizontalLine";
import { useData } from "../../scripts/useData";

function ProfileCard() {
  const [data, setData] = useData();

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
      <GradesList grades={["", "", "", "", "", "", "", ""]} />
    </div>
  );

  return element;
}

export default ProfileCard;
