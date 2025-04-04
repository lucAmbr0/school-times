import PageHeader from "../../components/PageHeader/PageHeader";
import TextInput from "../../components/TextInput/TextInput";
import Dropdown from "../../components/Dropdown/Dropdown";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import useVibration from "../../scripts/useVibration";
import styles from "./Timetables.module.css";

function Timetables({onBack}) {
  const vibrate = useVibration();

  const handleBack = () => {
    vibrate(5);
    document.querySelector("#timetablesPage").classList.add(styles.exitAnimation);
    document.querySelector("#pageHeader").classList.add(styles.exitAnimation);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  const element = (
    <>
      <PageHeader handleBack={handleBack} />
      <div id="timetablesPage" className={styles.container}>
        <h1 className={styles.title}>Timetables</h1>
        <div className={styles.timetableSettingsContainer}>
            <div className={styles.classSelectorContainer}>
                <h4>Class</h4>
                <Dropdown />
            </div>
            <div className={styles.settingsGrid}>
                <label className={styles.settingLabel} htmlFor="className">Class name</label>
                <TextInput path={"settings.buffer"} />
                <label className={styles.settingLabel} htmlFor="className">Mates names</label>
                <TextInput path={"settings.buffer"} />
            </div>
            <HorizontalLine color={"var(--palette-200)"} length={"95%"} height={"1px"} />
        </div>
      </div>
    </>
  );

  return element;
}

export default Timetables;
