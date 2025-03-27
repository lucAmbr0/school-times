import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./Gradebook.module.css"

function Gradebook() {
  const icon360Styles = `material-symbols-outlined ${styles.icon360}`;

  
  const element = (
    <>
    <ProfileCard />
    <div className={styles.icon360Container}>
    <span className={icon360Styles}>360</span>
    Rotate
    </div>
  </>
  )
  
  return ( element );
}

export default Gradebook;
