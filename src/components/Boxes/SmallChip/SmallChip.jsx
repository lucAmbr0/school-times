import { useState, useEffect } from "react";
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
    if (isProgress) return [data.settings.widgets.homeworkProgress[0] || 0, data.settings.widgets.homeworkProgress[1] || 0];
    if (isEuro) return data.settings.widgets.coffeeBalance || 0;
    if (initialValue === undefined) return "N/A";
    return initialValue;
  });

  useEffect(() => {
    if (isEuro) {
      setValue(data.settings.widgets.coffeeBalance || 0);
    } else if (isProgress) {
      setValue([
        data.settings.widgets.homeworkProgress[0] || 0,
        data.settings.widgets.homeworkProgress[1] || 0,
      ]);
    }
  }, [data, isEuro, isProgress]);

  const updateData = (newValue) => {
    if (isEuro) {
      setData({ ...data, settings: { ...data.settings, widgets: { ...data.settings.widgets, coffeeBalance: newValue } } });
    } else if (isProgress) {
      setData({
        ...data,
        settings: {
          ...data.settings,
          widgets: {
            ...data.settings.widgets,
            homeworkProgress: newValue,
          },
        },
      });
    }
  };

  let valueStyles = `${styles.value}`;
  if (type === "link") valueStyles += ` ${styles.underlineLink}`;

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (isEuro) {
        setValue((prev) => {
          const parsed = parseFloat(prev);
          const newValue = !isNaN(parsed) ? (parsed + 0.1).toFixed(2) : prev;
          updateData(newValue);
          return newValue;
        });
      } else if (isProgress) {
        setValue(([done, total]) => {
          const newValue = [done, total + 1];
          updateData(newValue);
          return newValue;
        });
      }
    },
    onSwipedDown: () => {
      if (isEuro) {
        setValue((prev) => {
          const parsed = parseFloat(prev);
          const newVal = parsed - 0.1;
          const newValue = !isNaN(parsed)
            ? newVal >= 0
              ? newVal.toFixed(2)
              : "0.00"
            : prev;
          updateData(newValue);
          return newValue;
        });
      } else if (isProgress) {
        setValue(([done, total]) => {
          const newValue = [
            Math.min(done, total - 1),
            Math.max(0, total - 1),
          ];
          updateData(newValue);
          return newValue;
        });
      }
    },
    onSwipedLeft: () => {
      if (isProgress) {
        setValue(([done, total]) => {
          const newValue = [Math.max(0, done - 1), total];
          updateData(newValue);
          return newValue;
        });
      }
    },
    onSwipedRight: () => {
      if (isProgress) {
        setValue(([done, total]) => {
          const newValue = [Math.min(total, done + 1), total];
          updateData(newValue);
          return newValue;
        });
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
