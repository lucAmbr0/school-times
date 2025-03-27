import packageJson from "../../../package.json";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./Profile.module.css"

function Profile() {
  const icon360Styles = `material-symbols-outlined ${styles.icon360}`;
  
  const element = (
    <>
      <div>
        <ProfileCard />
        <div className={styles.icon360Container}>
          <span className={icon360Styles}>360</span>
          Rotate
        </div>
        <p className={styles.versionLabel}>Current version: v{packageJson.version}</p>
      </div>
    </>
  );

  return element;
}

export default Profile;
