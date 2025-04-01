import HorizontalLine from "../Separator/HorizontalLine";
import Overlay from "../Overlay/Overlay";
import styles from "./UpdateNotice.module.css";

function UpdateNotice({ oldVersion, newVersion }) {
  const element = (
    <>
    <Overlay blur={"10px"} color="rgba(0,0,0, 0.2)" zIndex={110} />
      <div className={styles.container}>
        <h2>The app just got updated!</h2>
        <HorizontalLine
          color={"var(--palette-950)"}
          length={"90%"}
          margin={"10px 0"}
        />
      </div>
    </>
  );
  return element;
}

export default UpdateNotice;
