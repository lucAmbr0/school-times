import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./Timetables.module.css";
import useVibration from "../../scripts/useVibration";
// import Dropdown from "../../components/Dropdown/ThemeSelector";

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
        {/* <div className={styles.timetableSettingsContainer}>
            <div className={styles.classSelectorContainer}>
                <p>Class</p>
                <Dropdown />
            </div>
            <div className={styles.classInfoContainer}>

            </div>
        </div> */}
      </div>
    </>
  );

  return element;
}

export default Timetables;
