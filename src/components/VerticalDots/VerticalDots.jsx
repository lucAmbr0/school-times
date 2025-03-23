import styles from "./VerticalDots.module.css";
import PropTypes from "prop-types";

function VerticalDots({dots = 5, activeDotIdx = 0}) {

    VerticalDots.propTypes = {
        dots: PropTypes.number,
        activeDotIdx: function(props, propName, componentName) {
            if (props[propName] < 0 || props[propName] >= props.dots) {
                return new Error(
                    `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
                );
            }
        }
    };

    const dotElements = [];
    for (let i = 0; i < dots; i++) {
        dotElements.push(
            <div
                key={i}
                className={`${styles.dot} ${i === activeDotIdx ? styles.dotActive : ""}`}
            ></div>
        );
    }

  return (
    <div className={styles.dotsContainer}>
      {dotElements}
    </div>
  );
}

export default VerticalDots;
