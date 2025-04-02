import DarkModeSwitch from "../../components/Switch/DarkModeSwitch/DarkModeSwitch";
import ThemeSelectorBox from "../../components/Dropdown/ThemeSelectorBox";
import Button from "../../components/Button/Button";
import LanguageSelector from "../../components/Dropdown/LanguageSelector";
import TextInput from "../../components/TextInput/TextInput";
import useVibration from '../../scripts/useVibration';
import Switch from "../../components/Switch/Switch/Switch";
import styles from "./Settings.module.css";
import { useState } from "react";
import { useData } from "../../scripts/useData";

function Settings({onBack}) {
  const vibrate = useVibration();
  const [data, setData] = useData();
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const handleBack = () => {
    vibrate(5);
    document.querySelector("#settings").classList.add(styles.exitAnimation);
    document.querySelector("#settingsHeader").classList.add(styles.exitAnimation);
    setTimeout(() => {
      onBack();
    }, 300);
  }

  const element = (
    <>
      {showThemeSelector ? <ThemeSelectorBox onBack={() => setShowThemeSelector(false)} /> : ""}
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
            <div className={styles.themeSelectorBtnContainer}>
            <Button onClick={() => setShowThemeSelector(true)} border="soft" variant="filled" iconName="edit" text={data.settings.palette} />
            </div>
            <label className={styles.settingLabel}>Haptic feedback</label>
            <Switch path={"settings.hapticFeedback"} />
            <label className={styles.settingLabel}>Language</label>
            <LanguageSelector options={["English"]} />
          </div>
        </div>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Customization</h3>
          <div className={styles.settingsGrid}>
            <label htmlFor="name" className={styles.settingLabel}>Name</label>
            <TextInput maxLength={20} path={"user.name"} id={"name"} name={"Name"} />
            <label htmlFor="class-name" className={styles.settingLabel}>Class name</label>
            <TextInput maxLength={5} path={"user.className"} id={"class-name"} name={"Class name"} />
            <label htmlFor="school-name" className={styles.settingLabel}>School name</label>
            <TextInput maxLength={40} path={"user.schoolName"} id={"school-name"} name={"School name"} />
            <label htmlFor="favorite-subject" className={styles.settingLabel}>Favorite subject</label>
            <TextInput maxLength={40} path={"user.favoriteSubject"} id={"favorite-subject"} name={"Favorite subject"} />
          </div>
        </div>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>School data</h3>
          <p className={styles.schDataLabel}>Write your rooms, subjects and teachers in the boxes below separated by comma to fill classes' timetables</p>
          <h3 className={styles.textAreaLabel}>Rooms</h3>
          <TextInput maxLength={512} path={"user.rooms"} type="textarea" id={"rooms"} name={"Rooms"} placeholder={"Room 25, Electronics Lab 2, Main hall"} />
          <h3 className={styles.textAreaLabel}>Subjects</h3>
          <TextInput maxLength={512} path={"user.subjects"} type="textarea" id={"subjects"} name={"Subjects"} placeholder={"English, Maths, History"} />
          <h3 className={styles.textAreaLabel}>Teachers</h3>
          <TextInput maxLength={512} path={"user.teachers"} type="textarea" id={"teachers"} name={"Teachers"} placeholder={"Bess Ross, Jesus Byrd, Emily Schmidt"} />
        </div>
      </div>
    </>
  );

  return element;
}

export default Settings;
