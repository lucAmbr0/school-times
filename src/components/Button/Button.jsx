import React from "react";
import PropTypes from "prop-types";
import 'material-symbols';
import styles from './Button.module.css';

// Ex. usage:
// <Button text="Done" border="square" variant="filled" iconName="check" onClick={() => {console.log("Clicked!")}} />

const errNoClkEvent = () => { console.error("Error: No onClick event provided") };

function Button({ text = "", border = "soft", variant = "filled", iconName = "", onClick = errNoClkEvent }) {
  const iconClasses = `material-symbols-outlined ${styles.icon}`;
  let btnClasses = `${styles.button} ${styles[border]} ${styles[variant]} ${!text && styles.iconOnly}`
  
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
