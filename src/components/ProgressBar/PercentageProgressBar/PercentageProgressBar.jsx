import styles from "./PercentageProgressBar.module.css";

function PercentageProgressBar({ percentage }) {

    const barActiveStyle = {
        width: `${percentage}%`,
    }
    
    const element = (
        <>
            <div className={styles.bar}>
                <div className={styles.barActive} style={barActiveStyle}></div>
            </div>
        </>
    );

    return element;
}

export default PercentageProgressBar;
