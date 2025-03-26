import styles from "./ProfileCard.module.css";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import FavoriteSubject from "./FavoriteSubject/FavoriteSubject";
import StudentStats from "./StudentStats/StudentStats";
import GradesList from "./GradesList/GradesList";
import { useData } from "../../scripts/useData";

function ProfileCard() {
  const [data, setData] = useData();

  const element = (
    <div className={styles.container}>
      <ProfileOverview user={data.user} />
      <FavoriteSubject favSubject={data.user.favoriteSubject} />
      <div className={styles.statsContainer}>
        <StudentStats label={"Absences"} value={0} />
        <StudentStats label={"Infractions"} value={0} />
        <StudentStats label={"Delays"} value={0} />
        <StudentStats label={"Grades"} value={0} />
      </div>
      <h3 className={styles.latestGradesLabel}>Latest grades</h3>
      <GradesList grades={["", "", "", "", "", "", "", ""]} />
    </div>
  );

  return element;
}

export default ProfileCard;
