import styles from "./SmallEventChip.module.css";

function SmallEventChip({day = "00", eventName = "No Event"}) {

  const extractDay = (date) => {
    return date.split(", ")[1].split(" ")[0];
  };
  
  return (
    <div className={styles.chipContainer}>
        <div className={styles.dayContainer}>{extractDay(day)}</div>
        <div className={styles.dayContainerInv}>{extractDay(day)}</div>
        <h3 className={styles.eventLabel}>{eventName}</h3>
    </div>
  );
}

export default SmallEventChip;
