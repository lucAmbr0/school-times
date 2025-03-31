import DarkModeSwitch from "../../components/Switch/DarkModeSwitch/DarkModeSwitch";
import ThemeSelector from "../../components/Dropdown/ThemeSelector";
import LanguageSelector from "../../components/Dropdown/LanguageSelector";
import TextInput from "../../components/TextInput/TextInput";
import styles from "./Settings.module.css";

function Settings({onBack}) {

  const handleBack = () => {
    document.querySelector("#settings").classList.add(styles.exitAnimation);
    document.querySelector("#settingsHeader").classList.add(styles.exitAnimation);
    setTimeout(() => {
      onBack();
    }, 300);
  }
  
  const element = (
    <>
        <div id={"settingsHeader"} className={styles.header}>
          <button onClick={handleBack}>
            <span className="material-symbols-outlined">arrow_back</span>Back
          </button>
        </div>
      <div id={"settings"} className={styles.container}>
        <h1 className={styles.title}>Settings</h1>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Preferences</h3>
          <div className={styles.settingsGrid}>
            <label className={styles.settingLabel}>Dark mode</label>
            <DarkModeSwitch />
            <label className={styles.settingLabel}>Color theme</label>
            <ThemeSelector options={["Cornflower", "Pine"]} />
            <label className={styles.settingLabel}>Language</label>
            <LanguageSelector options={["English"]} />
          </div>
        </div>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Customization</h3>
          <div className={styles.settingsGrid}>
            <label className={styles.settingLabel}>Name</label>
            <TextInput path={"user.name"} />
            <label className={styles.settingLabel}>Class name</label>
            <TextInput path={"user.className"} />
            <label className={styles.settingLabel}>School name</label>
            <TextInput path={"user.schoolName"} />
            <label className={styles.settingLabel}>Favorite subject</label>
            <TextInput path={"user.favoriteSubject"} />
          </div>
        </div>
      </div>
    </>
  );

  return element;
}

export default Settings;
