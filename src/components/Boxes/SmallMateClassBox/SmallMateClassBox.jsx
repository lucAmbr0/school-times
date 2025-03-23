import styles from "./SmallMateClassBox.module.css";

function SmallMateClassBox({className, room, subject, teacher}) {

  return (
    <div className={styles.box}>
        <h3 className={styles.className}>Class {className}</h3>
        <h4 className={styles.room}>{room}</h4>
        <h5 className={styles.subject}>{subject}<br />{teacher}</h5>
    </div>
  );
}

export default SmallMateClassBox;
