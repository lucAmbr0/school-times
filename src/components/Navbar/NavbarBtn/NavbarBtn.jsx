import useVibration from "../../../scripts/useVibration";
import { umamiFullTrack } from "../../../scripts/umamiTrack";
import { useData } from "../../../scripts/useData";
import styles from "./NavbarBtn.module.css";

function NavbarBtn({onNavigate, text = "", iconName = "", active = false}) {
  const iconClasses = `material-symbols-outlined ${styles.icon}`;
  const pillClasses = `${styles.pill} ${active && styles.pillActive}`;
  const textClasses = `${styles.label} ${active && styles.labelActive}`;
  const [data] = useData();
  const vibrate = useVibration();

  const handleBtnClick = () => {
    onNavigate(text);
    vibrate(5);
    umamiFullTrack(data);
  };

  const element = (
    <button onClick={handleBtnClick}>
      <div className={pillClasses}>
        {iconName && <span className={iconClasses}>{iconName}</span>}
      </div>
      <p className={textClasses}> {text && text} </p>
    </button>
  );

  return element;
}

export default NavbarBtn;
