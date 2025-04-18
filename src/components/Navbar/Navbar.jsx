import React from "react";
import NavbarBtn from "./NavbarBtn/NavbarBtn";
import styles from "./Navbar.module.css";

function Navbar({onNavigate, currentPage}) {
  
  const element = 
  (<nav className={styles.navbarContainer}>
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Home"} text="Home" iconName="home" />
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Explore"} text="Explore" iconName="action_key" />
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Settings"} text="Settings" iconName="settings" />
  {/* <NavbarBtn onNavigate={onNavigate} active={currentPage === "Events"} text="Events" iconName="calendar_today" /> */}
  {/* <NavbarBtn onNavigate={onNavigate} active={currentPage === "Profile"} text="Profile" iconName="account_circle" /> */}
  </nav>);
  
  return element;
}

export default Navbar;
