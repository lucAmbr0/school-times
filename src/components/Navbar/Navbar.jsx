import React from "react";
import NavbarBtn from "./NavbarBtn/NavbarBtn";
import styles from "./Navbar.module.css";

function Navbar() {

  const element = 
  (<div className={styles.navbarContainer}>
  <NavbarBtn text="Home" iconName="home" active={true} />
  <NavbarBtn text="Schedule" iconName="action_key" active={false} />
  <NavbarBtn text="Calendar" iconName="calendar_today" active={false} />
  <NavbarBtn text="Settings" iconName="settings" active={false} />
  </div>);
  
  return element;
}

export default Navbar;
