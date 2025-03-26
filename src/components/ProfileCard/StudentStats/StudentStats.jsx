import styles from "./StudentStats.module.css";

function StudentStats({label, value}) {
    const element = (
    <div className={styles.container}>
        <div className={styles.bubble}>
            <h3 className={styles.number}>{value ? value : "0"}</h3>
        </div>
        <h4 className={styles.label}>{label ? label : "N/A"}</h4>
    </div>);

    return element;
}

export default StudentStats;