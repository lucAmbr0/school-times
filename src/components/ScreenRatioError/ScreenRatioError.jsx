import Overlay from "../Overlay/Overlay";
import styles from "./ScreenRatioError.module.css";

function ScreenRatioError() {
  const messageTitle = "Desktop screens are not supported";
  const subtitle = `This app is not ready for desktop screens yet. Please use this app on a mobile device with a vertical screen ratio. You can still access the app by resizing your browser to a vertical screen and reloading the page.`;

  const element = (
    <>
      <Overlay blur={"10px"} color="rgba(0,0,0, 0)" zIndex={110} />
      <div id="updateNoticeContainer" className={styles.container}>
        <div className={styles.notificationHeader}>
          <span className="material-symbols-outlined">error</span>
          <h2 className={styles.title}>{messageTitle}</h2>
        </div>
        <h4 className={styles.subtitle}>{subtitle}</h4>
      </div>
    </>
  );

  return element;
}

export default ScreenRatioError;
