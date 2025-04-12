import React from "react";
import PropTypes from "prop-types";
import 'material-symbols';
import styles from './Button.module.css';
import useVibration from "../../scripts/useVibration";

// Ex. usage:
// <Button text="Done" border="square" variant="filled" iconName="check" onClick={() => {console.log("Clicked!")}} />

const errNoClkEvent = () => { console.error("Error: No onClick event provided") };

function Button({ onClick, children, text = "", border = "soft", variant = "filled", iconName = "", iconState = "empty", ...props }) {
  const iconClasses = `material-symbols-outlined ${styles.icon} ${iconState == "filled" ? styles.filledIcon : ""}`;
  const vibrate = useVibration();
  
  let btnClasses = `${styles.button} ${styles[border]} ${styles[variant]} ${!text && styles.iconOnly}`

  const handleClick = (e) => {
    if (onClick) onClick(e);
    vibrate(5);
  }
  
  return (
    <button className={btnClasses} onClick={handleClick} {...props}>
      {iconName && <span className={iconClasses}>{iconName}</span>}
      {text && text}
      {children}
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
