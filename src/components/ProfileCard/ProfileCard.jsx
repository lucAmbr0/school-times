import styles from "./ProfileCard.module.css";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import FavoriteSubject from "./FavoriteSubject/FavoriteSubject";
import { useData } from "../../scripts/useData";

function ProfileCard() {
  const [data, setData] = useData();

  const element = (
    <div className={styles.container}>
      <ProfileOverview user={data.user} />
      <FavoriteSubject favSubject={data.user.favoriteSubject} />
    </div>
  );

  return element;
}

export default ProfileCard;
