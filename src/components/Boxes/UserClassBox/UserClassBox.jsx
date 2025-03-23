import StepProgressBar from "../../ProgressBar/StepProgressBar/StepProgressBar";
import React from "react";
import "material-symbols";
import styles from "./UserClassBox.module.css";
import PropTypes from "prop-types";

function UserClassBox({ room = "N/A", subject = "N/A", teacher = "N/A"}) {
    const element = (
        <>
            <div className={styles.container}>
                <h2 className={styles.room}>{room}</h2>
                <h3 className={styles.subjectAndTeacher}>
                        <span className={styles.subject}>{subject}</span> {" - "}
                        <span className={styles.teacher}>{teacher}</span>
                </h3>
                <StepProgressBar totalBars={5} activeBars={1} />
            </div>
        </>
    );

    return element;
}

UserClassBox.propTypes = {
    room: PropTypes.string,
    subject: PropTypes.string,
    teacher: PropTypes.string,
};


export default UserClassBox;
