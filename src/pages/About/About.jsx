import PageHeader from "../../components/PageHeader/PageHeader";
import { useData } from "../../scripts/useData";
import useVibration from "../../scripts/useVibration";
import styles from "./About.module.css";

function About({ onBack }) {
  const vibrate = useVibration();
  const [data, setData] = useData();

  const handleBack = () => {
    vibrate(5);
    document.querySelector("#aboutPage").classList.add(styles.exitAnimation);
    document.querySelector("#pageHeader").classList.add(styles.exitAnimation);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  const element = (
    <>
      <PageHeader handleBack={handleBack} />
      <div id="aboutPage" className={styles.container}>
        <h1 className={styles.title}>About</h1>
      </div>
    </>
  );

  return element;
}

export default About;
