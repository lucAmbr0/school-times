import styles from "./GradesList.module.css";

function GradesList({grades}) {
    let gradeElements = [];

    for (let grade of grades) {
        let gradeBubbleStyles = `${styles.gradeBubble}`;
        if (grade >= 8) {
            gradeBubbleStyles += ` ${styles.excellent}`;
        } else if (grade >= 6) {
            gradeBubbleStyles += ` ${styles.good}`;
        } else {
            gradeBubbleStyles += ` ${styles.bad}`;
        }
        gradeElements.push(
            <div className={gradeBubbleStyles} key={`grade-${gradeElements.length}`}>
                <h4 className={styles.gradeValue}>{grade ? grade : "0"}</h4>
            </div>
        );
    }
    
    const element = (
        <div className={styles.container}>
            {gradeElements}
        </div>
    );

    return element;
}

export default GradesList;