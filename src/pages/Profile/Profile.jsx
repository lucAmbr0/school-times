import packageJson from "../../../package.json";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./Profile.module.css"

function Profile() {
  const element = (
    <>
      <div>
        <ProfileCard />
        <p className={styles.versionLabel}>Current version: v{packageJson.version}</p>
      </div>
    </>
  );

  return element;
}

export default Profile;
