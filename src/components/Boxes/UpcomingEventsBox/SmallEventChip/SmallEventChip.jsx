import styles from "./SmallEventChip.module.css";

function SmallEventChip({day = "00", eventName = "No Event"}) {

  return (
    <div className={styles.chipContainer}>
        <div className={styles.dayContainer}>{day}</div>
        <div className={styles.dayContainerInv}>{day}</div>
        <h3 className={styles.eventLabel}>{eventName}</h3>
    </div>
  );
}

export default SmallEventChip;
