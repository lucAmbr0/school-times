import ProgressBar from "../../ProgressBar/ProgressBar";
import React from "react";
import "material-symbols";
import styles from "./UserClassBox.module.css";
import PropTypes from "prop-types";

function UserClassBox({ room, subject, teacher}) {
    if (room === undefined) {
        console.warn("Warning: 'room' prop is not passed.");
    }
    if (subject === undefined) {
        console.warn("Warning: 'subject' prop is not passed.");
    }
    if (teacher === undefined) {
        console.warn("Warning: 'teacher' prop is not passed.");
    }

    const element = (
        <>
            <div className={styles.container}>
                <h2 className={styles.room}>{room}</h2>
                <h3 className={styles.subjectAndTeacher}>
                        <span className={styles.subject}>{subject}</span> {" - "}
                        <span className={styles.teacher}>{teacher}</span>
                </h3>
                <ProgressBar totalBars={5} activeBars={1} />
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
