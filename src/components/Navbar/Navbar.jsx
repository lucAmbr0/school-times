import React from "react";
import NavbarBtn from "./NavbarBtn/NavbarBtn";
import styles from "./Navbar.module.css";

function Navbar({onNavigate}, {currentPage}) {
  
  console.log(currentPage);
  
  const element = 
  (<nav className={styles.navbarContainer}>
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Home"} text="Home" iconName="home" />
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Schedule"} text="Schedule" iconName="action_key" />
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Calendar"} text="Calendar" iconName="calendar_today" />
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Settings"} text="Settings" iconName="settings" />
  </nav>);
  
  return element;
}

export default Navbar;
