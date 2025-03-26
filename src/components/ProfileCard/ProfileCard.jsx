import styles from "./ProfileCard.module.css";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import { useData } from "../../scripts/useData";

function ProfileCard() {
  const [data, setData] = useData();

  const element = (
    <div className={styles.container}>
      <ProfileOverview />
      <div className={styles.favSubjContainer}>
        <h4 className={styles.favSubjLabel}>Favorite subject:</h4>
        <h3 className={styles.favSubj}>{data.user.favoriteSubject ? data.user.favoriteSubject : "Unknown"}</h3>
      </div>
    </div>
  );

  return element;
}

export default ProfileCard;
