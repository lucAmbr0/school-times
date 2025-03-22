import React from "react";
import PropTypes from "prop-types";
import 'material-symbols';
import styles from './Button.module.css';

// Ex. usage:
// <Button text="Done" variant="filled" iconName="check" onClick={() => {console.log("Clicked!")}} />

const errNoClkEvent = () => { console.error("Error: No onClick event provided") };

function Button({ text = "", variant = "filled", iconName = "", onClick = errNoClkEvent }) {
  const btnClasses = `${styles.button} ${styles[variant]} ${!text && styles.iconOnly}`
  const iconClasses = `material-symbols-outlined ${styles.icon}`;
  
  return (
    <button className={btnClasses} onClick={onClick}>
      {iconName && <span className={iconClasses}>{iconName}</span>}
      {text && text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outlined", "clear"]),
  iconName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
