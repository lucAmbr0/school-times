import HorizontalLine from "../Separator/HorizontalLine";
import Overlay from "../Overlay/Overlay";
import styles from "./UpdateNotice.module.css";
import Button from "../Button/Button";

function UpdateNotice({ oldVersion, newVersion, cleared, closeAction }) {

  const handleSeeChangelog = () => {
    window.open("https://github.com/lucAmbr0/school-times/commits/main", "_blank");    
  }

  const handleClose = () => {
    document.querySelector("#updateNoticeContainer").classList.add(styles.animationClose);
    setTimeout(() => {
      closeAction();
    }, 200);
  }

  const updateMessage = "New update!" + (cleared ? "Incompatible versions: App data cleared." : "");
  const updateSubtitle = "You are now using the latest version of School Times. Updates help us improve the app and fix bugs. If you have any questions or feedback, please let us know!";
  
  const element = (
    <>
    <Overlay blur={"10px"} color="rgba(0,0,0, 0.2)" zIndex={110} />
      <div id="updateNoticeContainer" className={styles.container}>
        <div className={styles.notificationHeader}>
          <span className="material-symbols-outlined">check_circle</span>
        <h2 className={styles.title}>{updateMessage}</h2>
        </div>
        <h4 className={styles.subtitle}>{updateSubtitle}</h4>
        <HorizontalLine
          color={"var(--palette-900)"}
          length={"100%"}
          alpha={0.5}
          margin={"20px 0"}
        />
        <div className={styles.versionsContainer}>
          <h3 className={styles.version} id="oldVersion">v{oldVersion ? oldVersion : "x.y.z"}</h3>
          <span className="material-symbols-outlined">arrow_right_alt</span>
          <h3 className={styles.version} id="newVersion">v{newVersion ? newVersion : "x.y.z"}</h3>
        </div>
        <div className={styles.actionsContainer}>
          <Button onClick={handleSeeChangelog} border="soft" variant="clear" text="See changelog" />
          <Button onClick={handleClose} iconName="done"  border="soft" variant="filled" text="Close" />
        </div>
      </div>
    </>
  );
  return element;
}

export default UpdateNotice;
