import {useEffect, useState} from "react";
import styles from "./TabSwitcher.module.css";

class Post {
    constructor() {
        this.date
        this.author
        this.text
    }
}



function TabSwitcher() {
    const [tab, setTab] = useState("Events");
    
    let homeworkTab, eventsTab;
    
    let posts = [];
    let postElements = (
        0
    );

    const element =
  <>
    <div className={styles.switchContainer}>
      <button onClick={() => setTab("Events")} className={[styles.tabName, tab == "Events" ? styles.selectedTabName : ""].join(" ")} id="Events-btn">Events</button>
      <button onClick={() => setTab("Homework")} className={[styles.tabName, tab == "Homework" ? styles.selectedTabName : ""].join(" ")} id="Homework-btn">Homework</button>
      <div className={[styles.pill, tab === "Homework" ? styles.pillHomework : styles.pillEvents].join(" ")}></div>
    </div>
    <div className={styles.container}>
        {tab === "Homework" ? homeworkTab : eventsTab}
    </div>
  </>;

  return element;
}

export default TabSwitcher;