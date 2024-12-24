import React from "react";
import NavbarBtn from "./NavbarBtn/NavbarBtn";
import styles from "./Navbar.module.css";

function Navbar({onNavigate}) {

  const element = 
  (<nav className={styles.navbarContainer}>
  <NavbarBtn onNavigate={onNavigate} text="Home" iconName="home" active={true} page = "home" />
  <NavbarBtn onNavigate={onNavigate} text="Schedule" iconName="action_key" active={false} page = "schedule" />
  <NavbarBtn onNavigate={onNavigate} text="Calendar" iconName="calendar_today" active={false} page = "calendar" />
  <NavbarBtn onNavigate={onNavigate} text="Settings" iconName="settings" active={false} page = "settings" />
  </nav>);
  
  return element;
}

export default Navbar;
