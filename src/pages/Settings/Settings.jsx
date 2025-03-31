import DarkModeSwitch from "../../components/Switch/DarkModeSwitch/DarkModeSwitch";
import ThemeSelector from "../../components/Dropdown/ThemeSelector";
import LanguageSelector from "../../components/Dropdown/LanguageSelector";
import styles from "./Settings.module.css";

function Settings({onBack}) {

  const handleBack = () => {
    document.querySelector("#settings").classList.add(styles.exitAnimation);
    setTimeout(() => {
      onBack();
    }, 300);
  }
  
  const element = (
    <>
      <div id={"settings"} className={styles.container}>
        <div className={styles.header}>
          <button onClick={handleBack}>
            <span className="material-symbols-outlined">arrow_back</span>Back
          </button>
        </div>
        <h1 className={styles.title}>Settings</h1>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Preferences</h3>
          <div className={styles.settingsGrid}>
            <p className={styles.settingLabel}>Dark mode</p>
            <DarkModeSwitch />
            <p className={styles.settingLabel}>Color theme</p>
            <ThemeSelector options={["Cornflower", "Pine"]} />
            <p className={styles.settingLabel}>Language</p>
            <LanguageSelector options={["English"]} />
          </div>
        </div>
      </div>
    </>
  );

  return element;
}

export default Settings;
