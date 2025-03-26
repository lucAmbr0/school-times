import boxStyles from "../Box.module.css";
import styles from "./SmallChip.module.css";

function SmallChip({ text, iconName, value, type, onClick }) {
  const iconClasses = `material-symbols-outlined ${styles.icon}`;
  let valueStyles = `${styles.value}`;

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
        if (value[1]) value = `${value[0]}/${value[1]}`;
        else value = `N/A`;
        break;
      case "link":
        valueStyles = `${styles.value} ${styles.underlineLink}`;
        break;
    }
  }

  return (
    <button
      className={[boxStyles.box, boxStyles.thinBox, styles.box].join(" ")}
      onClick={onClick}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{text}</h3>
        <div className={styles.iconContainer}>
          {iconName && <span className={iconClasses}>{iconName}</span>}
        </div>
      </div>
      <h2 className={valueStyles}>{type == "link" ? "Open" : value}</h2>
    </button>
  );
}

export default SmallChip;
