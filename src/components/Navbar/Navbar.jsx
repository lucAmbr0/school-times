import React from "react";
import NavbarBtn from "./NavbarBtn/NavbarBtn";
import styles from "./Navbar.module.css";

function Navbar({onNavigate, currentPage}) {
  
  const element = 
  (<nav className={styles.navbarContainer}>
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Home"} text="Home" iconName="home" />
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Explore"} text="Explore" iconName="action_key" />
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Gradebook"} text="Gradebook" iconName="book_6" />
  <NavbarBtn onNavigate={onNavigate} active={currentPage === "Settings"} text="Settings" iconName="settings" />
  </nav>);
  
  return element;
}

export default Navbar;
