import boxStyles from "../Box.module.css";
import SmallEventChip from "./SmallEventChip/SmallEventChip";
import styles from "./UpcomingEventsBox.module.css";

function UpcomingEventsBox({}) {

  return (
    <div className={boxStyles.box}>
        <h3 className={boxStyles.boxTitle}>Upcoming</h3>
        <div className={styles.eventsContainer}>
            <SmallEventChip />
            <SmallEventChip />
            <SmallEventChip />
        </div>
    </div>
  );
}

export default UpcomingEventsBox;
