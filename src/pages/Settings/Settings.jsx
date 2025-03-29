import Button from "../../components/Button/Button";
import styles from "./Settings.module.css";

function Settings({onBack}) {
  const element = (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={onBack}>
            <span className="material-symbols-outlined">arrow_back</span>Back
          </button>
        </div>
        <h1 className={styles.title}>Settings</h1>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Preferences</h3>
          <div className={styles.settingsGrid}>
          </div>
        </div>
      </div>
    </>
  );

  return element;
}

export default Settings;
