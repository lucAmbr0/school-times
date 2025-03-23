import PercentageProgressBar from "../../ProgressBar/PercentageProgressBar/PercentageProgressBar";
import VerticalDots from "../../VerticalDots/VerticalDots";
import styles from "./SmallMateClassBox.module.css";
import PropTypes from "prop-types";

function SmallMateClassBox({ className = "N/A", room = "N/A", subject = "N/A", teacher = "N/A" }) {

  SmallMateClassBox.propTypes = {
    className: PropTypes.string,
    room: PropTypes.string,
    subject: PropTypes.string,
    teacher: PropTypes.string,
  };

  return (
    <div className={styles.box}>
      <VerticalDots dots={5} activeDotIdx={3} />
      <h3 className={styles.className}>Class {className}</h3>
      <h4 className={styles.room}>{room}</h4>
      <h5 className={styles.subjectAndTeacher}>
        {subject}
        <br />
        {teacher}
      </h5>
      <PercentageProgressBar percentage={30} className={styles.progressBar} />
    </div>
  );
}

export default SmallMateClassBox;
