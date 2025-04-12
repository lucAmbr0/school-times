import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import boxStyles from "../Box.module.css";
import styles from "./SmallChip.module.css";
import { useData } from "../../../scripts/useData";

function SmallChip({ text, iconName, value: initialValue, type, onClick }) {
  const [data, setData] = useData();
  const iconClasses = `material-symbols-outlined ${styles.icon}`;
  const isEuro = type === "euro";
  const isProgress = type === "progress";

  const [value, setValue] = useState(() => {
    if (type === "percent")
      return initialValue !== undefined ? `${initialValue}%` : "N/A";
    if (isProgress) return [0, 0];
    if (initialValue === undefined) return "N/A";
    return initialValue;
  });

  let valueStyles = `${styles.value}`;
  if (type === "link") valueStyles += ` ${styles.underlineLink}`;

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (isEuro) {
        setValue((prev) => {
          const parsed = parseFloat(prev);
          return !isNaN(parsed) ? (parsed + 0.1).toFixed(2) : prev;
        });
      } else if (isProgress) {
        setValue(([done, total]) => [done, total + 1]);
      }
    },
    onSwipedDown: () => {
      if (isEuro) {
        setValue((prev) => {
          const parsed = parseFloat(prev);
          const newVal = parsed - 0.1;
          return !isNaN(parsed)
            ? newVal >= 0
              ? newVal.toFixed(2)
              : "0.00"
            : prev;
        });
      } else if (isProgress) {
        setValue(([done, total]) => [
          Math.min(done, total - 1),
          Math.max(0, total - 1),
        ]);
      }
    },
    onSwipedLeft: () => {
      if (isProgress) {
        setValue(([done, total]) => [Math.max(0, done - 1), total]);
      }
    },
    onSwipedRight: () => {
      if (isProgress) {
        setValue(([done, total]) => [Math.min(total, done + 1), total]);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false,
  });

  let displayValue = value;
  if (isEuro && !isNaN(parseFloat(value))) {
    displayValue = `€ ${parseFloat(value).toFixed(2)}`;
  } else if (isProgress && Array.isArray(value)) {
    displayValue = `${value[0]}/${value[1]}`;
  }

  let progressStyle = {};
  if (isProgress) {
    const [done, total] = Array.isArray(value) ? value : [0, 0];
    const percent = total === 0 ? 0 : (done / total) * 100;
    displayValue = `${done}/${total}`;
    progressStyle.background = `linear-gradient(to right, var(--palette-200) ${percent}%, var(--palette-100) ${percent}%)`;
  }

  return (
    <button
      className={[
        boxStyles.box,
        boxStyles.thinBox,
        styles.box,
        isProgress ? styles.progressBackground : "",
      ].join(" ")}
      style={progressStyle}
      onClick={onClick}
      {...(isEuro || isProgress ? swipeHandlers : {})}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{text}</h3>
        <div className={styles.iconContainer}>
          {iconName && <span className={iconClasses}>{iconName}</span>}
        </div>
      </div>
      <h2 className={valueStyles}>{type === "link" ? "Open" : displayValue}</h2>
    </button>
  );
}

export default SmallChip;
