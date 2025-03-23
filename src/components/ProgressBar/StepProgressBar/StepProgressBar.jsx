import styles from "./StepProgressBar.module.css";
import PropTypes from 'prop-types';

function StepProgressBar({ totalBars, activeBars }) {
    if (totalBars === undefined) {
        console.warn('Warning: totalBars prop was not passed to ProgressBar.');
        totalBars = 5;
    }
    if (activeBars === undefined) {
        console.warn('Warning: activeBars prop was not passed to ProgressBar.');
        activeBars = 1;
    }

    const bars = [];
    for (let i = 0; i < totalBars; i++) {
        bars.push(
            <div
                key={i}
                className={`${styles.bar} ${i < activeBars ? styles.barActive : ""}`}
            ></div>
        );
    }

    const element = (
        <>
            <div className={styles.barContainer}>{bars}</div>
        </>
    );

    return element;
}

StepProgressBar.propTypes = {
    totalBars: function(props, propName, componentName) {
        if (props[propName] < 1 || props[propName] > 10) {
            return new Error(
                `${componentName} only allows ${propName} between 1 and 10.`
            );
        }
    },
    activeBars: function(props, propName, componentName) {
        if (props[propName] >= props.totalBars) {
            return new Error(
                `${componentName} requires ${propName} to be less than totalBars.`
            );
        }
    }
};

export default StepProgressBar;
