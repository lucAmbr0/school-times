import boxStyles from "../Box.module.css";
import styles from "./SmallChip.module.css";

function SmallChip({ text, iconName, value, type }) {
  const iconClasses = `material-symbols-outlined ${styles.icon}`;

  if (value === undefined) {
    value = "N/A";
  } else {
    switch (type) {
      case "euro":
        value = `€ ${value}`;
        break;
      case "percent":
        value = `${value}%`;
        break;
      case "progress":
        value = `${value[0]}/${value[1]}`;
        break;
    }
  }

  return (
    <div className={[boxStyles.box, boxStyles.thinBox, styles.box].join(" ")}>
      <div className={styles.header}>
        <h3 className={styles.title}>{text}</h3>
        <div className={styles.iconContainer}>
          {iconName && <span className={iconClasses}>{iconName}</span>}
        </div>
      </div>
      <h2 className={styles.value}>{type == "link" ? "Open" : value}</h2>
    </div>
  );
}

export default SmallChip;
